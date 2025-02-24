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
  title: "Lafia Portfolio",
  description: "Mon Portfolio",
  icons: {   
    icon: "/logo1.png",
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
