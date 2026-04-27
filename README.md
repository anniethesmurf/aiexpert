# AI-Driven Expert Twins Lab

Static multi-page site built with Vite, plain HTML, Tailwind CSS, and JavaScript.

## Source structure

- `index.html`: homepage source
- `pages/*.html`: inner page source files
- `src/`: shared CSS and JavaScript
- `public/assets/`: source images and static assets
- `dist/`: generated build output only

Edit `index.html`, `pages/*.html`, `src/styles.css`, and `src/js/*`.
Do not edit files inside `dist/`; regenerate them with a build.

## Local development

```bash
npm run dev
```

Vite will serve:

- `http://localhost:5173/`
- inner pages at routes such as `http://localhost:5173/pages/ai-expert-core.html`

## Production build

```bash
npm run build
```

This writes the generated static site to `dist/`.
