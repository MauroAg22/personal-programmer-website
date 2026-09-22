import { chip, container, section } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"
import { ArrowUpRight } from "./icons"

function TerminalCover() {
  return (
    <div className="h-full bg-[#0a0f20] p-5 font-mono text-[11px] leading-relaxed">
      <div className="flex gap-1.5 pb-3" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <p className="text-slate-300">
        <span className="text-[#7ee787]">C:\&gt;</span> setup.msi /quiet
      </p>
      <p className="text-slate-500">Instalando paquete corporativo…</p>
      <p className="text-slate-500">Software estándar ······ OK</p>
      <p className="text-slate-500">Asistencia remota ······ OK</p>
      <p className="text-[#7ee787]">Equipo listo para el usuario.</p>
    </div>
  )
}

interface Proyecto {
  titulo: string
  estado: { label: string; color: string }
  descripcion: string
  stack: string[]
  cover: React.ReactNode
  enlaces: { label: string; href: string }[]
  nota?: string
}

const PROYECTOS: Proyecto[] = [
  {
    titulo: "Generador de Firmas",
    estado: { label: "En producción", color: "bg-emerald-500" },
    descripcion:
      "Herramienta institucional que usa todo el personal de Grupo Slots para generar firmas de correo estandarizadas, con el formato y la identidad de cada empresa del grupo.",
    stack: ["HTML", "CSS", "JavaScript", "JSON"],
    cover: (
      <img
        src="/img/projects/firma-slots.webp"
        alt="Captura de pantalla del Generador de Firmas de Grupo Slots"
        loading="lazy"
        className="h-full w-full object-cover object-top-left"
      />
    ),
    enlaces: [{ label: "Ver herramienta", href: "https://firma.gruposlots.ar/" }],
    nota: "Código en el GitLab interno de la empresa",
  },
  {
    titulo: "Instalador EXE Corporativo",
    estado: { label: "Uso interno", color: "bg-primary-500" },
    descripcion:
      "Instalador que deja un equipo nuevo listo para trabajar: instala en silencio todo el software estándar de la empresa y deja configurada la asistencia remota y carga al equipo en la base de datos.",
    stack: ["InnoSetup", "CMD", "Silent install"],
    cover: <TerminalCover />,
    enlaces: [],
    nota: "Código en el GitLab interno de la empresa",
  },
  {
    titulo: "Clinic System",
    estado: { label: "En desarrollo", color: "bg-amber-500" },
    descripcion:
      "Sistema de gestión para clínicas y hospitales: médicos, especialidades, pacientes y consultas. Proyecto propio para profundizar en backend y modelado de datos.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    cover: (
      <img
        src="/img/projects/clinic-system.webp"
        alt="Captura de pantalla de Clinic System"
        loading="lazy"
        className="h-full w-full object-cover object-top-left"
      />
    ),
    enlaces: [
      { label: "Código", href: "https://github.com/MauroAg22/clinic-system" },
      { label: "Demo", href: "https://maurolucero.com.ar/projects/clinic-system/" },
    ],
  },
]

function Proyectos() {
  return (
    <section id="proyectos" className={section}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Trabajo destacado"
            title="Herramientas que resuelven problemas reales"
            lead="Dos de estos proyectos se usan hoy dentro de la empresa. El tercero es donde practico lo que todavía no uso en producción."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS.map((proyecto, index) => (
            <Reveal key={proyecto.titulo} className="h-full" delay={index * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition hover:border-card-hover hover:shadow-panel">
                <div className="h-44 overflow-hidden border-b border-border">
                  {proyecto.cover}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-text-subtle uppercase">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${proyecto.estado.color}`}
                      aria-hidden="true"
                    />
                    {proyecto.estado.label}
                  </div>

                  <h3 className="mt-2.5 text-lg font-semibold text-text">
                    {proyecto.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-text-muted">
                    {proyecto.descripcion}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {proyecto.stack.map((tech) => (
                      <span key={tech} className={chip}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5">
                    {proyecto.enlaces.map((enlace) => (
                      <a
                        key={enlace.href}
                        href={enlace.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-text transition-colors hover:text-accent-text"
                      >
                        {enlace.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))}
                    {proyecto.nota && (
                      <span className="text-xs text-text-subtle">
                        {proyecto.nota}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
