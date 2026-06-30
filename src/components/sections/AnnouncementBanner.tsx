'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement-2026-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem('announcement-2026-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative bg-primary-dark text-white py-2.5 px-4 text-center z-[60]">
      <p className="font-body text-xs sm:text-sm font-medium">
        🚀{' '}
        <strong>Nouveau centre en ouverture 2026</strong> — Nouvelles activités et espaces !
        <a
          href="/evenements"
          className="underline ml-2 hover:text-white/80 transition-colors duration-200"
        >
          En savoir plus
        </a>
      </p>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Fermer"
      >
        <X size={16} />
      </button>
    </div>
  )
}
