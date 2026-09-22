import { container, section } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"
import { Code, Server, Terminal } from "./icons"

const AREAS = [
  {
    Icon: Server,
    titulo: "Soporte IT e infraestructura Microsoft",
    texto:
      "Administración de Active Directory y Microsoft 365. Soporte presencial y remoto a los colaboradores y negocios de la empresa, donde la continuidad de las actividades durante cada jornada es crítica.",
  },
  {
    Icon: Terminal,
    titulo: "Puesta a punto de equipos",
    texto:
      "Scripts de instalación automatizada, recopilación de información y diagnóstico de problemas. Equipos nuevos operativos con todo el software y configuración estándar de la empresa sin intervención manual.",
  },
  {
    Icon: Code,
    titulo: "Desarrollo de software e integraciones",
    texto:
      "Desarrollo de herramientas internas que facilitan el trabajo, unifican y establecen estándares que terminan usándose en toda la organización.",
  },
]

function Perfil() {
  return (
    <section id="perfil" className={section}>
      <div className={container}>
        <Reveal>
          <SectionHeader
            eyebrow="Perfil"
            title="Dos perfiles que no suelen venir juntos"
            lead="Conozco la infraestructura desde adentro porque la administro todos los días, y sé construir software porque es lo que más me apasiona. Esa combinación es la que me permite detectar un problema operativo y resolverlo con una herramienta, no con un parche."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border shadow-card md:grid-cols-3">
          {AREAS.map(({ Icon, titulo, texto }, index) => (
            <Reveal key={titulo} className="h-full" delay={index * 80}>
              <div className="flex h-full flex-col gap-4 bg-surface p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent-text">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-text">{titulo}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-text-muted">
                  {texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-3xl text-[0.9375rem] leading-relaxed text-text-muted">
            Me desenvuelvo día a día con programación de sistemas informáticos, cloud computing,
            automatización, inteligencia artificial, me estoy formando también en el ámbito de
            redes y servidores, siempre con la idea de aportar soluciones que realmente sumen valor.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Perfil
