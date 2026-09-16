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

El canvas es una superficie levemente teñida y las tarjetas son blancas y elevadas. Es el patrón de GitHub y Stripe: evita la "pantalla blanca infinita" y da profundidad real sin recurrir a efectos.

| Token          | Hex       | Contraste sobre canvas |
| -------------- | --------- | ---------------------- |
| `--bg` (canvas)| `#f4f6fb` | —                      |
| `--surface` (tarjeta elevada) | `#ffffff` | —      |
| `--surface-2` (relleno hundido) | `#eaeef8` | —    |
| `--text`       | `#0d1530` | 16.6 ✓                 |
| `--text-muted` | `#4b5570` | 6.9 ✓                  |
| `--text-subtle`| `#616b87` | 4.9 ✓                  |
| `--border`     | `#dde3f0` | —                      |
| `--border-strong` | `#bfc8dd` | —                   |
| `--accent-text`| `#b83c25` | 5.2 ✓                  |

> El token `--text-subtle` anterior (`#7f89a3`) daba 3.49:1 — fallaba WCAG AA y se usaba en eyebrows, estados de proyecto, footer y notas. Corregido.

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

1. **Hero** — avatar (mobile) o retrato grande (desktop), ubicación, titular de posicionamiento, subtítulo con la prueba concreta, CTA primario (CV) + secundario (experiencia) + accesos a LinkedIn/GitHub/email.
2. **El entorno** — cifras públicas de Grupo Slots (1985, +1000 colaboradores, 27 localidades, +60 unidades comerciales) y las ocho unidades de negocio. Establece escala y criticidad antes de hablar de él mismo, y va siempre atribuido como dato público del grupo.
3. **Perfil** — reemplaza al viejo "Sobre mí". Tres tarjetas: infraestructura Microsoft, automatización y desarrollo. El texto en primera persona quedó reducido a un párrafo de cierre.
4. **Experiencia** — tarjeta principal de Grupo Slots con contexto del grupo, logros orientados a resultado y tecnologías. Bloque compacto para Metrickal.
5. **Trabajo destacado** — orden por relevancia para el público objetivo: Generador de Firmas (en producción) → Instalador MSI (uso interno) → Clinic System (en desarrollo). Cada tarjeta tiene portada diseñada; las que no tienen captura usan una composición propia, nunca un placeholder vacío.
6. **Stack** — panel destacado de Infraestructura y Microsoft (el diferencial), y debajo desarrollo y datos/herramientas. La IA va como una línea de texto, no como categoría de habilidades: listar asistentes como "skills" lee a portfolio de estudiante.
7. **Formación** — timeline de estudios + panel de cursos.
8. **Contacto** — panel de cierre con pregunta directa, CTA de email, CV y los cuatro canales.
9. **Footer**.

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
