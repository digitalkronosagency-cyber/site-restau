'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'

type DaySchedule = {
  open: string | null
  close: string | null
}

type WeekSchedule = Record<string, DaySchedule>

const regularSchedule: WeekSchedule = {
  Lundi: { open: null, close: null },
  Mardi: { open: '17:00', close: '22:00' },
  Mercredi: { open: '14:00', close: '22:00' },
  Jeudi: { open: '17:00', close: '23:00' },
  Vendredi: { open: '17:00', close: '23:00' },
  Samedi: { open: '10:00', close: '00:00' },
  Dimanche: { open: '14:00', close: '20:00' },
}

const vacancesSchedule: WeekSchedule = {
  Lundi: { open: '14:00', close: '22:00' },
  Mardi: { open: '14:00', close: '22:00' },
  Mercredi: { open: '14:00', close: '23:00' },
  Jeudi: { open: '14:00', close: '23:00' },
  Vendredi: { open: '14:00', close: '23:00' },
  Samedi: { open: '14:00', close: '00:00' },
  Dimanche: { open: '14:00', close: '20:00' },
}

const juinAoutSchedule: WeekSchedule = {
  Lundi: { open: '14:00', close: '22:00' },
  Mardi: { open: '14:00', close: '22:00' },
  Mercredi: { open: '14:00', close: '22:00' },
  Jeudi: { open: '14:00', close: '22:00' },
  Vendredi: { open: '14:00', close: '22:00' },
  Samedi: { open: '14:00', close: '23:00' },
  Dimanche: { open: '14:00', close: '20:00' },
}

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

function isOpenNow(schedule: WeekSchedule): { open: boolean; nextChange: string } {
  const now = new Date()
  const dayName = days[now.getDay()]
  const daySchedule = schedule[dayName]

  if (!daySchedule.open || !daySchedule.close) {
    return { open: false, nextChange: '' }
  }

  const [openH, openM] = daySchedule.open.split(':').map(Number)
  const [closeH, closeM] = daySchedule.close.split(':').map(Number)
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const openMinutes = openH * 60 + openM
  let closeMinutes = closeH * 60 + closeM
  if (closeMinutes === 0) closeMinutes = 24 * 60

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes
  const nextChange = isOpen ? daySchedule.close : daySchedule.open

  return { open: isOpen, nextChange: nextChange || '' }
}

interface OpeningHoursProps {
  compact?: boolean
}

export function OpeningHours({ compact = false }: OpeningHoursProps) {
  const [status, setStatus] = useState<{ open: boolean; nextChange: string } | null>(null)
  const [activeTab, setActiveTab] = useState<'regular' | 'vacances' | 'ete'>('regular')

  useEffect(() => {
    const schedule =
      activeTab === 'regular'
        ? regularSchedule
        : activeTab === 'vacances'
        ? vacancesSchedule
        : juinAoutSchedule
    setStatus(isOpenNow(schedule))
  }, [activeTab])

  const scheduleToShow =
    activeTab === 'regular'
      ? regularSchedule
      : activeTab === 'vacances'
      ? vacancesSchedule
      : juinAoutSchedule

  return (
    <div className="bg-dark-card rounded-lg p-6 border border-gray-card">
      {/* Live status */}
      {status !== null && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body font-semibold mb-4',
            status.open
              ? 'bg-green-900/40 text-green-400 border border-green-800'
              : 'bg-red-900/40 text-red-400 border border-red-800'
          )}
        >
          <span
            className={cn(
              'w-2 h-2 rounded-full',
              status.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'
            )}
          />
          {status.open
            ? `Ouvert maintenant — Ferme à ${status.nextChange}`
            : status.nextChange
            ? `Fermé — Ouvre à ${status.nextChange}`
            : 'Fermé aujourd\'hui'}
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        <Clock size={16} className="text-primary" />
        <h3 className="font-display text-lg text-white uppercase tracking-wide">Nos Horaires</h3>
      </div>

      {/* Tab selector */}
      {!compact && (
        <div className="flex gap-1 mb-4 bg-dark-bg rounded-md p-1">
          {[['regular', 'Hors vacances'], ['vacances', 'Vacances'], ['ete', 'Juil-Août']].map(
            ([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as 'regular' | 'vacances' | 'ete')}
                className={cn(
                  'flex-1 text-xs font-body font-medium py-1.5 px-2 rounded transition-all duration-200',
                  activeTab === key
                    ? 'bg-primary text-white'
                    : 'text-gray-medium hover:text-white'
                )}
              >
                {label}
              </button>
            )
          )}
        </div>
      )}

      {/* Schedule table */}
      <div className="space-y-1">
        {Object.entries(scheduleToShow).map(([day, schedule]) => {
          const isToday = days[new Date().getDay()] === day
          return (
            <div
              key={day}
              className={cn(
                'flex justify-between items-center py-1.5 px-2 rounded text-sm font-body',
                isToday ? 'bg-primary/10 border border-primary/20' : ''
              )}
            >
              <span
                className={cn(
                  'font-medium',
                  isToday ? 'text-primary' : 'text-gray-300'
                )}
              >
                {day}
                {isToday && (
                  <span className="ml-1 text-xs text-primary/70">(aujourd\'hui)</span>
                )}
              </span>
              <span className={schedule.open ? 'text-gray-300' : 'text-gray-medium italic'}>
                {schedule.open && schedule.close
                  ? `${schedule.open} – ${schedule.close}`
                  : 'Fermé'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
