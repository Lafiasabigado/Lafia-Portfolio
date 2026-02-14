import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "À propos de Lafia Sabi Gado, développeur web full-stack spécialisé Next.js. SaaS & apps IA performantes, accessibles et SEO-friendly. Basé au Bénin, disponible en remote.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
