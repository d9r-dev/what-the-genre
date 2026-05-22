import { SiteData, LayoutTemplate } from "./LayoutTemplate";

export const HomepageTemplate = (props: SiteData) => (
  <LayoutTemplate {...props}>
    <div class="wrapper">
      <h1>{props.title}</h1>
      <p class="intro-text">
        Search for an artist to discover their genres.
      </p>
      <div class="input-group search-input">
        <label class="input-group__label" for="myInput">
          Search
        </label>
        <input
          data-search-target="input"
          type="text"
          id="input"
          name="track"
          hx-get="/search"
          hx-target="#results"
          hx-trigger="keyup changed delay:500ms"
          class="input-group__input"
        />
      </div>
      <div id="results"></div>
    </div>
  </LayoutTemplate>
);
