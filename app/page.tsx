import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { Matches } from "@/components/Matches";
import { GameShowcase } from "@/components/GameShowcase";
import { Footer } from "@/components/Footer";
import { Gamepad2, Monitor, Trophy } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <Hero />

      <div className="relative z-10">
        <div className="bg-black/50 backdrop-blur-sm border-y border-white/5 py-8">
          <div className="container mx-auto flex justify-center gap-12 md:gap-24 opacity-50 uppercase tracking-[0.2em] text-sm md:text-base font-bold text-gray-400">
            <span className="flex items-center gap-2"><Gamepad2 className="w-5 h-5" /> Infinite</span>
            <span className="flex items-center gap-2"><Trophy className="w-5 h-5" /> Discipline</span>
            <span className="flex items-center gap-2"><Monitor className="w-5 h-5" /> Dominance</span>
          </div>
        </div>

        <Roster />

        <Matches />

        <GameShowcase />
      </div>

      <Footer />
    </main>
  );
}
