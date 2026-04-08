'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { businessConfig } from '@/config/business'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/emergency', label: '24/7 Emergency' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 leading-tight text-sm md:text-base">
                {businessConfig.name}
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">Licensed & Insured</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.label === '24/7 Emergency'
                    ? 'text-accent font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              <Phone size={16} />
              {businessConfig.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-sm font-medium ${
                link.label === '24/7 Emergency' ? 'text-accent font-bold' : 'text-gray-700'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-semibold text-sm w-full justify-center"
          >
            <Phone size={16} />
            Call {businessConfig.phone}
          </a>
        </div>
      )}
    </header>
  )
}
