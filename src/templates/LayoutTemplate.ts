import { html } from "hono/html";

export interface SiteData {
  title: string;
  description: string;
  children?: any;
}

export const LayoutTemplate = (props: SiteData) => html`
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>${props.title}</title>
      <meta name="description" content="${props.description}" />
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
    </head>
    <body>
      ${props.children ?? null}
    </body>
  </html>
`;
