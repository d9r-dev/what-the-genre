import { Hono } from "hono";
import { createIndexRoute } from "./routes/homepage";
import { logger } from "hono/logger";
import { AuthService } from "./services/AuthService";
import { createSearchRoute } from "./routes/search";

const app = new Hono();

const indexRoute = createIndexRoute();
const searchRoute = createSearchRoute();

app.use(logger());

app.route("/", indexRoute);
app.route("/search", searchRoute);

const authService: AuthService = new AuthService(
  Bun.env.CLIENT_ID ?? null,
  Bun.env.CLIENT_SECRET ?? null
);

globalThis.authService = authService;

export default app;
