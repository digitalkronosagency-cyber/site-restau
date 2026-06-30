import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react'

const footerNav = [
  { name: 'Accueil', href: '/' },
  { name: 'Laser Game', href: '/laser-game' },
  { name: 'Lancer de Hache', href: '/lancer-de-hache' },
  { name: 'BlindTest', href: '/blind-test' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

const footerOffers = [
  { name: 'Pack Multi-Activités', href: '/tarifs' },
  { name: 'Anniversaires', href: '/anniversaire' },
  { name: 'Jeunesse & BDE', href: '/contact' },
  { name: 'Entreprises', href: '/entreprises' },
  { name: 'Modes de jeu', href: '/modes-de-jeu' },
  { name: 'Événements', href: '/evenements' },
]

export function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gray-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1 — About */}
          <div>
            <div className="mb-4">
              <span className="font-display text-xl text-primary tracking-widest uppercase block">
                Laser Game
              </span>
              <span className="font-display text-sm text-white tracking-[0.3em] uppercase">
                Evolution Tours
              </span>
            </div>
            <p className="font-body text-sm text-gray-medium leading-relaxed mb-6">
              Centre de loisirs indoor à Tours. Laser game, lancer de hache et blind test.
              Groupes privatisés garantis.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/lasergameevolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/lasergameevolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@lasergameevolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-primary transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.78 1.54V6.79a4.85 4.85 0 01-1.01-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <h3 className="font-display text-white uppercase tracking-wider text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-gray-medium hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Offers */}
          <div>
            <h3 className="font-display text-white uppercase tracking-wider text-sm mb-4">
              Nos Offres
            </h3>
            <ul className="space-y-2">
              {footerOffers.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-gray-medium hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-display text-white uppercase tracking-wider text-sm mb-4">
              Contact & Horaires
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <address className="font-body text-sm text-gray-medium not-italic">
                  35 rue Frédéric Joliot-Curie
                  <br />
                  37550 Saint-Avertin
                </address>
              </li>
              <li>
                <a
                  href="tel:0247000000"
                  className="flex items-center gap-2 font-body text-sm text-gray-medium hover:text-primary transition-colors duration-200"
                >
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  02 47 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lasergame-tours.fr"
                  className="flex items-center gap-2 font-body text-sm text-gray-medium hover:text-primary transition-colors duration-200"
                >
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  contact@lasergame-tours.fr
                </a>
              </li>
              <li className="pt-2">
                <p className="font-body text-xs text-gray-medium leading-relaxed">
                  <span className="text-white font-semibold">Hors vacances :</span>
                  <br />
                  Mar-Jeu 17h-22h | Ven 17h-23h
                  <br />
                  Sam 10h-00h | Dim 14h-20h
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-body text-xs text-gray-medium">
              © 2026 Laser Game Evolution Tours — Tous droits réservés
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="font-body text-xs text-gray-medium hover:text-primary transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="font-body text-xs text-gray-medium hover:text-primary transition-colors duration-200"
              >
                Confidentialité
              </Link>
              <Link
                href="/cgu"
                className="font-body text-xs text-gray-medium hover:text-primary transition-colors duration-200"
              >
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
