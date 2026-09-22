import { CV_URL, GITHUB_URL, LINKEDIN_URL, MAILTO } from "../data"
import { btnIcon, btnPrimary, btnSecondary, container } from "../styles"
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "./icons"

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate scroll-mt-24 pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className={container}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted">
              <MapPin className="h-3.5 w-3.5 text-accent-text" />
              San Luis, Argentina · Presencial y remoto
            </p>

            <h1 className="mt-6 text-[1.85rem] leading-[1.12] font-semibold tracking-tight text-text sm:text-[2.6rem] sm:leading-[1.1] lg:text-[3.15rem] lg:leading-[1.08]">
              Que la infraestructura funcione. Y que el equipo tenga mejores
              herramientas.
            </h1>

            <figure className="relative mt-8 overflow-hidden rounded-2xl shadow-media ring-1 ring-media-edge sm:max-w-sm lg:hidden">
              <img
                src="/img/perfil-01-720.webp"
                srcSet="/img/perfil-01-480.webp 480w, /img/perfil-01-720.webp 720w, /img/perfil-01-960.webp 960w"
                sizes="(min-width: 1024px) 1px, (min-width: 640px) 24rem, 88vw"
                width={720}
                height={900}
                fetchPriority="high"
                alt="Retrato de Mauro Lucero"
                className="aspect-4/5 w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-[#0b1226]/70 to-transparent"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-xl bg-[#0b1226]/85 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm">
                <p className="text-[11px] tracking-[0.12em] text-white/70 uppercase">
                  Actualmente
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Técnico de Soporte IT · Grupo Slots
                </p>
              </figcaption>
            </figure>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Soy <span className="font-medium text-text">Mauro Lucero</span>,
              Técnico de Soporte TI en Grupo Slots. Además de brindar soporte
              a colaboradores y unidades de negocio de la empresa, desarrollo 
              herramientas internas de uso diario y administro entornos Microsoft
              365 y Active Directory. 
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className={`${btnPrimary} w-full sm:w-auto`}
              >
                <Download className="h-4.5 w-4.5" />
                Descargar CV
              </a>
              <a href="#experiencia" className={`${btnSecondary} w-full sm:w-auto`}>
                Ver experiencia
                <ArrowDown className="h-4.5 w-4.5" />
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={btnIcon}
                  aria-label="Perfil de LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={btnIcon}
                  aria-label="Perfil de GitHub"
                >
                  <Github />
                </a>
                <a href={MAILTO} className={btnIcon} aria-label="Enviar un email">
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto w-fit">
              <img
                src="/img/perfil-01-720.webp"
                srcSet="/img/perfil-01-480.webp 480w, /img/perfil-01-720.webp 720w, /img/perfil-01-960.webp 960w"
                sizes="(max-width: 1023px) 1px, 400px"
                width={720}
                height={720}
                alt="Retrato de Mauro Lucero"
                className="h-100 w-100 rounded-2xl object-cover shadow-media ring-1 ring-media-edge"
              />
              <div className="absolute -right-6 -bottom-5 rounded-xl border border-media-edge bg-surface px-4 py-3 shadow-media">
                <p className="text-[11px] tracking-wide text-text-subtle uppercase">
                  Actualmente
                </p>
                <p className="mt-0.5 text-sm font-semibold text-text">
                  Soporte TI · Grupo Slots
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
