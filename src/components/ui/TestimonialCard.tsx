import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  date: string
  source: 'google'
  initials: string
  color: string
  className?: string
}

export function TestimonialCard({
  name,
  rating,
  text,
  date,
  initials,
  color,
  className,
}: TestimonialCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div
      className={cn(
        'bg-dark-card border border-gray-card rounded-lg p-6 flex flex-col gap-4',
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
          />
        ))}
      </div>

      {/* Text */}
      <p className="font-body text-sm text-gray-300 leading-relaxed flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-card">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-body font-bold text-xs flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body font-semibold text-white text-sm truncate">{name}</p>
          <p className="font-body text-xs text-gray-medium">{formattedDate}</p>
        </div>
        {/* Google logo */}
        <div className="text-xs font-body text-gray-medium flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
