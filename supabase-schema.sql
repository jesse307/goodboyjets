-- Create leads table in Supabase
-- Run this SQL in your Supabase project's SQL Editor

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  from_airport_or_city TEXT NOT NULL,
  to_airport_or_city TEXT NOT NULL,
  date_time TEXT NOT NULL,
  pax INTEGER NOT NULL CHECK (pax >= 1 AND pax <= 50),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  urgency TEXT NOT NULL CHECK (urgency IN ('normal', 'urgent', 'critical')),
  notes TEXT
);

-- Create index on timestamp for faster sorting
CREATE INDEX IF NOT EXISTS idx_leads_timestamp ON leads(timestamp DESC);

-- Create index on urgency for filtering
CREATE INDEX IF NOT EXISTS idx_leads_urgency ON leads(urgency);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (adjust based on your auth needs)
-- For now, allowing all operations since we're using service role key
CREATE POLICY "Enable all access for service role" ON leads
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create call_logs table for VAPI phone call tracking
CREATE TABLE IF NOT EXISTS call_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  call_id TEXT UNIQUE NOT NULL,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  duration INTEGER,
  cost NUMERIC(10, 4),
  error TEXT,
  transcript TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on call_id for fast lookups from webhooks
CREATE INDEX IF NOT EXISTS idx_call_logs_call_id ON call_logs(call_id);

-- Create index on lead_id to quickly find all calls for a lead
CREATE INDEX IF NOT EXISTS idx_call_logs_lead_id ON call_logs(lead_id);

-- Create index on timestamp for sorting
CREATE INDEX IF NOT EXISTS idx_call_logs_timestamp ON call_logs(timestamp DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE call_logs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (adjust based on your auth needs)
CREATE POLICY "Enable all access for service role" ON call_logs
  FOR ALL
  USING (true)
  WITH CHECK (true);
