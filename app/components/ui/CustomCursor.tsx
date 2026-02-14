// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth springs for the glow element (delayed/trailing effect)
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const glowX = useSpring(mouseX, springConfig);
    const glowY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-hover') ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main Dot Cursor - Sharp and Immediate */}
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                    transition: 'transform 0.05s linear', // Very slight smoothing for dot
                }}
            />

            {/* Trailing Glow Ring/Circle */}
            <motion.div
                className="fixed top-0 left-0 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: glowX,
                    y: glowY,
                    width: isHovered ? 64 : 32, // Expand on hover
                    height: isHovered ? 64 : 32,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
        </>
    );
}
