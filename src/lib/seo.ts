import { Metadata } from 'next'

const baseUrl = 'https://tours.lasergame-evolution.fr'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Laser Game Evolution Tours',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const homeMetadata: Metadata = {
  title: 'Laser Game Tours | Centre Loisirs Indoor | Laser Game Evolution',
  description:
    "Vivez l'adrénaline au Laser Game Evolution de Tours ! Laser game 3 labyrinthes, lancer de hache, blind test. Groupes privatisés 4-30 joueurs. Réservez au 02 47 00 00 00.",
  keywords: ['laser game Tours', 'loisirs indoor Tours', 'activités Tours', 'centre loisirs Saint-Avertin'],
  alternates: { canonical: baseUrl },
  openGraph: {
    title: 'Laser Game Tours | Centre Loisirs Indoor | Laser Game Evolution',
    description: "Vivez l'adrénaline au Laser Game Evolution de Tours ! Laser game 3 labyrinthes, lancer de hache, blind test.",
    url: baseUrl,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Laser Game Evolution Tours' }],
  },
}

export const laserGameMetadata: Metadata = {
  title: 'Laser Game à Tours | 3 Labyrinthes Immersifs Multi-Étages | Evolution Tours',
  description:
    'Laser game à Tours : 3 labyrinthes immersifs avec étages pour 4 à 30 joueurs. Groupes 100% privatisés. Individuel ou en équipes. Réservation en ligne disponible.',
  keywords: ['laser game Tours', 'laser game Indre-et-Loire', 'laser game Saint-Avertin', 'labyrinthe laser Tours'],
  alternates: { canonical: `${baseUrl}/laser-game` },
  openGraph: {
    title: 'Laser Game à Tours | 3 Labyrinthes Immersifs Multi-Étages',
    description: 'Laser game à Tours : 3 labyrinthes immersifs avec étages pour 4 à 30 joueurs. Groupes 100% privatisés.',
    url: `${baseUrl}/laser-game`,
    images: [{ url: '/og-laser-game.jpg', width: 1200, height: 630, alt: 'Laser Game Tours' }],
  },
}

export const lancerHacheMetadata: Metadata = {
  title: 'Lancer de Hache à Tours | Axe Throwing Indoor Sécurisé | Laser Game Evolution',
  description:
    'Découvrez le lancer de hache à Tours dans un cadre sécurisé et fun. Idéal anniversaires, EVG, EVJF, team building. Débutants bienvenus. Réservez maintenant !',
  keywords: ['lancer de hache Tours', 'axe throwing Tours', 'activité insolite Tours', 'lancer hache Indre-et-Loire'],
  alternates: { canonical: `${baseUrl}/lancer-de-hache` },
  openGraph: {
    title: 'Lancer de Hache à Tours | Axe Throwing Indoor Sécurisé',
    description: 'Découvrez le lancer de hache à Tours dans un cadre sécurisé et fun. Débutants bienvenus.',
    url: `${baseUrl}/lancer-de-hache`,
    images: [{ url: '/og-hache.jpg', width: 1200, height: 630, alt: 'Lancer de Hache Tours' }],
  },
}

export const blindTestMetadata: Metadata = {
  title: 'BlindTest à Tours | 1er BlindTest Vocal | 6000 Titres | Laser Game Evolution',
  description:
    "Le premier BlindTest à reconnaissance vocale de Tours ! 6000 titres, 5 niveaux de difficulté, salle privatisée, bar & snacking. Parfait soirées et anniversaires.",
  keywords: ['blind test Tours', 'blindtest musical Tours', 'soirée blind test Tours', 'activité musicale Tours'],
  alternates: { canonical: `${baseUrl}/blind-test` },
  openGraph: {
    title: 'BlindTest à Tours | 1er BlindTest Vocal | 6000 Titres',
    description: "Le premier BlindTest à reconnaissance vocale de Tours ! 6000 titres, salle privatisée.",
    url: `${baseUrl}/blind-test`,
    images: [{ url: '/og-blindtest.jpg', width: 1200, height: 630, alt: 'BlindTest Tours' }],
  },
}

export const tarifsMetadata: Metadata = {
  title: 'Tarifs Laser Game Tours | Prix Laser Game, Hache, BlindTest | Evolution',
  description:
    "Découvrez les tarifs du Laser Game Evolution de Tours. Prix par personne, packs multi-activités, offres anniversaire et entreprise. Devis gratuit sur demande.",
  keywords: ['tarif laser game Tours', 'prix laser game Tours', 'tarif lancer de hache Tours'],
  alternates: { canonical: `${baseUrl}/tarifs` },
  openGraph: {
    title: 'Tarifs Laser Game Tours | Prix Laser Game, Hache, BlindTest',
    description: "Découvrez les tarifs du Laser Game Evolution de Tours. Prix par personne, packs multi-activités.",
    url: `${baseUrl}/tarifs`,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Tarifs Laser Game Tours' }],
  },
}

export const anniversaireMetadata: Metadata = {
  title: 'Anniversaire Original à Tours | Laser Game, Hache, BlindTest | Réservez !',
  description:
    "Organisez un anniversaire inoubliable à Tours ! Laser game, lancer de hache, blind test. Salle privatisée, animations, soirée sur mesure. Devis gratuit ☎ 02 47 00 00 00",
  keywords: ['anniversaire Tours activité', 'fête anniversaire Tours', 'anniversaire adulte Tours', 'idée anniversaire Tours'],
  alternates: { canonical: `${baseUrl}/anniversaire` },
  openGraph: {
    title: 'Anniversaire Original à Tours | Laser Game, Hache, BlindTest',
    description: "Organisez un anniversaire inoubliable à Tours ! Salle privatisée, animations, soirée sur mesure.",
    url: `${baseUrl}/anniversaire`,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Anniversaire Tours' }],
  },
}

export const entreprisesMetadata: Metadata = {
  title: 'Team Building Tours | Activités Entreprise | Séminaire Laser Game Evolution',
  description:
    "Renforcez la cohésion de votre équipe ! Team building à Tours : laser game, lancer de hache, blind test. Groupes jusqu'à 30 personnes. Devis entreprise sur mesure.",
  keywords: ['team building Tours', 'activité entreprise Tours', 'séminaire Tours', 'cohésion équipe Tours', 'incentive Tours'],
  alternates: { canonical: `${baseUrl}/entreprises` },
  openGraph: {
    title: 'Team Building Tours | Activités Entreprise | Séminaire',
    description: "Renforcez la cohésion de votre équipe ! Team building à Tours jusqu'à 30 personnes.",
    url: `${baseUrl}/entreprises`,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Team Building Tours' }],
  },
}

export const faqMetadata: Metadata = {
  title: 'FAQ Laser Game Tours | Questions Fréquentes | Laser Game Evolution Tours',
  description:
    "Toutes les réponses à vos questions sur le Laser Game Evolution de Tours : horaires, tarifs, réservation, activités, groupes, anniversaires.",
  alternates: { canonical: `${baseUrl}/faq` },
  openGraph: {
    title: 'FAQ Laser Game Tours | Questions Fréquentes',
    description: "Toutes les réponses à vos questions sur le Laser Game Evolution de Tours.",
    url: `${baseUrl}/faq`,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'FAQ Laser Game Tours' }],
  },
}

export const contactMetadata: Metadata = {
  title: 'Contact & Réservation | Laser Game Evolution Tours | 02 47 00 00 00',
  description:
    "Contactez le Laser Game Evolution de Tours pour réserver ou obtenir des informations. 35 rue Frédéric Joliot-Curie, 37550 Saint-Avertin. ☎ 02 47 00 00 00",
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: 'Contact & Réservation | Laser Game Evolution Tours',
    description: "Contactez le Laser Game Evolution de Tours. 35 rue Frédéric Joliot-Curie, 37550 Saint-Avertin.",
    url: `${baseUrl}/contact`,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Contact Laser Game Tours' }],
  },
}

export const modesDeJeuMetadata: Metadata = {
  title: 'Modes de Jeu Laser Game | Chacun Pour Soi, Équipes | Laser Game Evolution Tours',
  description:
    "Découvrez tous les modes de jeu disponibles au Laser Game Evolution de Tours : chacun pour soi, équipes, jeux spéciaux. Des règles pour tous les niveaux.",
  alternates: { canonical: `${baseUrl}/modes-de-jeu` },
}

export const evenementsMetadata: Metadata = {
  title: 'Événements & Actualités | Laser Game Evolution Tours',
  description:
    "Retrouvez les actualités, événements spéciaux et promotions du Laser Game Evolution de Tours. Ne manquez aucune offre !",
  alternates: { canonical: `${baseUrl}/evenements` },
}

export const blogMetadata: Metadata = {
  title: 'Blog | Conseils & Astuces Laser Game | Laser Game Evolution Tours',
  description:
    "Découvrez nos articles sur le laser game, lancer de hache et blind test à Tours. Conseils, astuces et actualités.",
  alternates: { canonical: `${baseUrl}/blog` },
}
