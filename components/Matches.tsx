"use client";

import { motion } from "framer-motion";

const matches = [
    { event: "CHAMPIONSHIP FINALS", opponent: "CLOUD9", score: "2 - 1", result: "WIN", date: "FEB 10, 2026", time: "20:00 EST" },
    { event: "SEMI-FINALS", opponent: "LIQUID", score: "2 - 0", result: "WIN", date: "FEB 08, 2026", time: "18:00 EST" },
    { event: "GROUP STAGE", opponent: "SENTINELS", score: "1 - 2", result: "LOSS", date: "FEB 05, 2026", time: "16:00 EST" },
];

export const Matches = () => {
    return (
        <section id="matches" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-2">LATEST MATCHES</h2>
                    <p className="text-secondary text-sm tracking-[0.3em]">GAMES WE COMPETE IN</p>
                </div>

                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {matches.map((match, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 md:p-8 rounded-lg flex flex-col md:flex-row items-center justify-between border-l-4 border-l-primary hover:bg-white/5 transition-colors group"
                        >
                            {/* Left: Event Info */}
                            <div className="text-center md:text-left mb-4 md:mb-0 w-full md:w-1/3">
                                <h4 className="text-lg font-bold text-white mb-1">{match.opponent}</h4>
                                <p className="text-xs text-gray-400 tracking-wider">{match.event}</p>
                            </div>

                            {/* Center: Score */}
                            <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
                                <div className="text-3xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                                    {match.score}
                                </div>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${match.result === 'WIN' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                    {match.result}
                                </span>
                            </div>

                            {/* Right: Date */}
                            <div className="text-center md:text-right w-full md:w-1/3 text-sm text-gray-400 font-mono">
                                <p>{match.date}</p>
                                <p className="text-xs opacity-60">{match.time}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
