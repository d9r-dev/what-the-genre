import { html } from "hono/html";

export interface SiteData {
  title: string;
  description: string;
  children?: any;
}

export const LayoutTemplate = (props: SiteData) => html`
  <html lang="en-US">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      <title>${props.title}</title>
      <meta name="description" content="${props.description}" />
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="static/css/search.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      ${props.children ?? null}
    </body>
  </html>
`;
