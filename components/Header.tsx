'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, CalendarDays, Menu, X } from 'lucide-react'
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
    <div className="sticky top-0 z-50">
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div className="bg-primary-deeper py-1.5 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-blue-200">
          <span>{businessConfig.hours.emergency}</span>
          <a
            href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 font-semibold text-gold hover:text-yellow-300 transition-colors"
          >
            <Phone size={11} />
            {businessConfig.phone}
          </a>
        </div>
      </div>

      {/* ── MAIN HEADER ─────────────────────────────────────── */}
      <header className="bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded flex items-center justify-center flex-shrink-0">
                <span className="text-primary-deeper font-black text-xl leading-none">B</span>
              </div>
              <div>
                <div className="font-black text-white text-base leading-tight">
                  {businessConfig.name}
                </div>
                <div className="text-blue-200 text-[11px]">Licensed · Insured · Bonded</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-gold ${
                    link.label === '24/7 Emergency' ? 'text-yellow-300' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 border-2 border-gold text-gold px-4 py-2 rounded font-bold text-sm hover:bg-gold hover:text-primary-deeper transition-colors"
              >
                <CalendarDays size={15} />
                Book Online
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 bg-gold text-primary-deeper px-4 py-2 rounded font-black text-sm hover:bg-yellow-400 transition-colors shadow"
              >
                <Phone size={15} />
                Call Us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-primary-dark border-t border-white/10 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-sm font-semibold border-b border-white/10 ${
                  link.label === '24/7 Emergency' ? 'text-yellow-300' : 'text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 border-2 border-gold text-gold px-4 py-3 rounded font-bold text-sm justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <CalendarDays size={15} />
                Book Online
              </Link>
              <a
                href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 bg-gold text-primary-deeper px-4 py-3 rounded font-black text-sm justify-center"
              >
                <Phone size={15} />
                Call {businessConfig.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
