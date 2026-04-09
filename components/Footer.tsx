import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { businessConfig } from '@/config/business'

export function Footer() {
  return (
    <footer className="bg-primary-deeper text-blue-200">

      {/* ── MAIN FOOTER ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded flex items-center justify-center flex-shrink-0">
                <span className="text-primary-deeper font-black text-xl leading-none">B</span>
              </div>
              <h3 className="text-white font-black text-base leading-tight">{businessConfig.name}</h3>
            </div>
            <p className="text-sm text-blue-300 mb-5">{businessConfig.tagline}</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 font-semibold text-white hover:text-gold transition-colors"
                >
                  <Phone size={13} className="text-gold flex-shrink-0" />
                  {businessConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail size={13} className="text-gold flex-shrink-0" />
                  {businessConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-gold flex-shrink-0 mt-0.5" />
                <span>{businessConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={13} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div>{businessConfig.hours.weekday}</div>
                  <div>{businessConfig.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {businessConfig.services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-gold transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/emergency', label: '24/7 Emergency' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-5">
            <h4 className="text-white font-black text-base mb-2">Need a Plumber Now?</h4>
            <p className="text-blue-300 text-sm mb-4">
              {businessConfig.hours.emergency}. Call or book online — we respond fast.
            </p>
            <a
              href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-gold text-primary-deeper font-black text-sm px-4 py-3 rounded hover:bg-yellow-400 transition-colors justify-center mb-2"
            >
              <Phone size={14} />
              {businessConfig.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-white/10 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>

        {/* Service areas */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Service Areas</h4>
          <p className="text-sm text-blue-400">
            {businessConfig.serviceAreas.join(' · ')}
          </p>
        </div>
      </div>

      {/* ── LEGAL BAR ───────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-400">
          <p>&copy; {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
            <span>{businessConfig.licenseNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
