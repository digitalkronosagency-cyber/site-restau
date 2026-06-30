import { Metadata } from 'next'
import { tarifsMetadata } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { Phone, Check } from 'lucide-react'

export const metadata: Metadata = tarifsMetadata

const pricingBlocks = [
  {
    activity: 'Laser Game',
    icon: '🎮',
    color: 'border-primary',
    badge: 'Activité principale',
    tiers: [
      { label: 'Session individuelle (1 partie)', price: 'Sur devis', note: 'Disponible en fonction des plages' },
      { label: 'Pack 2 parties', price: 'Sur devis', note: 'Conseillé pour bien profiter' },
      { label: 'Pack 3 parties', price: 'Sur devis', note: 'Le choix des passionnés' },
    ],
    includes: [
      'Labyrinthe 100% privatisé',
      'Pistolets laser & plastrons',
      'Briefing inclus',
      'Affichage des scores',
    ],
  },
  {
    activity: 'Lancer de Hache',
    icon: '🪓',
    color: 'border-accent',
    badge: 'Insolite & fun',
    tiers: [
      { label: 'Session 30 min', price: 'Sur devis', note: 'Parfait pour découvrir' },
      { label: 'Session 1 heure', price: 'Sur devis', note: 'Pour progresser' },
    ],
    includes: [
      'Moniteur accompagnateur',
      'Haches sécurisées fournies',
      'Formation technique incluse',
      'Espace privatisé',
    ],
  },
  {
    activity: 'BlindTest',
    icon: '🎵',
    color: 'border-purple-500',
    badge: 'Musical & convivial',
    tiers: [
      { label: 'Session 30 min', price: 'Sur devis', note: 'Idéal pour une soirée courte' },
      { label: 'Session 1 heure', price: 'Sur devis', note: 'Pour une soirée complète' },
    ],
    includes: [
      'Salle privatisée',
      '6000 titres disponibles',
      'Reconnaissance vocale',
      'Service bar disponible',
    ],
  },
]

const packBlocks = [
  {
    name: 'Pack Duo',
    description: 'Laser Game + Lancer de Hache',
    price: 'Sur devis',
    highlight: false,
  },
  {
    name: 'Pack Trio',
    description: 'Laser Game + Hache + BlindTest',
    price: 'Sur devis',
    highlight: true,
    badge: 'Best Seller',
  },
  {
    name: 'Pack Anniversaire',
    description: 'Activités + salle privatisée + animations',
    price: 'Sur devis',
    highlight: false,
  },
  {
    name: 'Pack Entreprise',
    description: 'Devis personnalisé selon effectif',
    price: 'Devis gratuit',
    highlight: false,
  },
]

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-secondary">
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Tarifs</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
            Tarifs & Formules
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl mb-4">
            Tous nos tarifs sont disponibles sur demande. Contactez-nous pour un devis
            personnalisé selon votre groupe et vos besoins.
          </p>
          <p className="font-body text-sm text-gray-medium">
            Pour tout renseignement tarifaire :{' '}
            <a href="tel:0247000000" className="text-primary font-semibold hover:underline">
              02 47 00 00 00
            </a>
          </p>
        </div>
      </section>

      {/* Individual pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide mb-10">
            Par Activité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingBlocks.map((block) => (
              <div
                key={block.activity}
                className={`bg-dark-card rounded-lg border-t-4 ${block.color} border-x border-b border-gray-card overflow-hidden`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{block.icon}</span>
                    <div>
                      <h3 className="font-display text-xl text-white uppercase tracking-wide">
                        {block.activity}
                      </h3>
                      <span className="text-xs font-body text-gray-medium">{block.badge}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {block.tiers.map((tier, i) => (
                      <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-gray-card/50">
                        <div>
                          <p className="font-body text-sm text-white">{tier.label}</p>
                          <p className="font-body text-xs text-gray-medium">{tier.note}</p>
                        </div>
                        <span className="font-display text-lg text-primary flex-shrink-0">
                          {tier.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {block.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-primary flex-shrink-0" />
                        <span className="font-body text-xs text-gray-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide mb-10">
            Nos Packs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packBlocks.map((pack) => (
              <div
                key={pack.name}
                className={`relative bg-dark-card rounded-lg p-6 border ${
                  pack.highlight
                    ? 'border-primary shadow-[0_0_20px_rgba(229,0,26,0.15)]'
                    : 'border-gray-card'
                }`}
              >
                {pack.highlight && 'badge' in pack && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-primary text-white text-xs font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {pack.badge}
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">
                  {pack.name}
                </h3>
                <p className="font-body text-sm text-gray-medium mb-4">{pack.description}</p>
                <div className="font-display text-2xl text-primary">{pack.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
            Obtenez votre devis gratuit
          </h2>
          <p className="font-body text-white/80 mb-8">
            Contactez-nous pour un tarif personnalisé selon votre groupe
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Demander un devis
            </Button>
            <a
              href="tel:0247000000"
              className="inline-flex items-center gap-2 bg-white text-primary font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors"
            >
              <Phone size={16} /> 02 47 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
