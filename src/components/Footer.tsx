import { Twitter, Instagram, Youtube, Twitch } from "lucide-react";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">
                            FINITY
                        </a>
                        <p className="footer-tagline">
                            Pushing the boundaries of competitive gaming.
                            Building the future of esports, one victory at a time.
                        </p>
                        <div className="footer-socials">
                            {[Twitter, Instagram, Youtube, Twitch].map((Icon, i) => (
                                <a key={i} href="#" className="social-link">
                                    <Icon style={{ width: '18px', height: '18px' }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#team" className="footer-link">Team</a></li>
                            <li><a href="#matches" className="footer-link">Matches</a></li>
                            <li><a href="#media" className="footer-link">Store</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="footer-heading">Stay Updated</h4>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter email" className="newsletter-input" />
                            <button className="newsletter-btn">GO</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Finity Esports. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <a href="#" className="legal-link">Privacy Policy</a>
                        <a href="#" className="legal-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
