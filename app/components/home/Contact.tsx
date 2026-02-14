'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import GlassCard from '../ui/GlassCard';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto relative overflow-hidden">
            {/* Background Particles (Simplified) removed - using global */}

            <motion.div
                {...({
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    className: "text-center mb-12 relative z-10"
                } as any)}
            >
                <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Let's work together</h2>
                <p className="text-muted-foreground text-lg">
                    Have a project in mind? I'd love to help you build it.
                </p>
            </motion.div>

            <GlassCard className="relative z-10 backdrop-blur-xl">
                <form action="https://formspree.io/f/maqdekbd" method="POST" className="space-y-6">
                    {/* Note: Replace YOUR_FORM_ID with your actual Formspree form ID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-electric-blue transition-colors peer pt-6"
                                placeholder=" "
                            />
                            <label className="absolute left-0 top-3 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-electric-blue peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs">
                                Name
                            </label>
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-electric-blue transition-colors peer pt-6"
                                placeholder=" "
                            />
                            <label className="absolute left-0 top-3 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-electric-blue peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs">
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="relative group">
                        <textarea
                            rows={4}
                            name="message"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-electric-blue transition-colors peer pt-6 resize-none"
                            placeholder=" "
                        />
                        <label className="absolute left-0 top-3 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-electric-blue peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs">
                            Message
                        </label>
                    </div>

                    <div className="flex justify-end">
                        <MagneticButton>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-foreground text-background rounded-full font-medium flex items-center gap-2 hover:bg-foreground/90 transition-colors"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </MagneticButton>
                    </div>
                </form>
            </GlassCard>
        </section>
    );
}
