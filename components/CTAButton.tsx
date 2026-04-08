import Link from 'next/link'
import { Phone } from 'lucide-react'
import { businessConfig } from '@/config/business'

interface CTAButtonProps {
  variant?: 'call' | 'schedule' | 'emergency'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CTAButton({ variant = 'call', size = 'md', className = '' }: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  if (variant === 'call' || variant === 'emergency') {
    const colorClass = variant === 'emergency'
      ? 'bg-accent hover:bg-red-700'
      : 'bg-primary hover:bg-primary-dark'
    return (
      <a
        href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
        className={`inline-flex items-center justify-center gap-2 ${colorClass} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${sizeClasses[size]} ${className}`}
      >
        <Phone size={size === 'lg' ? 22 : size === 'sm' ? 16 : 18} />
        {variant === 'emergency' ? `Emergency: ${businessConfig.phone}` : `Call ${businessConfig.phone}`}
      </a>
    )
  }

  return (
    <Link
      href="/contact"
      className={`inline-flex items-center justify-center gap-2 bg-secondary hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${sizeClasses[size]} ${className}`}
    >
      Schedule Service
    </Link>
  )
}
