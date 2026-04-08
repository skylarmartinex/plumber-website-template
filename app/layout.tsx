import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import { businessConfig } from '@/config/business'

export const metadata: Metadata = {
  title: {
    default: `${businessConfig.name} | ${businessConfig.tagline}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: `${businessConfig.name} — professional plumbing services in ${businessConfig.serviceAreas.slice(0, 3).join(', ')} and surrounding areas. ${businessConfig.hours.emergency}. Call ${businessConfig.phone}.`,
  keywords: ['plumber', 'plumbing', 'emergency plumber', 'drain cleaning', 'water heater', ...businessConfig.serviceAreas],
  openGraph: {
    type: 'website',
    siteName: businessConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <EmergencyBanner />
      </body>
    </html>
  )
}
