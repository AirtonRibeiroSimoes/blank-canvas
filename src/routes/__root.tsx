import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "App" },
      { name: "description", content: "App" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "App" },
      { property: "og:description", content: "App" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  );
}
