'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What can a plumber help with?',
    a: 'A licensed plumber can help with a wide range of issues — from simple faucet repairs and toilet replacements to complex slab leaks, sewer line repairs, water heater installs, and full home repiping. If water runs through it, we handle it.',
  },
  {
    q: 'Why should I call a plumber for a slow drain instead of using drain cleaner?',
    a: 'Chemical drain cleaners are corrosive and only punch a temporary hole through a clog — they rarely clear it fully and can damage your pipes over time. A professional uses hydro-jetting or auger equipment to clear the blockage completely and diagnose any underlying issues.',
  },
  {
    q: 'Does DIY plumbing actually save money?',
    a: "Sometimes minor fixes like replacing a showerhead or a toilet flapper are safe DIY projects. But most plumbing work — especially anything involving pipes, water heaters, or sewer lines — can get expensive fast if done incorrectly. A licensed plumber gets it right the first time.",
  },
  {
    q: `Why should I choose ${`Ben's Plumbing & Rooter`}?`,
    a: "We're a locally owned and operated family business — not a call center or a national franchise. When you call us, you're talking directly to the team that will show up at your door. We offer upfront flat-rate pricing, same-day service, and a 100% satisfaction guarantee.",
  },
  {
    q: 'Do you offer commercial plumbing services?',
    a: 'Yes. We serve both residential homeowners and commercial properties including restaurants, retail spaces, office buildings, and multi-unit housing. Our team is equipped to handle high-volume and complex commercial plumbing needs.',
  },
  {
    q: 'How quickly can you respond to a plumbing emergency?',
    a: "We're available 24/7 for emergencies and typically respond within 30–60 minutes in our service area. We keep our trucks fully stocked so most emergency repairs can be completed on the same visit.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-bold text-primary-deeper pr-4">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`text-primary flex-shrink-0 transition-transform duration-200 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-white">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
