import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

interface ActivityCardProps {
  number: string
  title: string
  description: string
  slug: string
  features: string[]
  priceFrom: string
  icon: string
  className?: string
}

export function ActivityCard({
  number,
  title,
  description,
  slug,
  features,
  priceFrom,
  icon,
  className,
}: ActivityCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-dark-card border border-gray-card rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(229,0,26,0.15)]',
        className
      )}
    >
      {/* Number badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="font-display text-5xl text-primary/20 leading-none select-none">
          {number}
        </span>
      </div>

      {/* Price badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-primary text-white text-xs font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {priceFrom}
        </span>
      </div>

      {/* Hero gradient area */}
      <div className="h-48 bg-gradient-to-br from-gray-card to-dark-bg flex items-center justify-center text-7xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-3">{title}</h3>
        <p className="font-body text-gray-medium text-sm leading-relaxed mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-1 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-medium font-body">
              <Star size={10} className="text-primary fill-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={slug}
            className="flex-1 text-center text-xs font-body font-bold uppercase tracking-wider text-primary border border-primary/30 py-2 px-3 rounded-sm hover:bg-primary hover:text-white transition-all duration-200"
          >
            En savoir plus
          </Link>
          <Link
            href="/contact"
            className="flex-1 text-center text-xs font-body font-bold uppercase tracking-wider bg-primary text-white py-2 px-3 rounded-sm hover:bg-primary-dark transition-all duration-200 flex items-center justify-center gap-1"
          >
            Réserver <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}
