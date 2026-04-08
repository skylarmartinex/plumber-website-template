import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { businessConfig } from '@/config/business'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${businessConfig.name}. Call ${businessConfig.phone} for immediate service. Schedule online. Serving ${businessConfig.serviceAreas.slice(0,4).join(', ')} and surrounding areas.`,
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg">
            Call, email, or fill out the form — we&apos;ll get back to you fast.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Service</h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form and we&apos;ll contact you within 1 business hour.
                For emergencies, call directly.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <div className="font-semibold">{businessConfig.phone}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="font-semibold">{businessConfig.email}</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Address</div>
                      <div className="font-semibold">{businessConfig.address}</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock size={18} className="text-primary" /> Hours of Operation
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mon–Fri</span>
                    <span className="font-medium">{businessConfig.hours.weekday.replace('Mon–Fri: ', '')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">8AM–5PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 bg-accent/5 rounded-lg p-2 text-center">
                    <span className="text-accent font-semibold text-sm">{businessConfig.hours.emergency}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {businessConfig.serviceAreas.map((area) => (
                    <span key={area} className="bg-blue-50 text-primary text-xs font-medium px-2 py-1 rounded">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src={businessConfig.googleMapsEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            />
          </div>
        </div>
      </section>
    </>
  )
}
