import { SpotifySearchResponse } from "../../types/search";
import { AlbumTemplate } from "./AlbumTemplate";
import { ArtistTemplate } from "./ArtistTemplate";
import { TrackTemplate } from "./TrackTemplate";

export const Results = ({ albums, tracks, artists }: SpotifySearchResponse) => {
  return (
    <>
      <div class="glass-background-wrapper br-5">
        <div class="glass-background-element search-results">
          <div class="br-5">
            <h2 class="section-heading">Artists</h2>
            {artists.items.map((item) => ArtistTemplate(item))}
          </div>
          <hr class="divider"></hr>
          <div>
            <h2 class="section-heading">Albums</h2>
            {albums.items.map((item) => AlbumTemplate(item))}
          </div>
          <hr class="divider"></hr>
          <div>
            <h2 class="section-heading">Tracks</h2>
            {tracks.items.map((item) => TrackTemplate(item))}
          </div>
        </div>
        <div class="gradient-bg br-5"></div>
      </div>
    </>
  );
};
