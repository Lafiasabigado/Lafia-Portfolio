import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets de Lafia Sabi Gado: SaaS, apps IA et applications web performantes (Next.js, TypeScript, Tailwind). Démo et détails par projet.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
