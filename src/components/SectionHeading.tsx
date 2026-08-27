import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p
        className={`font-mono text-xs font-semibold tracking-[0.28em] uppercase ${
          dark ? 'text-vermilion' : 'text-vermilion'
        }`}
      >
        <span aria-hidden className="mr-2 inline-block h-2 w-2 bg-vermilion align-middle" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-4xl leading-[1.12] font-extrabold tracking-tight text-balance sm:text-5xl ${
          dark ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-paper/70' : 'text-ink-soft'}`}>{description}</p>
      ) : null}
    </Reveal>
  )
}
