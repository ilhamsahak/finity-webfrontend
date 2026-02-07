"use client";

import { motion } from "framer-motion";
import { User, Crosshair, Shield, Zap, Target, Wand2, Swords } from "lucide-react";

const players = [
    {
        name: "Huxxy",
        role: "Pos 1",
        color: "from-cyan-500 to-blue-600",
        icon: <Wand2 className="w-6 h-6" /> // Mage
    },
    {
        name: "Kai",
        role: "Pos 2",
        color: "from-purple-500 to-pink-600",
        icon: <Crosshair className="w-6 h-6" /> // Archer
    },
    {
        name: "Azz",
        role: "Pos 3",
        color: "from-blue-500 to-indigo-600",
        icon: <Shield className="w-6 h-6" /> // Shield
    },
    {
        name: "Kabas",
        role: "Pos 4",
        color: "from-pink-500 to-rose-600",
        icon: <Swords className="w-6 h-6" /> // Bruiser
    },
];

export const Roster = () => {
    return (
        <section id="team" className="py-24 relative bg-black/50 overflow-hidden">
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2"
                >
                    OUR ROSTER
                </motion.h2>
                <p className="text-primary text-sm tracking-[0.3em] font-medium">MEET THE SQUAD</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {players.map((player, index) => (
                        <motion.div
                            key={player.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] w-full"
                        >
                            {/* Card Container */}
                            <div className="absolute inset-0 bg-surface border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">

                                {/* Background Gradient/Image Placeholder */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${player.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Character/Image Placeholder */}
                                <div className="absolute top-10 left-0 right-0 bottom-32 flex items-center justify-center">
                                    <User className="w-32 h-32 text-white/20 group-hover:text-white/40 transition-colors" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent pt-20">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:text-white transition-colors">
                                            {player.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white font-heading tracking-wide mb-1 group-hover:text-primary transition-colors">
                                        {player.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">{player.role}</p>


                                </div>

                                {/* Neon Border Glow */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
};
