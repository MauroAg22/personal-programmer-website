import { container, sectionBand } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

const RECONOCIMIENTOS = [
  {
    titulo: "Profesores y mentores",
    texto:
      "Por despertar mi curiosidad y mi pasión por la programación. Por enseñarme que aprender no es un destino, sino un proceso constante, y por su gran aporte en mi persona para desarrollarme como profesional.",
  },
  {
    titulo: "Compañeros de trabajo",
    texto:
      "Por desafiarme a crecer cada día. Por brindarme un entorno donde puedo ser auténtico, aportar desde mis fortalezas, aprender de mis errores y seguir evolucionando tanto personal como profesionalmente.",
  },
  {
    titulo: "Amigos y compañeros",
    texto:
      "Por acompañarme en cada etapa, celebrar cada logro y empujarme a no bajar los brazos en los momentos difíciles. Por el valor de compartir ideas, mates, risas y proyectos juntos; tenerlos cerca marca la diferencia.",
  },
  {
    titulo: "Familia",
    texto:
      "Lo más importante para mí, mi gran motor. Por acompañarme en cada paso, por estar presentes en cada logro pero más aún cuando las cosas no salen. Y especialmente a mis padres, por los valores que me enseñaron, por su apoyo incondicional, y porque soy la persona que soy gracias a ellos.",
  },
]

function Gratitud() {
  return (
    <section id="gratitud" className={sectionBand}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Gratitud"
            title="Detrás de cada proyecto"
            lead="Nada de lo que he construido habría sido posible sin las personas que han estado presentes en mi camino. Quiero agradecer en este pequeño espacio a quienes me ayudaron a aprender, crecer y convertirme en la persona que soy hoy."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border shadow-card md:grid-cols-2">
          {RECONOCIMIENTOS.map(({ titulo, texto }, index) => (
            <Reveal key={titulo} className="h-full" delay={index * 80}>
              <div className="flex h-full flex-col gap-4 bg-surface p-7 sm:p-8">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                <h3 className="text-base font-semibold text-text">{titulo}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-text-muted">
                  {texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <figure className="rounded-xl bg-primary px-8 py-12 text-center shadow-panel sm:px-12">
            <span
              className="mx-auto block h-px w-10 bg-accent"
              aria-hidden="true"
            />
            <blockquote className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-balance text-white sm:text-xl">
              Ningún logro es completamente individual. También
              le pertenece a quienes formaron parte de mi camino. Simplemente ¡GRACIAS!
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

export default Gratitud
