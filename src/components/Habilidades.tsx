interface Skill {
  nombre: string
  icono?: string
}

interface Categoria {
  titulo: string
  skills: Skill[]
}

const CATEGORIAS: Categoria[] = [
  {
    titulo: "Infraestructura & Microsoft",
    skills: [
      { nombre: "Microsoft 365" },
      { nombre: "Microsoft Entra ID" },
      { nombre: "Active Directory" },
      { nombre: "Windows" },
    ],
  },
  {
    titulo: "Frontend",
    skills: [
      { nombre: "HTML", icono: "/icons/html.svg" },
      { nombre: "CSS", icono: "/icons/css.svg" },
      { nombre: "JavaScript", icono: "/icons/js.svg" },
      { nombre: "TypeScript", icono: "/icons/typescript.svg" },
      { nombre: "React", icono: "/icons/react.svg" },
      { nombre: "Tailwind CSS", icono: "/icons/tailwindcss.svg" },
      { nombre: "Bootstrap", icono: "/icons/bootstrap.svg" },
    ],
  },
  {
    titulo: "Backend",
    skills: [
      { nombre: "PHP", icono: "/icons/php.svg" },
      { nombre: "Node.js", icono: "/icons/nodejs.svg" },
      { nombre: "Express.js", icono: "/icons/expressjs.svg" },
    ],
  },
  {
    titulo: "Bases de datos",
    skills: [
      { nombre: "MySQL", icono: "/icons/mysql.svg" },
      { nombre: "PostgreSQL", icono: "/icons/postgresql.svg" },
    ],
  },
  {
    titulo: "Herramientas de desarrollo",
    skills: [
      { nombre: "Git", icono: "/icons/git.svg" },
      { nombre: "GitHub", icono: "/icons/github.svg" },
      { nombre: "GitLab" },
      { nombre: "VS Code", icono: "/icons/vscode.svg" },
      { nombre: "Terminal (PowerShell / CMD)", icono: "/icons/terminal.svg" },
      { nombre: "Postman" },
      { nombre: "Insomnia" },
    ],
  },
  {
    titulo: "IA & Productividad",
    skills: [
      { nombre: "Microsoft Copilot (M365)" },
      { nombre: "Gemini Pro" },
      { nombre: "Claude" },
    ],
  },
]

function Habilidades() {
  return (
    <section id="habilidades" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-semibold text-text">
        Habilidades técnicas
      </h2>

      <div className="flex flex-col gap-8">
        {CATEGORIAS.map((categoria) => (
          <div key={categoria.titulo}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-text-muted uppercase">
              {categoria.titulo}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {categoria.skills.map((skill) => (
                <span
                  key={skill.nombre}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-text"
                >
                  {skill.icono && (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-0.5">
                      <img
                        src={skill.icono}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </span>
                  )}
                  {skill.nombre}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Habilidades
