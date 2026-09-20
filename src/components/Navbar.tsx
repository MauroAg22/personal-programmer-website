import { useEffect, useState } from "react"
import { CV_URL } from "../data"
import { container } from "../styles"
import ThemeToggle from "./ThemeToggle"
import { Close, Download, Menu } from "./icons"

const LINKS = [
  { id: "entorno", label: "Entorno" },
  { id: "perfil", label: "Perfil" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "contacto", label: "Contacto" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-card backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <img src="/img/logo.webp" alt="" className="h-7 w-7" />
          <span className="hidden text-sm font-semibold tracking-tight text-text sm:inline">
            Mauro Lucero
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? "text-text"
                  : "text-text-muted hover:text-accent-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border-strong px-3.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent-text"
          >
            <Download className="h-4 w-4" />
            CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className={`${container} flex flex-col py-3`}>
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-accent-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
