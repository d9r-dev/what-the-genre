import { Hono } from "hono";
import { HomepageTemplate } from "../templates/HomepageTemplate";
import { SiteData } from "../templates/LayoutTemplate";

export function createIndexRoute() {
    const homepage = new Hono();

    homepage.get('/', (c) => {
        const props: SiteData = {
            title: "What The Genre?",
            description: "Search for an artist to discover their genres."
        }
        return c.html(<HomepageTemplate {...props} />)
    })

    return homepage;
}