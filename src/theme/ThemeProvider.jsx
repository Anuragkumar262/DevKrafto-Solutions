import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { DEFAULT_THEME_ID, normalizeThemeId, THEMES } from './themes'

const STORAGE_KEY = 'dk_theme'

export const ThemeContext = createContext({
  themeId: DEFAULT_THEME_ID,
  themeLabel: 'Obsidian',
  setThemeId: () => {},
  cycleTheme: () => {},
})

function applyThemeToDom(themeId) {
  const normalized = normalizeThemeId(themeId)
  const root = document.documentElement
  if (normalized === DEFAULT_THEME_ID) root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', normalized)
}

export default function ThemeProvider({ children }) {
  const [themeId, setThemeIdState] = useState(DEFAULT_THEME_ID)

  useEffect(() => {
    const stored = normalizeThemeId(window.localStorage.getItem(STORAGE_KEY))
    setThemeIdState(stored)
    applyThemeToDom(stored)
  }, [])

  const setThemeId = useCallback((next) => {
    const normalized = normalizeThemeId(next)
    setThemeIdState(normalized)
    window.localStorage.setItem(STORAGE_KEY, normalized)
    applyThemeToDom(normalized)
  }, [])

  const cycleTheme = useCallback(() => {
    const idx = THEMES.findIndex((t) => t.id === themeId)
    const next = THEMES[(idx + 1) % THEMES.length]?.id ?? DEFAULT_THEME_ID
    setThemeId(next)
  }, [setThemeId, themeId])

  const themeLabel = useMemo(() => {
    return THEMES.find((t) => t.id === themeId)?.label ?? 'Obsidian'
  }, [themeId])

  const value = useMemo(
    () => ({ themeId, themeLabel, setThemeId, cycleTheme }),
    [themeId, themeLabel, setThemeId, cycleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

