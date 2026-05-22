import { Hono } from "hono";
import { Chip } from "../templates/search/Chip";

export function createGenreRoute() {
  const genre = new Hono();

  genre.get("/", async (c) => {
    const artistId = c.req.query("artistId");
    if (artistId) {
      try {
        const artist = await musicBrainzApi.lookup("artist", artistId, [
          "genres",
        ]);
        if (artist && artist.genres && artist.genres.length > 0) {
          return c.html(
            <div class="genres">
              {artist.genres.map((genre) => (
                <Chip text={genre.name} />
              ))}
            </div>
          );
        }
        return c.html(
          <div class="genres">
            <Chip text={"No genres available"} />
          </div>
        );
      } catch (err) {
        console.error(err);
      }
    }

    return c.html(``);
  });

  return genre;
}
