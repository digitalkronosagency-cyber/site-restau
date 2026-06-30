'use client'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  href?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  external?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      href,
      iconLeft,
      iconRight,
      external,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-body font-bold uppercase tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg disabled:pointer-events-none disabled:opacity-50 rounded-sm'

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-[0_0_20px_rgba(229,0,26,0.4)] active:scale-100',
      secondary:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 active:scale-100',
      ghost:
        'border-2 border-white text-white hover:bg-white hover:text-dark-bg hover:scale-105 active:scale-100',
    }

    const sizes = {
      sm: 'text-xs px-4 py-2',
      md: 'text-sm px-6 py-3',
      lg: 'text-base px-8 py-4',
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    const content = (
      <>
        {loading ? <Loader2 className="animate-spin" size={16} /> : iconLeft}
        {children}
        {!loading && iconRight}
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
