import { AlbumElement } from "../../types/search";

export const AlbumTemplate = (props: AlbumElement) => (
  <>
    <a
      class="result-item"
      hx-get="/genre"
      hx-vals={`{ "artistId": "${props.artists[0].id}" }`}
      hx-target="#results"
    >
      {props.images[0] && props.images[0].url && (
        <img src={props.images[0].url} height="50" width="50" />
      )}
      <p>{props.name}</p>
    </a>
  </>
);
