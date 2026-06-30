'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ActivityCard } from '@/components/ui/ActivityCard'
import { OfferCard } from '@/components/ui/OfferCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { OpeningHours } from '@/components/sections/OpeningHours'
import { activities } from '@/data/activities'
import { testimonials } from '@/data/testimonials'
import {
  Shield,
  Users,
  Star,
  Calendar,
  ArrowDown,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Lock,
  Gamepad2,
  Trophy,
} from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const offers = [
  {
    title: 'Pack Multi-Activités',
    description:
      'Combinez laser game, hache et blind test pour une soirée d\'exception inoubliable.',
    icon: '🎯',
    cta: 'Voir le pack',
    ctaLink: '/tarifs',
    highlight: false,
  },
  {
    title: 'Anniversaire',
    description:
      'Salle privatisée, animations incluses, souvenir inoubliable garanti pour vos invités.',
    icon: '🎂',
    cta: 'Organiser mon anniversaire',
    ctaLink: '/anniversaire',
    highlight: true,
  },
  {
    title: 'Jeunesse & BDE',
    description:
      'Tarifs spéciaux associations, BDE, sorties scolaires. Adaptable à tous les âges.',
    icon: '🎓',
    cta: 'Nous contacter',
    ctaLink: '/contact',
    highlight: false,
  },
  {
    title: 'Entreprises',
    description:
      'Team building, séminaire, incentive. Devis personnalisé sous 24h pour votre équipe.',
    icon: '🏢',
    cta: 'Demander un devis',
    ctaLink: '/entreprises',
    highlight: false,
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const prevTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  const nextTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ==================== SECTION 1 — HERO ==================== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D0D0D 0%, #1a0005 50%, #0D0D0D 100%)',
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #E5001A 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FF6B35 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(229,0,26,0.1) 50px, rgba(229,0,26,0.1) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(229,0,26,0.1) 50px, rgba(229,0,26,0.1) 51px)',
          }}
        />

        <div className="relative z-10 container-custom text-center py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 animate-slide-down">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ouverture 2026 — Nouveau centre, nouvelles activités !
          </div>

          {/* H1 */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-widest leading-none mb-6">
            <span className="block text-primary">Laser Game</span>
            <span className="block">Evolution</span>
            <span className="block">Tours</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Le centre de loisirs indoor de référence en Indre-et-Loire
          </p>
          <p className="font-body text-sm md:text-base text-gray-medium max-w-xl mx-auto mb-10">
            3 activités · Groupes privatisés · 4 à 30 joueurs
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            {[
              { label: 'Joueurs max', value: 30, suffix: '' },
              { label: 'Labyrinthes', value: 3, suffix: '' },
              { label: 'Activités', value: 3, suffix: '' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-xs text-gray-medium uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" iconLeft={<Gamepad2 size={18} />}>
              Réserver maintenant
            </Button>
            <Button href="#activites" variant="ghost" size="lg" iconRight={<ArrowDown size={16} />}>
              Découvrir les activités
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center animate-bounce-slow">
            <ArrowDown size={20} className="text-gray-medium" />
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2 — RÉASSURANCE ==================== */}
      <section className="bg-dark-secondary border-y border-gray-card py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Lock size={20} className="text-primary" />, text: 'Groupes 100% privatisés' },
              { icon: <Calendar size={20} className="text-primary" />, text: 'Parfait pour anniversaires' },
              { icon: <Users size={20} className="text-primary" />, text: 'Team building entreprise' },
              { icon: <Trophy size={20} className="text-primary" />, text: 'Expérience depuis 1996' },
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

      {/* ==================== SECTION 3 — ACTIVITÉS ==================== */}
      <section id="activites" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Nos Activités
            </h2>
            <p className="font-body text-gray-medium max-w-xl mx-auto">
              3 expériences uniques sous le même toit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                number={activity.number}
                title={activity.title}
                description={activity.shortDescription}
                slug={activity.slug}
                features={activity.features}
                priceFrom={activity.priceFrom}
                icon={activity.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4 — POURQUOI NOUS ==================== */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide">
              Pourquoi Choisir
            </h2>
            <h2 className="font-display text-3xl md:text-5xl text-primary uppercase tracking-wide mb-4">
              Laser Game Evolution Tours ?
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-dark-card rounded-lg flex items-center justify-center border border-gray-card">
                <span className="text-8xl">🔒</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-primary text-xs font-body font-bold uppercase tracking-widest mb-4">
                  <Lock size={14} /> Exclusivité
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide mb-4">
                  Groupes 100% Privatisés
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  Chez nous, votre groupe ne sera jamais mélangé avec des inconnus. Votre labyrinthe
                  vous est entièrement dédié pour une expérience exclusive et des fous rires garantis.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="md:order-2 h-64 md:h-80 bg-gradient-to-br from-accent/20 to-dark-card rounded-lg flex items-center justify-center border border-gray-card">
                <span className="text-8xl">🎮</span>
              </div>
              <div className="md:order-1">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-body font-bold uppercase tracking-widest mb-4">
                  <Gamepad2 size={14} /> Immersion
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide mb-4">
                  3 Labyrinthes Immersifs Multi-Étages
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  Plongez dans un univers obscur et déroutant avec cloisons et zones réfléchissantes.
                  Trois labyrinthes différents avec étages pour varier les plaisirs à chaque visite.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="h-64 md:h-80 bg-gradient-to-br from-purple-900/30 to-dark-card rounded-lg flex items-center justify-center border border-gray-card">
                <span className="text-8xl">👥</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-primary text-xs font-body font-bold uppercase tracking-widest mb-4">
                  <Users size={14} /> Pour tous
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide mb-4">
                  Pour Tous, Dès 6 Joueurs
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  Que vous soyez en famille, entre amis, en BDE ou en séminaire d\'entreprise, nos
                  activités s\'adaptent à tous les âges et toutes les occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5 — OFFRES ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Nos Offres
            </h2>
            <p className="font-body text-gray-medium max-w-xl mx-auto">
              Une expérience sur mesure pour chaque occasion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {offers.map((offer, i) => (
              <OfferCard key={i} {...offer} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6 — TÉMOIGNAGES ==================== */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Ils Nous Font Confiance
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const idx = (currentTestimonial + offset) % testimonials.length
                return <TestimonialCard key={idx} {...testimonials[idx]} />
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-card text-gray-medium hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === currentTestimonial ? 'bg-primary w-6' : 'bg-gray-card'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-card text-gray-medium hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Rating badge */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 bg-dark-card border border-gray-card rounded-full px-5 py-2.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-body text-sm text-white font-semibold">4.8/5</span>
              <span className="font-body text-xs text-gray-medium">— Basé sur 200+ avis Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7 — HORAIRES & LOCALISATION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Nous Trouver
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <OpeningHours />
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-gray-card h-72 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.5!2d0.7312!3d47.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s35+rue+Fr%C3%A9d%C3%A9ric+Joliot-Curie%2C+37550+Saint-Avertin!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Laser Game Evolution Tours — Plan d'accès"
                />
              </div>
              <div className="bg-dark-card border border-gray-card rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <address className="font-body text-sm text-gray-300 not-italic">
                    35 rue Frédéric Joliot-Curie, 37550 Saint-Avertin
                  </address>
                </div>
                <a
                  href="tel:0247000000"
                  className="flex items-center gap-3 font-body text-sm text-white hover:text-primary transition-colors duration-200 group"
                >
                  <Phone size={16} className="text-primary" />
                  <span className="font-semibold group-hover:underline">02 47 00 00 00</span>
                  <span className="text-xs text-gray-medium">(cliquez pour appeler)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8 — CTA FINAL ==================== */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)'
        }} />
        <div className="relative container-custom text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
            Prêts à Vivre l’Adrénaline ?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Réservez en ligne en 2 minutes ou appelez-nous
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-gray-light transition-all duration-200 hover:scale-105"
            >
              Réserver en ligne
            </Link>
            <a
              href="tel:0247000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105"
            >
              <Phone size={16} />
              02 47 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
