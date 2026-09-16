interface SectionHeaderProps {
  eyebrow: string
  title: string
  lead?: string
}

function SectionHeader({ eyebrow, title, lead }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-accent-text uppercase">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-text-muted">{lead}</p>
      )}
    </div>
  )
}

export default SectionHeader
