import { TracksItem } from "../../types/search";

export const TrackTemplate = (props: TracksItem) => (
  <>
    <a
      hx-get="/genre"
      hx-vals={`{ "artistId": "${props.artists[0].id}" }`}
      hx-target="#results"
      class="result-item"
    >
      {props.album.images[0] && props.album.images[0].url && (
        <img src={props.album.images[0].url} height="50" width="50" />
      )}
      <p>{props.name}</p>
    </a>
  </>
);
