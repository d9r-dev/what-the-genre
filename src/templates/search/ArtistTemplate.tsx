import { IArtistMatch } from "musicbrainz-api";

export const ArtistTemplate = (props: IArtistMatch) => (
  <div data-controller="search" data-search-name-value={props.name}>
    <button
      class="result-item"
      data-action="click->search#switchInput"
      hx-get="/genre"
      hx-vals={`{ "artistId": "${props.id}" }`}
      hx-target="#results"
    >
      <p>{props.name}</p>
      {props.disambiguation && (
        <p class="disambiguation">{props.disambiguation}</p>
      )}
    </button>
  </div>
);
