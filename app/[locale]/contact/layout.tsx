import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Lafia Sabi Gado pour une mission, une collaboration ou un projet web. Réponse rapide. Basé au Bénin, disponible en remote.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
