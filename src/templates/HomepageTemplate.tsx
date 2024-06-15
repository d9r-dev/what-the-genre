import { SiteData, LayoutTemplate } from "./LayoutTemplate";

export const HomepageTemplate = (props: SiteData) => (
  <LayoutTemplate {...props}>
    <div class="wrapper">
      <h1>{props.title}</h1>
      <p class="intro-text glass-background">
        You want to know what genre the artist you are listening to belongs to?
        Just search for it below!
      </p>
      <input
        id="input"
        name="track"
        type="text"
        hx-get="/search"
        hx-target="#results"
        hx-trigger="keyup changed delay:500ms"
      />
      <div id="results"></div>
    </div>
  </LayoutTemplate>
);
