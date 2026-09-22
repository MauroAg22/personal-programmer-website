import { container, sectionBand } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

const CIFRAS = [
  { valor: "+1350", label: "Colaboradores" },
  { valor: "+20", label: "Localidades" },
  { valor: "+60", label: "Puntos de operación" },
  { valor: "8", label: "Unidades de negocio" },
]

const UNIDADES = [
  "Salas y Casinos",
  "Jugadon",
  "Eva System",
  "Lotería de San Luis",
  "Hotelería",
  "Gastronomía",
  "Hípica",
  "Eventos",
]

function Entorno() {
  return (
    <section id="entorno" className={sectionBand}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="El entorno"
            title="Soporte TI para una empresa de más de 1350 personas"
            lead="Formo parte del equipo de Soporte TI de Grupo Slots, un grupo de entretenimiento con base en San Luis y ocho unidades de negocio. Cada una tiene sus propios usuarios, equipos y horarios, así que mi trabajo es moverme entre contextos muy distintos —una sala de juego, un hotel, una jornada hípica— sin que ninguno deje de funcionar."
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
                Negocios a los que doy soporte
              </h3>
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
              Cada vertical opera bajo dinámicas, infraestructuras y criticidades diferentes. Mi rol
              es adaptarme con agilidad a cada entorno tecnológico para garantizar una respuesta rápida
              y mantener la operación continua en todos los puntos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Entorno
