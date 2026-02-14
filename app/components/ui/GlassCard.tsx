import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/10 hover:shadow-xl hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
