import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tela em Branco" },
      { name: "description", content: "Uma tela em branco." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Tela em Branco" },
      { property: "og:description", content: "Uma tela em branco." },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <div className="min-h-screen bg-background" />;
}
