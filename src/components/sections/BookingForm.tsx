'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  prenom: z.string().min(2, 'Prénom requis (min 2 caractères)'),
  nom: z.string().min(2, 'Nom requis (min 2 caractères)'),
  email: z.string().email('Adresse email invalide'),
  telephone: z
    .string()
    .min(10, 'Numéro de téléphone invalide')
    .regex(/^[0-9+\s()-]{10,}$/, 'Format invalide'),
  activite: z.enum(['laser-game', 'lancer-de-hache', 'blind-test', 'pack-multi', 'anniversaire', 'entreprise'], {
    errorMap: () => ({ message: 'Veuillez choisir une activité' }),
  }),
  date: z.string().min(1, 'Date souhaitée requise'),
  participants: z
    .number()
    .min(4, 'Minimum 4 participants')
    .max(30, 'Maximum 30 participants'),
  occasion: z.enum(['anniversaire', 'evjf-evg', 'entreprise', 'entre-amis', 'famille', 'autre'], {
    errorMap: () => ({ message: 'Veuillez choisir une occasion' }),
  }),
  message: z.string().optional(),
  rgpd: z.literal(true, { errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' }) }),
})

type FormData = z.infer<typeof schema>

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
      <AlertCircle size={12} />
      {message}
    </p>
  )
}

const inputClass =
  'w-full bg-dark-bg border border-gray-card rounded-sm px-4 py-3 font-body text-sm text-white placeholder:text-gray-medium focus:outline-none focus:border-primary transition-colors duration-200'

const labelClass = 'block font-body text-xs text-gray-medium uppercase tracking-wider mb-1'

export function BookingForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setSubmitStatus('loading')
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-dark-card border border-green-800 rounded-lg p-8 text-center">
        <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-2">
          Demande envoyée !
        </h3>
        <p className="font-body text-gray-medium mb-6">
          Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais.
          <br />
          Pour toute urgence, appelez-nous au{' '}
          <a href="tel:0247000000" className="text-primary font-semibold">
            02 47 00 00 00
          </a>
        </p>
        <Button variant="secondary" onClick={() => setSubmitStatus('idle')}>
          Nouvelle demande
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-dark-card rounded-lg p-6 md:p-8 border border-gray-card">
      <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-6">
        Formulaire de Réservation
      </h3>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Prénom <span className="text-primary">*</span>
          </label>
          <input
            {...register('prenom')}
            placeholder="Jean"
            className={cn(inputClass, errors.prenom && 'border-red-500')}
          />
          <FieldError message={errors.prenom?.message} />
        </div>
        <div>
          <label className={labelClass}>
            Nom <span className="text-primary">*</span>
          </label>
          <input
            {...register('nom')}
            placeholder="Dupont"
            className={cn(inputClass, errors.nom && 'border-red-500')}
          />
          <FieldError message={errors.nom?.message} />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Email <span className="text-primary">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="jean@exemple.fr"
            className={cn(inputClass, errors.email && 'border-red-500')}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label className={labelClass}>
            Téléphone <span className="text-primary">*</span>
          </label>
          <input
            {...register('telephone')}
            type="tel"
            placeholder="06 00 00 00 00"
            className={cn(inputClass, errors.telephone && 'border-red-500')}
          />
          <FieldError message={errors.telephone?.message} />
        </div>
      </div>

      {/* Activity */}
      <div>
        <label className={labelClass}>
          Activité souhaitée <span className="text-primary">*</span>
        </label>
        <select
          {...register('activite')}
          className={cn(inputClass, 'cursor-pointer', errors.activite && 'border-red-500')}
        >
          <option value="">-- Choisir une activité --</option>
          <option value="laser-game">Laser Game</option>
          <option value="lancer-de-hache">Lancer de Hache</option>
          <option value="blind-test">BlindTest</option>
          <option value="pack-multi">Pack Multi-Activités</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="entreprise">Team Building Entreprise</option>
        </select>
        <FieldError message={errors.activite?.message} />
      </div>

      {/* Date + Participants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Date souhaitée <span className="text-primary">*</span>
          </label>
          <input
            {...register('date')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={cn(inputClass, errors.date && 'border-red-500')}
          />
          <FieldError message={errors.date?.message} />
        </div>
        <div>
          <label className={labelClass}>
            Nombre de participants <span className="text-primary">*</span>
          </label>
          <input
            {...register('participants', { valueAsNumber: true })}
            type="number"
            min={4}
            max={30}
            placeholder="Ex: 12"
            className={cn(inputClass, errors.participants && 'border-red-500')}
          />
          <FieldError message={errors.participants?.message} />
        </div>
      </div>

      {/* Occasion */}
      <div>
        <label className={labelClass}>
          Occasion <span className="text-primary">*</span>
        </label>
        <select
          {...register('occasion')}
          className={cn(inputClass, 'cursor-pointer', errors.occasion && 'border-red-500')}
        >
          <option value="">-- Choisir une occasion --</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="evjf-evg">EVJF / EVG</option>
          <option value="entreprise">Team Building / Séminaire</option>
          <option value="entre-amis">Entre amis</option>
          <option value="famille">En famille</option>
          <option value="autre">Autre</option>
        </select>
        <FieldError message={errors.occasion?.message} />
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message (optionnel)</label>
        <textarea
          {...register('message')}
          rows={3}
          placeholder="Informations complémentaires, demandes spéciales..."
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      {/* RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('rgpd')}
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-gray-card bg-dark-bg accent-primary cursor-pointer flex-shrink-0"
          />
          <span className="font-body text-xs text-gray-medium leading-relaxed">
            J'accepte que mes données soient utilisées pour traiter ma demande de réservation,
            conformément à notre{' '}
            <a href="/confidentialite" className="text-primary hover:underline">
              politique de confidentialité
            </a>
            .{' '}
            <span className="text-primary">*</span>
          </span>
        </label>
        <FieldError message={errors.rgpd?.message} />
      </div>

      {/* Error state */}
      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-900/30 border border-red-800 rounded text-red-400 text-sm font-body">
          <AlertCircle size={16} />
          Une erreur est survenue. Veuillez réessayer ou nous appeler au 02 47 00 00 00.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={submitStatus === 'loading'}
        className="w-full"
      >
        Envoyer ma demande
      </Button>

      <p className="text-xs text-gray-medium font-body text-center">
        Ou appelez-nous directement au{' '}
        <a href="tel:0247000000" className="text-primary font-semibold hover:underline">
          02 47 00 00 00
        </a>
      </p>
    </form>
  )
}
