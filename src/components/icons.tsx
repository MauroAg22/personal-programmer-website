interface IconProps {
  className?: string
}

function Stroke({ className = "h-5 w-5", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M7 17 17 7M9 7h8v8" />
    </Stroke>
  )
}

export function ArrowDown({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Stroke>
  )
}

export function Download({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M12 3v12M8 11l4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </Stroke>
  )
}

export function Mail({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Stroke>
  )
}

export function MapPin({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Stroke>
  )
}

export function Menu({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  )
}

export function Close({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Stroke>
  )
}

export function Sun({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Stroke>
  )
}

export function Moon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </Stroke>
  )
}

export function Monitor({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </Stroke>
  )
}

export function Server({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </Stroke>
  )
}

export function Terminal({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7.5 9.5 3 2.5-3 2.5M13 15h4" />
    </Stroke>
  )
}

export function Code({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
    </Stroke>
  )
}

export function Shield({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M12 3l7.5 3v5.5c0 4.3-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.2-7.5-9.5V6L12 3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </Stroke>
  )
}

export function Cloud({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M7 18a4 4 0 0 1-.4-7.98 5.5 5.5 0 0 1 10.6-1.2A3.9 3.9 0 0 1 17.5 18H7Z" />
    </Stroke>
  )
}

export function Windows({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M4 6.5 11 5.4v6.1H4V6.5ZM13 5.1 20 4v7.5h-7V5.1ZM4 12.5h7v6.1L4 17.5v-5ZM13 12.5h7V20l-7-1.1v-6.4Z" />
    </Stroke>
  )
}

export function Linkedin({ className = "h-4.5 w-4.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193h-.016V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  )
}

export function Github({ className = "h-4.5 w-4.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  )
}

export function Whatsapp({ className = "h-4.5 w-4.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.326-5.607zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}
