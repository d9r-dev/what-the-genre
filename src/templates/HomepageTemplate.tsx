import { html } from "hono/html";
import { SiteData, LayoutTemplate } from "./LayoutTemplate";

export const HomepageTemplate = (props: SiteData) => (
    <LayoutTemplate {...props}>
        <h1>{props.title}</h1>
        <input type="text" />
    </LayoutTemplate>
)