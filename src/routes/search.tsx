import { Hono } from "hono";
import { Results } from "../templates/search/Results";

export function createSearchRoute() {
  const search = new Hono();

  search.get("/", async (c) => {
    const query = c.req.query("track");
    if (query) {
      try {
        const result = await musicBrainzApi.search("artist", {
          query,
          limit: 6,
        });
        if (result && result.artists.length > 0) {
          return c.html(<Results artists={result.artists} />);
        }
      } catch (err) {
        console.error(err);
      }
    }

    return c.html(``);
  });

  return search;
}
