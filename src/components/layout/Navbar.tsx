'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const activities = [
  { name: 'Laser Game', href: '/laser-game' },
  { name: 'Lancer de Hache', href: '/lancer-de-hache' },
  { name: 'BlindTest', href: '/blind-test' },
]

const navLinks = [
  { name: 'Activités', href: '#', dropdown: activities },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Offres', href: '/anniversaire' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-dark-secondary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl text-primary tracking-widest uppercase">
                  Laser Game
                </span>
                <span className="font-display text-xs text-white tracking-[0.3em] uppercase">
                  Evolution Tours
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 font-body text-sm font-medium uppercase tracking-wider transition-colors duration-200',
                        dropdownOpen ? 'text-primary' : 'text-white hover:text-primary'
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          dropdownOpen ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-dark-secondary border border-gray-card rounded-lg shadow-xl overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-sm font-body text-gray-300 hover:text-white hover:bg-gray-card transition-colors duration-150"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 font-body text-sm font-medium uppercase tracking-wider transition-colors duration-200 relative',
                      pathname === link.href
                        ? 'text-primary after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:rounded-full'
                        : 'text-white hover:text-primary'
                    )}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:0247000000"
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 hover:scale-105"
              >
                <Phone size={14} />
                Réserver
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white hover:text-primary transition-colors duration-200 p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-dark-secondary shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-card">
              <span className="font-display text-primary text-lg uppercase tracking-widest">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-primary p-1"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 px-6 py-6 space-y-1">
              <p className="text-xs font-body text-gray-medium uppercase tracking-widest mb-4">
                Activités
              </p>
              {activities.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 font-body text-white hover:text-primary transition-colors duration-200 border-b border-gray-card/50 text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                {navLinks
                  .filter((l) => !l.dropdown)
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-3 font-body text-white hover:text-primary transition-colors duration-200 border-b border-gray-card/50 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
              </div>
            </div>
            <div className="px-6 py-6 border-t border-gray-card">
              <a
                href="tel:0247000000"
                className="flex items-center justify-center gap-2 bg-primary text-white font-body font-bold text-sm uppercase tracking-wider py-3 rounded-sm w-full hover:bg-primary-dark transition-colors duration-200"
              >
                <Phone size={16} />
                02 47 00 00 00
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
