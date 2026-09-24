import { container, sectionBand } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"
import { Cloud, Server, Shield, Windows } from "./icons"

const MICROSOFT = [
  {
    Icon: Cloud,
    nombre: "Microsoft 365",
    detalle: "Administración del tenant y sus servicios",
  },
  {
    Icon: Shield,
    nombre: "Microsoft Entra ID",
    detalle: "Identidades y accesos",
  },
  {
    Icon: Server,
    nombre: "Active Directory",
    detalle: "Usuarios, grupos y políticas",
  },
  {
    Icon: Windows,
    nombre: "Windows",
    detalle: "Equipos y endpoints corporativos",
  },
]

interface Tech {
  nombre: string
  icono: string
}

const GRUPOS: { titulo: string; items: Tech[] }[] = [
  {
    titulo: "Desarrollo",
    items: [
      { nombre: "HTML", icono: "/icons/mono/html.svg" },
      { nombre: "CSS", icono: "/icons/mono/css.svg" },
      { nombre: "JavaScript", icono: "/icons/mono/javascript.svg" },
      { nombre: "TypeScript", icono: "/icons/mono/typescript.svg" },
      { nombre: "React", icono: "/icons/mono/react.svg" },
      { nombre: "Tailwind CSS", icono: "/icons/mono/tailwindcss.svg" },
      { nombre: "Bootstrap", icono: "/icons/mono/bootstrap.svg" },
      { nombre: "PHP", icono: "/icons/mono/php.svg" },
      { nombre: "Node.js", icono: "/icons/mono/nodejs.svg" },
      { nombre: "Express.js", icono: "/icons/mono/express.svg" },
    ],
  },
  {
    titulo: "Datos y herramientas",
    items: [
      { nombre: "MySQL", icono: "/icons/mono/mysql.svg" },
      { nombre: "PostgreSQL", icono: "/icons/mono/postgresql.svg" },
      { nombre: "Git", icono: "/icons/mono/git.svg" },
      { nombre: "GitHub", icono: "/icons/mono/github.svg" },
      { nombre: "GitLab", icono: "/icons/mono/gitlab.svg" },
      { nombre: "VS Code", icono: "/icons/mono/vscode.svg" },
      { nombre: "PowerShell / CMD", icono: "/icons/mono/powershell.svg" },
      { nombre: "Postman", icono: "/icons/mono/postman.svg" },
      { nombre: "Insomnia", icono: "/icons/mono/insomnia.svg" },
      // { nombre: "Claude", icono: "/icons/mono/claude.svg" },
    ],
  },
]

function TechItem({ nombre, icono }: Tech) {
  return (
    <li className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-text">
      <span
        aria-hidden="true"
        className="h-5 w-5 shrink-0 bg-current text-text"
        style={{
          maskImage: `url(${icono})`,
          WebkitMaskImage: `url(${icono})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
      {nombre}
    </li>
  )
}

function Stack() {
  return (
    <section id="stack" className={sectionBand}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Stack"
            title="Con qué trabajo"
            lead="La base del día a día es el ecosistema Microsoft. Sobre eso, las herramientas con las que automatizo y construyo."
          />
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-xl border border-border bg-surface p-7 shadow-card sm:p-9">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-text-subtle uppercase">
              Infraestructura y Microsoft
            </h3>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MICROSOFT.map(({ Icon, nombre, detalle }) => (
                <div key={nombre} className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent-text">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">{nombre}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-text-muted">
                      {detalle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {GRUPOS.map((grupo, index) => (
            <Reveal key={grupo.titulo} className="h-full" delay={index * 80}>
              <div className="h-full rounded-xl border border-border bg-surface p-7 shadow-card">
                <h3 className="text-sm font-semibold tracking-[0.14em] text-text-subtle uppercase">
                  {grupo.titulo}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {grupo.items.map((item) => (
                    <TechItem key={item.nombre} {...item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-text-muted">
            Uso asistentes de IA (Copilot en Microsoft 365, Gemini y Claude)
            como herramienta de trabajo diaria, tanto para acelerar tareas de
            soporte como para desarrollar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Stack
