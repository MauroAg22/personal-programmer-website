interface Enlace {
  label: string
  href: string
}

interface Proyecto {
  titulo: string
  stack: string[]
  descripcion: string
  imagen?: string
  enlaces: Enlace[]
  notaPrivado?: string
}

const PROYECTOS: Proyecto[] = [
  {
    titulo: "Clinic System",
    stack: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JS"],
    descripcion:
      "Sistema de gestión para clínicas/hospitales: médicos, especialidades, pacientes y consultas. Aún en desarrollo.",
    imagen: "/img/projects/clinic-system.webp",
    enlaces: [
      { label: "Código", href: "https://github.com/MauroAg22/clinic-system" },
      { label: "Demo", href: "https://maurolucero.com.ar/projects/clinic-system/" },
    ],
  },
  {
    titulo: "Generador de Firmas — Grupo Slots",
    stack: ["HTML", "CSS", "JS", "JSON"],
    descripcion:
      "Herramienta institucional en producción: genera firmas de correo estandarizadas para colaboradores de Grupo Slots, con formatos según cada empresa del grupo (Lotería de San Luis, Epic Hoteles, Jugadón, etc.).",
    enlaces: [{ label: "Demo", href: "https://firma.gruposlots.ar/" }],
    notaPrivado: "Código en GitLab interno de la empresa",
  },
  {
    titulo: "Instalador MSI Corporativo",
    stack: ["InnoSetup", "CMD"],
    descripcion:
      "Instalador corporativo que equipa automáticamente los equipos de colaboradores con todo el software utilizado en la empresa. Incluye seteo preestablecido de contraseñas para asistencia remota (AnyDesk, UltraVNC). En desarrollo/uso interno.",
    enlaces: [],
    notaPrivado: "Código en GitLab interno de la empresa",
  },
]

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
      />
      <path
        fillRule="evenodd"
        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
      />
    </svg>
  )
}

function PlaceholderVisual() {
  return (
    <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-primary to-primary-500">
      <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor" className="text-white/40" aria-hidden="true">
        <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
      </svg>
    </div>
  )
}

function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      {proyecto.imagen ? (
        <img
          src={proyecto.imagen}
          alt={`Captura de pantalla de ${proyecto.titulo}`}
          className="h-44 w-full object-cover object-top"
        />
      ) : (
        <PlaceholderVisual />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-text">{proyecto.titulo}</h3>

        <div className="flex flex-wrap gap-2">
          {proyecto.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="flex-1 text-sm text-text-muted">{proyecto.descripcion}</p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          {proyecto.enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              {enlace.label}
              <ExternalLinkIcon />
            </a>
          ))}
          {proyecto.notaPrivado && (
            <span className="text-xs text-text-muted italic">
              {proyecto.notaPrivado}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function Proyectos() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-semibold text-text">
        Proyectos / Portfolio técnico
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROYECTOS.map((proyecto) => (
          <ProyectoCard key={proyecto.titulo} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
