import type { ReactNode } from 'react'

interface KeycapProps {
  children: ReactNode
  pressed?: boolean
  tone?: 'default' | 'vermilion'
  className?: string
}

export function Keycap({ children, pressed = false, tone = 'default', className = '' }: KeycapProps) {
  return (
    <kbd className={`keycap ${pressed ? 'pressed' : ''} ${tone === 'vermilion' ? 'keycap--vermilion' : ''} ${className}`}>
      {children}
    </kbd>
  )
}
