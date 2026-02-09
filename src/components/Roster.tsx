import { motion } from "framer-motion";
import { User, Crosshair, Shield, Swords, Wand2 } from "lucide-react";
import "./Roster.css";

const players = [
    {
        name: "Huxxy",
        role: "Pos 1",
        gradientClass: "gradient-cyan",
        icon: <Wand2 style={{ width: '24px', height: '24px' }} />
    },
    {
        name: "Kai",
        role: "Pos 2",
        gradientClass: "gradient-purple",
        icon: <Crosshair style={{ width: '24px', height: '24px' }} />
    },
    {
        name: "Azz",
        role: "Pos 3",
        gradientClass: "gradient-blue",
        icon: <Shield style={{ width: '24px', height: '24px' }} />
    },
    {
        name: "Kabas",
        role: "Pos 4",
        gradientClass: "gradient-pink",
        icon: <Swords style={{ width: '24px', height: '24px' }} />
    },
];

export const Roster = () => {
    return (
        <section id="team" className="roster">
            <div className="container roster-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="roster-title"
                >
                    OUR ROSTER
                </motion.h2>
                <p className="roster-subtitle">MEET THE SQUAD</p>
            </div>

            <div className="container">
                <div className="roster-grid">
                    {players.map((player, index) => (
                        <motion.div
                            key={player.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="player-card"
                        >
                            <div className="player-card-inner">
                                <div className={`player-bg-gradient ${player.gradientClass}`} />
                                <div className="player-radial-overlay" />

                                <div className="player-avatar">
                                    <User className="player-avatar-icon" />
                                </div>

                                <div className="player-info">
                                    <div className="role-icon-container">
                                        <div className="role-icon">
                                            {player.icon}
                                        </div>
                                    </div>
                                    <h3 className="player-name">{player.name}</h3>
                                    <p className="player-role">{player.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="roster-divider" />
        </section>
    );
};
