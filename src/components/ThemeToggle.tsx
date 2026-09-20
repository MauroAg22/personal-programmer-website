import { useEffect, useState } from "react"
import { THEME_CHANGE_EVENT } from "../theme"
import { Monitor, Moon, Sun } from "./icons"

type Theme = "system" | "light" | "dark"

function getStoredTheme(): Theme {
  const stored = window.localStorage.getItem("theme")
  return stored === "light" || stored === "dark" ? stored : "system"
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "system") {
    root.removeAttribute("data-theme")
  } else {
    root.setAttribute("data-theme", theme)
  }
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT))
}

const OPTIONS: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "system", label: "Tema del sistema", Icon: Monitor },
  { value: "light", label: "Tema claro", Icon: Sun },
  { value: "dark", label: "Tema oscuro", Icon: Moon },
]

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme())

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div
      role="group"
      aria-label="Tema de color"
      className="inline-flex h-9 items-center rounded-lg border border-border-strong p-0.5 transition-colors hover:border-accent"
    >
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
          className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:text-accent-text ${
            theme === value ? "bg-surface-2 text-text" : "text-text-subtle"
          }`}
        >
          <Icon className="h-[15px] w-[15px]" />
        </button>
      ))}
    </div>
  )
}

export default ThemeToggle
