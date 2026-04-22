import React, { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeProvider'

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l1.2 4.2L17.4 8 13.2 9.2 12 13.4 10.8 9.2 6.6 8l4.2-1.8L12 2z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M19 11l.9 2.9 2.8 1.1-2.8 1.1L19 19l-1.1-2.9-2.8-1.1 2.8-1.1L19 11z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M5 12l.8 2.4 2.3.8-2.3.8L5 18l-.8-2.4-2.3-.8 2.3-.8L5 12z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

export default function ThemeToggle({ className = '' }) {
  const { themeLabel, cycleTheme } = useContext(ThemeContext)

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={`theme-fab group inline-flex items-center gap-2 rounded-full bg-[color:var(--card)] px-3 py-2 text-[12px] font-semibold tracking-tight text-[color:var(--fg)] shadow-lg shadow-black/30 ring-1 ring-white/10 transition-transform active:scale-[0.98] ${className}`}
      aria-label={`Change theme (current: ${themeLabel})`}
      title={`Theme: ${themeLabel}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-black/25 ring-1 ring-white/10">
        <SparkleIcon className="h-4 w-4 text-[color:var(--accent)] transition-transform duration-300 group-hover:rotate-12" />
      </span>
      <span className="hidden sm:inline">Theme</span>
      <span className="hidden md:inline text-[color:var(--muted)]">• {themeLabel}</span>
    </button>
  )
}

