import { TracksItem } from "../../types/search";

export const TrackTemplate = (props: TracksItem) => (
  <div data-controller="search" data-search-name-value={props.artists[0].name}>
    <button
      hx-get="/genre"
      data-action="click->search#switchInput"
      hx-vals={`{ "artistId": "${props.artists[0].id}" }`}
      hx-target="#results"
      class="result-item"
    >
      {props.album.images[0] && props.album.images[0].url && (
        <img src={props.album.images[0].url} height="50" width="50" />
      )}
      <p>{props.name}</p>
    </button>
  </div>
);
