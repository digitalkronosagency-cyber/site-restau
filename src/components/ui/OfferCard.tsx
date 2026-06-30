import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface OfferCardProps {
  title: string
  description: string
  icon: string
  cta: string
  ctaLink: string
  highlight?: boolean
  className?: string
}

export function OfferCard({
  title,
  description,
  icon,
  cta,
  ctaLink,
  highlight = false,
  className,
}: OfferCardProps) {
  return (
    <div
      className={cn(
        'relative group bg-dark-card rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,0,26,0.15)] border',
        highlight
          ? 'border-primary shadow-[0_0_20px_rgba(229,0,26,0.1)]'
          : 'border-gray-card hover:border-primary/40',
        className
      )}
    >
      {/* Popular badge */}
      {highlight && (
        <div className="absolute -top-3 left-6">
          <span className="bg-primary text-white text-xs font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Populaire
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="font-display text-xl text-white uppercase tracking-wide mb-3">{title}</h3>
      <p className="font-body text-gray-medium text-sm leading-relaxed mb-6">{description}</p>

      {/* CTA */}
      <Link
        href={ctaLink}
        className={cn(
          'inline-flex items-center gap-2 text-sm font-body font-bold uppercase tracking-wider transition-all duration-200 group/btn',
          highlight
            ? 'text-white bg-primary px-5 py-2.5 rounded-sm hover:bg-primary-dark'
            : 'text-primary hover:text-white'
        )}
      >
        {cta}
        <ArrowRight
          size={14}
          className="transform group-hover/btn:translate-x-1 transition-transform duration-200"
        />
      </Link>
    </div>
  )
}
