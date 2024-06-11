import { html } from "hono/html";
import { SiteData, LayoutTemplate } from "./LayoutTemplate";

export const HomepageTemplate = (props: SiteData) => (
  <LayoutTemplate {...props}>
    <h1>{props.title}</h1>
    <input
      id="input"
      name="track"
      type="text"
      hx-get="/search"
      hx-target="#results"
      hx-trigger="keyup changed delay:500ms"
    />
    <div id="results"></div>
  </LayoutTemplate>
);
