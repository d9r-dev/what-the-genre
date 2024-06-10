import { html } from "hono/html";
import { SiteData, LayoutTemplate } from "./LayoutTemplate";

export const HomepageTemplate = (props: SiteData) => (
  <LayoutTemplate {...props}>
    <h1>{props.title}</h1>
    <input id="input" name="track" type="text" />
    <button hx-get="/search" hx-target="#results" hx-include="#input">
      Search
    </button>
    <div id="results"></div>
  </LayoutTemplate>
);
