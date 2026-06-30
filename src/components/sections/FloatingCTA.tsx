'use client'

import { Phone, Gamepad2 } from 'lucide-react'
import Link from 'next/link'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
      <div className="flex border-t border-gray-card bg-dark-secondary/95 backdrop-blur-md">
        <a
          href="tel:0247000000"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white hover:text-primary hover:bg-gray-card/50 transition-all duration-200 border-r border-gray-card"
        >
          <Phone size={18} />
          <span className="font-body font-bold text-sm uppercase tracking-wider">Appeler</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white hover:bg-primary-dark transition-all duration-200"
        >
          <Gamepad2 size={18} />
          <span className="font-body font-bold text-sm uppercase tracking-wider">Réserver</span>
        </Link>
      </div>
    </div>
  )
}
