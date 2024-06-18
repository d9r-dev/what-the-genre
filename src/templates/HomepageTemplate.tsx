import { SiteData, LayoutTemplate } from "./LayoutTemplate";

export const HomepageTemplate = (props: SiteData) => (
  <LayoutTemplate {...props}>
    <div class="wrapper">
      <h1>{props.title}</h1>
      <div class="glass-background-wrapper">
        <div class="glass-background-element">
          <p class="intro-text">
            You want to know what genre the artist you are listening to belongs
            to? Just search for it below!
          </p>
        </div>
        <div class="gradient-bg"></div>
      </div>
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
