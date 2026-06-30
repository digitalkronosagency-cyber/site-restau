import { Metadata } from 'next'
import { evenementsMetadata } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { Calendar, Star } from 'lucide-react'

export const metadata: Metadata = evenementsMetadata

const events = [
  {
    date: '2026',
    title: 'Ouverture du Nouveau Centre',
    description:
      'Laser Game Evolution Tours ouvre un nouveau centre avec des espaces agrandis, de nouvelles activités et une expérience encore plus immersive. Restez connectés pour la date exacte !',
    badge: '🚀 À venir',
    highlight: true,
  },
  {
    date: 'Été 2025',
    title: 'Horaires Estivaux Activés',
    description:
      'Pendant juillet et août, le centre est ouvert tous les jours de 14h à 22h (23h le samedi). Profitez des longues journées d\'té pour vivre des aventures laser game !',
    badge: '☀️ Actuel',
    highlight: false,
  },
  {
    date: 'Vacances scolaires',
    title: 'Horaires Vacances Scolaires',
    description:
      'Pendant toutes les vacances scolaires, le centre ouvre ses portes dès 14h du lundi au dimanche. Plus de disponibilités pour votre groupe !',
    badge: '📅 Perm',
    highlight: false,
  },
]

export default function EvenementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-secondary">
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Événements</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
            Événements &
            <span className="block text-primary">Actualités</span>
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl">
            Retrouvez toutes les actualités, événements spéciaux et informations pratiques
            du Laser Game Evolution de Tours.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-6">
            {events.map((event, i) => (
              <div
                key={i}
                className={`bg-dark-card rounded-lg p-6 md:p-8 border ${
                  event.highlight
                    ? 'border-primary shadow-[0_0_20px_rgba(229,0,26,0.1)]'
                    : 'border-gray-card'
                }`}
              >
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-medium">
                    <Calendar size={16} />
                    <span className="font-body text-sm">{event.date}</span>
                  </div>
                  <span
                    className={`text-xs font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      event.highlight
                        ? 'bg-primary text-white'
                        : 'bg-dark-bg text-gray-medium border border-gray-card'
                    }`}
                  >
                    {event.badge}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide mb-3">
                  {event.title}
                </h2>
                <p className="font-body text-gray-300 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter teaser */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="bg-dark-card border border-primary/30 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <Star size={32} className="text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl text-white uppercase tracking-wide mb-3">
              Ne ratez aucune actualité
            </h2>
            <p className="font-body text-gray-medium mb-6">
              Suivez-nous sur les réseaux sociaux pour être informés en premier des promotions
              et événements spéciaux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.facebook.com/lasergameevolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-body font-bold text-sm px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lasergameevolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-body font-bold text-sm px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
            Organisez votre prochain événement
          </h2>
          <Button href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Nous contacter
          </Button>
        </div>
      </section>
    </>
  )
}
