import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Trophy, Swords, Crown } from "lucide-react";
import "./GameShowcase.css";

export const GameShowcase = () => {
    return (
        <section id="games" className="game-showcase">
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="game-showcase-header">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="showcase-featured-label"
                    >
                        Current Discipline
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="showcase-title"
                    >
                        Magic Chess
                    </motion.h2>
                </div>

                <div className="showcase-card">
                    <div className="showcase-grid">
                        {/* Image Section */}
                        <div className="showcase-image-section">
                            <div className="image-gradient-overlay" />
                            <img
                                src="https://akmweb.youngjoygame.com/web/gms/image/fe231ec3e3e48e910de00e4cb1627452.jpg"
                                alt="Magic Chess Art"
                                className="showcase-image"
                            />

                            <div className="image-badges">
                                <div className="image-badge badge-primary">
                                    <p className="badge-label">Global Rank</p>
                                    <p className="badge-value">TOP 10</p>
                                </div>
                                <div className="image-badge badge-secondary">
                                    <p className="badge-label">Win Rate</p>
                                    <p className="badge-value">68.4%</p>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div id="master-strategy" className="showcase-content-section">
                            <div className="showcase-bg-icon">
                                <Crown style={{ width: '256px', height: '256px', transform: 'rotate(12deg)' }} />
                            </div>

                            <div style={{ position: 'relative', zIndex: 10 }}>
                                <h3 className="showcase-heading">
                                    MASTER THE <span className="text-gradient">STRATEGY</span>
                                </h3>

                                <p className="showcase-description">
                                    Our Magic Chess division represents the pinnacle of strategic auto-battler gameplay.
                                    Calculating synergies, managing economies, and outmaneuvering opponents on the 6x7 board.
                                    Finity dominates the meta with precision and adaptability.
                                </p>

                                <div className="showcase-features">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <Trophy style={{ width: '24px', height: '24px' }} />
                                        </div>
                                        <div>
                                            <h4 className="feature-title">Champion Mentality</h4>
                                            <p className="feature-text">Relentless pursuit of victory and strategic mastery.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon feature-icon-secondary">
                                            <Swords style={{ width: '24px', height: '24px' }} />
                                        </div>
                                        <div>
                                            <h4 className="feature-title">Aggressive Playstyle</h4>
                                            <p className="feature-text">Known for high-risk, high-reward commander synergies.</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://wa.me/601133224953" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="lg" style={{ width: 'fit-content' }} glow>
                                        CONTACT US TO SCRIMMAGE
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
