interface Estudio {
  titulo: string
  institucion: string
  periodo: string
  color: "accent" | "primary"
}

const ESTUDIOS: Estudio[] = [
  {
    titulo: "Programación Universitaria de Sistemas",
    institucion: "Universidad Nacional de Villa Mercedes",
    periodo: "2021 — Actualidad",
    color: "accent",
  },
  {
    titulo: "Técnico en Industria de Procesos",
    institucion: 'Centro Educativo Número 10 "Ramiro Podetti"',
    periodo: "Egresado en 2015",
    color: "primary",
  },
]

function Formacion() {
  return (
    <section id="formacion" className="mx-auto max-w-2xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-semibold text-text">Formación</h2>

      <div className="flex flex-col gap-10 border-l-2 border-border pl-8">
        {ESTUDIOS.map((estudio) => (
          <div key={estudio.titulo} className="relative">
            <span
              className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-background ${
                estudio.color === "accent" ? "bg-accent" : "bg-primary-500"
              }`}
            />
            <h3 className="text-lg font-semibold text-text">
              {estudio.titulo}
            </h3>
            <p className="text-text-muted">{estudio.institucion}</p>
            <p className="text-sm font-medium text-text-muted">
              {estudio.periodo}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Formacion
