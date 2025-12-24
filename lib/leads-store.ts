import { createClient } from '@supabase/supabase-js';
import { Lead, LeadInput } from '@/types/lead';

// Get Supabase credentials from environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Create Supabase client only if credentials are available
const supabase = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

export async function saveLead(lead: LeadInput): Promise<Lead> {
  // If Supabase is not configured, just return a mock lead
  if (!supabase) {
    console.warn('Supabase not configured, lead will not be saved to database');
    return {
      id: crypto.randomUUID(),
      ...lead,
      timestamp: new Date().toISOString(),
    };
  }

  const { data, error } = await supabase
    .from('leads')
    .insert([
      {
        ...lead,
        timestamp: new Date().toISOString(),
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error saving lead to Supabase:', error);
    throw new Error('Failed to save lead');
  }

  return data as Lead;
}

export async function getAllLeads(): Promise<Lead[]> {
  // If Supabase is not configured, return empty array
  if (!supabase) {
    console.warn('Supabase not configured, no leads available');
    return [];
  }

  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('timestamp', { ascending: false });

  if (error) {
    console.error('Error fetching leads from Supabase:', error);
    return [];
  }

  return (data as Lead[]) || [];
}
