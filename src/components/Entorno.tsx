import { container, section } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

const CIFRAS = [
  { valor: "1985", label: "Año de fundación del grupo" },
  { valor: "+1000", label: "Colaboradores" },
  { valor: "27", label: "Localidades" },
  { valor: "+60", label: "Unidades comerciales" },
]

const UNIDADES = [
  "Salas y Casinos",
  "Juego Online",
  "Tecnología",
  "Lotería",
  "Hotelería",
  "Gastronomía",
  "Hípica",
  "Eventos",
]

function Entorno() {
  return (
    <section id="entorno" className={section}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="El entorno"
            title="No es un entorno de práctica: es un grupo empresario en operación"
            lead="Grupo Slots opera en una industria regulada y de servicio continuo, donde una caída no es un inconveniente sino una operación detenida. Ese es el contexto en el que administro identidades, equipos y accesos todos los días."
          />
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {CIFRAS.map((cifra) => (
              <div key={cifra.label} className="bg-surface px-7 py-8">
                <p className="text-3xl font-semibold tracking-tight text-text">
                  {cifra.valor}
                </p>
                <p className="mt-2 text-sm text-text-muted">{cifra.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-xl border border-border bg-surface p-7 shadow-card sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-sm font-semibold tracking-[0.14em] text-text-subtle uppercase">
                Ocho unidades de negocio
              </h3>
              <p className="text-xs text-text-subtle">
                Datos públicos de Grupo Slots
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              {UNIDADES.map((unidad) => (
                <li
                  key={unidad}
                  className="flex items-center gap-2.5 text-sm text-text"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {unidad}
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-border pt-6 text-sm leading-relaxed text-text-muted">
              Cada unidad tiene sus propios usuarios, equipos, sistemas y
              horarios. Dar soporte ahí significa moverse entre contextos muy
              distintos —una sala de juego, un hotel, una jornada hípica— sin
              que ninguno deje de funcionar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Entorno
