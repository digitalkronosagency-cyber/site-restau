'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/data/faq'

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={cn(
              'border rounded-lg overflow-hidden transition-all duration-200',
              isOpen
                ? 'border-primary/50 bg-dark-card'
                : 'border-gray-card bg-dark-card hover:border-gray-card/80'
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  'font-body font-semibold text-sm leading-relaxed transition-colors duration-200',
                  isOpen ? 'text-primary' : 'text-white'
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  'flex-shrink-0 transition-transform duration-300 text-gray-medium',
                  isOpen ? 'rotate-180 text-primary' : ''
                )}
              />
            </button>

            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-5 pb-5">
                <div className="h-px bg-gray-card mb-4" />
                <p className="font-body text-sm text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
