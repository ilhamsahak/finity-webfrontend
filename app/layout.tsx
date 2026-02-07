import type { Metadata } from "next";
import { Orbitron, Outfit } from "next/font/google"; // Modern Gamer Fonts
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FINITY | Infinite Skill. Zero Limits.",
  description: "Professional Esports Organization dedicated to championship dominance.",
  openGraph: {
    title: "FINITY | Infinite Skill. Zero Limits.",
    description: "Professional Esports Organization dedicated to championship dominance.",
    url: "https://finity.gg",
    siteName: "FINITY",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FINITY | Infinite Skill. Zero Limits.",
    description: "Professional Esports Organization dedicated to championship dominance.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${orbitron.variable} antialiased bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}
