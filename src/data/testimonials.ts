export interface Testimonial {
  name: string
  rating: number
  text: string
  date: string
  source: 'google'
  initials: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Thomas R.',
    rating: 5,
    text: 'Une expérience incroyable ! Le labyrinthe multi-étages est vraiment impressionnant. On a adoré le fait d\'être entre nous sans être mélangés avec d\'autres groupes. On reviendra !',
    date: '2024-11-15',
    source: 'google',
    initials: 'TR',
    color: '#E5001A',
  },
  {
    name: 'Marie L.',
    rating: 5,
    text: 'Anniversaire parfait ! L\'équipe est super sympa et tout était organisé. Le pack multi-activités avec la hache et le blind test était génial.',
    date: '2024-10-22',
    source: 'google',
    initials: 'ML',
    color: '#FF6B35',
  },
  {
    name: 'Lucas B.',
    rating: 5,
    text: 'Team building d\'entreprise réussi ! 30 personnes, tout le monde a adoré. Le blindtest à reconnaissance vocale est vraiment innovant.',
    date: '2024-09-08',
    source: 'google',
    initials: 'LB',
    color: '#B30015',
  },
  {
    name: 'Sophie M.',
    rating: 5,
    text: 'On a fait le lancer de hache pour un EVJF et c\'était hilarant ! Moniteur très pédagogue et bonne ambiance. À recommander absolument.',
    date: '2024-12-01',
    source: 'google',
    initials: 'SM',
    color: '#E5001A',
  },
  {
    name: 'Alexandre D.',
    rating: 5,
    text: '3 labyrinthes différents, c\'est vraiment bien pensé. Jamais ennuyeux. On a fait 3 parties d\'affilée tellement c\'était fun !',
    date: '2024-11-30',
    source: 'google',
    initials: 'AD',
    color: '#FF6B35',
  },
  {
    name: 'Emma C.',
    rating: 5,
    text: 'Parfait pour les enfants ! Ma fille de 10 ans et ses amis ont passé le meilleur anniversaire de leur vie. Merci à toute l\'équipe !',
    date: '2024-10-05',
    source: 'google',
    initials: 'EC',
    color: '#B30015',
  },
]
