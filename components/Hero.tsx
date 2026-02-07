"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MessageSquare, Play, Zap } from "lucide-react";
import Image from "next/image";
import icon from "@/app/icon.png";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-background z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-overlay"></div>
                {/* Nebulas */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
                {/* Main Logo Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-12 group"
                >
                    {/* Glow backing */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* The Logo Image */}
                    <Image
                        src={icon}
                        alt="Finity Logo"
                        width={300}
                        height={300}
                        priority
                        className="relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] object-contain"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 mb-4 tracking-wider drop-shadow-lg">
                        INFINITE SKILL. <br className="hidden md:block" />
                        <span className="text-gradient">ZERO LIMITS.</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[0.2em] mb-10 font-medium">
                        Professional Esports Organization
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                        <Button variant="primary" size="lg" className="w-full md:w-auto min-w-[200px]" glow>
                            <MessageSquare className="w-5 h-5" /> JOIN DISCORD
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full md:w-auto min-w-[200px]" glow>
                            <Play className="w-5 h-5" /> WATCH MATCHES
                        </Button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
                </motion.div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="absolute top-[20%] left-0 w-full flex justify-between px-10 opacity-20 pointer-events-none">
                <Zap className="w-6 h-6 text-primary" />
                <Zap className="w-6 h-6 text-secondary" />
            </div>
        </section>
    );
};
