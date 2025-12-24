# 🐾 Good Boy Jets

Your tail-wagging private jet charter service! Fast, friendly, and always ready to fly.

## Features

- **Playful Dog-Themed Branding** - Happy dog with aviator goggles logo
- **Single-Page Website** - Simple, focused user experience
- **Lead Form** - Easy quote requests with fun, friendly copy
- **Responsive Design** - Works great on all devices
- **24/7 Contact** - Prominent phone number display

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Supabase** - Backend ready for leads storage

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your configuration:
```
NEXT_PUBLIC_CONTACT_PHONE="+1 (XXX) XXX-XXXX"
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Database Setup

Run the Supabase migration:
```sql
-- See supabase-schema.sql for lead storage setup
```

## Color Palette

- **Orange**: `#FF9500` - Primary brand color
- **Light Orange**: `#FFB84D` - Hover states
- **Blue**: `#4A90E2` - Secondary accent
- **Dark**: `#1a1a1a` - Background
- **Light**: `#FFFFFF` - Text

## Project Structure

```
goodboyjets/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── HeroSection.tsx   # Main hero with CTA
│   ├── LeadForm.tsx      # Quote request form
│   └── Footer.tsx        # Site footer
├── lib/                   # Utility functions
├── public/               # Static assets
│   └── logo.svg          # Good Boy Jets logo
└── types/                # TypeScript types
```

## License

All rights reserved © 2025 Good Boy Jets

---

**No bones about it — we're the best in the sky!** 🦴✈️
