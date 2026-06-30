import { Metadata } from 'next'
import { entreprisesMetadata } from '@/lib/seo'
import { BookingForm } from '@/components/sections/BookingForm'
import { Check, Phone, Building2, Trophy, Users, Target } from 'lucide-react'

export const metadata: Metadata = entreprisesMetadata

const benefits = [
  {
    icon: <Users className="text-primary" size={24} />,
    title: 'Cohésion d&apos;équipe',
    desc: 'Renforcez les liens entre collègues dans un cadre décontracté et stimulant.',
  },
  {
    icon: <Trophy className="text-primary" size={24} />,
    title: 'Challenge & motivation',
    desc: 'La compétition amicale booste l\'engagement et la motivation de vos équipes.',
  },
  {
    icon: <Target className="text-primary" size={24} />,
    title: 'Stratégie & communication',
    desc: 'Le laser game en équipe développe les compétences en communication et prise de décision.',
  },
  {
    icon: <Building2 className="text-primary" size={24} />,
    title: 'Jusqu&apos;à 30 personnes',
    desc: 'Nos installations accueillent jusqu&apos;à 30 participants simultanément.',
  },
]

export default function EntreprisesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 min-h-[60vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #001020 60%, #0D0D0D 100%)' }}
      >
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Entreprises</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              🏢 Team Building & Séminaire
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest leading-none mb-6">
              Team Building
              <span className="block text-primary">à Tours</span>
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Renforcez la cohésion de votre équipe avec nos activités team building à Tours.
              Laser game, lancer de hache, blind test — des expériences mémorables pour vos
              collaborateurs. Devis personnalisé sous 24h.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0247000000"
                className="inline-flex items-center gap-2 bg-primary text-white font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary-dark transition-colors"
              >
                <Phone size={16} /> Devis immédiat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide text-center mb-12">
            Pourquoi organiser votre team building chez nous ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-dark-card border border-gray-card rounded-lg p-6 flex gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2" dangerouslySetInnerHTML={{ __html: b.title }} />
                  <p className="font-body text-sm text-gray-medium leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities for B2B */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide text-center mb-12">
            Nos Activités Team Building
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎮',
                title: 'Laser Game',
                desc: 'Tournois en équipe, communication et stratégie dans nos 3 labyrinthes privatisés.',
                features: ['2 à 6 équipes', 'Mode compétition', 'Classement en temps réel'],
              },
              {
                icon: '🪓',
                title: 'Lancer de Hache',
                desc: 'Défi et humour garantis. Parfait pour créer des moments mémorables entre collègues.',
                features: ['Moniteur inclus', 'Tournoi possible', 'Idéal brise-glace'],
              },
              {
                icon: '🎵',
                title: 'BlindTest',
                desc: 'Testez la culture musicale de vos équipes avec notre système à reconnaissance vocale unique.',
                features: ['6000 titres', 'Salle privatisée', 'Service bar'],
              },
            ].map((act, i) => (
              <div key={i} className="bg-dark-card border border-gray-card rounded-lg p-6">
                <span className="text-4xl mb-4 block">{act.icon}</span>
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{act.title}</h3>
                <p className="font-body text-sm text-gray-medium mb-4">{act.desc}</p>
                <ul className="space-y-1">
                  {act.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check size={12} className="text-primary" />
                      <span className="font-body text-xs text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-6">
                Demandez votre devis
              </h2>
              <p className="font-body text-gray-300 leading-relaxed mb-6">
                Remplissez le formulaire et nous vous proposons une offre sur mesure
                adaptée à votre équipe et votre budget.
              </p>
              <div className="space-y-3">
                {[
                  'Devis gratuit sous 24h',
                  'Offre personnalisée selon effectif',
                  'Facturation entreprise disponible',
                  'Flexibilité horaires pour grands groupes',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-primary" />
                    <span className="font-body text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-dark-card border border-gray-card rounded-lg">
                <p className="font-body text-sm text-gray-medium mb-2">Ou contactez-nous directement :</p>
                <a href="tel:0247000000" className="flex items-center gap-2 text-primary font-body font-bold text-lg hover:underline">
                  <Phone size={20} /> 02 47 00 00 00
                </a>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
