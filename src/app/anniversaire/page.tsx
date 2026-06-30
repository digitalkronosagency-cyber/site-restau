import { Metadata } from 'next'
import { anniversaireMetadata } from '@/lib/seo'
import { BookingForm } from '@/components/sections/BookingForm'
import { Check, Star, Phone, PartyPopper, Lock, Users, Gift } from 'lucide-react'

export const metadata: Metadata = anniversaireMetadata

const packages = [
  {
    name: 'Pack Laser Game',
    description: 'Laser game en labyrinthe privatisé + organisation sur mesure',
    features: ['Labyrinthe privatisé', 'Briefing personnalisé', 'Photos des scores', 'Jusqu\'à 30 participants'],
    highlight: false,
  },
  {
    name: 'Pack Combinaison',
    description: '2 activités au choix : laser game + hache ou laser game + blind test',
    features: ['2 activités au choix', 'Soirée complète', 'Ambiance garantie', 'Parfait 18-35 ans'],
    highlight: true,
  },
  {
    name: 'Pack Ultimate',
    description: 'Toutes les activités + salle privatisable + service bar',
    features: ['3 activités completes', 'Salle privatisée', 'Service bar disponible', 'Soirée de rêve'],
    highlight: false,
  },
]

export default function AnniversairePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 min-h-[60vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #200010 60%, #0D0D0D 100%)' }}
      >
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Anniversaire</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              🎂 Offre Anniversaire
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest leading-none mb-6">
              Anniversaire
              <span className="block text-primary">Inoubliable</span>
              <span className="block">à Tours</span>
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Offrez un anniversaire hors du commun ! Laser game, lancer de hache, blind test
              — salle privatisée, animations incluses. Une soirée que vos invités n\'oublieront pas.
            </p>
            <a
              href="tel:0247000000"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary-dark transition-colors"
            >
              <Phone size={16} /> Appelez pour organiser
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 bg-dark-secondary border-y border-gray-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Lock size={20} className="text-primary" />, text: 'Groupe 100% privatisé' },
              { icon: <Users size={20} className="text-primary" />, text: '4 à 30 invités' },
              { icon: <PartyPopper size={20} className="text-primary" />, text: 'Ambiance garantie' },
              { icon: <Gift size={20} className="text-primary" />, text: 'Bons cadeaux dispo' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-body text-sm text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide text-center mb-12">
            Nos Formules Anniversaire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-dark-card rounded-lg p-6 border ${
                  pkg.highlight
                    ? 'border-primary shadow-[0_0_20px_rgba(229,0,26,0.15)]'
                    : 'border-gray-card'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-primary text-white text-xs font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Recommandé
                    </span>
                  </div>
                )}
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-2">{pkg.name}</h3>
                <p className="font-body text-sm text-gray-medium mb-5">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      <span className="font-body text-sm text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm text-gray-medium mt-6">
            Tarifs sur devis — Contactez-nous au{' '}
            <a href="tel:0247000000" className="text-primary font-semibold hover:underline">02 47 00 00 00</a>
          </p>
        </div>
      </section>

      {/* Testimonials teaser */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="font-body text-white font-semibold">4.8/5 sur Google</span>
          </div>
          <blockquote className="font-body text-lg text-gray-300 italic max-w-2xl">
            &ldquo;Anniversaire parfait ! L&apos;équipe est super sympa et tout était organisé. Le pack
            multi-activités avec la hache et le blind test était génial.&rdquo;
          </blockquote>
          <p className="font-body text-sm text-gray-medium mt-3">— Marie L., anniversaire pour 15 personnes</p>
        </div>
      </section>

      {/* Booking form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-6">
                Organisez votre anniversaire
              </h2>
              <p className="font-body text-gray-300 leading-relaxed mb-6">
                Remplissez le formulaire et nous vous recontactons sous 24h pour organiser
                votre anniversaire sur mesure.
              </p>
              <div className="space-y-3">
                {[
                  'Devis gratuit et sans engagement',
                  'Réponse sous 24h',
                  'Flexibilité sur le choix des activités',
                  'Tarifs préférentiels groupes',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-primary" />
                    <span className="font-body text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
