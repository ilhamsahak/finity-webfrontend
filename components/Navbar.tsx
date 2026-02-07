"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import headerLogo from "@/app/header-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "TEAM", href: "#team" },
    { name: "MATCHES", href: "#matches" },
    { name: "MEDIA", href: "#media" },
    { name: "CONTACT", href: "#master-strategy" },
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass border-b border-primary/20" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src={headerLogo}
                        alt="Finity Logo"
                        width={150}
                        height={50}
                        className="object-contain h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-heading tracking-widest text-gray-400 hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="#footer">
                        <Button variant="outline" size="sm" className="!px-8 border-secondary text-secondary hover:bg-secondary/20">
                            COMMUNITY
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
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
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-primary/20 p-6 md:hidden flex flex-col gap-6 items-center"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl font-heading text-white hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#footer" onClick={() => setMobileMenuOpen(false)} className="w-full">
                            <Button variant="outline" className="w-full">
                                COMMUNITY
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
