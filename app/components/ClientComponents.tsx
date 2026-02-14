'use client';

import dynamic from 'next/dynamic';

// Lazy load heavy components for better performance
const CustomCursor = dynamic(() => import('./ui/CustomCursor'), {
    ssr: false,
});

const BackgroundParticles = dynamic(() => import('./ui/BackgroundParticles'), {
    ssr: false,
});

export default function ClientComponents() {
    return (
        <>
            <BackgroundParticles />
            <div className="noise" />
            <CustomCursor />
        </>
    );
}
