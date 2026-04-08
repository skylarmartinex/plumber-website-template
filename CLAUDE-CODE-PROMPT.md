# Claude Code Prompt - Professional Plumber Website Template

Build a modern, high-converting plumbing company website template using Next.js 14, TypeScript, Tailwind CSS, and Shadcn/ui.

## Inspiration Reference
Style should feel like premium ThemeForest plumber templates (Plumco style):
- Modern, clean, professional
- Blue/navy primary colors (trust/reliability)
- High-converting layout with multiple CTAs
- Service business focused (not corporate)

---

## PAGES REQUIRED (5 pages)

### 1. HOME PAGE
**Hero Section:**
- Full-width background image (overlay)
- H1: "[Business Name] - [Tagline]"
- Subheading: Service areas, years in business
- Primary CTA: "Call Now" (tel: link) + "Schedule Service" (form)
- Trust badges: Licensed, Insured, Bonded, 24/7 Emergency

**Services Section:**
- 6 service cards with icons (Emergency, Drain Cleaning, Water Heater, Leak Detection, Repiping, Sewer Repair)
- Each card links to Services page

**Why Choose Us:**
- 3-4 value props with icons
  - Family Owned & Operated
  - 20+ Years Experience
  - Same-Day Service Available
  - Upfront Pricing

**Service Areas:**
- Grid of cities served (configurable)

**Social Proof:**
- Google review stars (configurable rating)
- Review count
- 3 testimonial cards (name, review, star rating)

**Emergency Banner:**
- Sticky/floating bottom banner: "24/7 Emergency? Call Now: [PHONE]"

**Footer:**
- Quick links, services, contact info, service areas
- Copyright, license #

---

### 2. SERVICES PAGE
**For each service:**
- Service name + icon
- Description
- Common issues we fix (bullet list)
- Pricing approach (upfront, no hidden fees)
- CTA: "Schedule This Service"

**Services to include:**
1. Emergency Plumbing (24/7)
2. Drain Cleaning & Unclogging
3. Water Heater Repair & Installation
4. Leak Detection & Repair
5. Pipe Repiping & Replacement
6. Sewer Line Repair
7. Toilet Repair & Installation
8. Faucet & Fixture Repair

Each service = its own section/card with anchor links

---

### 3. ABOUT PAGE
**Sections:**
- Hero: "About [Business Name]"
- Our Story (placeholder text: family-owned, local, commitment to quality)
- Team section (placeholder photos, names, titles)
- Certifications & Licenses (badges/logos)
- Why Choose Us (trust factors)
- CTA: "Ready to work with us?"

---

### 4. CONTACT PAGE
**Form:**
- Name, Email, Phone, Service Needed (dropdown), Message
- Submit button → FormSubmit.co integration (configurable email)
- Form validation

**Contact Info:**
- Phone (click-to-call)
- Email (click-to-email)
- Address
- Hours of operation
- Embedded Google Maps (configurable address)

**Service Areas:**
- List of cities served

---

### 5. EMERGENCY PLUMBER PAGE
**Urgent-focused design:**
- Red/orange accents (urgency)
- Large "CALL NOW" button
- "We Answer 24/7" messaging
- Common emergencies we handle:
  - Burst pipes
  - Overflowing toilets
  - No hot water
  - Sewer backups
  - Gas leaks
- Response time promise
- CTA: Multiple phone number CTAs throughout

---

## TECHNICAL REQUIREMENTS

**Framework & Libraries:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui components (Button, Card, Form, Accordion, Badge)
- Lucide React icons
- React Hook Form (contact forms)

**Configuration System:**
Create `/config/business.ts` for easy customization:
```typescript
export const businessConfig = {
  // Business Info
  name: "ABC Plumbing",
  tagline: "Your Trusted Local Plumber",
  phone: "(555) 123-4567",
  email: "info@abcplumbing.com",
  address: "123 Main St, City, State 12345",
  
  // Hours
  hours: {
    weekday: "Mon-Fri: 8AM-6PM",
    weekend: "Sat: 9AM-4PM, Sun: Emergency Only",
    emergency: "24/7 Emergency Service Available"
  },
  
  // Service Areas
  serviceAreas: ["City 1", "City 2", "City 3"],
  
  // Social Proof
  yearsInBusiness: 20,
  reviewCount: 150,
  averageRating: 4.9,
  
  // Branding
  colors: {
    primary: "#1e40af", // blue-700
    secondary: "#0ea5e9", // sky-500
    accent: "#dc2626", // red-600 (for emergency)
  },
  
  // Services
  services: [
    { 
      name: "Emergency Plumbing",
      icon: "AlertCircle",
      description: "...",
      features: ["24/7 Availability", "Fast Response", "..."]
    },
    // ... more services
  ],
  
  // Testimonials
  testimonials: [
    { name: "John Doe", review: "...", rating: 5 },
    // ...
  ]
}
```

**SEO & Performance:**
- Dynamic meta tags (title, description) using business config
- Sitemap.xml
- Robots.txt
- Optimized images (next/image)
- Fast page loads (<3s)
- Mobile-first responsive design

**Forms:**
- Contact form → FormSubmit.co (instructions in README for email setup)
- Form validation with React Hook Form
- Success/error states

**CTAs:**
- Click-to-call buttons everywhere: `<a href="tel:${phone}">`
- Sticky mobile call button (bottom right)
- Multiple conversion points per page

**Styling:**
- Professional blue/navy color scheme (adjustable via config)
- Clean, modern typography
- Trust-building design (not flashy, not corporate)
- High contrast CTAs
- Mobile-optimized (50%+ traffic is mobile)

---

## COMPONENTS TO BUILD

Reusable components in `/components/`:
- `<ServiceCard />` - service display with icon, title, description, CTA
- `<TestimonialCard />` - customer review with stars, name, text
- `<TrustBadge />` - licensed/insured badges
- `<CTAButton />` - branded call-to-action button
- `<ContactForm />` - reusable form with FormSubmit integration
- `<Header />` - responsive nav with phone number in header
- `<Footer />` - site footer with links and contact info
- `<EmergencyBanner />` - sticky bottom banner for emergency calls

---

## README INSTRUCTIONS

Include step-by-step guide:

1. **Customize Business Info:**
   - Edit `/config/business.ts`
   - Update all business details, colors, services

2. **Add Logo:**
   - Replace `/public/logo.png` with client logo
   - Update favicon

3. **Set Up Contact Form:**
   - Go to formsubmit.co
   - Enter client email
   - Confirm email
   - Form will send to client's email

4. **Deploy to Vercel:**
   - `vercel` command
   - Or connect GitHub repo to Vercel dashboard
   - Auto-deploy on push

5. **Custom Domain:**
   - Buy domain (Namecheap, Google Domains)
   - Add to Vercel project
   - Update DNS records (provided by Vercel)

6. **Customize Colors:**
   - Edit `tailwind.config.ts` OR
   - Change colors in `/config/business.ts` (if you set up theme variables)

---

## FOLDER STRUCTURE

```
plumber-template/
├── app/
│   ├── page.tsx              (Home)
│   ├── services/page.tsx     (Services)
│   ├── about/page.tsx        (About)
│   ├── contact/page.tsx      (Contact)
│   ├── emergency/page.tsx    (Emergency)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── TrustBadge.tsx
│   ├── CTAButton.tsx
│   ├── ContactForm.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── EmergencyBanner.tsx
├── config/
│   └── business.ts           (ALL customization here)
├── public/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── service-icons/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md                 (Deployment & customization guide)
```

---

## DESIGN NOTES

**Color Psychology:**
- Blue = trust, reliability (primary)
- Navy = professional, established
- Red/Orange = urgency (emergency CTAs only)
- White/light gray = clean, modern

**Copy Tone:**
- Professional but friendly
- Emphasize: local, family-owned, trusted, experienced
- Focus on: fast response, upfront pricing, quality work
- Avoid: corporate jargon, overly technical terms

**Trust Signals to Include:**
- Years in business
- Licensed & insured badges
- Review count & rating
- Service area coverage
- 24/7 availability
- Family-owned messaging

---

## DELIVERABLES

When done, the template should allow:
1. ✅ 10-minute customization per client (just edit config file + swap logo)
2. ✅ 2-minute deployment to Vercel
3. ✅ Professional, high-converting design
4. ✅ Mobile-optimized (critical for local search)
5. ✅ SEO-ready (meta tags, sitemap, fast load)
6. ✅ Easy to maintain (no complex dependencies)

---

Build this template once, reuse for every plumber client. Just change the config file and deploy.

Start building now!
