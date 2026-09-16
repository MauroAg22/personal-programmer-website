export const THEME_CHANGE_EVENT = "themechange"

export function isDarkMode(): boolean {
  const override = document.documentElement.getAttribute("data-theme")
  if (override === "dark") return true
  if (override === "light") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}
