# Portfolio de Mauro Lucero — Sistema de Diseño

> Documento vivo. Se va actualizando a medida que definimos cada parte del proyecto.
> Última actualización: 2026-09-15

---

## 1. Concepto / Idea principal

- **Posicionamiento**: Técnico de Soporte IT + Administrador Microsoft 365 + Desarrollador de Software.
- **Público objetivo**: reclutadores técnicos / empresas que buscan soporte IT-sysadmin, y clientes o empresas que buscan un dev.
- **Tono visual**: serio, corporativo-tech, tipo dashboard/enterprise, con un toque cálido que evite que se sienta frío.
- **Tagline (Hero)**: "Soporte IT · Microsoft 365 & Active Directory · Desarrollo de Software"
- **Idioma del sitio**: español únicamente por ahora. Posible versión bilingüe (español/inglés) a futuro — tener en cuenta al estructurar el contenido para facilitar esa expansión más adelante.

---

## 2. Paleta de colores

### Colores principales (marca)
| Nombre       | Hex       | Uso sugerido                          |
|--------------|-----------|----------------------------------------|
| Primary      | `#152251` | Color principal, fondos oscuros, header/footer |
| Primary 600  | `#203075` | Estados hover, secciones secundarias   |
| Primary 500  | `#26378b` | Acentos de marca, bordes, iconos       |

### Color de acento
| Nombre       | Hex        | Uso sugerido                    |
|--------------|------------|----------------------------------|
| Accent       | `#f86449` | Botones CTA, links activos, detalles destacados |

> Historial de prueba: se evaluaron `#F97316` (naranja vivo, descartado por muy "e-commerce") y `#B5591C` (terracota sobrio). Se eligió `#f86449` (coral-naranja) como balance entre calidez y sobriedad. Queda abierto a revisión más adelante.

### Neutros — Modo claro
| Nombre       | Hex       | Uso                     |
|--------------|-----------|--------------------------|
| Background   | `#FFFFFF` | Fondo principal          |
| Surface      | `#F4F6FB` | Tarjetas, secciones alternadas |
| Text primary | `#152251` | Títulos y texto principal |
| Text muted   | `#5B6478` | Texto secundario          |
| Border       | `#E2E6F0` | Separadores, bordes suaves |

### Neutros — Modo oscuro
| Nombre       | Hex       | Uso                     |
|--------------|-----------|--------------------------|
| Background   | `#0B1226` | Fondo principal          |
| Surface      | `#152251` | Tarjetas, secciones alternadas |
| Text primary | `#F4F6FB` | Títulos y texto principal |
| Text muted   | `#A8B0C7` | Texto secundario          |
| Border       | `#26378b` | Separadores, bordes suaves |

*(Pendiente: revisar contraste de accesibilidad —WCAG AA— una vez maquetado)*

---

## 3. Tipografía

| Uso        | Fuente          | Peso        | Fallback   |
|------------|-----------------|-------------|------------|
| Títulos    | IBM Plex Sans   | 600 (semibold) | sans-serif |
| Subtítulos | IBM Plex Sans   | 500 (medium)   | sans-serif |
| Cuerpo     | IBM Plex Sans   | 400 (regular)  | sans-serif |

> Se descartó la combinación Space Grotesk + Inter en favor de una única familia (IBM Plex Sans) con distintos pesos: da un look técnico, serio y prolijo, coherente con el perfil de infraestructura/dev tools.

- Escalas de tamaño y line-height: **pendiente de definir** al momento de maquetar.

---

## 4. Modo claro / oscuro

- El sitio soportará **ambos modos**, con toggle manual y detección de preferencia del sistema (`prefers-color-scheme`) como default.

---

## 5. Estructura de contenido (secciones)

1. **Hero**: layout `space-around`, foto grande (retrato) a la izquierda, bloque de texto centrado a la derecha (nombre, tagline, texto breve) con los 3 botones apilados verticalmente (Descargar CV, LinkedIn, GitHub). Foto protagonista, no un avatar chico.
2. **Sobre mí** — solo texto, 2-3 párrafos. Copy definitivo:

   > Trabajo en Grupo Slots como Técnico de Soporte IT desde enero de 2025, dando soporte a colaboradores y negocios de la empresa, y administrando Active Directory, Microsoft 365 y Microsoft Entra ID en el día a día. Entre las tareas que más disfruto está el soporte a los sistemas de eventos hípicos del Hipódromo de La Punta, en San Luis.
   >
   > Aunque el soporte técnico me gusta, lo que más me apasiona es programar y desarrollar: trabajo con integraciones de API y desarrollo pequeños scripts que facilitan el trabajo diario del equipo de soporte IT, además de aplicaciones web con React, Node.js y PHP.
   >
   > Estudio Programación Universitaria de Sistemas en la Universidad Nacional de Villa Mercedes y sigo formándome en cloud computing, automatización e inteligencia artificial, siempre con la idea de aportar soluciones que realmente sumen valor.

3. **Experiencia** (Grupo Slots — enero 2025 en adelante) — formato timeline, bloque principal. Bullets definitivos:
   - Brindo soporte técnico presencial y remoto a colaboradores y negocios de Grupo Slots, administrando Active Directory, Microsoft 365 y Microsoft Entra ID
   - Desarrollé el Generador de Firmas institucional (HTML/CSS/JS), una herramienta usada por todo el personal de la empresa para generar firmas de correo estandarizadas
   - Doy soporte a los sistemas de eventos hípicos del Hipódromo de La Punta, San Luis
   - Desarrollé scripts de instalación silenciosa de software, que evolucionaron en un instalador MSI corporativo para equipar automáticamente los equipos de los colaboradores con todo el software utilizado en la empresa
   - **Experiencia anterior** (bloque compacto, sin remarcar fechas/duración): Metrickal (Barcelona, España — remoto), Agente de Atención Telefónica. Mencionar solo por encima: experiencia trabajando 100% remoto para una empresa internacional, en atención a clientes de Ecoscooting y AliExpress.
4. **Proyectos / Portfolio técnico** — grid de tarjetas (imagen + título + stack + link).

   | Proyecto | Stack | Descripción | Links |
   |----------|-------|--------------|-------|
   | Clinic System | PHP, MySQL, Bootstrap, HTML, CSS, JS | Sistema de gestión para clínicas/hospitales: médicos, especialidades, pacientes y consultas. Aún en desarrollo. | [Código](https://github.com/MauroAg22/clinic-system) · [Demo](https://maurolucero.com.ar/projects/clinic-system/) |
   | Generador de Firmas — Grupo Slots | HTML, CSS, JS (datos en JSON) | Herramienta institucional en producción: genera firmas de correo estandarizadas para colaboradores de Grupo Slots, con formatos según cada empresa del grupo (Lotería de San Luis, Epic Hoteles, Jugadón, etc.). | [Demo](https://firma.gruposlots.ar/) · Código en GitLab interno de la empresa (pendiente de migrar a GitHub personal) |
   | Instalador MSI Corporativo | InnoSetup, scripts CMD (instalación silenciosa) | Instalador corporativo que equipa automáticamente los equipos de colaboradores con todo el software utilizado en la empresa. Incluye seteo preestablecido de contraseñas para asistencia remota (AnyDesk, UltraVNC). En desarrollo/uso interno. | Código en GitLab interno de la empresa (pendiente de migrar a GitHub personal) |

5. **Habilidades técnicas** — solo iconos/logos agrupados por categoría:
   - **Infraestructura & Microsoft**: Microsoft 365 · Microsoft Entra ID · Active Directory · Windows
   - **Frontend**: HTML · CSS · JavaScript · TypeScript · React · Tailwind CSS · Bootstrap
   - **Backend**: PHP · Node.js · Express.js
   - **Bases de datos**: MySQL · PostgreSQL
   - **Herramientas de desarrollo**: Git · GitHub · GitLab · VS Code · Terminal (PowerShell / CMD) · Postman · Insomnia
   - **IA & Productividad**: Microsoft Copilot (M365) · Gemini Pro · Claude

   > Se descartó (por ahora) la categoría "Aprendiendo" del sitio viejo (Docker, MongoDB, Prisma, Laravel, etc.) — posible reincorporación futura.
6. **Formación** — timeline simple:
   - Programación Universitaria de Sistemas — Universidad Nacional de Villa Mercedes (2021 - Actualidad)
   - Técnico en Industria de Procesos — Centro Educativo Número 10 "Ramiro Podetti" (egresado en 2015)

   Cursos:
   - Primeros pasos del Desarrollo Front-End — Argentina Programa 4.0
   - Procesamiento de Datos con Python — Argentina Programa 4.0
   - Inglés — Instituto de Idiomas ULP (Universidad de La Punta)
7. **Contacto** — bloque final con:
   - Email: mauroaglucero@gmail.com *(a futuro reemplazar por contacto@maurolucero.com.ar cuando esté operativo)*
   - LinkedIn: linkedin.com/in/mauro-ag-lucero
   - GitHub: github.com/MauroAg22
   - WhatsApp: +54 9 2657 28-1741

> Navegación: página única con scroll (single-page), nav fijo arriba con links ancla a cada sección.

*(Pendiente: revisar copy final de Habilidades, Formación y Contacto si hace falta ajustar algo)*

---

## 6. Stack tecnológico

- **Framework**: React + Vite (o Next.js si se suma blog/SEO a futuro)
- **Estilos**: Tailwind CSS, con paleta como variables CSS/tokens
- **Animaciones**: Framer Motion (opcional)
- **Deploy**: Vercel o Netlify
- **Contacto**: Formspree o EmailJS

*(Pendiente: decisión final de framework y de servicio de contacto)*

---

## 7. Pendientes / Próximos pasos

- [x] Confirmar tono exacto del naranja de acento → `#f86449`
- [x] Definir tipografía final → IBM Plex Sans
- [x] Escribir tagline del Hero → "Soporte IT · Microsoft 365 & Active Directory · Desarrollo de Software"
- [x] Wireframe de cada sección → definido (ver sección 5), Hero con layout space-around
- [x] Definir proyectos concretos a incluir → Clinic System, Generador de Firmas (Grupo Slots), tercer proyecto pendiente de finalizar
- [x] Copy final de "Sobre mí" → definido
- [x] Logros/bullets de Experiencia en Grupo Slots → definidos
- [x] Definir tercer proyecto → Instalador MSI Corporativo (InnoSetup + CMD)
- [ ] Migrar repos internos (GitLab de la empresa) a GitHub personal para poder linkear el código: Generador de Firmas e Instalador MSI Corporativo
- [ ] Activar contacto@maurolucero.com.ar y reemplazarlo como email de contacto en el sitio
