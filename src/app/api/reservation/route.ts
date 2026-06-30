import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().min(10),
  activite: z.string(),
  date: z.string(),
  participants: z.number().min(4).max(30),
  occasion: z.string(),
  message: z.string().optional(),
  rgpd: z.literal(true),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const emailBody = `
Nouvelle demande de réservation - Laser Game Evolution Tours
=============================================================

Prénom : ${data.prenom}
Nom : ${data.nom}
Email : ${data.email}
Téléphone : ${data.telephone}
Activité : ${data.activite}
Date souhaitée : ${data.date}
Nombre de participants : ${data.participants}
Occasion : ${data.occasion}
Message : ${data.message || 'Aucun'}
    `.trim()

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.RESERVATION_EMAIL || 'contact@lasergame-tours.fr'

    if (resendApiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: 'Réservations <reservations@lasergame-tours.fr>',
        to: toEmail,
        replyTo: data.email,
        subject: `Nouvelle réservation : ${data.prenom} ${data.nom} - ${data.activite}`,
        text: emailBody,
      })
    } else {
      // Development: log to console
      console.log('[Reservation] Email would be sent:', emailBody)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }
    console.error('[Reservation] Error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
