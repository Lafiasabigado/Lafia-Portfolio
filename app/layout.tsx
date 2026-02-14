import type { Metadata } from "next";
import { inter, syne, pixelify_sans, space_mono } from "@/lib/fonts";
import "./globals.css";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/theme-provider";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/ui/CustomCursor";
import BackgroundParticles from "./components/ui/BackgroundParticles";

export const metadata: Metadata = {
  metadataBase: new URL("https://lafiasabigado.vercel.app"),
  title: {
    default: "Lafia Sabi Gado — Développeur web (Next.js)",
    template: "%s — Lafia Sabi Gado",
  },
  description:
    "Développeur web full-stack spécialisé Next.js. Je construis des SaaS et des apps IA performantes, accessibles et SEO-friendly. Basé au Bénin, disponible en remote.",
  applicationName: "Lafia Sabi Gado",
  keywords: [
    "développeur web",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SaaS",
    "application IA",
    "développeur full-stack",
    "Bénin",
    "freelance",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/lafiapro1.png",
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lafiasabigado.vercel.app/',
    siteName: 'Lafia Sabi Gado',
    title: "Lafia Sabi Gado — Développeur web (Next.js)",
    description:
      "Développeur web full-stack spécialisé Next.js. SaaS & apps IA performantes, accessibles et SEO-friendly. Basé au Bénin, disponible en remote.",
    images: [
      {
        url: 'https://lafiasabigado.vercel.app/lafia.png',
        width: 1200,
        height: 630,
        alt: 'Lafia Sabi Gado — Développeur web (Next.js)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lafia Sabi Gado — Développeur web (Next.js)",
    description:
      "Développeur web full-stack spécialisé Next.js. SaaS & apps IA performantes, accessibles et SEO-friendly. Basé au Bénin, disponible en remote.",
    images: ['https://lafiasabigado.vercel.app/lafia.png'],
  },
  alternates: {
    canonical: 'https://lafiasabigado.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lafia Sabi Gado",
    url: "https://lafiasabigado.vercel.app/",
    jobTitle: "Développeur web",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BJ",
    },
    sameAs: [
      "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
      "https://github.com/Lafiasabigado",
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning={true} className="no-scrollbar">
      <body className={`${inter.variable} ${syne.variable} ${pixelify_sans.variable} ${space_mono.variable} antialiased overflow-x-hidden h-full selection:bg-electric-blue/30 selection:text-electric-blue`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="relative w-full overflow-x-hidden">
              <BackgroundParticles />
              <div className="noise" />
              <CustomCursor />
              {/* CursorGlow removed in favor of CustomCursor for clearer aesthetic direction, can be re-added if hybrid needed */}
              <Nav />
              <main className="w-full overflow-hidden min-h-screen">
                {children}
              </main>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html >
  );
}