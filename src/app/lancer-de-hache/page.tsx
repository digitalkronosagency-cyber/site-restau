import { Metadata } from 'next'
import { lancerHacheMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'
import { Button } from '@/components/ui/Button'
import { Phone, Target, Shield, Users, Zap, Award, Clock } from 'lucide-react'

export const metadata: Metadata = lancerHacheMetadata

export default function LancerDeHachePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://tours.lasergame-evolution.fr' },
    { name: 'Lancer de Hache', url: 'https://tours.lasergame-evolution.fr/lancer-de-hache' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 min-h-[60vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a0800 60%, #0D0D0D 100%)' }}
      >
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Lancer de Hache</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>🪓</span> Axe Throwing Indoor
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest leading-none mb-6">
              Lancer de Hache
              <span className="block text-accent">à Tours</span>
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Découvrez la sensation grisante du lancer de hache dans notre espace indoor
              sécurisé. Idéal pour anniversaires, EVG, EVJF et team building.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Réserver maintenant
              </Button>
              <a
                href="tel:0247000000"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-white hover:text-dark-bg transition-all duration-200"
              >
                <Phone size={16} /> 02 47 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="text-accent" size={24} />, title: 'Sécurité garantie', desc: 'Espace indoor sécurisé avec équipements homologués. Moniteur présent à tout moment.' },
              { icon: <Target className="text-accent" size={24} />, title: 'Précision & Adrénaline', desc: 'Apprenez les bonnes techniques pour toucher la cible. Satisfaction garantie !' },
              { icon: <Users className="text-accent" size={24} />, title: 'Débutants bienvenus', desc: 'Aucune expérience requise. Notre moniteur vous guide pas à pas.' },
              { icon: <Zap className="text-accent" size={24} />, title: 'Idéal EVG / EVJF', desc: 'Une activité décoiff ante pour les enterrements de vie de garçon ou de jeune fille.' },
              { icon: <Award className="text-accent" size={24} />, title: 'Compétition amicale', desc: 'Organisez des tournois entre amis ou collègues. Qui sera le champion ?' },
              { icon: <Clock className="text-accent" size={24} />, title: 'Sessions flexibles', desc: 'Durée adaptable selon vos besoins. Privatisation de l\'espace sur réservation.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-gray-card rounded-lg p-6 hover:border-accent/30 transition-colors duration-200">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="font-body text-sm text-gray-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide text-center mb-12">
            Parfait pour toutes les occasions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['🎂 Anniversaire', '💍 EVJF / EVG', '🏢 Team Building', '👫 Entre amis'].map((occ) => (
              <div key={occ} className="bg-dark-card border border-gray-card rounded-lg p-4 text-center font-body text-sm text-white hover:border-accent/30 transition-colors">
                {occ}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
            Prêts à lancer votre première hache ?
          </h2>
          <p className="font-body text-white/80 mb-8">Réservez votre session de lancer de hache à Tours</p>
          <Button href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Réserver maintenant
          </Button>
        </div>
      </section>
    </>
  )
}
