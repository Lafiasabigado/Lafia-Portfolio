import type { Metadata } from "next";
import { 
    inter, 
    outfit, 
    caveat, 
    geistPixelGrid, 
    geistPixelSquare, 
    geistPixelCircle, 
    geistSans, 
    geistMono 
} from "@/lib/fonts";
import "../globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import GuideLines from "@/app/components/GuideLines";
import SmoothScroll from "@/app/components/SmoothScroll";
import ClientComponents from "@/app/components/ClientComponents";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
    metadataBase: new URL("https://lafiasabigado.vercel.app"),
    title: {
        default: "Lafia Sabi Gado — Web Developer (Next.js)",
        template: "%s — Lafia Sabi Gado",
    },
    description:
        "Full-stack web developer specialized in Next.js. I build performant, accessible, and SEO-friendly SaaS and AI apps. Based in Benin, available remotely.",
    applicationName: "Lafia Sabi Gado",
    keywords: [
        "web developer",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SaaS",
        "AI application",
        "full-stack developer",
        "Benin",
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
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://lafiasabigado.vercel.app/',
        siteName: 'Lafia Sabi Gado',
        title: "Lafia Sabi Gado — Web Developer (Next.js)",
        description:
            "Full-stack web developer specialized in Next.js. Performant, accessible, and SEO-friendly SaaS & AI apps. Based in Benin, available remotely.",
        images: [
            {
                url: 'https://lafiasabigado.vercel.app/lafia.png',
                width: 1200,
                height: 630,
                alt: 'Lafia Sabi Gado — Web Developer (Next.js)',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Lafia Sabi Gado — Web Developer (Next.js)",
        description:
            "Full-stack web developer specialized in Next.js. Performant, accessible, and SEO-friendly SaaS & AI apps. Based in Benin, available remotely.",
        images: ['https://lafiasabigado.vercel.app/lafia.png'],
    },
    alternates: {
        canonical: 'https://lafiasabigado.vercel.app/',
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Lafia Sabi Gado",
        url: "https://lafiasabigado.vercel.app/",
        jobTitle: "Web Developer",
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
        <html lang={locale} suppressHydrationWarning={true} className="no-scrollbar">
            <body className={`${geistPixelGrid.variable} ${geistPixelSquare.variable} ${geistPixelCircle.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} ${caveat.variable} antialiased overflow-x-hidden h-full selection:bg-white/30 selection:text-white bg-black text-white`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
                <NextIntlClientProvider messages={messages}>
                    <SmoothScroll>
                        <div className="relative w-full min-h-screen bg-bg text-fg">
                            <a
                                href="#main-content"
                                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-lg text-sm font-medium"
                            >
                                {locale === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
                            </a>
                            <ClientComponents />
                            <GuideLines />
                            <Nav />
                            <main id="main-content" className="relative z-10 w-full overflow-hidden min-h-screen">
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </SmoothScroll>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
