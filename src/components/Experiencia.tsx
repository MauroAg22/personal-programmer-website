import { chip, container, section } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

const LOGROS = [
  "Administro Active Directory, Microsoft 365 y Microsoft Entra ID para las empresas del grupo, con soporte presencial y remoto a colaboradores y negocios.",
  "Diseñé y desarrollé el Generador de Firmas institucional: hoy está en producción y lo usa todo el personal para emitir firmas de correo estandarizadas según la identidad de cada empresa del grupo.",
  "Automaticé la puesta a punto de equipos con scripts de instalación silenciosa que evolucionaron en un instalador MSI corporativo, incluyendo la configuración de las herramientas de asistencia remota.",
  "Doy soporte a los sistemas de eventos hípicos del Hipódromo de La Punta, donde cada jornada depende de que la infraestructura no falle.",
]

const TECNOLOGIAS = [
  "Active Directory",
  "Microsoft 365",
  "Microsoft Entra ID",
  "Windows",
  "PowerShell",
  "InnoSetup",
  "HTML/CSS/JS",
]

function Experiencia() {
  return (
    <section id="experiencia" className={section}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Experiencia"
            title="Infraestructura real, en producción, todos los días"
          />
        </Reveal>

        <Reveal className="mt-14">
          <article className="rounded-xl border border-border bg-surface p-7 sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-text">
                  Técnico de Soporte IT
                </h3>
                <p className="mt-1 text-base text-text-muted">
                  Grupo Slots · San Luis, Argentina
                </p>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-text">
                Enero 2025 — Actualidad
              </span>
            </div>

            <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-text-muted">
              Grupo empresario con varias unidades de negocio —Lotería de San
              Luis, Epic Hoteles, Jugadón e Hipódromo de La Punta—, cada una
              con sus propios usuarios, equipos y necesidades de soporte.
            </p>

            <ul className="mt-7 flex flex-col gap-4">
              {LOGROS.map((logro) => (
                <li key={logro} className="flex gap-3.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-text-muted">
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
          <article className="rounded-xl border border-border p-7">
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
      </div>
    </section>
  )
}

export default Experiencia
