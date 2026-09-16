import { container, section } from "../styles"
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
  icono?: string
}

const GRUPOS: { titulo: string; items: Tech[] }[] = [
  {
    titulo: "Desarrollo",
    items: [
      { nombre: "HTML", icono: "/icons/html.svg" },
      { nombre: "CSS", icono: "/icons/css.svg" },
      { nombre: "JavaScript", icono: "/icons/js.svg" },
      { nombre: "TypeScript", icono: "/icons/typescript.svg" },
      { nombre: "React", icono: "/icons/react.svg" },
      { nombre: "Tailwind CSS", icono: "/icons/tailwindcss.svg" },
      { nombre: "Bootstrap", icono: "/icons/bootstrap.svg" },
      { nombre: "PHP", icono: "/icons/php.svg" },
      { nombre: "Node.js", icono: "/icons/nodejs.svg" },
      { nombre: "Express.js", icono: "/icons/expressjs.svg" },
    ],
  },
  {
    titulo: "Datos y herramientas",
    items: [
      { nombre: "MySQL", icono: "/icons/mysql.svg" },
      { nombre: "PostgreSQL", icono: "/icons/postgresql.svg" },
      { nombre: "Git", icono: "/icons/git.svg" },
      { nombre: "GitHub", icono: "/icons/github.svg" },
      { nombre: "GitLab" },
      { nombre: "VS Code", icono: "/icons/vscode.svg" },
      { nombre: "PowerShell / CMD", icono: "/icons/terminal.svg" },
      { nombre: "Postman" },
      { nombre: "Insomnia" },
    ],
  },
  {
    titulo: "IA y productividad",
    items: [
      { nombre: "Microsoft Copilot" },
      { nombre: "Gemini Pro" },
      { nombre: "Claude" },
    ],
  },
]

function TechChip({ nombre, icono }: Tech) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-text">
      {icono && (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-white p-0.5 ring-1 ring-black/5">
          <img
            src={icono}
            alt=""
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </span>
      )}
      {nombre}
    </span>
  )
}

function Stack() {
  return (
    <section id="stack" className={section}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Stack"
            title="Con qué trabajo"
            lead="La base del día a día es el ecosistema Microsoft. Sobre eso, las herramientas con las que automatizo y construyo."
          />
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-xl border border-border bg-surface p-7 sm:p-9">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-text-subtle uppercase">
              Infraestructura y Microsoft
            </h3>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MICROSOFT.map(({ Icon, nombre, detalle }) => (
                <div key={nombre} className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                    <Icon className="h-[18px] w-[18px]" />
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

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {GRUPOS.map((grupo, index) => (
            <Reveal key={grupo.titulo} className="h-full" delay={index * 80}>
              <div className="h-full rounded-xl border border-border p-7">
                <h3 className="text-sm font-semibold tracking-[0.14em] text-text-subtle uppercase">
                  {grupo.titulo}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {grupo.items.map((item) => (
                    <TechChip key={item.nombre} {...item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
