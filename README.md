# Plumber Website Template

Professional Next.js 14 website template for local plumbing businesses. Edit one config file, deploy to Vercel — done.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customization (10 minutes per client)

### Step 1: Edit Business Info

Open `/config/business.ts` and update:

- `name` — Business name
- `phone` — Phone number (used in all CTAs)
- `email` — Contact email + FormSubmit recipient
- `address` — Physical address
- `tagline` — One-line description
- `licenseNumber` — State license number
- `serviceAreas` — Array of cities served
- `yearsInBusiness` — Years in business
- `reviewCount` — Number of reviews
- `averageRating` — Star rating (e.g. 4.9)
- `testimonials` — 3 customer reviews
- `team` — Team member bios
- `googleMapsEmbedUrl` — Maps embed URL (get from Google Maps > Share > Embed)

### Step 2: Add Logo & Hero Image

Replace in `/public/`:
- `logo.png` — Client logo (transparent, ~200x60px)
- `hero-bg.jpg` — Hero background (1920x1080, plumber at work)
- Update `favicon.ico`

Free images: Unsplash, Pexels (search "plumber")

### Step 3: Set Up Contact Form

1. Go to [formsubmit.co](https://formsubmit.co)
2. Enter the client's email address
3. Click "Activate"
4. Check client's email and confirm
5. Forms will now send to that address automatically

The `formSubmitEmail` in `config/business.ts` controls where form submissions go.

### Step 4: Deploy to Vercel

```bash
# Option A: Vercel CLI
npm install -g vercel
vercel

# Option B: GitHub → Vercel Dashboard
# 1. Push to GitHub
# 2. Import project in vercel.com/new
# 3. Deploy (zero config needed)
```

### Step 5: Custom Domain

1. Buy domain (Namecheap, Google Domains, Cloudflare)
2. In Vercel: Project Settings → Domains → Add domain
3. Update DNS records per Vercel instructions (takes 5–30 min)

### Step 6: Update Sitemap & Robots

Edit `/app/sitemap.ts` and `/app/robots.ts`:
```ts
const baseUrl = 'https://clientdomain.com' // Replace this
```

---

## Per-Client Deployment Checklist

- [ ] Edit `config/business.ts` — all fields
- [ ] Add `logo.png` and `hero-bg.jpg` to `/public/`
- [ ] Activate FormSubmit for client email
- [ ] Update `baseUrl` in `sitemap.ts` and `robots.ts`
- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Verify mobile display
- [ ] Test contact form submission
- [ ] Test click-to-call links

---

## File Structure

```
├── app/
│   ├── page.tsx              Home page
│   ├── services/page.tsx     All services
│   ├── about/page.tsx        About the company
│   ├── contact/page.tsx      Contact form + map
│   ├── emergency/page.tsx    24/7 emergency page
│   ├── layout.tsx            Root layout (Header, Footer, EmergencyBanner)
│   ├── globals.css           Global styles
│   ├── sitemap.ts            Auto-generated sitemap
│   └── robots.ts             Robots.txt
├── components/
│   ├── Header.tsx            Responsive nav with phone CTA
│   ├── Footer.tsx            Footer with links and contact info
│   ├── EmergencyBanner.tsx   Sticky mobile CTA + floating desktop button
│   ├── ServiceCard.tsx       Service grid cards
│   ├── TestimonialCard.tsx   Customer review cards
│   ├── TrustBadge.tsx        Licensed/Insured/Bonded badges
│   ├── CTAButton.tsx         Call/Schedule/Emergency buttons
│   └── ContactForm.tsx       Form with FormSubmit.co integration
├── config/
│   └── business.ts           ← ALL CUSTOMIZATION HERE
└── public/
    ├── logo.png              Replace with client logo
    └── hero-bg.jpg           Replace with client hero image
```

---

## Colors

Primary colors are set in `tailwind.config.ts`:

```ts
colors: {
  primary: '#1e40af',       // Blue — nav, buttons, accents
  'primary-dark': '#1e3a8a', // Darker blue — hover states
  secondary: '#0ea5e9',     // Sky blue — secondary accents
  accent: '#dc2626',        // Red — emergency CTAs only
}
```

To change colors: update values in `tailwind.config.ts`.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form** (contact form)
- **Lucide React** (icons)
- **FormSubmit.co** (form backend — free, no signup)

---

## Pricing This Service

Suggested pricing for client websites built from this template:

| Tier | What's Included | Price |
|------|----------------|-------|
| Basic | Template + config + deploy | $299 one-time |
| Standard | + custom logo placement + domain setup | $499 one-time |
| Premium | + Google Business Profile optimization + GMB photos | $799 one-time |
| Monthly retainer | Hosting, updates, reporting | $49–99/mo |

Template build time: ~20 minutes per client.
