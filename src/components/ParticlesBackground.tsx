import { useEffect, useRef } from "react"
import { isDarkMode, THEME_CHANGE_EVENT } from "../theme"

const LIGHT_COLORS = ["#152251", "#203075", "#26378b"]
const DARK_COLORS = ["#3b57c2", "#5471d9", "#8fa3ea"]

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
  baseAlpha: number
  twinkleSpeed: number
  twinklePhase: number
}

function createParticles(width: number, height: number, colors: string[]): Particle[] {
  const area = width * height
  const count = Math.min(140, Math.max(40, Math.round(area / 14000)))

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.4 + 0.6,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    color: colors[Math.floor(Math.random() * colors.length)],
    baseAlpha: Math.random() * 0.4 + 0.25,
    twinkleSpeed: Math.random() * 0.015 + 0.005,
    twinklePhase: Math.random() * Math.PI * 2,
  }))
}

function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let colors = isDarkMode() ? DARK_COLORS : LIGHT_COLORS
    let animationId = 0
    let time = 0

    function resize() {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = createParticles(width, height, colors)
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -5) p.x = width + 5
        if (p.x > width + 5) p.x = -5
        if (p.y < -5) p.y = height + 5
        if (p.y > height + 5) p.y = -5

        const twinkle = Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.25
        const alpha = Math.max(0.08, Math.min(0.7, p.baseAlpha + twinkle))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha
        ctx.fill()
      }
      ctx.globalAlpha = 1
      time += 1
    }

    function loop() {
      draw()
      animationId = requestAnimationFrame(loop)
    }

    function handleColorSchemeChange() {
      colors = isDarkMode() ? DARK_COLORS : LIGHT_COLORS
      particles = createParticles(width, height, colors)
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationId)
      } else if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(loop)
      }
    }

    resize()
    window.addEventListener("resize", resize)
    darkModeQuery.addEventListener("change", handleColorSchemeChange)
    window.addEventListener(THEME_CHANGE_EVENT, handleColorSchemeChange)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    if (prefersReducedMotion) {
      draw()
    } else {
      animationId = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      darkModeQuery.removeEventListener("change", handleColorSchemeChange)
      window.removeEventListener(THEME_CHANGE_EVENT, handleColorSchemeChange)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default ParticlesBackground
