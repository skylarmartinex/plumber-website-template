import Link from 'next/link'
import {
  AlertCircle, Waves, Flame, Search, GitBranch,
  ArrowDownCircle, Home, Droplets, ChevronRight, type LucideIcon
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  AlertCircle, Waves, Flame, Search, GitBranch,
  ArrowDownCircle, Home, Droplets,
}

interface ServiceCardProps {
  id: string
  name: string
  icon: string
  shortDesc: string
  linkToPage?: boolean
}

export function ServiceCard({ id, name, icon, shortDesc, linkToPage = true }: ServiceCardProps) {
  const Icon = iconMap[icon] || AlertCircle

  return (
    <div className="card group hover:border-gold border border-transparent">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
        <Icon size={24} className="text-primary group-hover:text-primary transition-colors" />
      </div>
      <h3 className="font-black text-lg text-primary mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{shortDesc}</p>
      {linkToPage && (
        <Link
          href={`/services#${id}`}
          className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:text-gold hover:gap-2 transition-all"
        >
          Learn More <ChevronRight size={16} />
        </Link>
      )}
    </div>
  )
}
