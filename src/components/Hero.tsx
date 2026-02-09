import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MessageSquare, Play, Zap } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
    return (
        <section className="hero">
            {/* Dynamic Background */}
            <div className="hero-bg">
                <div className="hero-noise" />
                {/* Nebulas */}
                <div className="hero-nebula-1 animate-pulse-slow" />
                <div className="hero-nebula-2 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="container hero-content">
                {/* Main Logo Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="logo-container"
                >
                    <div className="logo-glow" />
                    <img
                        src="/icon.png"
                        alt="Finity Logo"
                        className="logo-image"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        INFINITE SKILL. <br className="hidden md:block" />
                        <span className="text-gradient">ZERO LIMITS.</span>
                    </h1>
                    <p className="tagline">
                        Professional Esports Organization
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas">
                        <Button variant="primary" size="lg" style={{ minWidth: '200px' }} glow>
                            <MessageSquare style={{ width: '20px', height: '20px' }} /> JOIN DISCORD
                        </Button>
                        <Button variant="secondary" size="lg" style={{ minWidth: '200px' }} glow>
                            <Play style={{ width: '20px', height: '20px' }} /> WATCH MATCHES
                        </Button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="scroll-indicator"
                >
                    <span className="scroll-text">Scroll</span>
                    <div className="scroll-line" />
                </motion.div>
            </div>

            {/* Decorative Lines */}
            <div className="decorative-bottom-line" />

            <div className="hero-zaps">
                <Zap className="text-primary" />
                <Zap className="text-secondary" />
            </div>
        </section>
    );
};
