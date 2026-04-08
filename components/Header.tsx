'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Clock } from 'lucide-react'
import { businessConfig } from '@/config/business'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/emergency', label: '24/7 Emergency' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <span className="flex items-center gap-2 text-blue-200">
            <Clock size={13} />
            {businessConfig.hours.emergency}
          </span>
          <a
            href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 font-bold text-gold hover:text-yellow-300 transition-colors"
          >
            <Phone size={13} />
            {businessConfig.phone}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-gold font-black text-xl">P</span>
              </div>
              <div>
                <div className="font-black text-primary leading-tight text-sm md:text-base">
                  {businessConfig.name}
                </div>
                <div className="text-xs text-gray-400 hidden sm:block">Licensed · Insured · Bonded</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-gold ${
                    link.label === '24/7 Emergency'
                      ? 'text-accent'
                      : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Call CTA */}
            <div className="hidden md:block">
              <a
                href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 bg-gold text-primary px-5 py-2.5 rounded-lg font-black text-sm hover:bg-yellow-400 transition-colors shadow-md"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-sm font-semibold border-b border-gray-50 ${
                  link.label === '24/7 Emergency' ? 'text-accent' : 'text-primary'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 bg-gold text-primary px-4 py-3 rounded-lg font-black text-sm w-full justify-center"
              >
                <Phone size={16} />
                Call {businessConfig.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
