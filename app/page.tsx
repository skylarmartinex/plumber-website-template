import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, CalendarDays, Star, MapPin, DollarSign, ShieldCheck,
  BadgeCheck, Wrench, CheckCircle2, ClipboardList, ThumbsUp,
} from 'lucide-react'
import { businessConfig } from '@/config/business'
import { ServiceCard } from '@/components/ServiceCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { FAQ } from '@/components/FAQ'
import { HeroLeadForm } from '@/components/HeroLeadForm'

export const metadata: Metadata = {
  title: `${businessConfig.name} — ${businessConfig.tagline}`,
  description: `Professional plumbing services in ${businessConfig.serviceAreas.slice(0, 4).join(', ')}. ${businessConfig.yearsInBusiness}+ years experience. ${businessConfig.hours.emergency}. Call ${businessConfig.phone}.`,
}

const whyChooseUs = [
  {
    icon: DollarSign,
    title: 'Upfront Flat-Rate Pricing',
    desc: 'You get a clear price before any work starts. No surprises on the invoice.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed, Insured & Bonded',
    desc: 'Every tech is fully licensed and background-checked. Your home is protected.',
  },
  {
    icon: BadgeCheck,
    title: '100% Satisfaction Guaranteed',
    desc: "If you're not happy with the work, we come back and make it right. Period.",
  },
  {
    icon: Wrench,
    title: 'Residential & Commercial',
    desc: 'Single-family homes, multi-units, restaurants — we handle every size job.',
  },
]

const howItWorks = [
  {
    step: '01',
    icon: Phone,
    title: 'Call or Book Online',
    desc: 'Reach us anytime — day or night. We answer live, no robots.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'We Diagnose & Quote',
    desc: 'A licensed tech arrives fast, finds the problem, and gives you an upfront price before touching anything.',
  },
  {
    step: '03',
    icon: ThumbsUp,
    title: 'Problem Solved',
    desc: "We fix it right the first time and clean up when we're done. You're covered by our satisfaction guarantee.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[640px] flex items-center">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
          alt="Plumber at work"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Deep navy overlay */}
        <div className="absolute inset-0 bg-primary-deeper/88" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Headline + CTAs */}
            <div>
              {/* Review stars */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">
                  {businessConfig.averageRating} Stars · {businessConfig.reviewCount}+ Happy Customers
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Your Local Plumber — Fast, Honest & Guaranteed
              </h1>
              <p className="text-xl text-gold font-bold mb-4">
                {businessConfig.tagline}
              </p>
              <p className="text-blue-200 leading-relaxed mb-3 max-w-lg">
                We&apos;re a locally owned plumbing company serving {businessConfig.serviceAreas.slice(0, 3).join(', ')} and
                surrounding areas. Upfront pricing, same-day service, and a crew that respects your home.
              </p>
              <p className="text-blue-300 text-sm mb-8 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                {businessConfig.hours.emergency}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 bg-gold text-primary-deeper font-black text-base px-7 py-4 rounded hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  <Phone size={18} />
                  {businessConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-white text-white font-bold text-base px-6 py-4 rounded hover:bg-white/10 transition-colors"
                >
                  <CalendarDays size={18} />
                  Book Online
                </Link>
              </div>
            </div>

            {/* Right: Lead form card */}
            <HeroLeadForm />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold text-white">
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> {businessConfig.yearsInBusiness}+ Years Experience</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> {businessConfig.reviewCount}+ 5-Star Reviews</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> Upfront Flat-Rate Pricing</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> Same-Day Service Available</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> Licensed · Insured · Bonded</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              How It Works
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
              Getting your plumbing fixed shouldn&apos;t be a hassle. Here&apos;s what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gold/30" />
            {howItWorks.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative text-center">
                  <div className="relative inline-block mb-5">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-gold text-primary-deeper font-black text-xs w-7 h-7 rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-black text-xl text-primary-deeper mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              Plumbing Services We Provide
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
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT / PHOTO SPLIT ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                alt="Our plumbing team"
                fill
                className="object-cover object-center"
              />
              {/* Badge */}
              <div className="absolute bottom-5 left-5 bg-primary text-white px-5 py-3 rounded-lg shadow-lg">
                <p className="font-black text-2xl text-gold">{businessConfig.yearsInBusiness}+</p>
                <p className="text-xs font-semibold text-blue-200">Years Serving Our Community</p>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-primary-deeper mb-5">
                We&apos;re Your Neighbors — Not a Call Center
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;re a family-owned plumbing company. We built this business the old-fashioned way —
                showing up on time, doing the job right, and treating every customer&apos;s home the way
                we&apos;d treat our own.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                No dispatch fees. No upsells. No fine print. Just honest work from licensed plumbers
                who take pride in what they do.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Locally owned and operated',
                  'All techs are licensed, insured & background-checked',
                  'Upfront pricing — you approve before we start',
                  'Satisfaction guaranteed on every job',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded hover:bg-primary-dark transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary-deeper text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Why ProFlow</p>
            <h2 className="text-3xl md:text-4xl font-black">
              Why Homeowners Choose Us
            </h2>
            <p className="text-blue-300 mt-3 text-lg max-w-2xl mx-auto">
              We don&apos;t just fix pipes — we fix the experience of hiring a plumber.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-black text-base mb-2">{item.title}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={22} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deeper">
              {businessConfig.averageRating} Stars · {businessConfig.reviewCount}+ Reviews
            </h2>
            <p className="text-gray-500 mt-3 text-lg">Real customers, real results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {businessConfig.testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Got Questions?</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-primary-deeper">Areas We Serve</h2>
            <p className="text-gray-500 mt-2">Fast response times across the region</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {businessConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default"
              >
                <MapPin size={12} className="flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA BAND ────────────────────────────────────────────────── */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-bold uppercase tracking-widest text-sm mb-3">24/7 Emergency Service</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Plumbing Emergency? We&apos;re On Our Way.
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            {businessConfig.hours.emergency}. Call now — a live person picks up every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-3 bg-gold text-primary-deeper font-black text-xl px-10 py-5 rounded hover:bg-yellow-400 transition-colors shadow-lg justify-center"
            >
              <Phone size={24} />
              {businessConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-5 rounded hover:bg-white/10 transition-colors justify-center"
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
