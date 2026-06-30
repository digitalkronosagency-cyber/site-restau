import { Metadata } from 'next'
import { modesDeJeuMetadata } from '@/lib/seo'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = modesDeJeuMetadata

const modes = [
  {
    name: 'Chacun Pour Soi',
    tag: 'Individuel',
    description:
      'Chaque joueur évolue seul dans le labyrinthe. L\'objectif est de toucher un maximum d\'adversaires tout en évitant d\'être touché. Le joueur avec le meilleur ratio points/touchés remporte la partie.',
    ideal: 'Petits groupes, mix de niveaux',
    players: '4 à 30 joueurs',
  },
  {
    name: 'Équipes',
    tag: '2 à 6 équipes',
    description:
      'Les joueurs sont répartis en 2 à 6 équipes identifiables par la couleur de leur plastron. Les membres d\'une même équipe ne peuvent pas se toucher. L\'équipe qui cumule le plus de points gagne.',
    ideal: 'Anniversaires, team building',
    players: '6 à 30 joueurs',
  },
  {
    name: 'Domination de Zone',
    tag: 'Stratégique',
    description:
      'Des zones stratégiques sont réparties dans le labyrinthe. Pour les capturer, les équipes doivent y stationner et tirer sur la borne de zone. L\'équipe qui contrôle le plus de zones remporte la victoire.',
    ideal: 'Groupes expérimentés',
    players: '8 à 30 joueurs',
  },
  {
    name: 'VIP',
    tag: 'Escorte',
    description:
      'Chaque équipe désigne un VIP à protéger. Si le VIP est éliminé, son équipe perd des points. L\'équipe dont le VIP survit le plus longtemps (ou accumule le plus de points) gagne.',
    ideal: 'Groupes familiaux, entreprises',
    players: '6 à 20 joueurs',
  },
  {
    name: 'Roi du Labyrinthe',
    tag: 'Progressif',
    description:
      'En début de partie, chaque joueur possède 3 vies. À chaque fois qu\'un joueur est touché, il perd une vie. Quand il n\'en a plus, il est éliminé. Le dernier survivant est le Roi du Labyrinthe !',
    ideal: 'Groupes compétitifs',
    players: '4 à 20 joueurs',
  },
  {
    name: 'Invasion',
    tag: 'Asymétrique',
    description:
      'Une équipe de défenseurs protège une base contre les attaquants. Les attaquants doivent cumuler un certain nombre de touches sur la base pour la capturer. Un mode intense et stratégique !',
    ideal: 'Grands groupes, expérimentés',
    players: '10 à 30 joueurs',
  },
]

export default function ModesDeJeuPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-secondary">
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Modes de Jeu</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
            Modes de Jeu
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl">
            Chaque session est unique. Découvrez nos différents modes de jeu pour varier
            les plaisirs et relever de nouveaux défis à chaque visite.
          </p>
        </div>
      </section>

      {/* Modes grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modes.map((mode, i) => (
              <div key={i} className="bg-dark-card border border-gray-card rounded-lg p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="font-display text-2xl text-white uppercase tracking-wide">{mode.name}</h2>
                  <span className="bg-primary/10 text-primary text-xs font-body font-bold px-2 py-1 rounded flex-shrink-0 uppercase tracking-wider">
                    {mode.tag}
                  </span>
                </div>
                <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">{mode.description}</p>
                <div className="flex gap-4 pt-4 border-t border-gray-card">
                  <div>
                    <p className="text-xs text-gray-medium font-body uppercase tracking-wider">Idéal pour</p>
                    <p className="text-sm text-white font-body">{mode.ideal}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-medium font-body uppercase tracking-wider">Joueurs</p>
                    <p className="text-sm text-white font-body">{mode.players}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
            Quel mode vous fait envie ?
          </h2>
          <Button href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Réserver une session
          </Button>
        </div>
      </section>
    </>
  )
}
