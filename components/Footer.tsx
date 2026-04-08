import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { businessConfig } from '@/config/business'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{businessConfig.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{businessConfig.tagline}</p>
            <p className="text-xs text-gray-500">{businessConfig.licenseNumber}</p>
            <div className="flex gap-2 mt-4">
              <span className="bg-blue-800 text-blue-200 text-xs px-2 py-1 rounded">Licensed</span>
              <span className="bg-blue-800 text-blue-200 text-xs px-2 py-1 rounded">Insured</span>
              <span className="bg-blue-800 text-blue-200 text-xs px-2 py-1 rounded">Bonded</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/emergency', label: '24/7 Emergency' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {businessConfig.services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-secondary flex-shrink-0" />
                  {businessConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-secondary flex-shrink-0" />
                  {businessConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>{businessConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div>{businessConfig.hours.weekday}</div>
                  <div>{businessConfig.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-white font-semibold mb-3 text-sm">Service Areas</h4>
          <p className="text-sm text-gray-400">
            {businessConfig.serviceAreas.join(' · ')}
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          <p>{businessConfig.licenseNumber}</p>
        </div>
      </div>
    </footer>
  )
}
