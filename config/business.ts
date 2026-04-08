export const businessConfig = {
  // ─── BUSINESS INFO ──────────────────────────────────────────────────────────
  name: "Ben's Plumbing & Rooter",
  tagline: "Whittier's Trusted Plumber Since 2009",
  phone: "(562) 693-7926",
  email: "info@bensplumbingandrooter.com",
  address: "8540 La Entrada Ave, Whittier, CA 90605",
  licenseNumber: "Licensed · Insured · Bonded",
  formSubmitEmail: "info@bensplumbingandrooter.com",

  // ─── HOURS ──────────────────────────────────────────────────────────────────
  hours: {
    weekday: "Mon–Fri: Open 24 Hours",
    weekend: "Sat–Sun: Open 24 Hours",
    emergency: "24/7 Emergency Service — 30–40 Min Response",
  },

  // ─── SERVICE AREAS ──────────────────────────────────────────────────────────
  serviceAreas: [
    "Whittier",
    "La Mirada",
    "Norwalk",
    "Downey",
    "Pico Rivera",
    "Santa Fe Springs",
    "La Habra",
    "Hacienda Heights",
    "Industry",
    "La Puente",
    "Montebello",
    "East Los Angeles",
  ],

  // ─── SOCIAL PROOF ───────────────────────────────────────────────────────────
  yearsInBusiness: 17,
  reviewCount: 47,
  averageRating: 4.5,

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Maria G.",
      location: "Whittier",
      review:
        "Ben has been my plumber for almost 20 years. He's honest, shows up when he says he will, and never overcharges. I won't call anyone else.",
      rating: 5,
    },
    {
      name: "Robert T.",
      location: "Norwalk",
      review:
        "Called at midnight for a burst pipe. Ben's team was at my house in 35 minutes and had everything fixed before 2am. Incredible service.",
      rating: 5,
    },
    {
      name: "Sandra L.",
      location: "La Mirada",
      review:
        "Family-owned business that treats you like family. Fixed our slab leak quickly and worked directly with our home insurance. Highly recommend.",
      rating: 5,
    },
  ],

  // ─── TEAM ───────────────────────────────────────────────────────────────────
  team: [
    {
      name: "Ben Hernandez",
      title: "Owner & Master Plumber",
      bio: "Ben grew up in a family of plumbers and has been in the trade since age 16 — that's 25+ years of hands-on experience. He founded Ben's Plumbing & Rooter to bring honest, reliable plumbing to the Whittier community.",
    },
    {
      name: "Sandi Hernandez",
      title: "Co-Owner & Operations",
      bio: "Sandi keeps everything running smoothly behind the scenes — scheduling, customer follow-ups, and making sure every job meets the Ben's Plumbing standard.",
    },
    {
      name: "The Ben's Team",
      title: "Licensed Service Plumbers",
      bio: "Our fully licensed and insured plumbers are trained to Ben's standards: fast, clean, honest, and respectful of your home.",
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
        "From slow kitchen sinks to completely blocked sewer lines, we clear every type of drain clog. We use professional hydro-jetting and auger equipment to clear blockages completely — not just poke a hole through them.",
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
        "Running out of hot water is more than inconvenient — it can signal a failing unit. We repair all major brands and install new traditional and tankless water heaters, often same day.",
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
        "A hidden leak can cause thousands in water damage and mold before you ever see a sign. We use professional detection equipment to find leaks behind walls, under slabs, and underground — with minimal disruption to your property.",
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
        "If your home has galvanized steel or polybutylene pipes, you're living with a ticking time bomb. We fully repipe homes with durable copper or PEX piping, restoring water pressure and eliminating future leak risk.",
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
      shortDesc: "Sewer backups and slow drains throughout the house? Call us.",
      description:
        "Sewer line problems cause sewage backups throughout your entire home. We diagnose with video camera inspection and repair or replace damaged sewer lines using modern trenchless methods when possible.",
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
        "A dripping faucet wastes thousands of gallons per year. We repair or replace all types of faucets, showerheads, and plumbing fixtures — same day in most cases.",
      features: [
        "Faucet repair and replacement",
        "Showerhead and valve repair",
        "Kitchen and bathroom fixture installation",
        "All brands and styles serviced",
      ],
    },
  ],

  // ─── GOOGLE MAPS ────────────────────────────────────────────────────────────
  // Replace with your client's address for the embed
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26452.953125!2d-118.03318!3d33.97945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d17c98c6e3b1%3A0x1234567890abcdef!2sWhittier%2C%20CA%2090605!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus",
}

export type BusinessConfig = typeof businessConfig
