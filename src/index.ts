import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { createIndexRoute } from "./routes/homepage";
import { logger } from "hono/logger";
import { MusicBrainzApi } from "musicbrainz-api";
import { createSearchRoute } from "./routes/search";
import { createGenreRoute } from "./routes/genre";

const app = new Hono();

app.use(logger());
app.use("/static/*", serveStatic({ root: "./" }));

app.route("/", createIndexRoute());
app.route("/search", createSearchRoute());
app.route("/genre", createGenreRoute());

const musicBrainzApi = new MusicBrainzApi({
  appName: "what-the-genre",
  appVersion: "2.0.0",
  appContactInfo: "https://github.com/dka/what-the-genre",
});

globalThis.musicBrainzApi = musicBrainzApi;

export default app;
