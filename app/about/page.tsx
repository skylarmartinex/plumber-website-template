import type { Metadata } from 'next'
import { CheckCircle, Award, Users, Star } from 'lucide-react'
import { businessConfig } from '@/config/business'
import { CTAButton } from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${businessConfig.name} — a family-owned plumbing company serving ${businessConfig.serviceAreas.slice(0,3).join(', ')} for ${businessConfig.yearsInBusiness}+ years. Licensed, insured, and community trusted.`,
}

const certifications = [
  'State Licensed Master Plumber',
  'Fully Insured & Bonded',
  'Better Business Bureau Member',
  'EPA Certified',
  'Water Quality Association Member',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About {businessConfig.name}
          </h1>
          <p className="text-blue-200 text-lg">
            Family-owned. Community-trusted. {businessConfig.yearsInBusiness}+ years of experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {businessConfig.name} was founded {businessConfig.yearsInBusiness} years ago with a simple
                  belief: every homeowner deserves honest, quality plumbing work at a fair price.
                </p>
                <p>
                  What started as a one-truck operation has grown into a full team of licensed plumbers —
                  but our commitment to treating every customer like family has never changed. We live and
                  work in this community. When you call us, you&apos;re not calling a call center — you&apos;re
                  talking to your neighbors.
                </p>
                <p>
                  We&apos;ve built our reputation one job at a time. {businessConfig.reviewCount}+ five-star
                  reviews and {businessConfig.yearsInBusiness}+ years in business speak for themselves.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: businessConfig.yearsInBusiness + '+', label: 'Years in Business' },
                { value: businessConfig.reviewCount + '+', label: 'Happy Customers' },
                { value: businessConfig.averageRating, label: 'Star Rating' },
                { value: '24/7', label: 'Emergency Service' },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">Licensed professionals who take pride in their work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {businessConfig.team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certified & Qualified</h2>
              <p className="text-gray-600 mb-6">
                We hold every license, certification, and insurance policy required to protect you and
                your home. You can hire us with complete confidence.
              </p>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-gray-700">
                    <Award size={18} className="text-primary flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {businessConfig.reviewCount}+ Five-Star Reviews
              </h3>
              <p className="text-blue-200 mb-6">
                Our customers are our best advertisement. Here&apos;s why they keep coming back and referring their neighbors.
              </p>
              <ul className="space-y-3">
                {['On-time arrival — every time', 'Upfront pricing, no hidden fees', 'Clean, respectful technicians', 'Work guaranteed'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle size={14} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-blue-200 mb-8">
            Join thousands of homeowners who trust {businessConfig.name} for all their plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="call" size="lg" />
            <CTAButton variant="schedule" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
