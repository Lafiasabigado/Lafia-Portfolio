import localFont from 'next/font/local';

export const geistPixelGrid = localFont({
    src: '../public/fonts/GeistPixel-Grid.woff2',
    display: 'swap',
    variable: '--font-pixel-grid',
    weight: '500',
});

export const geistPixelSquare = localFont({
    src: '../public/fonts/GeistPixel-Square.woff2',
    display: 'swap',
    variable: '--font-pixel-square',
    weight: '500',
});

export const geistPixelCircle = localFont({
    src: '../public/fonts/GeistPixel-Circle.woff2',
    display: 'swap',
    variable: '--font-pixel-circle',
    weight: '500',
});

export const geistSans = localFont({
    src: '../public/fonts/Geist-Variable.woff2',
    display: 'swap',
    variable: '--font-geist-sans',
});

export const geistMono = localFont({
    src: '../public/fonts/GeistMono-Variable.woff2',
    display: 'swap',
    variable: '--font-geist-mono',
});

export const inter = localFont({
    src: '../public/fonts/Inter-Regular.ttf',
    display: 'swap',
    variable: '--font-inter',
    weight: '400',
});

export const outfit = localFont({
    src: [
        {
            path: '../public/fonts/Outfit-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Outfit-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-outfit',
});

export const caveat = localFont({
    src: '../public/fonts/Caveat-Bold.ttf',
    display: 'swap',
    variable: '--font-caveat',
    weight: '700',
});

