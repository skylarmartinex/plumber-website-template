# Mr. Rooter Clone — Next Session Plan

## Goal
Make the template look nearly identical to mrrooter.com.

## What's Already Done
- Navy/gold color palette (`#1b3554` primary, `#f5c200` gold)
- Two-tier header (top bar + nav)
- Hero with Request Service card on right
- How It Works section (3 steps, gold circles)
- Navy footer
- Service cards with gold hover

## What Still Needs to Be Done

### 1. Hero — Video Background (HIGHEST PRIORITY)
Mr. Rooter has a looping video behind the hero, not a static image.
- Add an `<video>` tag as the background (autoPlay muted loop playsInline)
- Source a stock plumbing video (Adobe Stock, Pexels, or Mixkit) — something like a plumber working, pipes, water
- Layer dark overlay on top (same pattern as the current image bg)
- The video element should be `absolute inset-0 w-full h-full object-cover`

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

### 2. Hero Layout — Center-Aligned (not 2-col)
Looking more carefully at Mr. Rooter, the hero text is more center-aligned on desktop too.
The Request Service card may float or appear differently.
- Consider: full-width centered headline, with the card below or overlapping the next section

### 3. Navigation — Closer Match
Mr. Rooter nav items: Services, Locations, About Mr. Rooter, Careers, Contact
Their nav has dropdowns on hover (Services expands to show service categories).
For our template: add a simple hover underline or bottom-border active state.
The "Schedule Service" button in their nav is red/accent color.

### 4. Services Section — Image Cards, Not Icon Cards
Mr. Rooter uses image-based service cards (photo of a plumber doing that service), not icon cards.
Each card has:
- Background image (the service type photo)
- Dark gradient overlay
- Service name in white bold text at bottom
- Arrow or "Learn More" CTA

This is a big visual difference. Need stock photos per service OR a generic approach.

### 5. "Why Mr. Rooter" Section
They have a specific section with:
- Large number stats (e.g., "200+ Locations", "50+ Years", "5-Star Rated")
- Dark navy background
- Numbers in gold/yellow

### 6. Neighborhoods/Areas — Interactive
Mr. Rooter has a location finder. For local business version:
- A simple map embed (already in config as googleMapsEmbedUrl)
- Show it in the service areas section with the map on one side, area list on other

### 7. Footer — Closer Match
Mr. Rooter footer has:
- Dark navy (already done)
- Logo prominently at top of first column
- "Neighborly" brand logo at bottom (skip — franchise specific)
- Social media icons (Facebook, Twitter, Instagram, YouTube)

Add social media icons to footer. Use Lucide or inline SVGs.

### 8. Fonts — Weight Matching
Mr. Rooter uses very heavy font weights (900) for headings.
Update `font-black` usage to be more consistent throughout — all section titles should be `font-black` not `font-bold`.

### 9. Emergency Page
Mr. Rooter has a strong emergency page with:
- Red/dark hero (already done)
- Add the video background here too if possible

---

## Files to Edit Next Session

| File | Change |
|------|--------|
| `app/page.tsx` | Hero video, center-align hero text, image-based service cards |
| `components/Header.tsx` | Dropdown on Services nav item |
| `components/Footer.tsx` | Add social icons |
| `app/services/page.tsx` | Image-based cards |

## Assets Available — C:\Users\marti\Downloads\Plumbing Assets\

All assets are already downloaded. MOV files need to be converted to MP4 before use (QuickTime > File > Export As > 1080p, or VLC).

### Videos (copy to /public/ after converting to .mp4)
| File | Size | Recommended Use |
|------|------|-----------------|
| `hero_walking_video.mov` | 51MB | **Hero background** (best size for web) |
| `working_pipe_video.mov` | 72MB | Hero background (alt option) |
| `plumbers_van.mov` | 286MB | Skip — too large for web |
| `AdobeStock_1803563542.mov` | 675MB | Skip — too large for web |
| `AdobeStock_514647309.mov` | 724MB | Skip — too large for web |

### Images (copy to /public/ with clean names)
| File | Recommended filename | Recommended Use |
|------|----------------------|-----------------|
| `Hero_image.jpeg` | `hero-bg.jpg` | Hero fallback image (if video fails) |
| `Plumber_handshake.png` | `handshake.png` | Why Choose Us section ✅ already wired |
| `Plumber_under_sink.jpeg` | `services.jpg` | Services section / services page hero |
| `Plumber_sink_consult.jpeg` | `about.jpg` | About page story section |
| `ceiling_trouble.jpeg` | `emergency.jpg` | Emergency page hero |
| `AdobeStock_1660295530.jpeg` | — | Extra — assign as needed |
| `AdobeStock_1680639567.jpeg` | — | Extra — assign as needed |
| `AdobeStock_331634841.jpeg` | — | Extra — assign as needed |
| `Bens.png` | `logo-bens.png` | Ben's Plumbing logo (demo branch only) |

### Start of Next Session — Asset Setup Steps
1. Convert `hero_walking_video.mov` → `hero-video.mp4` (QuickTime or VLC)
2. Copy all images to `/public/` with the clean names above
3. Run: `git add public/ && git commit -m "assets: add stock images and hero video" && git push`
4. Then proceed with code changes below

## Color Reference (Mr. Rooter)
- Primary navy: `#1b3554`
- Primary dark: `#0f2035`
- Gold accent: `#f5c200`
- Medium blue: `#407ec9`
- Emergency red: `#dc2626`

## Start Next Session With
1. Do asset setup steps above (convert video, copy images, push)
2. Wire all images into the correct pages (hero-bg, services, about, emergency)
3. Implement video background in hero (`hero-video.mp4`)
4. Implement image-based service cards using the stock photos
5. Update service areas section to include map embed
6. Fetch mrrooter.com screenshot for final comparison
