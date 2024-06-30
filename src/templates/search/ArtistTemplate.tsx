import { ArtistsItem } from "../../types/search";

export const ArtistTemplate = (props: ArtistsItem) => (
  <div data-controller="search" data-search-name-value={props.name}>
    <button
      class="result-item"
      data-action="click->search#switchInput"
      hx-get="/genre"
      hx-vals={`{ "artistId": "${props.id}" }`}
      hx-target="#results"
    >
      {props.images[0] && props.images[0].url && (
        <img src={props.images[0].url} height="50" width="50" />
      )}
      <p>{props.name}</p>
    </button>
  </div>
);
