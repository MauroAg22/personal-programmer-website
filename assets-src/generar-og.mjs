// Generador de las imágenes de marca (concepto "Estado operativo"). Produce en public/img/:
//   og-image.jpg                   1200x630   Open Graph principal
//   og-square.jpg                  1200x1200  Open Graph cuadrada: solo el logo
//   square-logo-bg-name.jpg        1200x1200  logo y nombre
//   square-logo-bg-name-title.jpg  1200x1200  logo, nombre y lema
// Comparten lenguaje (fondo, logo en marca blanca y tipografía): la
// horizontal alinea el texto a la izquierda con el logo a la derecha; las
// cuadradas centran el logo, solo o con el nombre y el lema debajo.
//
// Para volver a ejecutarlo:
//   1. npm install --no-save sharp opentype.js
//   2. Descargar a .tmp-og/fonts/ los TTF de IBM Plex desde Google Fonts:
//      PlexSans-Bold.ttf, PlexSans-Regular.ttf y PlexMono-Medium.ttf
//      (https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|IBM+Plex+Mono:500)
//   3. node assets-src/generar-og.mjs [horizontal|logo|logo-nombre|logo-nombre-lema]
//      (sin argumento, todas)
//   4. npm uninstall sharp opentype.js && Remove-Item -Recurse -Force .tmp-og  (PowerShell)

import sharp from "sharp"
import opentype from "opentype.js"
import { readFileSync, statSync } from "node:fs"

const cargar = (ruta) => opentype.parse(readFileSync(ruta).buffer)

const F = {
  bold: cargar(".tmp-og/fonts/PlexSans-Bold.ttf"),
  regular: cargar(".tmp-og/fonts/PlexSans-Regular.ttf"),
  mono: cargar(".tmp-og/fonts/PlexMono-Medium.ttf"),
}

const COPY = {
  nombre: "Mauro Lucero",
  especialidad: "Microsoft 365 · Active Directory",
  area: "Automatización y desarrollo de software",
  lema: "Desarrollo y automatización",
  frase: ["Que la infraestructura funcione.", "Y que el equipo tenga mejores herramientas."],
  sitio: "maurolucero.com.ar",
}

const C = {
  nodo: "#94aaff",
  coral: "#f86449",
  verde: "#35c07a",
  blanco: "#ffffff",
}

const LOGO = {
  archivo: "public/img/logo.webp",
  claro: "#ffffff",
  oscuro: "#b9c4e8",
}

// Un caché por fuente: dos fuentes al mismo tamaño no deben compartir glifos.
const cacheGlifos = new Map()

// opentype corrompe la ruta de un glifo si se la pide dos veces en posiciones
// distintas, así que cada glifo se calcula una sola vez en el origen y luego
// se posiciona con una traslación.
function rutaGlifo(font, char, size) {
  if (!cacheGlifos.has(font)) cacheGlifos.set(font, new Map())
  const cache = cacheGlifos.get(font)
  const clave = `${size}|${char}`
  if (!cache.has(clave)) cache.set(clave, font.charToGlyph(char).getPath(0, 0, size).toPathData(2))
  return cache.get(clave)
}

function texto(font, str, x, y, size, fill, opacity = 1, tracking = 0) {
  const em = font.unitsPerEm
  const glifos = font.stringToGlyphs(str)
  let cursor = x
  let out = ""
  for (let i = 0; i < glifos.length; i++) {
    const g = glifos[i]
    const char = str[i]
    const d = char === " " ? "" : rutaGlifo(font, char, size)
    if (d && !d.includes("NaN")) {
      out += `<g transform="translate(${cursor.toFixed(2)} ${y})"><path d="${d}"/></g>`
    }
    cursor += (g.advanceWidth / em) * size + tracking
    if (i + 1 < glifos.length) cursor += (font.getKerningValue(g, glifos[i + 1]) / em) * size
  }
  return `<g fill="${fill}" fill-opacity="${opacity}">${out}</g>`
}

function grilla(w, h, paso = 60) {
  let l = ""
  for (let x = paso; x < w; x += paso) l += `<line x1="${x}" y1="0" x2="${x}" y2="${h}"/>`
  for (let y = paso; y < h; y += paso) l += `<line x1="0" y1="${y}" x2="${w}" y2="${y}"/>`
  return l
}

function topologia(nodos, enlaces) {
  const lineas = enlaces
    .map(([a, b]) => {
      const [x1, y1] = nodos[a]
      const [x2, y2] = nodos[b]
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.nodo}" stroke-opacity="0.13" stroke-width="1"/>`
    })
    .join("")
  const puntos = nodos
    .map(([x, y, r = 3]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.nodo}" fill-opacity="0.26"/>`)
    .join("")
  return lineas + puntos
}

// La grilla y la topología se desvanecen con una máscara: lineal hacia la
// derecha, o radial hacia el centro para que enmarquen sin competir.
function fondo(w, h, nodos, enlaces, mascara) {
  const degradado =
    mascara.tipo === "radial"
      ? `<radialGradient id="fade" cx="0.5" cy="0.5" r="0.72">
      <stop offset="0" stop-color="#fff" stop-opacity="0.08"/>
      <stop offset="0.55" stop-color="#fff" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#fff" stop-opacity="1"/>
    </radialGradient>`
      : `<linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/>
      <stop offset="${mascara.desde}" stop-color="#fff" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>`
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d1530"/><stop offset="1" stop-color="#070c1c"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.26" cy="0.1" r="0.8">
      <stop offset="0" stop-color="#26378b" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#26378b" stop-opacity="0"/>
    </radialGradient>
    ${degradado}
    <mask id="mk"><rect width="${w}" height="${h}" fill="url(#fade)"/></mask>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#base)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g mask="url(#mk)" stroke="${C.nodo}" stroke-opacity="0.06" stroke-width="1">${grilla(w, h)}</g>
  <g mask="url(#mk)">${topologia(nodos, enlaces)}</g>
</svg>`)
}

// Logo en marca blanca. Sus azules originales (#25378c y #152151) quedan a
// 1.0-1.9:1 del fondo navy, así que se remapean por luminancia para conservar
// el relieve de los pliegues: brazos en `claro`, pliegue oscuro en `oscuro`.
//
// El archivo trae un contorno blanco opaco de ~15 px alrededor de la M, que se
// descarta: solo queda el núcleo azul. En la franja de antialias entre el azul
// y ese blanco, la cobertura se recupera según cuánto se aclaró el píxel
// respecto del azul vecino, para que el borde quede suave sobre el fondo.
const Y_BRAZO = 57.3 // luminancia de #25378c
const Y_PLIEGUE = 33.9 // luminancia de #152151
const Y_NUCLEO = 60 // hasta acá el píxel pertenece al azul de la M

async function marcaBlanca({ archivo, alto, claro, oscuro }) {
  const { data, info } = await sharp(archivo).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h } = info
  const lum = new Float32Array(w * h)
  for (let i = 0; i < w * h; i++) {
    lum[i] = data[i * 4 + 3] === 255 ? 0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2] : 255
  }
  const hex = (c) => [1, 3, 5].map((k) => parseInt(c.slice(k, k + 2), 16))
  const [c0, c1] = [hex(oscuro), hex(claro)]
  const salida = Buffer.alloc(w * h * 4)
  let [x0, y0, x1, y1] = [w, h, -1, -1]
  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const i = py * w + px
      let ref = lum[i] <= Y_NUCLEO ? lum[i] : -1
      for (let r = 1; ref < 0 && r <= 3; r++) {
        for (let dy = -r; dy <= r && ref < 0; dy++) {
          for (let dx = -r; dx <= r && ref < 0; dx++) {
            const nx = px + dx
            const ny = py + dy
            if (nx >= 0 && ny >= 0 && nx < w && ny < h && lum[ny * w + nx] <= Y_NUCLEO) ref = lum[ny * w + nx]
          }
        }
      }
      if (ref < 0) continue
      const cobertura = Math.min(1, Math.max(0, (255 - lum[i]) / (255 - ref)))
      const alfa = Math.round(255 * cobertura)
      if (alfa === 0) continue
      const k = Math.min(1, Math.max(0, (ref - Y_PLIEGUE) / (Y_BRAZO - Y_PLIEGUE)))
      for (let c = 0; c < 3; c++) salida[i * 4 + c] = Math.round(c0[c] + (c1[c] - c0[c]) * k)
      salida[i * 4 + 3] = alfa
      x0 = Math.min(x0, px)
      y0 = Math.min(y0, py)
      x1 = Math.max(x1, px)
      y1 = Math.max(y1, py)
    }
  }
  return sharp(salida, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 })
    .resize({ height: alto })
    .png()
    .toBuffer()
}

function capsula(x, y, altoCap, sizeTexto) {
  const padX = 22
  const dot = 5
  const gap = 13
  const w = padX * 2 + dot * 2 + gap + F.mono.getAdvanceWidth(COPY.especialidad, sizeTexto)
  const cy = y + altoCap / 2
  return {
    w,
    svg:
      `<rect x="${x}" y="${y}" width="${w}" height="${altoCap}" rx="${altoCap / 2}" fill="#ffffff" fill-opacity="0.055" stroke="#ffffff" stroke-opacity="0.17"/>` +
      `<circle cx="${x + padX + dot}" cy="${cy}" r="${dot}" fill="${C.verde}"/>` +
      `<circle cx="${x + padX + dot}" cy="${cy}" r="${dot + 4}" fill="${C.verde}" fill-opacity="0.22"/>` +
      texto(F.mono, COPY.especialidad, x + padX + dot * 2 + gap, cy + sizeTexto * 0.36, sizeTexto, "#e6ecfb"),
  }
}

async function generar({ w, h, salida, layout }) {
  const { nodos, enlaces, mascara, marca, txt = {} } = layout
  const fondoBuf = await sharp(fondo(w, h, nodos, enlaces, mascara)).png().toBuffer()

  const logo = await marcaBlanca({ ...LOGO, alto: marca.alto })
  const { width: lw, height: lh } = await sharp(logo).metadata()

  // Con txt.centrado cada línea se centra en el lienzo; si no, arranca en txt.x
  const centrar = (ancho) => (txt.centrado ? (w - ancho) / 2 : txt.x)
  const xTexto = (font, str, size) => centrar(font.getAdvanceWidth(str, size))
  const area = txt.area ?? COPY.area

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">`
  if (txt.nombreY) {
    svg += texto(F.bold, COPY.nombre, xTexto(F.bold, COPY.nombre, txt.nombreSize), txt.nombreY, txt.nombreSize, C.blanco)
  }
  if (txt.capsulaY) {
    const capX = centrar(capsula(0, 0, txt.capsulaAlto, txt.capsulaTexto).w)
    svg += capsula(capX, txt.capsulaY, txt.capsulaAlto, txt.capsulaTexto).svg
  }
  if (txt.areaY) {
    svg += texto(F.regular, area, xTexto(F.regular, area, txt.areaSize), txt.areaY, txt.areaSize, C.blanco, txt.areaOpacidad ?? 0.52)
  }
  if (txt.fraseY) {
    const interlineado = txt.fraseInterlineado
    const altoBarra = txt.fraseSize * 1.35 + (COPY.frase.length - 1) * interlineado
    svg += `<rect x="${txt.x}" y="${txt.fraseY - txt.fraseSize}" width="3" height="${altoBarra}" rx="1.5" fill="${C.coral}"/>`
    COPY.frase.forEach((linea, n) => {
      svg += texto(F.regular, linea, txt.x + 20, txt.fraseY + n * interlineado, txt.fraseSize, C.blanco, 0.74)
    })
  }
  if (txt.hairline) {
    const [h1, h2] = txt.hairline
    svg += `<line x1="${h1}" y1="${txt.hairlineY}" x2="${h2}" y2="${txt.hairlineY}" stroke="#ffffff" stroke-opacity="0.13" stroke-width="1"/>`
  }
  if (txt.sitioY) {
    svg += texto(F.mono, COPY.sitio, xTexto(F.mono, COPY.sitio, txt.sitioSize), txt.sitioY, txt.sitioSize, C.blanco, 0.55)
  }
  svg += `</svg>`

  await sharp(fondoBuf)
    .composite([
      { input: logo, left: Math.round(marca.cx - lw / 2), top: Math.round(marca.cy - lh / 2) },
      { input: Buffer.from(svg), left: 0, top: 0 },
    ])
    .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(salida)

  const { size } = statSync(salida)
  console.log(salida, `${w}x${h}`, (size / 1024).toFixed(0) + " KB", `| logo ${lw}x${lh}`)
}

// Fondo común de las piezas cuadradas: grilla y nodos en las esquinas,
// desvanecidos hacia el centro para enmarcar el logo.
const FONDO_CUADRADO = {
  mascara: { tipo: "radial" },
  nodos: [
    [70, 92], [190, 152], [300, 70],
    [900, 70], [1010, 152], [1130, 92],
    [70, 1108], [190, 1048], [300, 1130],
    [900, 1130], [1010, 1048], [1130, 1108],
  ],
  enlaces: [[0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8], [9, 10], [10, 11]],
}

const PIEZAS = [
  {
    id: "horizontal",
    w: 1200,
    h: 630,
    salida: "public/img/og-image.jpg",
    layout: {
      mascara: { tipo: "lineal", desde: 0.62 },
      nodos: [
        [120, 48], [252, 82], [392, 40], [520, 86], [648, 50],
        [742, 104], [820, 44], [910, 112], [1010, 70],
        [128, 566], [268, 596], [404, 552],
      ],
      enlaces: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 7], [6, 8], [9, 10], [10, 11]],
      marca: { alto: 340, cx: 953, cy: 315 },
      txt: {
        x: 82,
        nombreY: 168,
        nombreSize: 88,
        capsulaY: 202,
        capsulaAlto: 52,
        capsulaTexto: 29,
        areaY: 314,
        areaSize: 28,
        fraseY: 372,
        fraseSize: 30,
        fraseInterlineado: 41,
        hairline: [82, 706],
        hairlineY: 463,
        sitioY: 517,
        sitioSize: 24,
      },
    },
  },
  {
    // Solo el logo, centrado, al 65 % del ancho
    id: "logo",
    w: 1200,
    h: 1200,
    salida: "public/img/og-square.jpg",
    layout: {
      ...FONDO_CUADRADO,
      marca: { alto: 700, cx: 600, cy: 600 },
    },
  },
  {
    // Logo y nombre: mismo ancho (≈732 px) y márgenes superior e inferior iguales
    id: "logo-nombre",
    w: 1200,
    h: 1200,
    salida: "public/img/square-logo-bg-name.jpg",
    layout: {
      ...FONDO_CUADRADO,
      marca: { alto: 660, cx: 600, cy: 507 },
      txt: {
        centrado: true,
        nombreY: 1023,
        nombreSize: 115,
      },
    },
  },
  {
    // Logo, nombre y lema: el nombre mide lo mismo que el logo (≈688 px) para
    // que ambos bordes queden alineados. Márgenes superior e inferior iguales.
    id: "logo-nombre-lema",
    w: 1200,
    h: 1200,
    salida: "public/img/square-logo-bg-name-title.jpg",
    layout: {
      ...FONDO_CUADRADO,
      marca: { alto: 620, cx: 600, cy: 472 },
      txt: {
        centrado: true,
        nombreY: 957,
        nombreSize: 108,
        area: COPY.lema,
        areaY: 1029,
        areaSize: 42,
        areaOpacidad: 0.74,
      },
    },
  },
]

const solo = process.argv[2]
for (const pieza of PIEZAS) {
  if (!solo || solo === pieza.id) await generar(pieza)
}
