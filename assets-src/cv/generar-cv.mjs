// Genera los PDF del CV a partir de las fuentes HTML de esta carpeta. Produce
// en assets-src/cv/pdf/:
//   mauro-lucero-cv-soporte-ti.pdf              Soporte TI e infraestructura Microsoft
//   mauro-lucero-cv-soporte-automatizacion.pdf  Soporte TI + automatización (perfil híbrido)
//   mauro-lucero-cv-desarrollo-frontend.pdf     Desarrollo web frontend
//
// Usa el Chrome (o Edge) instalado en modo headless, sin dependencias de npm.
// Chrome respeta el A4 declarado en @page, imprime los fondos (print-color-adjust)
// y convierte cada <a href> en un enlace clicable del PDF.
//
// Para volver a ejecutarlo (necesita conexión para cargar IBM Plex desde Google Fonts):
//   node assets-src/cv/generar-cv.mjs [soporte-ti|soporte-automatizacion|desarrollo-frontend]
//   (sin argumento, todas)
// Si Chrome no está en la ruta de siempre: $env:CHROME_PATH = "C:\ruta\chrome.exe"  (PowerShell)

import { execFileSync } from "node:child_process"
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const DIR = dirname(fileURLToPath(import.meta.url))
const SALIDA = join(DIR, "pdf")

const VERSIONES = ["soporte-ti", "soporte-automatizacion", "desarrollo-frontend"]

const CHROME = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((ruta) => ruta && existsSync(ruta))

if (!CHROME) {
  console.error("No encontré Chrome ni Edge. Definí CHROME_PATH con la ruta al ejecutable.")
  process.exit(1)
}

const pedidas = process.argv.slice(2)
const aGenerar = pedidas.length ? VERSIONES.filter((v) => pedidas.includes(v)) : VERSIONES

mkdirSync(SALIDA, { recursive: true })

for (const version of aGenerar) {
  const origen = pathToFileURL(join(DIR, `cv-${version}.html`)).href
  const destino = join(SALIDA, `mauro-lucero-cv-${version}.pdf`)

  // Perfil temporal propio: si el Chrome del usuario está abierto, no choca con él.
  const perfil = mkdtempSync(join(tmpdir(), "cv-chrome-"))
  try {
    execFileSync(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        `--user-data-dir=${perfil}`,
        "--no-pdf-header-footer",
        "--generate-pdf-document-outline",
        // Tiempo para que carguen las fuentes web antes de imprimir
        "--virtual-time-budget=15000",
        `--print-to-pdf=${destino}`,
        origen,
      ],
      { stdio: "pipe" },
    )
  } finally {
    rmSync(perfil, { recursive: true, force: true })
  }

  const kb = Math.round(statSync(destino).size / 1024)
  console.log(`✓ ${version} → pdf/mauro-lucero-cv-${version}.pdf (${kb} KB)`)
}
