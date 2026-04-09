'use client'

import { businessConfig } from '@/config/business'

export function HeroLeadForm() {
  return (
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
  )
}
