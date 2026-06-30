import { Metadata } from 'next'
import { blindTestMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'
import { Button } from '@/components/ui/Button'
import { Phone, Music, Mic, Star, List, Wine, Users } from 'lucide-react'

export const metadata: Metadata = blindTestMetadata

export default function BlindTestPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://tours.lasergame-evolution.fr' },
    { name: 'BlindTest', url: 'https://tours.lasergame-evolution.fr/blind-test' },
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
        style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #0d0020 60%, #0D0D0D 100%)' }}
      >
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">BlindTest</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>🎵</span> 1er BlindTest Vocal de Tours
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest leading-none mb-6">
              BlindTest
              <span className="block text-purple-400">à Tours</span>
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Le premier BlindTest à reconnaissance vocale de Tours. Plus besoin d\'animateur —
              criez la réponse et la technologie la détecte ! 6000 titres, salle privatisée.
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

      {/* Stats */}
      <section className="py-10 bg-dark-secondary border-y border-gray-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6000', label: 'Titres musicaux' },
              { value: '60', label: 'Playlists' },
              { value: '5', label: 'Niveaux de difficulté' },
              { value: '30 min', label: 'Par session' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl text-purple-400 mb-1">{stat.value}</div>
                <div className="font-body text-xs text-gray-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Mic className="text-purple-400" size={24} />, title: 'Reconnaissance Vocale', desc: 'Technologie unique : criez la bonne réponse et le système la reconnaît instantanément.' },
              { icon: <Music className="text-purple-400" size={24} />, title: '6000 Titres', desc: 'Un catalogue immense couvrant toutes les époques et tous les genres musicaux.' },
              { icon: <List className="text-purple-400" size={24} />, title: '60 Playlists', desc: 'Thèmes variés : années 80/90/2000, pop, rock, rap, anime, cinéma et plus encore.' },
              { icon: <Star className="text-purple-400" size={24} />, title: '5 Niveaux', desc: 'Du plus simple au plus difficile. Testez vos connaissances musicales à votre rythme.' },
              { icon: <Users className="text-purple-400" size={24} />, title: 'Salle Privatisée', desc: 'Votre salle rien que pour vous. Ambiance, décor unique et service personnalisé.' },
              { icon: <Wine className="text-purple-400" size={24} />, title: 'Bar & Snacking', desc: 'Service bar et snacking disponible pour accompagner votre soirée musicale.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-gray-card rounded-lg p-6 hover:border-purple-500/30 transition-colors duration-200">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="font-body text-sm text-gray-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
            Prêts pour le challenge musical ?
          </h2>
          <p className="font-body text-white/80 mb-8">Réservez votre session BlindTest à Tours</p>
          <Button href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Réserver maintenant
          </Button>
        </div>
      </section>
    </>
  )
}
