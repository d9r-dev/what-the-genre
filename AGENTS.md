# AGENTS.md

## Runtime & toolchain

- **Bun only** — `package.json` scripts, `bun build`. Never use Node or npm/yarn.
- **No lint, typecheck, or test commands** are configured. Do not invent them.
- Prettier is configured for formatting (empty `.prettierrc` = defaults).

## Dev workflow

```sh
bun install
bun run build      # bundle client JS → static/js/ (required first time)
bun run build:dev  # watch mode for client JS
bun run dev        # server with hot reload + inspector (port 3000)
```

**Critical**: `static/js/` is gitignored and is the output of `bun run build`.
If the browser reports a 404 for `/static/js/index.js`, run `bun run build`
first. The `dev` script only runs the server — it does **not** bundle client JS.

## Architecture

```
src/index.ts          — Hono app entrypoint, mounts routes + serveStatic
src/routes/           — per-route sub-apps (router-per-route pattern)
src/templates/        — Hono JSX templates (NOT React JSX)
src/client/scripts/   — Stimulus + HTMX client code (bundled by bun build)
src/types/            — TypeScript type declarations
```

### Key patterns

- **JSX** uses `hono/jsx` (configured in `tsconfig.json` via `jsxImportSource`).
  Do NOT import React or use React JSX patterns.
- **MusicBrainzApi** (from `musicbrainz-api`) is stored on
  `globalThis.musicBrainzApi` in `src/index.ts` and accessed directly in route
  handlers. It is NOT passed via Hono context/middleware. No auth is needed
  for reads — the API only requires a User-Agent.
- **Routes** use the "sub-app" pattern: each route file exports a `create*Route()`
  factory that returns a `new Hono()` instance, mounted on the main app via `app.route()`.
- **Client interactivity**: HTMX attributes (`hx-get`, `hx-target`, etc.) on
  server-rendered HTML + Stimulus controllers for UI behavior (switching input
  values on click).
- **Templates** use a single `LayoutTemplate` wrapper (via `hono/html` tagged
  template literal) that includes the `<head>` with HTMX CDN, Google Fonts,
  and the client JS bundle.
- **Type files** use `.d.ts` extension even though they export interfaces (not
  just ambient declarations). This is a convention, not a mistake — follow it.
