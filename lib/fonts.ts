import localFont from 'next/font/local';

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
