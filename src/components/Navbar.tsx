import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { clsx } from "clsx";

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "TEAM", href: "#team" },
    { name: "MATCHES", href: "#matches" },
    { name: "MEDIA", href: "#media" },
    { name: "CONTACT", href: "#footer" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={clsx("navbar", isScrolled && "navbar-scrolled")}>
            <div className="container nav-container">
                {/* Logo */}
                <a href="/" className="nav-logo">
                    <img src="/header-logo.png" alt="Finity Logo" />
                </a>

                {/* Desktop Nav */}
                <nav className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="nav-cta">
                    <a href="#footer">
                        <Button variant="outline" size="sm" className="community-btn">
                            COMMUNITY
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#footer" onClick={() => setMobileMenuOpen(false)} style={{ width: '100%' }}>
                            <Button variant="outline" style={{ width: '100%' }}>
                                COMMUNITY
                            </Button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
