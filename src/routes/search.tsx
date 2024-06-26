import { Hono } from "hono";
import { URIS } from "../constants/SpotifyAPIConstants";
import { SpotifySearchResponse } from "../types/search";
import { Results } from "../templates/search/Results";

export function createSearchRoute() {
  const homepage = new Hono();

  homepage.get("/", async (c) => {
    const query = c.req.query("track");
    if (query) {
      const result = await searchSpotify(query);
      if (result) {
        return c.html(
          <Results
            albums={result.albums}
            tracks={result.tracks}
            artists={result.artists}
          />
        );
      }
    }

    return c.html(``);
  });

  return homepage;
}

async function searchSpotify(
  text: string
): Promise<null | SpotifySearchResponse> {
  try {
    const res = await fetch(
      `${URIS.search}?q=${text}&type=artist,track,album&limit=6`,
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
