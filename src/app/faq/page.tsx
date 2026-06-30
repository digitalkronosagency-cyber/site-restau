import { Metadata } from 'next'
import { faqMetadata } from '@/lib/seo'
import { getFAQSchema } from '@/lib/schema'
import { faqData } from '@/data/faq'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Button } from '@/components/ui/Button'
import { Phone } from 'lucide-react'

export const metadata: Metadata = faqMetadata

const categories = ['Tous', 'Réservation', 'Laser Game', 'Horaires', 'Tarifs', 'Entreprises', 'Anniversaire', 'Infos pratiques']

export default function FAQPage() {
  const schema = getFAQSchema(faqData.map((f) => ({ question: f.question, answer: f.answer })))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-secondary">
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
            Questions Fréquentes
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl">
            Toutes les réponses à vos questions sur le Laser Game Evolution de Tours.
            Vous ne trouvez pas ce que vous cherchez ? Appelez-nous !
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
              Une autre question ?
            </h2>
            <p className="font-body text-gray-medium mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Nous contacter
              </Button>
              <a
                href="tel:0247000000"
                className="inline-flex items-center gap-2 border-2 border-gray-card text-white font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Phone size={16} /> 02 47 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
