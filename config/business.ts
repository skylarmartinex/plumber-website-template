export const businessConfig = {
  // ─── BUSINESS INFO ──────────────────────────────────────────────────────────
  name: "ProFlow Plumbing & Drain",
  tagline: "Fast. Honest. Guaranteed.",
  phone: "(555) 123-4567",
  email: "info@proflowplumbing.com",
  address: "123 Main St, Your City, CA 90000",
  licenseNumber: "Licensed · Insured · Bonded",
  formSubmitEmail: "info@proflowplumbing.com",

  // ─── HOURS ──────────────────────────────────────────────────────────────────
  hours: {
    weekday: "Mon–Fri: Open 24 Hours",
    weekend: "Sat–Sun: Open 24 Hours",
    emergency: "24/7 Emergency Service — 30–60 Min Response",
  },

  // ─── SERVICE AREAS ──────────────────────────────────────────────────────────
  serviceAreas: [
    "Your City",
    "Nearby Town",
    "Westside",
    "Eastside",
    "North County",
    "South County",
    "Lakewood",
    "Riverside",
    "Hillcrest",
    "Midtown",
    "Downtown",
    "Valley View",
  ],

  // ─── SOCIAL PROOF ───────────────────────────────────────────────────────────
  yearsInBusiness: 15,
  reviewCount: 200,
  averageRating: 4.9,

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Sarah M.",
      location: "Your City",
      review:
        "ProFlow showed up within 45 minutes of my call — midnight on a Saturday. Burst pipe fixed, no mess left behind, and the price was exactly what they quoted. I won't call anyone else.",
      rating: 5,
    },
    {
      name: "James R.",
      location: "Westside",
      review:
        "Three other plumbers gave me the runaround on my slab leak. ProFlow diagnosed it in an hour and had it repaired by end of day. Honest, fast, and reasonably priced.",
      rating: 5,
    },
    {
      name: "Linda K.",
      location: "North County",
      review:
        "Been using ProFlow for 8 years. They've never tried to upsell me on something I don't need. That kind of honesty is rare — it's why they're the only number in my contacts.",
      rating: 5,
    },
  ],

  // ─── TEAM ───────────────────────────────────────────────────────────────────
  team: [
    {
      name: "The Owner",
      title: "Owner & Master Plumber",
      bio: "With 20+ years in the trade, our founder built this company on a simple idea: treat every customer's home like your own. No upsells. No surprises. Just honest work.",
    },
    {
      name: "Operations",
      title: "Scheduling & Customer Care",
      bio: "Our office team makes sure every job is booked fast, confirmed on time, and followed up on. We know your time is valuable.",
    },
    {
      name: "The Field Team",
      title: "Licensed Service Plumbers",
      bio: "Every tech on our crew is licensed, insured, and background-checked. They arrive in uniform, protect your floors, and leave the job site clean.",
    },
  ],

  // ─── SERVICES ───────────────────────────────────────────────────────────────
  services: [
    {
      id: "emergency",
      name: "Emergency Plumbing",
      icon: "AlertCircle",
      shortDesc: "24/7 emergency response — we're there when you need us most.",
      description:
        "Plumbing emergencies don't wait for business hours, and neither do we. Our emergency team is on call 24/7 for burst pipes, major leaks, overflowing toilets, and any plumbing crisis that can't wait.",
      features: [
        "Available 24 hours, 7 days a week",
        "Fast response — typically under 60 minutes",
        "Fully stocked trucks for same-visit repairs",
        "Upfront emergency pricing — no surprise charges",
      ],
    },
    {
      id: "drain-cleaning",
      name: "Drain Cleaning",
      icon: "Waves",
      shortDesc: "Slow drains, clogs, backups — cleared fast.",
      description:
        "From slow kitchen sinks to completely blocked sewer lines, we clear every type of drain clog using professional hydro-jetting and auger equipment.",
      features: [
        "Kitchen and bathroom sink drains",
        "Toilet clogs and backups",
        "Floor drain and utility sink clearing",
        "Hydro-jetting for severe blockages",
      ],
    },
    {
      id: "water-heater",
      name: "Water Heater Repair & Install",
      icon: "Flame",
      shortDesc: "No hot water? We repair or replace same day.",
      description:
        "We repair all major brands and install new traditional and tankless water heaters, often same day.",
      features: [
        "Traditional tank water heater repair and replacement",
        "Tankless water heater installation",
        "All major brands serviced",
        "Same-day service available",
      ],
    },
    {
      id: "leak-detection",
      name: "Leak Detection & Repair",
      icon: "Search",
      shortDesc: "Find hidden leaks before they become disasters.",
      description:
        "We use professional detection equipment to find leaks behind walls, under slabs, and underground — with minimal disruption to your property.",
      features: [
        "Electronic leak detection",
        "Slab leak detection and repair",
        "Behind-wall and underground pipe leaks",
        "Fast repair with minimal property disruption",
      ],
    },
    {
      id: "repiping",
      name: "Pipe Repiping",
      icon: "GitBranch",
      shortDesc: "Old galvanized or corroded pipes? We replace them right.",
      description:
        "We fully repipe homes with durable copper or PEX piping, restoring water pressure and eliminating future leak risk.",
      features: [
        "Whole-home repiping",
        "Copper and PEX pipe options",
        "Galvanized and polybutylene replacement",
        "Minimal drywall disruption",
      ],
    },
    {
      id: "sewer",
      name: "Sewer Line Repair",
      icon: "ArrowDownCircle",
      shortDesc: "Sewer backups throughout the house? Call us.",
      description:
        "We diagnose with video camera inspection and repair or replace damaged sewer lines using modern trenchless methods when possible.",
      features: [
        "Video camera sewer inspection",
        "Sewer line repair and replacement",
        "Trenchless pipe lining (no-dig option)",
        "Root intrusion removal",
      ],
    },
    {
      id: "toilet",
      name: "Toilet Repair & Installation",
      icon: "Home",
      shortDesc: "Running, leaking, or won't flush? Fixed same visit.",
      description:
        "From a constantly running toilet to a complete replacement, we handle all toilet issues. We stock common parts so most repairs are done in one visit.",
      features: [
        "Running and leaking toilet repair",
        "Toilet installation and replacement",
        "Wax ring and flange repair",
        "Pressure-assist and dual-flush upgrades",
      ],
    },
    {
      id: "faucet",
      name: "Faucet & Fixture Repair",
      icon: "Droplets",
      shortDesc: "Dripping faucets and broken fixtures repaired or replaced.",
      description:
        "We repair or replace all types of faucets, showerheads, and plumbing fixtures — same day in most cases.",
      features: [
        "Faucet repair and replacement",
        "Showerhead and valve repair",
        "Kitchen and bathroom fixture installation",
        "All brands and styles serviced",
      ],
    },
  ],

  // ─── GOOGLE MAPS ────────────────────────────────────────────────────────────
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26452.953125!2d-118.03318!3d33.97945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d17c98c6e3b1%3A0x1234567890abcdef!2sWhittier%2C%20CA%2090605!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus",
}

export type BusinessConfig = typeof businessConfig
