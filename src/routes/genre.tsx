import { Hono } from "hono";
import { URIS } from "../constants/SpotifyAPIConstants";
import { SpotifySearchResponse } from "../types/search";
import { Results } from "../templates/search/Results";
import { SpotifyArtistSearchResponse } from "../types/artist";
import { html } from "hono/html";
import { Chip } from "../templates/search/Chip";

export function createGenreRoute() {
  const homepage = new Hono();

  homepage.get("/", async (c) => {
    const query = c.req.query("artistId");
    if (query) {
      const result = await searchSpotify(query);
      console.log(result);
      if (result && result.genres.length > 0) {
        return c.html(
          <div class="genres">
            {result.genres.map((genre) => (
              <Chip text={genre} />
            ))}
            <div />
          </div>
        );
      } else {
        return c.html(
          <div class="genres">
            <Chip text={"No genres available"} />
          </div>
        );
      }
    }

    return c.html(``);
  });

  return homepage;
}

async function searchSpotify(
  id: string
): Promise<null | SpotifyArtistSearchResponse> {
  try {
    const res = await fetch(`${URIS.artist}${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });

    console.log(res);
    return await res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
