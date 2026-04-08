export const businessConfig = {
  // ─── BUSINESS INFO ──────────────────────────────────────────────────────────
  name: "ABC Plumbing & Drain",
  tagline: "Your Trusted Local Plumber",
  phone: "(555) 123-4567",
  email: "info@abcplumbing.com",
  address: "123 Main St, Anytown, CA 90210",
  licenseNumber: "LIC# C-36-123456",
  formSubmitEmail: "info@abcplumbing.com", // FormSubmit.co email

  // ─── HOURS ──────────────────────────────────────────────────────────────────
  hours: {
    weekday: "Mon–Fri: 7AM–7PM",
    weekend: "Sat: 8AM–5PM, Sun: Emergency Only",
    emergency: "24/7 Emergency Service Available",
  },

  // ─── SERVICE AREAS ──────────────────────────────────────────────────────────
  serviceAreas: [
    "Anytown",
    "Riverside",
    "Westfield",
    "Lakeview",
    "Northpark",
    "Eastside",
    "Maplewood",
    "Hillcrest",
    "Clearwater",
    "Sunridge",
    "Oak Park",
    "Valley Glen",
  ],

  // ─── SOCIAL PROOF ───────────────────────────────────────────────────────────
  yearsInBusiness: 20,
  reviewCount: 243,
  averageRating: 4.9,

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Sarah M.",
      location: "Anytown",
      review:
        "Called at 10pm for a burst pipe — they were at my house in under an hour. Fixed it fast, priced fairly. These guys are the real deal.",
      rating: 5,
    },
    {
      name: "James T.",
      location: "Westfield",
      review:
        "Used ABC Plumbing twice now. Both times: on time, upfront pricing, no surprises on the bill. Highly recommend for any plumbing work.",
      rating: 5,
    },
    {
      name: "Linda R.",
      location: "Lakeview",
      review:
        "Best plumber in the area. Fixed our water heater same day and saved us thousands by repairing instead of replacing. Family-owned, honest business.",
      rating: 5,
    },
  ],

  // ─── TEAM ───────────────────────────────────────────────────────────────────
  team: [
    {
      name: "Mike Johnson",
      title: "Owner & Master Plumber",
      bio: "Mike founded ABC Plumbing 20 years ago with one goal: treat every customer like family. He's a licensed master plumber with over 25 years of experience.",
    },
    {
      name: "Dave Wilson",
      title: "Lead Plumber",
      bio: "Dave specializes in emergency repairs and water heater installations. Known for his fast response and clean work.",
    },
    {
      name: "Carlos Rivera",
      title: "Service Plumber",
      bio: "Carlos handles residential drain cleaning, leak detection, and general plumbing repairs. Friendly, thorough, and detail-oriented.",
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.42891905433!2d-118.69192190890698!3d34.02016130652397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fbe01b2f4e3f6!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus",
}

export type BusinessConfig = typeof businessConfig
