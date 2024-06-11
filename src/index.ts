import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { createIndexRoute } from "./routes/homepage";
import { logger } from "hono/logger";
import { AuthService } from "./services/AuthService";
import { createSearchRoute } from "./routes/search";
import { createGenreRoute } from "./routes/genre";

const app = new Hono();

app.use(logger());
app.use("/static/*", serveStatic({ root: "./" }));

app.route("/", createIndexRoute());
app.route("/search", createSearchRoute());
app.route("/genre", createGenreRoute());

const authService: AuthService = new AuthService(
  Bun.env.CLIENT_ID ?? null,
  Bun.env.CLIENT_SECRET ?? null
);

globalThis.authService = authService;

export default app;
