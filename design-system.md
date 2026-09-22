# Portfolio de Mauro Lucero — Sistema de Diseño

> Documento vivo. Refleja el estado real del código.
> Última actualización: 2026-09-16 (v2 — rediseño enterprise)

---

## 1. Posicionamiento

- **Perfil**: Técnico de Soporte IT e infraestructura Microsoft **que además desarrolla software**. La intersección es el diferencial; ninguna de las dos mitades sola lo es.
- **Público objetivo (en orden de prioridad)**:
  1. Reclutadores IT y hiring managers de infraestructura / Microsoft 365.
  2. Empresas que necesitan soporte IT-sysadmin.
  3. Clientes o empresas que buscan desarrollo.
- **Mensaje principal**: "Que la infraestructura funcione. Y que el equipo tenga mejores herramientas."
- **Prueba de 10 segundos**: al entrar, el visitante tiene que entender que trabaja en un entorno corporativo real (grupo empresario multi-unidad), que administra el stack Microsoft en producción, y que construye herramientas que la gente usa.
- **Tono visual**: enterprise-tech sobrio. Referencias: Microsoft, Stripe, Linear, Vercel, GitHub.
- **Idioma**: español. Contenido estructurado en `src/data.ts` y arrays por sección para facilitar una versión bilingüe a futuro.

---

## 2. Paleta de colores

### Marca

| Nombre      | Hex       | Uso                                            |
| ----------- | --------- | ---------------------------------------------- |
| Primary     | `#152251` | Color de marca, fondos oscuros, logos internos |
| Primary 600 | `#203075` | Estados intermedios                            |
| Primary 500 | `#26378b` | Acentos de marca, estados de proyecto          |
| Accent      | `#f86449` | Detalles: eyebrows, dots, focus ring, iconos   |

**Regla de uso del acento (importante)**: el coral es un acento, no un color de superficie. Nunca se usa como fondo de botón primario ni como color de texto corrido — `#f86449` sobre blanco no llega a contraste AA. Para texto se usa el token `--accent-text`, que es una variante accesible por tema.

### Botones

El botón primario es **tinta invertida** (`bg-text` / `text-background`): negro-azulado sobre claro, blanco sobre oscuro. Máximo contraste en ambos temas y lectura premium tipo Linear/Vercel. El secundario es bordeado.

### Neutros — Modo claro

Neutros tintados con el azul de marca, sin blanco puro en ninguna superficie. Conservan la luminosidad baja que resolvió la fatiga visual y recuperan el tono de marca que habían perdido los grises acromáticos. Es la técnica de GitHub y Stripe: grises con temperatura de marca.

**Principio**: el azul es identidad y estructura (fondos, bordes, botón principal); el texto es neutro (negro y grises), y el coral es acción y énfasis (eyebrows, viñetas, hovers). Se probaron los títulos en azul de marca y se descartaron: el texto azul se leía menos sobrio que el negro.

| Token | Hex | Uso |
| --- | --- | --- |
| `--bg` | `#eef1f7` | Canvas de la página |
| `--band` | `#e4e9f4` | Secciones alternas, azuladas de baja intensidad |
| `--surface` | `#f7f9fc` | Tarjetas elevadas (nunca `#ffffff`) |
| `--surface-2` | `#e1e7f3` | Rellenos hundidos: chips, iconos, listas |
| `--text` | `#1d1f24` | Títulos y texto destacado, casi negro neutro |
| `--btn-primary` | `#152251` | Fondo del botón primario, en el azul de marca (en oscuro conserva el color claro invertido) |
| `--text-muted` | `#52555d` | Párrafos, gris neutro |
| `--text-subtle` | `#5a5d66` | Labels, metadatos |
| `--border` | `#d6ddec` | Bordes de tarjeta |
| `--border-strong` | `#bcc7df` | Bordes de controles |
| `--card-hover` | `rgba(38, 55, 139, 0.35)` | Borde de las tarjetas de proyecto en hover |
| `--accent-text` | `#f86449` | Coral para eyebrows, iconos y hovers |

Contraste mínimo medido sobre la superficie más oscura donde aparece cada token:

| Token | Mínimo |
| --- | --- |
| `--text` | 13.3:1 |
| `--text-muted` | 6.0:1 |
| `--text-subtle` | 5.3:1 |

La luminosidad de cada superficie es levemente menor que la de la paleta gris anterior, así que el tinte azul no vuelve a subir el brillo.

**Ritmo de secciones**: Hero con degradado propio → Entorno (banda) → Perfil (canvas) → Experiencia (banda) → Proyectos (canvas) → Stack (banda) → Formación (canvas) → Detrás de cada proyecto (banda) → Contacto (canvas). La variante está en `sectionBand` (`src/styles.ts`). En modo oscuro `--band` es transparente, así que no hay bandas.

**Fondo del Hero** (`.hero-bg`): degradado vertical de `--hero-top` (`#dce4f3`, azul suave) a `--hero-bottom`, grilla de 72 px y un tinte de marca al 6%. Es local al Hero, no una capa fija de toda la página. La grilla usa el azul de marca al 6%, que da exactamente la misma suavidad que la grilla gris anterior (1.10:1).

**Modo oscuro**: todos los tokens que cambian en claro están redefinidos en los dos bloques oscuros, y `--card-hover` se fija igual a `--border`. El oscuro no hereda nada del bloque claro salvo el coral de marca, que es el mismo en ambos temas.

### Neutros — Modo oscuro

| Token          | Hex       |
| -------------- | --------- |
| `--bg`         | `#0b1226` |
| `--surface`    | `#121a34` |
| `--surface-2`  | `#18223f` |
| `--text`       | `#f4f6fb` |
| `--text-muted` | `#a8b0c7` |
| `--text-subtle`| `#7d87a5` |
| `--border`     | `#212c51` |
| `--border-strong` | `#2e3b68` |
| `--accent-text`| `#ff8d76` |

> Cambio respecto de v1: en oscuro, `surface` y `border` se desaturaron (antes `#152251` y `#26378b`). Los originales generaban tarjetas que se leían como bloques azules y bordes demasiado marcados.

### Elevación

Tres niveles, expresados con los tokens `--shadow-sm/md/lg` (utilidades `shadow-card`, `shadow-panel`, `shadow-float`):

| Nivel | Uso                                    |
| ----- | -------------------------------------- |
| 0     | Canvas de la página                    |
| 1     | Tarjetas y paneles (`shadow-card`)     |
| 2     | Paneles destacados y hover (`shadow-panel`) |
| 3     | Elementos flotantes sobre imagen (`shadow-float`) |

En claro son sombras reales; en oscuro son casi imperceptibles, porque en interfaces oscuras la profundidad la dan los bordes y la diferencia de superficie, no la sombra.

**Imágenes** (`shadow-media` + `ring-media-edge`): las fotos necesitan un tratamiento propio porque su contenido puede ser tan claro como el canvas y el borde se disuelve. La solución es la de GitHub y Stripe: un hairline de 1px algo más contrastado que el borde de las tarjetas (`--media-edge`, 16% en claro) más una sombra de tres capas de radio corto a largo. Define el recorte sin recurrir a una sombra grande que haría flotar la imagen.

---

## 3. Tipografía

- Familia única: **IBM Plex Sans** (400/500/600/700), cargada con `preconnect` + `<link>` en el `<head>` (no `@import` en CSS, que bloquea el render).
- Monoespaciada: stack del sistema (`ui-monospace`), sin request extra. Se usa solo en la portada del proyecto MSI.

Escala:

| Uso              | Clase                                              |
| ---------------- | -------------------------------------------------- |
| H1 (hero)        | `1.85rem` → `2.6rem` (sm) → `3.15rem` (lg), tracking-tight |
| H2 (sección)     | `text-2xl` → `text-3xl` (sm)                        |
| H3 (tarjetas)    | `text-base` / `text-lg`                             |
| Cuerpo           | `text-sm` / `text-base`, `leading-relaxed`          |
| Eyebrow          | `text-xs`, uppercase, `tracking-[0.14em]`           |

---

## 4. Modo claro / oscuro

Tres estados: **sistema** (por defecto, sigue `prefers-color-scheme`), **claro** y **oscuro** forzados mediante `data-theme` en `<html>`. La preferencia se guarda en `localStorage` y se aplica con un script inline en `index.html` antes del primer pintado, para evitar parpadeo.

---

## 5. Estructura de contenido

Orden pensado para que el lector objetivo (reclutador / hiring manager de infraestructura) valide el perfil lo antes posible:

1. **Hero** — dirección de arte distinta por dispositivo:
   - **Mobile/tablet**: ubicación → titular → **retrato 4:5 a todo el ancho** con placa de credencial superpuesta ("Actualmente · Técnico de Soporte IT · Grupo Slots") → subtítulo → CTA. La foto entra completa en la primera pantalla y funciona como credencial, no como avatar. El CTA de CV queda siempre accesible en el nav.
   - **Desktop**: dos columnas, retrato cuadrado de 400 px con la tarjeta de rol flotando sobre el borde.
   - Las dos imágenes usan `sizes` condicionado al breakpoint para que la versión oculta no descargue el archivo grande.
2. **El entorno** — cifras públicas de Grupo Slots (1985, +1000 colaboradores, 27 localidades, +60 unidades comerciales) y las ocho unidades de negocio. Establece escala y criticidad antes de hablar de él mismo, y va siempre atribuido como dato público del grupo.
3. **Perfil** — reemplaza al viejo "Sobre mí". Tres tarjetas: infraestructura Microsoft, automatización y desarrollo. El texto en primera persona quedó reducido a un párrafo de cierre.
4. **Experiencia** — tarjeta principal de Grupo Slots con contexto del grupo, logros orientados a resultado y tecnologías. Bloque compacto para Metrickal.
5. **Trabajo destacado** — orden por relevancia para el público objetivo: Generador de Firmas (en producción) → Instalador MSI (uso interno) → Clinic System (en desarrollo). Cada tarjeta tiene portada diseñada; las que no tienen captura usan una composición propia, nunca un placeholder vacío.
6. **Stack** — panel destacado de Infraestructura y Microsoft (el diferencial), y debajo desarrollo y datos/herramientas. La IA va como una línea de texto, no como categoría de habilidades: listar asistentes como "skills" lee a portfolio de estudiante.
7. **Formación** — timeline de estudios + panel de cursos.
8. **Detrás de cada proyecto** — reconocimiento a profesores, compañeros de trabajo, amigos y familia en una cuadrícula de cuatro tarjetas, más una cita destacada sobre el azul de marca. Va después de Formación y antes de Contacto: cierra el recorrido en tono humano justo antes de la llamada a la acción, sin interrumpir el argumento profesional.
9. **Contacto** — panel de cierre con pregunta directa, CTA de email, CV y los cuatro canales.
10. **Footer**.

Navegación: nav fijo con blur al hacer scroll, scrollspy que resalta la sección activa y menú hamburguesa por debajo de `lg`.

---

## 6. Stack tecnológico

- **Framework**: React 19 + TypeScript + Vite.
- **Estilos**: Tailwind CSS v4 con tokens como variables CSS (`@theme inline`).
- **Animación**: sin librerías. Un solo patrón de entrada (`Reveal`, IntersectionObserver + transición CSS) que respeta `prefers-reduced-motion`.
- **Fondo**: grilla CSS estática con máscara radial. Sin canvas ni `requestAnimationFrame`.
- **Deploy**: pendiente (Vercel o Netlify).

---

## 7. Accesibilidad y SEO

- Foco visible global (`:focus-visible` con anillo de acento).
- Contraste: el acento nunca se usa como texto pequeño; para eso está `--accent-text`.
- Imágenes con `width`/`height` para evitar CLS, `srcset` en el retrato y `loading="lazy"` fuera del hero.
- `index.html` incluye: meta description, canonical, Open Graph + Twitter Card con imagen 1200×630 (`/img/og-image.jpg`), `theme-color` por esquema y JSON-LD de tipo `Person`.
- `public/robots.txt` y `public/sitemap.xml`.

---

## 8. Assets

- Los originales pesados viven en `assets-src/` (fuera del build).
- En `public/img/` solo van las versiones optimizadas: `perfil-01-{480,720,960}.webp` (19–70 KB) y `og-image.jpg`.

---

## 9. Pendientes

- [ ] Conseguir capturas reales del Generador de Firmas y del Instalador MSI para reemplazar las portadas ilustrativas.
- [ ] Sumar métricas concretas al bloque de experiencia (usuarios soportados, equipos administrados, tiempos de respuesta).
- [ ] Certificaciones Microsoft (MS-900 / AZ-900 / MD-102) — hoy no hay sección porque no hay contenido.
- [ ] Migrar los repos internos de GitLab a GitHub personal para poder linkear código.
- [ ] Activar `contacto@maurolucero.com.ar` y reemplazar el email en `src/data.ts`.
- [ ] Definir hosting y apuntar el dominio al nuevo build.
