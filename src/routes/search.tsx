import { Hono } from "hono";
import { URIS } from "../constants/SpotifyAPIConstants";

export function createSearchRoute() {
  const homepage = new Hono();

  homepage.get("/", async (c) => {
    const query = c.req.query("track");
    if (query) {
      const result = await searchSpotify(query);
      return c.html(`<p>${JSON.stringify(result)}</p>`);
    }

    return c.html(`No Results`);
  });

  return homepage;
}

async function searchSpotify(text: string): Promise<null | object> {
  try {
    const res = await fetch(
      `${URIS.search}?q=${text}&type=track,album, artist`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      }
    );

    console.log(res);
    return await res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
