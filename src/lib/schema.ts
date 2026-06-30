export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://tours.lasergame-evolution.fr/#business',
    name: 'Laser Game Evolution Tours',
    description:
      'Centre de loisirs indoor à Tours proposant laser game, lancer de hache et blind test. Groupes privatisés, 4 à 30 joueurs, 3 labyrinthes immersifs.',
    url: 'https://tours.lasergame-evolution.fr',
    telephone: '+33247000000',
    email: 'contact@lasergame-tours.fr',
    image: 'https://tours.lasergame-evolution.fr/og-home.jpg',
    logo: 'https://tours.lasergame-evolution.fr/logo.png',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '35 rue Frédéric Joliot-Curie',
      addressLocality: 'Saint-Avertin',
      addressRegion: 'Indre-et-Loire',
      postalCode: '37550',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.3548,
      longitude: 0.7312,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '17:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '14:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '17:00', closes: '23:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '17:00', closes: '23:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '23:59' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '14:00', closes: '20:00' },
    ],
    sameAs: [
      'https://www.facebook.com/lasergameevolution',
      'https://www.instagram.com/lasergameevolution',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Activités Laser Game Evolution Tours',
      itemListElement: [
        { '@type': 'Offer', name: 'Laser Game', description: 'Partie de laser game dans labyrinthe immersif multi-étages, 4-30 joueurs' },
        { '@type': 'Offer', name: 'Lancer de Hache', description: 'Axe throwing indoor sécurisé pour tous niveaux' },
        { '@type': 'Offer', name: 'BlindTest', description: 'BlindTest à reconnaissance vocale, 6000 titres, salle privatisée' },
        { '@type': 'Offer', name: 'Pack Multi-Activités', description: 'Combinaison laser game, lancer de hache et blind test' },
        { '@type': 'Offer', name: 'Anniversaire', description: 'Offre anniversaire sur mesure, salle privatisée' },
        { '@type': 'Offer', name: 'Team Building Entreprise', description: "Activités cohésion d'équipe, devis sur mesure" },
      ],
    },
  }
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
