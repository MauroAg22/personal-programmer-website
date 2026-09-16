import { container, section } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

const ESTUDIOS = [
  {
    titulo: "Programación Universitaria de Sistemas",
    institucion: "Universidad Nacional de Villa Mercedes",
    periodo: "2021 — Actualidad",
    actual: true,
  },
  {
    titulo: "Técnico en Industria de Procesos",
    institucion: 'Centro Educativo N.º 10 "Ramiro Podetti"',
    periodo: "Egresado en 2015",
    actual: false,
  },
]

const CURSOS = [
  {
    nombre: "Primeros pasos del Desarrollo Front-End",
    institucion: "Argentina Programa 4.0",
  },
  {
    nombre: "Procesamiento de Datos con Python",
    institucion: "Argentina Programa 4.0",
  },
  {
    nombre: "Inglés",
    institucion: "Instituto de Idiomas ULP — Universidad de La Punta",
  },
]

function Formacion() {
  return (
    <section id="formacion" className={section}>
      <div className={container}>
        <Reveal>
          <SectionHeader eyebrow="Formación" title="Estudios y capacitación" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-8 border-l border-border pl-7">
              {ESTUDIOS.map((estudio) => (
                <div key={estudio.titulo} className="relative">
                  <span
                    className={`absolute top-1.5 -left-[33px] h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                      estudio.actual ? "bg-accent" : "bg-border-strong"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-text">
                    {estudio.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {estudio.institucion}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-text-subtle">
                    {estudio.periodo}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-xl border border-border p-7">
              <h3 className="text-sm font-semibold tracking-[0.14em] text-text-subtle uppercase">
                Cursos
              </h3>
              <ul className="mt-5 flex flex-col divide-y divide-border">
                {CURSOS.map((curso) => (
                  <li key={curso.nombre} className="py-3 first:pt-0 last:pb-0">
                    <p className="text-sm font-medium text-text">
                      {curso.nombre}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {curso.institucion}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Formacion
