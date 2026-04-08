import { Phone } from 'lucide-react'
import { businessConfig } from '@/config/business'

export function EmergencyBanner() {
  return (
    <>
      {/* Sticky bottom bar - mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-accent text-white px-4 py-3 shadow-lg">
        <a
          href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
          className="flex items-center justify-center gap-2 font-bold text-base"
        >
          <Phone size={20} />
          <span>24/7 Emergency — Call Now: {businessConfig.phone}</span>
        </a>
      </div>

      {/* Floating button - desktop */}
      <a
        href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-accent text-white px-5 py-3 rounded-full font-semibold shadow-xl hover:bg-red-700 transition-colors"
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>
    </>
  )
}
