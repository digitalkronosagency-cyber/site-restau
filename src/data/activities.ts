export interface Activity {
  id: string
  number: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  priceFrom: string
  slug: string
  icon: string
  bgColor: string
}

export const activities: Activity[] = [
  {
    id: 'laser-game',
    number: '01',
    title: 'Laser Game',
    shortDescription: '3 labyrinthes immersifs multi-étages pour 4 à 30 joueurs. Groupes 100% privatisés.',
    fullDescription:
      'Plongez dans l\'obscurité de nos 3 labyrinthes immersifs avec étages, cloisons et zones réfléchissantes. Équipez-vous de pistolets 100% laser et de plastrons de couleur, et partez à la conquête du meilleur score. En individuel ou jusqu\'à 6 équipes simultanées, l\'adrénaline est garantie !',
    features: [
      '3 labyrinthes multi-étages',
      '4 à 30 joueurs simultanés',
      'Groupe 100% privatisé',
      'Pistolets 100% laser',
      'Plastrons de couleur',
      'Jusqu\'à 6 équipes',
    ],
    priceFrom: 'Sur devis',
    slug: '/laser-game',
    icon: '🎮',
    bgColor: 'from-red-900/40 to-dark-bg',
  },
  {
    id: 'lancer-de-hache',
    number: '02',
    title: 'Lancer de Hache',
    shortDescription: 'Axe throwing indoor sécurisé. Adrénaline et précision pour débutants et experts.',
    fullDescription:
      'Découvrez la sensation unique du lancer de hache dans notre espace indoor sécurisé ! Guidés par un moniteur expérimenté, vous apprendrez les techniques pour viser et toucher la cible. Une activité idéale pour les anniversaires, EVG, EVJF et team building.',
    features: [
      'Activité indoor sécurisée',
      'Moniteur accompagnateur',
      'Idéal débutants & experts',
      'Parfait EVG / EVJF',
      'Sessions privatisées',
      'Adrénaline garantie',
    ],
    priceFrom: 'Sur devis',
    slug: '/lancer-de-hache',
    icon: '🪓',
    bgColor: 'from-orange-900/40 to-dark-bg',
  },
  {
    id: 'blind-test',
    number: '03',
    title: 'BlindTest',
    shortDescription: '1er BlindTest à reconnaissance vocale. 6000 titres, 60 playlists, salle privatisée.',
    fullDescription:
      'Vivez l\'expérience musicale ultime avec notre BlindTest à reconnaissance vocale — une première à Tours ! Plus besoin d\'animateur : criez la réponse et la technologie la reconnaît. Avec 6000 titres, 60 playlists et 5 niveaux de difficulté, chaque session est unique. Service bar & snacking disponible.',
    features: [
      'Reconnaissance vocale unique',
      '6000 titres musicaux',
      '60 playlists thématiques',
      '5 niveaux de difficulté',
      'Salle privatisée',
      'Service bar & snacking',
    ],
    priceFrom: 'Sur devis',
    slug: '/blind-test',
    icon: '🎵',
    bgColor: 'from-purple-900/40 to-dark-bg',
  },
]
