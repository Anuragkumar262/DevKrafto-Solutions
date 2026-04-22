export const THEMES = [
  { id: 'obsidian', label: 'Obsidian' },
  { id: 'aurora', label: 'Aurora' },
  { id: 'sunset', label: 'Sunset' },
]

export const DEFAULT_THEME_ID = 'obsidian'

export function normalizeThemeId(id) {
  if (!id) return DEFAULT_THEME_ID
  const found = THEMES.find((t) => t.id === id)
  return found ? found.id : DEFAULT_THEME_ID
}

