import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/theme-provider";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

export const metadata: Metadata = {

  title: "Développeur Web | Sites Performants & Sur Mesure | Boostez Votre CA",
  description: "Développeur web spécialisé dans la création de sites performants et sur mesure. Boostez votre chiffre d’affaires avec un suivi client personnalisé et des tarifs compétitifs. Contactez-moi dès maintenant !",
  icons: {
    icon: "/lafia.png",
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lafiasabigado.vercel.app/',
    title: "Développeur Web | Sites Performants & Sur Mesure | Boostez Votre CA",
    description: "Développeur web spécialisé dans la création de sites performants et sur mesure. Boostez votre chiffre d’affaires avec un suivi client personnalisé et des tarifs compétitifs. Contactez-moi dès maintenant !",
    images: [
      {
        url: 'https://lafiasabigado.vercel.app/lafia.png',
        width: 1200,
        height: 630,
        alt: 'Développeur web | Création de sites performants et sur mesure',
      },
    ],
  },


  twitter: {
    card: 'summary_large_image',
    title: "Développeur Web | Sites Performants & Sur Mesure | Boostez Votre CA",
    description: "Développeur web spécialisé dans la création de sites performants et sur mesure. Boostez votre chiffre d’affaires avec un suivi client personnalisé et des tarifs compétitifs. Contactez-moi dès maintenant !",
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
  return (
    <html lang="fr" className="dark scroll-smooth">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
      </Head>
      <body
        className={`${inter.variable} ${archivo.variable} ${geistMono.variable} antialiased overflow-x-hidden min-h-screen`}
      > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative w-full overflow-x-hidden">
            <Nav />
            <main className="w-full overflow-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
