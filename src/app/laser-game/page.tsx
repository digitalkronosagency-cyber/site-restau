import { Metadata } from 'next'
import { laserGameMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'
import { Button } from '@/components/ui/Button'
import { Phone, Users, Layers, Shield, Star, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = laserGameMetadata

export default function LaserGamePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://tours.lasergame-evolution.fr' },
    { name: 'Laser Game', url: 'https://tours.lasergame-evolution.fr/laser-game' },
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
        style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a0005 60%, #0D0D0D 100%)' }}
      >
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Laser Game</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>🎮</span> Activité phare
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest leading-none mb-6">
              Laser Game
              <span className="block text-primary">à Tours</span>
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Plongez dans nos 3 labyrinthes immersifs multi-étages pour 4 à 30 joueurs.
              Groupes 100% privatisés — jamais mélangés avec des inconnus.
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

      {/* Features grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="text-primary" size={24} />, title: '3 Labyrinthes', desc: 'Multi-étages avec cloisons et zones réfléchissantes. Une expérience unique à chaque partie.' },
              { icon: <Users className="text-primary" size={24} />, title: '4 à 30 Joueurs', desc: 'De la session intime en famille aux grands groupes, nous nous adaptons à votre effectif.' },
              { icon: <Shield className="text-primary" size={24} />, title: 'Groupe Privatisé', desc: 'Votre labyrinthe vous appartient. Jamais de mélange avec d\'autres groupes.' },
              { icon: <Star className="text-primary" size={24} />, title: 'Jusqu\'à 6 Équipes', desc: 'Organisez des tournois en up to 6 équipes simultanées pour une ambiance compétitive.' },
              { icon: <Clock className="text-primary" size={24} />, title: '15-20 min/partie', desc: 'Chaque partie dure 15 à 20 minutes. Enchainez plusieurs sessions pour prolonger le plaisir.' },
              { icon: <ArrowRight className="text-primary" size={24} />, title: 'Pistolets 100% Laser', desc: 'Technologie laser précise et fiable. Plastrons de couleur pour identifier votre équipe.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-gray-card rounded-lg p-6 hover:border-primary/30 transition-colors duration-200">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="font-body text-sm text-gray-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Arrivez', desc: 'Accueillis par notre équipe, vous choisissez pseudo et mode de jeu.' },
              { step: '02', title: 'Briefing', desc: 'Explication des règles, constitution des équipes et équipement.' },
              { step: '03', title: 'Jouez !', desc: 'Plongez dans le labyrinthe et marquez un max de points !' },
              { step: '04', title: 'Scores', desc: 'Consultez les classements et rejouez pour améliorer votre score.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-display text-5xl text-primary/30 mb-3">{item.step}</div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="font-body text-sm text-gray-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
            Prêts à entrer dans le labyrinthe ?
          </h2>
          <p className="font-body text-white/80 mb-8">Réservez votre session de laser game à Tours</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Réserver en ligne
            </Button>
            <a href="tel:0247000000" className="inline-flex items-center gap-2 bg-white text-primary font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors">
              <Phone size={16} /> 02 47 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
