import { Metadata } from 'next'
import { contactMetadata } from '@/lib/seo'
import { BookingForm } from '@/components/sections/BookingForm'
import { OpeningHours } from '@/components/sections/OpeningHours'
import { Phone, MapPin, Mail, ExternalLink } from 'lucide-react'

export const metadata: Metadata = contactMetadata

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-secondary">
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
            Contact &
            <span className="block text-primary">Réservation</span>
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl">
            Remplissez le formulaire ou appelez-nous directement au{' '}
            <a href="tel:0247000000" className="text-primary font-semibold hover:underline">
              02 47 00 00 00
            </a>
            . Nous vous recontactons sous 24h.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-dark-card border border-gray-card rounded-lg p-6 space-y-4">
                <h2 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Nos Coordonnées
                </h2>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <address className="font-body text-sm text-gray-300 not-italic">
                    35 rue Frédéric Joliot-Curie
                    <br />
                    37550 Saint-Avertin
                  </address>
                </div>
                <a href="tel:0247000000" className="flex items-center gap-3 group">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-white font-semibold group-hover:text-primary transition-colors">
                    02 47 00 00 00
                  </span>
                </a>
                <a href="mailto:contact@lasergame-tours.fr" className="flex items-center gap-3 group">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-white group-hover:text-primary transition-colors">
                    contact@lasergame-tours.fr
                  </span>
                </a>
                <a
                  href="https://www.google.com/maps/dir//35+rue+Fr%C3%A9d%C3%A9ric+Joliot-Curie+37550+Saint-Avertin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-body hover:underline"
                >
                  <ExternalLink size={14} /> Ouvrir dans Google Maps
                </a>
              </div>

              <OpeningHours />

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-gray-card h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.5!2d0.7312!3d47.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s35+rue+Fr%C3%A9d%C3%A9ric+Joliot-Curie%2C+37550+Saint-Avertin!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Laser Game Evolution Tours"
                />
              </div>
            </div>

            {/* Form */}
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
