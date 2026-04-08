import type { Metadata } from 'next'
import { Phone, Clock, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import { businessConfig } from '@/config/business'
import { CTAButton } from '@/components/CTAButton'

export const metadata: Metadata = {
  title: '24/7 Emergency Plumber',
  description: `Emergency plumber available 24/7 in ${businessConfig.serviceAreas.slice(0,4).join(', ')}. Call ${businessConfig.phone} now — we answer every call and respond fast.`,
}

const emergencies = [
  { emoji: '💧', title: 'Burst Pipe', desc: 'Flooding your home right now? We stop the leak fast and minimize water damage.' },
  { emoji: '🚽', title: 'Overflowing Toilet', desc: 'Sewage backup is a health hazard. We clear the clog and restore function immediately.' },
  { emoji: '🔥', title: 'No Hot Water', desc: 'No hot water usually means a water heater failure. We diagnose and repair same visit.' },
  { emoji: '🏠', title: 'Sewer Backup', desc: 'Multiple drains backing up means a sewer blockage. Requires immediate professional response.' },
  { emoji: '⚠️', title: 'Gas Leak', desc: 'Smell gas? Leave the building immediately and call us. We work with your gas company to resolve fast.' },
  { emoji: '🌊', title: 'Flooding Basement', desc: 'Basement flooding from plumbing failure. We locate the source and stop the damage.' },
]

export default function EmergencyPage() {
  return (
    <>
      {/* Hero — urgent red */}
      <section className="bg-gradient-to-b from-red-900 to-red-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold text-sm">We Answer 24 Hours a Day, 7 Days a Week</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Emergency Plumber — Available Now
          </h1>
          <p className="text-red-200 text-xl mb-8">
            Don&apos;t wait. Every minute counts when water is damaging your home.
          </p>
          <a
            href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-3 bg-white text-accent font-bold text-xl px-8 py-5 rounded-xl shadow-2xl hover:bg-red-50 transition-colors"
          >
            <Phone size={28} />
            CALL NOW: {businessConfig.phone}
          </a>
          <p className="text-red-300 mt-4 text-sm">Typical response time: under 60 minutes</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-red-700 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
          <div className="flex items-center gap-2"><Clock size={16} /> Available 24/7/365</div>
          <div className="flex items-center gap-2"><Zap size={16} /> Fast Response</div>
          <div className="flex items-center gap-2"><CheckCircle size={16} /> Licensed & Insured</div>
          <div className="flex items-center gap-2"><Phone size={16} /> Real Person Answers</div>
        </div>
      </section>

      {/* Emergency types */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Common Emergencies We Handle</h2>
            <p className="section-subtitle">Whatever the emergency — call us first.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencies.map((e) => (
              <div key={e.title} className="card border-l-4 border-accent">
                <div className="text-3xl mb-3">{e.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{e.title}</h3>
                <p className="text-gray-600 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What to Do While You Wait
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: '1', title: 'Call Us First', desc: 'Call ' + businessConfig.phone + ' immediately. We\'ll walk you through next steps while our tech is on the way.' },
              { step: '2', title: 'Shut Off Water', desc: 'If water is actively flooding, locate your main shutoff valve and turn it off to minimize damage.' },
              { step: '3', title: 'Document Damage', desc: 'Take photos and video of the damage for insurance purposes. Don\'t discard damaged items yet.' },
              { step: '4', title: 'Stay Calm', desc: 'Our emergency team has handled hundreds of situations like yours. Help is on the way.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 flex gap-4 shadow-sm">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AlertTriangle size={48} className="text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Plumbing Emergency? Don&apos;t Wait.
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Every minute of water damage costs money. Our emergency team is standing by.
          </p>
          <a
            href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-3 bg-white text-accent font-bold text-xl px-10 py-5 rounded-xl shadow-2xl hover:bg-red-50 transition-colors"
          >
            <Phone size={28} />
            {businessConfig.phone}
          </a>
          <p className="text-red-200 mt-4">
            Or <a href="/contact" className="underline font-semibold">schedule non-emergency service online</a>
          </p>
        </div>
      </section>
    </>
  )
}
