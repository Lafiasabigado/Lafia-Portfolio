import { Inter, Syne, Pixelify_Sans, Space_Mono } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-syne',
});

export const pixelify_sans = Pixelify_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-pixel',
});

export const space_mono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
});
