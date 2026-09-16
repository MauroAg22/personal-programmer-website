<div align="center">

<img src="public/img/logo.webp" alt="" width="56" height="56" />

# Mauro Lucero — Portfolio profesional

**Soporte IT · Microsoft 365, Entra ID y Active Directory · Desarrollo de software**

Sitio personal de presentación profesional. Página única, en español, construida con React y TypeScript.

[![React](https://img.shields.io/badge/React-19-0b1226?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-0b1226?style=flat-square&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-0b1226?style=flat-square&logo=vite&logoColor=FFD62E)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-0b1226?style=flat-square&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com)

</div>

<br />

<img src="public/img/og-image.jpg" alt="Vista previa del portfolio de Mauro Lucero" width="100%" />

---

## Sobre el proyecto

Este repositorio contiene el código de mi portfolio profesional: el lugar al que dirijo a reclutadores, responsables de IT y potenciales clientes cuando necesitan entender qué hago y en qué contexto lo hago.

No está pensado como una galería de proyectos para otros desarrolladores, sino como una carta de presentación orientada a generar confianza en menos de diez segundos: qué administro, en qué escala, y qué construyo.

## Perfil

Trabajo como **Técnico de Soporte IT en Grupo Slots** desde enero de 2025. Administro **Active Directory, Microsoft 365 y Microsoft Entra ID** para las empresas del grupo, y desarrollo las herramientas internas que usa el equipo.

Grupo Slots es un grupo empresario de entretenimiento fundado en 1985, con más de 1000 colaboradores en 27 localidades y ocho unidades de negocio, en una industria regulada donde la operación no puede detenerse. Entre otras cosas, doy soporte a los sistemas de eventos hípicos del Hipódromo de La Punta, en San Luis.

Ese cruce —infraestructura Microsoft en producción y desarrollo de software— es lo que el sitio busca comunicar.

## Características principales

- **Tema claro, oscuro y automático.** Tres estados seleccionables, con la preferencia persistida y aplicada antes del primer pintado para evitar el parpadeo inicial.
- **Accesibilidad WCAG AA.** Todos los textos verificados por contraste medido en ambos temas, foco visible en navegación por teclado y animaciones que respetan `prefers-reduced-motion`.
- **Dirección de arte por dispositivo.** El retrato se presenta en formato 4:5 a todo el ancho en móvil y como composición de dos columnas en escritorio, sirviendo en cada caso solo la imagen que corresponde.
- **Rendimiento.** Sin librerías de UI ni de animación: 79 KB de JavaScript y 7 KB de CSS comprimidos. Imágenes en WebP con `srcset` (19–70 KB según dispositivo).
- **SEO técnico.** Metadatos completos, Open Graph y Twitter Card con imagen propia, datos estructurados `Person` en JSON-LD, `sitemap.xml` y `robots.txt`.
- **Navegación con scrollspy.** Header fijo que resalta la sección activa y menú adaptado a pantallas chicas.

## Secciones del sitio

| Sección | Contenido |
| --- | --- |
| **Hero** | Propuesta de valor, ubicación, retrato con placa de rol y accesos directos a CV, LinkedIn, GitHub y email. |
| **El entorno** | Escala del grupo empresario donde trabajo y sus ocho unidades de negocio, con los datos públicos de la compañía. |
| **Perfil** | Las tres áreas en las que trabajo: infraestructura Microsoft, automatización y desarrollo de software. |
| **Experiencia** | Trayectoria en Grupo Slots con logros concretos, más la experiencia previa en modalidad remota internacional. |
| **Trabajo destacado** | Herramientas en producción (Generador de Firmas, Instalador MSI Corporativo) y proyectos propios. |
| **Stack** | Tecnologías agrupadas, con el ecosistema Microsoft como eje principal. |
| **Formación** | Estudios universitarios, título técnico y cursos. |
| **Contacto** | Canales directos: email, WhatsApp, LinkedIn y GitHub. |

## Tecnologías utilizadas

| Área | Herramientas |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Estilos | Tailwind CSS 4, con los tokens de diseño como variables CSS |
| Calidad | `tsc` en modo estricto y oxlint |
| Animación | IntersectionObserver y transiciones CSS, sin dependencias externas |

La paleta, la escala tipográfica, el sistema de elevación y las decisiones de arquitectura de la información están documentados en **[design-system.md](design-system.md)**.

## Instalación y ejecución local

Requiere **Node.js 20.19 o superior**.

```bash
git clone https://github.com/MauroAg22/personal-programmer-website.git
cd personal-programmer-website
npm install
npm run dev
```

El servidor de desarrollo queda disponible en `http://localhost:5173`.

### Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Verificación de tipos y build de producción en `dist/`. |
| `npm run preview` | Sirve localmente el build de producción. |
| `npm run lint` | Análisis estático del código. |

## Estructura del proyecto

```
.
├── public/
│   ├── doc/              Curriculum vitae en PDF
│   ├── icons/            Logotipos de tecnologías
│   ├── img/              Retratos optimizados, logo e imagen Open Graph
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       Una sección del sitio por componente
│   │   ├── Hero.tsx
│   │   ├── Entorno.tsx
│   │   ├── Perfil.tsx
│   │   ├── Experiencia.tsx
│   │   ├── Proyectos.tsx
│   │   ├── Stack.tsx
│   │   ├── Formacion.tsx
│   │   ├── Contacto.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Reveal.tsx        Animación de entrada al hacer scroll
│   │   ├── SectionHeader.tsx Encabezado común de secciones
│   │   ├── ThemeToggle.tsx   Selector de tema
│   │   └── icons.tsx         Iconografía en SVG
│   ├── data.ts           Datos de contacto y enlaces
│   ├── styles.ts         Clases compartidas de layout y componentes
│   ├── theme.ts          Detección del tema activo
│   ├── index.css         Tokens de diseño y estilos base
│   └── App.tsx           Composición de la página
├── assets-src/           Imágenes originales sin optimizar (fuera del build)
├── design-system.md      Sistema de diseño y decisiones de producto
└── index.html            Metadatos, SEO y script anti-parpadeo del tema
```

## Contacto

| | |
| --- | --- |
| **Email** | [mauroaglucero@gmail.com](mailto:mauroaglucero@gmail.com) |
| **LinkedIn** | [linkedin.com/in/mauro-ag-lucero](https://www.linkedin.com/in/mauro-ag-lucero) |
| **GitHub** | [github.com/MauroAg22](https://github.com/MauroAg22) |
| **WhatsApp** | [+54 9 2657 28-1741](https://wa.me/5492657281741) |
| **Ubicación** | San Luis, Argentina (GMT-3) · Presencial y remoto |

## Nota final

El código de este repositorio está publicado como referencia y puede consultarse libremente.

El contenido personal —fotografías, textos biográficos, curriculum vitae y marca personal— no es de uso libre. Si el proyecto te resulta útil como base técnica, la atribución se agradece.

<div align="center">

© 2026 Mauro Lucero

</div>
