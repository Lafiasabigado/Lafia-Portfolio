// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundParticles() {
    const [mounted, setMounted] = useState(false);

    // Randomize initial positions for a more natural look
    // Increased count for "sand grain" effect
    const particleCount = 150;
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        size: Math.random() * 1.5 + 0.5, // 0.5px to 2px (grain of sand size)
        duration: Math.random() * 20 + 10, // 10s to 30s
        opacity: Math.random() * 0.5 + 0.1, // Random opacity for depth
    }));

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* 1. Dark Gradient Background (Noir Dégradé) */}
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#000000]"
            />

            {/* 2. Noise Overlay (Already in globals.css, but ensuring it's here if needed specifically or relying on global .noise div) 
                 We will rely on the global .noise div in layout.tsx, so no need to duplicate here unless requested.
            */}

            {/* 3. Atom-like Particles (Sand Grains) */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        opacity: particle.opacity,
                        boxShadow: `0 0 ${particle.size}px ${particle.size / 2}px rgba(255, 255, 255, 0.1)`
                    }}
                    animate={{
                        x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0], // Reduced movement range for subtle float
                        y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* 4. Ambient Colored Orbs (Global Hero Style) */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

            {/* 5. Extra Deep Ambient (Subtle) for depth */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"
            />
        </div>
    );
}
