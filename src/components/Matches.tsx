import { motion } from "framer-motion";
import "./Matches.css";

const matches = [
    { event: "CHAMPIONSHIP FINALS", opponent: "CLOUD9", score: "2 - 1", result: "WIN", date: "FEB 10, 2026", time: "20:00 EST" },
    { event: "SEMI-FINALS", opponent: "LIQUID", score: "2 - 0", result: "WIN", date: "FEB 08, 2026", time: "18:00 EST" },
    { event: "GROUP STAGE", opponent: "SENTINELS", score: "1 - 2", result: "LOSS", date: "FEB 05, 2026", time: "16:00 EST" },
];

export const Matches = () => {
    return (
        <section id="matches" className="matches">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">LATEST MATCHES</h2>
                    <p className="roster-subtitle">GAMES WE COMPETE IN</p>
                </div>

                <div className="matches-container">
                    {matches.map((match, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="match-row"
                        >
                            <div className="match-opponent-info">
                                <h4 className="match-opponent">{match.opponent}</h4>
                                <p className="match-event">{match.event}</p>
                            </div>

                            <div className="match-score-container">
                                <div className="match-score">
                                    {match.score}
                                </div>
                                <span className={`match-result ${match.result === 'WIN' ? 'result-win' : 'result-loss'}`}>
                                    {match.result}
                                </span>
                            </div>

                            <div className="match-time-info">
                                <p>{match.date}</p>
                                <p className="match-time">{match.time}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
