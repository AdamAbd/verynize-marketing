import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import css from "../styles.css?url";
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Verynize — Your canvas. Your agents. Your ideas." },
      {
        name: "description",
        content:
          "A local macOS design workspace for your ideas and your AI agents. Design on an editable canvas, work with Claude and Codex, and keep your documents yours.",
      },
      { name: "theme-color", content: "#f6f5f1" },
    ],
    links: [
      { rel: "stylesheet", href: css },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: () => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <main className="section">
      <h1>Nothing on this canvas.</h1>
      <a href="/">Back to Verynize →</a>
    </main>
  ),
});
