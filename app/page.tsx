import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, CheckCircle, Star, MapPin, Users, Clock, DollarSign, Award,
} from 'lucide-react'
import { businessConfig } from '@/config/business'
import { ServiceCard } from '@/components/ServiceCard'
import { TestimonialCard } from '@/components/TestimonialCard'
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

const howItWorks = [
  { step: '1', title: 'Call or Book Online', desc: 'Call us anytime or submit a request online. We confirm your appointment fast — often same day.' },
  { step: '2', title: 'We Diagnose & Quote', desc: 'Our plumber arrives, finds the problem, and gives you a clear upfront price before any work begins.' },
  { step: '3', title: 'We Fix It — Guaranteed', desc: 'We complete the repair cleanly and professionally. Every job is backed by our satisfaction guarantee.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-primary-dark overflow-hidden min-h-[580px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/98 via-primary-dark/85 to-primary/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-bold px-3 py-1 rounded-full mb-5">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                {businessConfig.hours.emergency}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                {businessConfig.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-semibold mb-3">
                {businessConfig.tagline}
              </p>
              <p className="text-blue-300 mb-8">
                Serving {businessConfig.serviceAreas.slice(0, 5).join(', ')} and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Licensed & Insured', 'Bonded', 'Satisfaction Guaranteed', '24/7 Emergency'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} className="text-gold" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Request Service Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-black text-primary mb-1">Request Service</h2>
              <p className="text-gray-500 text-sm mb-6">
                We respond fast — most calls answered in under 60 minutes.
              </p>
              <a
                href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 bg-gold text-primary font-black text-lg px-6 py-4 rounded-xl w-full justify-center mb-3 hover:bg-yellow-400 transition-colors shadow-md"
              >
                <Phone size={22} />
                {businessConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-xl w-full justify-center hover:bg-blue-50 transition-colors"
              >
                Schedule Online
              </Link>
              <ul className="mt-6 space-y-2.5 border-t border-gray-100 pt-6">
                {[
                  'Same-day service available',
                  'Upfront pricing — no surprises',
                  'Licensed, insured & bonded',
                  businessConfig.yearsInBusiness + '+ years serving the area',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span>{businessConfig.averageRating} Stars on Google</span>
          </div>
          <span className="hidden sm:block opacity-30">|</span>
          <span>{businessConfig.reviewCount}+ Verified Reviews</span>
          <span className="hidden sm:block opacity-30">|</span>
          <span>{businessConfig.yearsInBusiness}+ Years in Business</span>
          <span className="hidden sm:block opacity-30">|</span>
          <span className="text-gold">Licensed · Insured · Bonded</span>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessConfig.services.slice(0, 8).map((service) => (
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

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">How It Works</h2>
          <p className="text-blue-200 mb-14 text-lg">Getting your plumbing fixed is simple.</p>
          <div className="grid md:grid-cols-3 gap-10">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <span className="text-primary font-black text-2xl">{item.step}</span>
                </div>
                <h3 className="font-black text-white text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-3 bg-gold text-primary font-black text-lg px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg"
            >
              <Phone size={22} />
              Call Now — {businessConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Why Homeowners Trust {businessConfig.name}</h2>
              <p className="text-gray-500 mb-8">
                We&apos;re not a franchise or call center — we&apos;re your neighbors. When you call us,
                you&apos;re talking to the same team that will show up at your door.
              </p>
              <div className="space-y-5">
                {whyChooseUs.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-gold/20">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-black text-primary">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <CTAButton variant="call" size="lg" />
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/handshake.png"
                alt="Plumber shaking hands with satisfied homeowner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
                <Star key={i} size={24} className="fill-gold text-gold" />
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
                className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-sm font-semibold text-primary"
              >
                <MapPin size={12} className="flex-shrink-0 text-gold" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Get Your Plumbing Fixed?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Call now for same-day service or schedule online. Upfront pricing, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-3 bg-gold text-primary font-black text-lg px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg justify-center"
            >
              <Phone size={22} />
              {businessConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors justify-center"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
