import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contador Simples" },
      { name: "description", content: "Um contador interativo — clique no botão para incrementar." },
      { property: "og:title", content: "Contador Simples" },
      { property: "og:description", content: "Um contador interativo — clique no botão para incrementar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-12 shadow-sm">
        <h1 className="text-2xl font-semibold text-card-foreground">Contador</h1>
        <p
          className="text-7xl font-bold tabular-nums text-primary"
          aria-live="polite"
        >
          {count}
        </p>
        <Button size="lg" onClick={() => setCount((c) => c + 1)}>
          teste
        </Button>
      </section>
    </main>
  );
}
