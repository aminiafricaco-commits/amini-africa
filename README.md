# AMINI AFRICA

**Your Trusted Sub-Saharan Partner**

A production-ready Next.js website for Amini Africa — a trusted representation, concierge, verification, procurement, relocation, and business support company serving diaspora Africans, international investors, businesses, NGOs, expatriates, and global professionals across Sub-Saharan Africa.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + ShadCN UI
- **Animations:** Framer Motion
- **Content:** Markdown/MDX (file-based)
- **Hosting:** Vercel (free tier)
- **Analytics:** Google Analytics 4 + Microsoft Clarity
- **Forms:** Tally Forms / Google Forms
- **Booking:** Calendly / Google Calendar

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── about/             # About page
│   ├── founder/           # Founder story
│   ├── mission/           # Mission & Vision
│   ├── why-choose-us/     # Why choose us
│   ├── industries/        # Industries served
│   ├── services/          # Service pages
│   ├── blog/              # Blog (list + [slug])
│   ├── case-studies/      # Case studies (list + [slug])
│   ├── faqs/              # FAQs
│   ├── book-consultation/ # Consultation booking
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── sitemap.ts         # XML sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── ui/               # ShadCN UI components
│   ├── layout/           # Navbar, Footer, WhatsApp button
│   └── sections/         # Homepage sections
├── content/              # Markdown content
│   ├── blog/            # Blog posts (.md)
│   └── case-studies/    # Case studies (.md)
└── lib/                 # Utility functions
    ├── utils.ts         # cn() helper
    └── content.ts       # Content loading
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repo in Vercel
3. Deploy (zero config needed)

### Custom Domain (via Cloudflare)

1. Add domain in Vercel
2. Point DNS to Vercel nameservers via Cloudflare
3. Enable SSL

## Configuration

### Analytics

Replace `G-XXXXXXXXXX` in `src/components/analytics.tsx` with your GA4 measurement ID.

### WhatsApp

Update the phone number in:
- `src/components/layout/whatsapp-button.tsx`
- `src/components/sections/final-cta.tsx`
- `src/app/book-consultation/page.tsx`
- `src/app/contact/page.tsx`

### Forms & Booking

Replace placeholder URLs:
- Calendly: `src/app/book-consultation/page.tsx`
- Tally Forms: `src/app/contact/page.tsx`
- Google Forms: `src/app/contact/page.tsx`

### Email

Update `hello@amini-africa.com` across all pages.

## License

Private — All rights reserved.
