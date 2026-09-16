import {
  CV_URL,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  MAILTO,
  WHATSAPP_LABEL,
  WHATSAPP_URL,
} from "../data"
import { btnPrimary, btnSecondary, container } from "../styles"
import Reveal from "./Reveal"
import { Download, Github, Linkedin, Mail, MapPin, Whatsapp } from "./icons"

const CANALES = [
  { label: EMAIL, href: MAILTO, Icon: Mail },
  { label: WHATSAPP_LABEL, href: WHATSAPP_URL, Icon: Whatsapp },
  { label: "linkedin.com/in/mauro-ag-lucero", href: LINKEDIN_URL, Icon: Linkedin },
  { label: "github.com/MauroAg22", href: GITHUB_URL, Icon: Github },
]

function Contacto() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24 lg:py-28"
    >
      <div className={container}>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-accent-text uppercase">
                  <span className="h-px w-6 bg-accent" aria-hidden="true" />
                  Contacto
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
                  ¿Buscás a alguien que sostenga la infraestructura y además
                  construya las herramientas?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  Escribime y te respondo. Estoy en San Luis, Argentina, y
                  trabajo tanto presencial como en remoto.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={MAILTO} className={btnPrimary}>
                    <Mail className="h-[18px] w-[18px]" />
                    Escribirme
                  </a>
                  <a
                    href={CV_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={btnSecondary}
                  >
                    <Download className="h-[18px] w-[18px]" />
                    Descargar CV
                  </a>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-text-subtle">
                  <MapPin className="h-4 w-4" />
                  San Luis, Argentina · GMT-3
                </p>
              </div>

              <div className="flex h-fit flex-col gap-px self-center overflow-hidden rounded-xl border border-border bg-border">
                {CANALES.map(({ label, href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-3.5 bg-background px-5 py-4 text-sm text-text transition-colors hover:text-accent-text"
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0 text-text-subtle" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contacto
