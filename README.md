# What The Genre?

A web app for discovering music genres — search an artist and see their associated genres from the [MusicBrainz](https://musicbrainz.org/) database.

## Prerequisites

- [Bun](https://bun.sh/) (≥ 1.x)

## Getting started

```sh
# Install dependencies
bun install

# Build client JavaScript (required before first run)
bun run build

# Start the dev server with hot reload
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development scripts

| Command | Description |
|---------|-------------|
| `bun run build` | Bundle client JS to `static/js/` (one-shot) |
| `bun run build:dev` | Bundle client JS in watch mode |
| `bun run dev` | Start server with hot reload + inspector (port 3000) |
| `bun run start` | Start server without hot reload |

> `static/js/` is git-ignored. If you get a 404 on `/static/js/index.js`, run `bun run build` first — the `dev` script does **not** bundle client JS.

## Architecture

### Stack

| Layer | Tech |
|-------|------|
| Runtime | Bun |
| Server | Hono (JSX rendering) |
| Client interactivity | HTMX + Stimulus |
| External API | MusicBrainz (`musicbrainz-api`) |
| CSS | Plain CSS (glass-morphism theme) |
| Fonts | Google Fonts (Play) |

### Directory layout

```
src/
  index.ts                    — Hono app entrypoint
  routes/                     — per-route sub-apps (Hono router-per-route pattern)
    homepage.tsx              — GET /
    search.tsx                — GET /search?track=…
    genre.tsx                 — GET /genre?artistId=…
  templates/                  — Hono JSX templates (NOT React)
    LayoutTemplate.ts         — HTML shell (<head> with HTMX CDN, fonts, CSS, JS)
    HomepageTemplate.tsx      — home page content
    search/                   — search result components
  types/
    global.d.ts               — type declarations
  client/scripts/             — Stimulus controllers (bundled by bun build)
static/
  css/search.css              — all styles
  js/index.js                 — bundled client JS (gitignored)
```

### Request flow

1. User types an artist name → HTMX fires `GET /search?track=query`
2. Server queries MusicBrainz for artists → returns result rows as HTML
3. User clicks an artist → Stimulus + HTMX fire `GET /genre?artistId=mbid`
4. Server looks up the artist's genres → returns genre chips as HTML
