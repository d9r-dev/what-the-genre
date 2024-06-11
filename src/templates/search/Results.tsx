import { SpotifySearchResponse } from "../../types/search";
import { AlbumTemplate } from "./AlbumTemplate";
import { ArtistTemplate } from "./ArtistTemplate";
import { TrackTemplate } from "./TrackTemplate";

export const Results = ({ albums, tracks, artists }: SpotifySearchResponse) => {
  return (
    <div>
      <div>
        <h2>Artists</h2>
        {artists.items.map((item) => ArtistTemplate(item))}
      </div>
      <div>
        <h2>Albums</h2>
        {albums.items.map((item) => AlbumTemplate(item))}
      </div>
      <div>
        <h2>Tracks</h2>
        {tracks.items.map((item) => TrackTemplate(item))}
      </div>
    </div>
  );
};
