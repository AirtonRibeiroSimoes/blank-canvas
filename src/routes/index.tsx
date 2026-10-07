import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto em branco" },
      { name: "description", content: "Projeto com uma tela em branco." },
      { property: "og:title", content: "Projeto em branco" },
      { property: "og:description", content: "Projeto com uma tela em branco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen bg-background" />;
}
