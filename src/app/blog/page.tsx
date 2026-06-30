import { Metadata } from 'next'
import { blogMetadata } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { BookOpen } from 'lucide-react'

export const metadata: Metadata = blogMetadata

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-secondary">
        <div className="container-custom">
          <nav className="text-xs font-body text-gray-medium mb-6">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
            Blog
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl">
            Conseils, astuces et actualités sur le laser game, lancer de hache et blind test à Tours.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-lg mx-auto py-16">
            <BookOpen size={48} className="text-primary mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
              Articles à venir
            </h2>
            <p className="font-body text-gray-medium mb-8">
              Notre blog est en cours de rédaction. Revenez bientôt pour découvrir
              nos conseils et actualités sur vos activités préférées.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/" variant="primary">
                Retour à l&apos;accueil
              </Button>
              <Button href="/contact" variant="secondary">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
