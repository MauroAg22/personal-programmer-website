import { GITHUB_URL, LINKEDIN_URL, MAILTO } from "../data"
import { container } from "../styles"
import { Github, Linkedin, Mail } from "./icons"

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div
        className={`${container} flex flex-col items-center justify-between gap-6 sm:flex-row`}
      >
        <div className="flex items-center gap-3">
          <img src="/img/logo.webp" alt="" className="h-7 w-7" loading="lazy" />
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Mauro Lucero
          </p>
        </div>

        <p className="order-3 text-xs text-text-subtle sm:order-2">
          Construido con React, TypeScript y Tailwind CSS
        </p>

        <div className="order-2 flex items-center gap-1 sm:order-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-subtle transition-colors hover:text-accent-text"
          >
            <Linkedin />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-subtle transition-colors hover:text-accent-text"
          >
            <Github />
          </a>
          <a
            href={MAILTO}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-subtle transition-colors hover:text-accent-text"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
