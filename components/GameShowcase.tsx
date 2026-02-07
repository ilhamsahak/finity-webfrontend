"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Trophy, Swords, Crown } from "lucide-react";

export const GameShowcase = () => {
    return (
        <section id="games" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col gap-2 items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary tracking-[0.4em] text-sm font-bold uppercase"
                    >
                        Current Discipline
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white uppercase"
                    >
                        Magic Chess
                    </motion.h2>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface/50 group">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent z-10" />
                            <Image
                                src="https://akmweb.youngjoygame.com/web/gms/image/fe231ec3e3e48e910de00e4cb1627452.jpg"
                                alt="Magic Chess Art"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />

                            {/* Overlay Stats/badges acting as UI elements on the image */}
                            <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                                <div className="glass px-4 py-2 rounded-lg border-l-2 border-primary">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">Global Rank</p>
                                    <p className="text-xl font-bold font-heading text-white">TOP 10</p>
                                </div>
                                <div className="glass px-4 py-2 rounded-lg border-l-2 border-secondary">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">Win Rate</p>
                                    <p className="text-xl font-bold font-heading text-white">68.4%</p>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-b from-surface to-background lg:bg-none">
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <Crown className="w-64 h-64 text-white rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    MASTER THE <span className="text-gradient">STRATEGY</span>
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                    Our Magic Chess division represents the pinnacle of strategic auto-battler gameplay.
                                    Calculating synergies, managing economies, and outmaneuvering opponents on the 6x7 board.
                                    Finity dominates the meta with precision and adaptability.
                                </p>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Champion Mentality</h4>
                                            <p className="text-sm text-gray-500">Relentless pursuit of victory and strategic mastery.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                            <Swords className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Aggressive Playstyle</h4>
                                            <p className="text-sm text-gray-500">Known for high-risk, high-reward commander synergies.</p>
                                        </div>
                                    </div>
                                </div>

                                <Button variant="outline" size="lg" className="w-fit" glow>
                                    CONTACT US TO SCRIMMAGE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
