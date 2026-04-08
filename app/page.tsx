import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone, CalendarDays, Star, MapPin, DollarSign, ShieldCheck,
  BadgeCheck, Wrench,
} from 'lucide-react'
import { businessConfig } from '@/config/business'
import { ServiceCard } from '@/components/ServiceCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: `${businessConfig.name} — ${businessConfig.tagline}`,
  description: `Professional plumbing services in ${businessConfig.serviceAreas.slice(0, 4).join(', ')}. ${businessConfig.yearsInBusiness}+ years experience. ${businessConfig.hours.emergency}. Call ${businessConfig.phone}.`,
}

const whyChooseUs = [
  {
    icon: DollarSign,
    title: 'Upfront Flat Rate Pricing',
    desc: 'No surprises. We give you a clear price before any work begins — and we stick to it.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Every technician is fully licensed, insured, and background-checked for your peace of mind.',
  },
  {
    icon: BadgeCheck,
    title: 'Satisfaction Guaranteed',
    desc: "If you're not 100% satisfied with our work, we'll make it right. No questions asked.",
  },
  {
    icon: Wrench,
    title: 'Residential & Commercial',
    desc: 'From single-family homes to commercial properties — we handle it all, any size job.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[620px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Dark blue overlay — matches Mr. Rooter's deep navy over image */}
        <div className="absolute inset-0 bg-primary-deeper/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Headline + CTAs */}
            <div>
              {/* Review stars */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className={i <= Math.floor(businessConfig.averageRating) ? 'fill-gold text-gold' : 'fill-gold/30 text-gold/30'} />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">
                  {businessConfig.averageRating} Stars · {businessConfig.reviewCount}+ Reviews
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {businessConfig.name}: Expert Plumbing Contractors You Can Trust
              </h1>
              <p className="text-xl text-blue-200 font-semibold mb-4">
                {businessConfig.tagline}
              </p>
              <p className="text-blue-300 leading-relaxed mb-8 max-w-lg">
                Looking for a plumber you can actually rely on? We&apos;re your locally owned and
                operated plumbing company serving {businessConfig.serviceAreas.slice(0, 3).join(', ')} and
                surrounding areas. Whether it&apos;s a sewer line, a water heater, or a midnight
                emergency — we&apos;re ready to take your call.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 bg-gold text-primary-deeper font-black text-base px-6 py-3.5 rounded hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-white text-white font-bold text-base px-6 py-3.5 rounded hover:bg-white/10 transition-colors"
                >
                  <CalendarDays size={18} />
                  Book Online
                </Link>
              </div>
            </div>

            {/* Right: Lead form card */}
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h2 className="text-2xl font-black text-primary-deeper mb-1">Let Us Call You</h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form and a team member will call you shortly to schedule service.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Maria"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Garcia"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(562) 555-0100"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Service Needed</label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700">
                    <option value="">Select a service...</option>
                    {businessConfig.services.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-black py-3.5 rounded hover:bg-primary-dark transition-colors text-sm tracking-wide"
                >
                  Submit and Continue →
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-4">
                Or call us directly:{' '}
                <a href={`tel:${businessConfig.phone.replace(/\D/g, '')}`} className="font-bold text-primary hover:underline">
                  {businessConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              Why Choose {businessConfig.name}?
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
              We&apos;re not a call center or a franchise — we&apos;re your neighbors, and we treat every job that way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-black text-primary-deeper text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              Plumbing &amp; Drain Services We Provide
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              From emergency repairs to complete repiping — we handle every job, every size.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={22} className="fill-gold text-gold" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              {businessConfig.averageRating} Stars · {businessConfig.reviewCount}+ Reviews
            </h2>
            <p className="text-gray-500 mt-3 text-lg">What our customers say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {businessConfig.testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Everything you need to know before calling a plumber.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-primary-deeper">Find a {businessConfig.name} Near Me</h2>
            <p className="text-gray-500 mt-2">Serving the greater Whittier area and surrounding communities</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {businessConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default"
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Get Your Plumbing Fixed?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Call now or book online. Upfront pricing, same-day service, satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-3 bg-gold text-primary-deeper font-black text-lg px-8 py-4 rounded hover:bg-yellow-400 transition-colors shadow-lg justify-center"
            >
              <Phone size={22} />
              {businessConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors justify-center"
            >
              <CalendarDays size={20} />
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
