# Palette Studio — sitio web de la agencia · estado del proyecto

_Última actualización: 2026-08-14_

## Qué es esto

El sitio oficial de `web_palette` (agencia, no producto de invitaciones digitales).
Muestra qué hace ›palette como estudio: branding y diseño UI. Es distinto del proyecto
`Documents\pagina web palette\palette-studio`, que es la landing del producto de
invitaciones digitales.

## Cómo correrlo

```
cd "C:\Users\Usuario\Desktop\palette\web_palette"
npm run dev
```

Next.js 15 + React 19 + Tailwind 4 + `motion`. Node modules ya instalados.
Rama actual: `prototipo` (no está mergeada a `main`).

## Estado actual del sitio

**Estructura viva:**
- Home: Hero → Quiénes somos (About) → Servicios → Contacto
- `/servicios` — índice con 2 tarjetas: Branding, Diseño UI
- `/servicios/branding`, `/servicios/diseno-ui` — páginas de detalle
- `/contacto`

**Se sacó a propósito (decisión del 2026-08-14):**
- **Sección de Portfolio / "Proyectos conceptuales"** (CROWN, Bloom, Luna, Nova) — eran
  casos ficticios, no proyectos reales. Se borró todo: `app/portfolio/*`, el componente
  `PortfolioSection`, `BackButton` (quedó huérfano), y los assets/microsites en
  `public/portfolio/`, `public/crown/`, `public/bloom/`, `public/luna/`, `public/nova/`.
  El link "Portfolio" salió del navbar.
- **Servicio "Identidad Visual"** — por ahora no se va a ofrecer. Se sacó la tarjeta de
  servicio, su página dedicada (`/servicios/identidad-visual`), y toda mención en el
  tagline de marca: título del sitio, meta description, eyebrow del Hero, copy del
  footer, `SITE_DESCRIPTION` en `lib/constants.ts`, y el texto del bloque de Contacto.
  El componente `HomeServices` también se borró (estaba sin usar y repetía lo mismo).
  Quedó una mención descriptiva genérica en `/servicios/diseno-ui` ("interfaces que son
  una extensión de tu identidad visual") — no se tocó porque no promociona el servicio
  sacado, solo describe coherencia visual.
- El grid de Servicios se ajustó de 3 a 2 columnas, centrado (max-width 820px), con 32px
  de separación entre Branding y Diseño UI.

## Pendiente — para retomar cuando haya páginas web reales y estrategia de marca

Esto es lo que el usuario dijo que va a desarrollar aparte (páginas web de portfolio +
estrategias de marca) antes de volver a este proyecto:

1. **Volver a armar la sección de Portfolio**, esta vez con proyectos reales (no
   conceptuales). Cuando haya 1-2 casos reales entregados, recrear algo como
   `PortfolioSection` + páginas de detalle, pero con contenido genuino.
2. **Decidir si "Identidad Visual" vuelve como servicio.** Si en algún momento sí se va a
   ofrecer, hay que deshacer el punto anterior: volver a sumar la tarjeta, la página
   `/servicios/identidad-visual`, y las menciones en el tagline de marca.
3. El código de `app/portfolio/*`, `PortfolioSection`, `BackButton` y
   `app/servicios/identidad-visual` **no quedó guardado en ningún lado** (se borró del
   working tree). Si hace falta recuperar el diseño/copy original, está en el historial
   de git de este mismo repo, en el commit previo a este (buscar en `git log -p` sobre
   esos paths, rama `prototipo`).

## Notas técnicas sueltas

- Hay otro proyecto separado, `Desktop\palette\palette.md`, con el manual de marca
  completo (colores, tipografías, portfolio de clientes reales de la agencia) — es la
  fuente de verdad de identidad de marca que alimentó este sitio originalmente.
- El repo tenía trabajo sin commitear desde antes de esta sesión (nuevas páginas de
  servicios, `HomeManifesto`, ajustes de estilos). Todo se commiteó junto con los cambios
  de esta sesión — ver el commit que agregó este archivo.
