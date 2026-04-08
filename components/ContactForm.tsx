'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { businessConfig } from '@/config/business'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([k, v]) => formData.append(k, v))
      formData.append('_subject', `New Service Request from ${data.name}`)
      formData.append('_captcha', 'false')

      const res = await fetch(
        `https://formsubmit.co/${businessConfig.formSubmitEmail}`,
        { method: 'POST', body: formData }
      )

      if (res.ok) {
        setSubmitted(true)
        reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thanks! We&apos;ll contact you within 1 business hour. For emergencies, please call{' '}
          <a href={`tel:${businessConfig.phone.replace(/\D/g, '')}`} className="font-bold underline">
            {businessConfig.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Something went wrong. Please call us directly at {businessConfig.phone}.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Smith"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            {...register('phone', { required: 'Phone is required' })}
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          {...register('email', {
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
          })}
          type="email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
        <select
          {...register('service')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select a service...</option>
          {businessConfig.services.map((s) => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Describe the issue..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Request Service →'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        For emergencies, call directly:{' '}
        <a href={`tel:${businessConfig.phone.replace(/\D/g, '')}`} className="text-primary font-semibold">
          {businessConfig.phone}
        </a>
      </p>
    </form>
  )
}
