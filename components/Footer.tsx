import { Twitter, Instagram, Youtube, Twitch } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="footer" className="border-t border-white/10 bg-black pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-heading font-bold text-white mb-6 block">
                            FINITY
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Pushing the boundaries of competitive gaming.
                            Building the future of esports, one victory at a time.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Instagram, Youtube, Twitch].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Navigation</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Team</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Matches</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Store</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Stay Updated</h4>
                        <div className="flex">
                            <input type="email" placeholder="Enter email" className="bg-white/5 border border-white/10 rounded-l px-4 py-2 w-full focus:outline-none focus:border-primary text-white" />
                            <button className="bg-primary text-black px-4 py-2 rounded-r font-bold hover:bg-white transition-colors">GO</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>&copy; 2026 Finity Esports. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
