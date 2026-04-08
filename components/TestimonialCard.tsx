import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  location: string
  review: string
  rating: number
}

export function TestimonialCard({ name, location, review, rating }: TestimonialCardProps) {
  return (
    <div className="card">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 text-sm italic mb-4">&ldquo;{review}&rdquo;</p>
      <div>
        <div className="font-semibold text-gray-900 text-sm">{name}</div>
        <div className="text-gray-500 text-xs">{location}</div>
      </div>
    </div>
  )
}
