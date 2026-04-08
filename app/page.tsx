import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, CheckCircle, Star, Users, Clock, DollarSign, Award, MapPin,
} from 'lucide-react'
import { businessConfig } from '@/config/business'
import { ServiceCard } from '@/components/ServiceCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { TrustBadges } from '@/components/TrustBadge'
import { CTAButton } from '@/components/CTAButton'

export const metadata: Metadata = {
  title: `${businessConfig.name} — ${businessConfig.tagline}`,
  description: `Professional plumbing services in ${businessConfig.serviceAreas.slice(0, 4).join(', ')}. ${businessConfig.yearsInBusiness}+ years experience. ${businessConfig.hours.emergency}. Call ${businessConfig.phone}.`,
}

const whyChooseUs = [
  { icon: Users, title: 'Family Owned & Operated', desc: 'Local family business serving our community for over ' + businessConfig.yearsInBusiness + ' years.' },
  { icon: Award, title: businessConfig.yearsInBusiness + '+ Years Experience', desc: 'Thousands of happy customers and every type of plumbing problem solved.' },
  { icon: Clock, title: 'Same-Day Service', desc: 'Most service calls scheduled same day. Emergency response in under 60 minutes.' },
  { icon: DollarSign, title: 'Upfront Pricing', desc: 'Get a clear price before we start. No hidden fees. No surprise bills.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-primary-dark overflow-hidden min-h-[580px] flex items-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {businessConfig.hours.emergency}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {businessConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-medium mb-2">
              {businessConfig.tagline}
            </p>
            <p className="text-blue-200 mb-8">
              Serving {businessConfig.serviceAreas.slice(0, 5).join(', ')} and surrounding areas.{' '}
              {businessConfig.yearsInBusiness}+ years in business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton variant="call" size="lg" />
              <CTAButton variant="schedule" size="lg" />
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────────────────────── */}
      <section className="bg-secondary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <span>{businessConfig.averageRating} Stars</span>
          </div>
          <span className="hidden sm:block opacity-40">|</span>
          <span>{businessConfig.reviewCount}+ Reviews on Google</span>
          <span className="hidden sm:block opacity-40">|</span>
          <span>{businessConfig.yearsInBusiness}+ Years Serving the Area</span>
          <span className="hidden sm:block opacity-40">|</span>
          <span>Licensed · Insured · Bonded</span>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Plumbing Services</h2>
            <p className="section-subtitle">
              From emergency repairs to complete repiping — we handle it all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessConfig.services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                icon={service.icon}
                shortDesc={service.shortDesc}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Why Homeowners Trust {businessConfig.name}</h2>
              <p className="text-gray-600 mb-8">
                We&apos;re not a franchise or call center — we&apos;re your neighbors. When you call us,
                you&apos;re talking to the same team that will show up at your door.
              </p>
              <div className="space-y-5">
                {whyChooseUs.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/handshake.jpg"
                  alt="Plumber shaking hands with satisfied homeowner"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Need a Plumber Today?</h3>
                <p className="text-blue-200 mb-6">
                  Same-day service available. Emergency response in under 60 minutes.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 bg-white text-primary font-bold rounded-lg px-5 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <Phone size={20} />
                    {businessConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 border border-blue-400 text-white font-semibold rounded-lg px-5 py-3 hover:bg-primary-dark transition-colors justify-center"
                  >
                    Schedule Online
                  </Link>
                </div>
                <ul className="mt-6 space-y-2">
                  {['No trip charge to give estimates', 'Upfront pricing before we start', 'Clean, uniformed technicians', 'Fully stocked trucks'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-200">
                      <CheckCircle size={14} className="text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="section-title">
              {businessConfig.averageRating} Stars · {businessConfig.reviewCount}+ Reviews
            </h2>
            <p className="section-subtitle">Here&apos;s what our customers say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {businessConfig.testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Areas We Serve</h2>
            <p className="section-subtitle">Professional plumbing services throughout the region</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {businessConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 bg-blue-50 rounded-lg px-3 py-2 text-sm font-medium text-primary"
              >
                <MapPin size={12} className="flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Plumbing Fixed?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Call now for same-day service or schedule online. Upfront pricing, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="call" size="lg" className="bg-white !text-primary hover:bg-blue-50" />
            <CTAButton variant="schedule" size="lg" className="border-2 border-white !bg-transparent hover:!bg-primary-dark" />
          </div>
        </div>
      </section>
    </>
  )
}
