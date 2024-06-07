import { Hono } from "hono";
import { createIndexRoute } from "./routes/homepage";
import { logger } from "hono/logger";
import { AuthService } from "./services/AuthService";

const app = new Hono();

const indexRoute = createIndexRoute();

app.use(logger());

app.route("/", indexRoute);

const authService: AuthService = new AuthService(Bun.env.CLIENT_ID ?? null, Bun.env.CLIENT_SECRET ?? null)

export default app;
