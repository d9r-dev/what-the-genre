import { IArtistMatch } from "musicbrainz-api";
import { ArtistTemplate } from "./ArtistTemplate";

export const Results = ({ artists }: { artists: IArtistMatch[] }) => {
  return (
    <div class="glass-background-wrapper br-5">
      <div class="glass-background-element search-results">
        <div class="br-5">
          <h2 class="section-heading">Artists</h2>
          {artists.map((item) => ArtistTemplate(item))}
        </div>
      </div>
      <div class="gradient-bg br-5"></div>
    </div>
  );
};
