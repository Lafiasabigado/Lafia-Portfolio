import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/theme-provider";
import CursorGlow from "./components/CursorGlow";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    icon: "/lafialogo2.png",
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
    <html lang="fr" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden h-full`}>
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
          <div className="relative w-full overflow-x-hidden">
            <CursorGlow />
            <Nav />
            <main className="w-full overflow-hidden">
              {children}
            </main>
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}