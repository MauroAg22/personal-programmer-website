import { chip, container, sectionBand } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

const LOGROS = [
  "Administro Active Directory y el entorno Microsoft 365 para las empresas, con soporte presencial y remoto a colaboradores y negocios.",
  "Diseñé y desarrollé el Generador de Firmas institucional: hoy está en producción y se usa para emitir firmas de correo estandarizadas y omologadas.",
  "Automaticé la puesta a punto de equipos con scripts de instalación silenciosa que evolucionaron en un instalador EXE corporativo, incluyendo todas las configuración.",
  "A cargo del soporte a los sistemas de eventos hípicos del Hipódromo de La Punta, donde cada jornada depende de que la infraestructura no falle.",
]

const TECNOLOGIAS = [
  "Active Directory",
  "Microsoft 365",
  "Windows",
  "AnyDesk/UltraVNC",
  "PowerShell/CMD",
  "InnoSetup",
  "HTML/CSS/JS",
  "Inteligencia Artificial"
]

function Experiencia() {
  return (
    <section id="experiencia" className={sectionBand}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Experiencia"
            title="Infraestructura real, en producción, todos los días"
          />
        </Reveal>

        <Reveal className="mt-14">
          <article className="rounded-xl border border-border bg-surface p-7 shadow-card sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-text">
                  Técnico de Soporte TI
                </h3>
                <p className="mt-1 text-base text-text-muted">
                  Grupo Slots · San Luis, Argentina
                </p>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-text">
                Actualidad
              </span>
            </div>

            <p className="mt-6 border-l-2 border-accent pl-4 text-[0.9375rem] leading-relaxed text-text-muted">
              Empresa de entretenimiento fundado en 1985, con más de 1350
              colaboradores en más de 20 localidades y ocho unidades de negocio. Una
              industria regulada donde la operación no puede detenerse.
            </p>

            <ul className="mt-7 flex flex-col gap-4">
              {LOGROS.map((logro) => (
                <li key={logro} className="flex gap-3.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-text-muted">
                    {logro}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {TECNOLOGIAS.map((tech) => (
                <span key={tech} className={chip}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-6">
          <article className="rounded-xl border border-border bg-surface p-7 shadow-card">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-base font-semibold text-text">
                Agente de Atención Telefónica
              </h3>
              <span className="text-xs font-medium text-text-subtle">
                Experiencia anterior
              </span>
            </div>
            <p className="mt-1 text-sm text-text-muted">
              Metrickal · Barcelona, España — 100% remoto
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Atención a clientes de Ecoscooting y AliExpress dentro de un
              equipo distribuido, trabajando de forma totalmente remota para
              una empresa internacional.
            </p>
          </article>
        </Reveal>

        <Reveal className="mt-6">
          <article className="rounded-xl border border-border bg-surface p-7 shadow-card">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-base font-semibold text-text">
                Vendedor de servicios
              </h3>
              <span className="text-xs font-medium text-text-subtle">
                Experiencia anterior
              </span>
            </div>
            <p className="mt-1 text-sm text-text-muted">
              DirecTV · Villa Mercedes, San Luis, Argentina — 100% remoto
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Comercialización de productos y servicios con seguimiento y cierre de ventas.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Experiencia
