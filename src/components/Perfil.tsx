import { container, section } from "../styles"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"
import { Code, Server, Terminal } from "./icons"

const AREAS = [
  {
    Icon: Server,
    titulo: "Soporte IT e infraestructura Microsoft",
    texto:
      "Administración diaria de Active Directory, Microsoft 365 y Microsoft Entra ID. Soporte presencial y remoto a los colaboradores y negocios del grupo, incluidos los sistemas de eventos hípicos del Hipódromo de La Punta, donde la continuidad del servicio durante cada jornada es crítica.",
  },
  {
    Icon: Terminal,
    titulo: "Automatización y puesta a punto de equipos",
    texto:
      "Scripts de instalación silenciosa que evolucionaron en un instalador MSI corporativo: un equipo nuevo queda operativo con todo el software estándar de la empresa y la configuración de asistencia remota, sin intervención manual.",
  },
  {
    Icon: Code,
    titulo: "Desarrollo de software e integraciones",
    texto:
      "Integraciones de API y aplicaciones web con React, Node.js y PHP. Herramientas internas que nacen de un problema concreto del equipo de soporte y terminan usándose en toda la organización.",
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
            Estudio Programación Universitaria de Sistemas en la Universidad
            Nacional de Villa Mercedes y sigo formándome en cloud computing,
            automatización e inteligencia artificial, siempre con la idea de
            aportar soluciones que realmente sumen valor.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Perfil
