const LOGROS = [
  "Brindo soporte técnico presencial y remoto a colaboradores y negocios de Grupo Slots, administrando Active Directory, Microsoft 365 y Microsoft Entra ID",
  "Desarrollé el Generador de Firmas institucional (HTML/CSS/JS), una herramienta usada por todo el personal de la empresa para generar firmas de correo estandarizadas",
  "Doy soporte a los sistemas de eventos hípicos del Hipódromo de La Punta, San Luis",
  "Desarrollé scripts de instalación silenciosa de software, que evolucionaron en un instalador MSI corporativo para equipar automáticamente los equipos de los colaboradores con todo el software utilizado en la empresa",
]

function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-2xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-semibold text-text">Experiencia</h2>

      <div className="relative border-l-2 border-border pl-8">
        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-accent" />

        <h3 className="text-xl font-semibold text-text">
          Técnico de Soporte IT — Grupo Slots
        </h3>
        <p className="mb-4 text-sm font-medium text-text-muted">
          Enero 2025 — Actualidad
        </p>

        <ul className="flex flex-col gap-3 text-text-muted">
          {LOGROS.map((logro) => (
            <li key={logro} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              <span>{logro}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-border pt-6">
          <h4 className="font-semibold text-text">
            Agente de Atención Telefónica — Metrickal
          </h4>
          <p className="text-sm text-text-muted">
            Barcelona, España — remoto
          </p>
          <p className="mt-2 text-text-muted">
            Experiencia trabajando 100% remoto para una empresa
            internacional, en atención a clientes de Ecoscooting y
            AliExpress.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experiencia
