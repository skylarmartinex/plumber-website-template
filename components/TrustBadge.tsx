import { Shield, Award, Clock, CheckCircle } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'Licensed & Insured', sub: 'State Certified' },
  { icon: Award, label: 'Bonded', sub: 'Full Coverage' },
  { icon: Clock, label: '24/7 Emergency', sub: 'Always Available' },
  { icon: CheckCircle, label: 'Satisfaction Guarantee', sub: '100% Guaranteed' },
]

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge) => {
        const Icon = badge.icon
        return (
          <div key={badge.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <Icon size={20} className="text-secondary flex-shrink-0" />
            <div>
              <div className="text-white text-sm font-semibold leading-tight">{badge.label}</div>
              <div className="text-blue-200 text-xs">{badge.sub}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
