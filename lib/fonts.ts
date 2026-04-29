import { Inter, Space_Mono, Outfit } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-outfit',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const draftCartoon = localFont({
    src: '../public/fonts/DraftCartoon-Bold.ttf',
    display: 'swap',
    variable: '--font-draft-cartoon',
    weight: '700',
});

export const space_mono = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
    weight: ['400', '700']
});
