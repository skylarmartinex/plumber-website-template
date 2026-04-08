import type { Metadata } from 'next'
import { businessConfig } from '@/config/business'
import { CTAButton } from '@/components/CTAButton'
import {
  AlertCircle, Waves, Flame, Search, GitBranch,
  ArrowDownCircle, Home, Droplets, CheckCircle, type LucideIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description: `Full-service plumbing from ${businessConfig.name}. Emergency plumbing, drain cleaning, water heaters, leak detection, repiping, sewer repair and more. Serving ${businessConfig.serviceAreas.slice(0,3).join(', ')}.`,
}

const iconMap: Record<string, LucideIcon> = {
  AlertCircle, Waves, Flame, Search, GitBranch,
  ArrowDownCircle, Home, Droplets,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Plumbing Services</h1>
          <p className="text-blue-200 text-lg mb-6">
            Professional, reliable plumbing for every job — big or small.
          </p>
          <CTAButton variant="call" size="lg" />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {businessConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || AlertCircle
            const isEven = i % 2 === 0
            return (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid md:grid-cols-2 gap-10 items-center ${!isEven ? 'md:[&>div:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.name}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <CTAButton variant="schedule" size="md" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                    <Icon size={64} className="text-primary mx-auto mb-4 opacity-80" />
                    <p className="text-primary font-semibold text-lg">{service.shortDesc}</p>
                    <div className="mt-6 pt-6 border-t border-blue-200">
                      <p className="text-sm text-gray-600 mb-3">Ready to schedule?</p>
                      <CTAButton variant="call" size="sm" />
                    </div>
                  </div>
                </div>
                {i < businessConfig.services.length - 1 && (
                  <hr className="mt-16 border-gray-100" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See Your Issue?</h2>
          <p className="text-blue-200 mb-8">
            We handle all plumbing problems. Call us and describe what&apos;s happening — we&apos;ll let you know if we can help.
          </p>
          <CTAButton variant="call" size="lg" />
        </div>
      </section>
    </>
  )
}
