"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    className,
    variant = "primary",
    size = "md",
    glow = true,
    children,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-primary text-black hover:bg-[#33f2ff] border-none",
        secondary: "bg-secondary text-white hover:bg-[#8a1aff] border-none",
        outline: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10",
        ghost: "bg-transparent hover:bg-white/10 text-white",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg font-bold tracking-wider",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={glow ? { boxShadow: "0 0 0px rgba(0,0,0,0)" } : {}}
            animate={
                glow && variant === "primary"
                    ? { boxShadow: ["0 0 10px rgba(0,240,255,0.3)", "0 0 20px rgba(0,240,255,0.6)"] }
                    : glow && variant === "secondary"
                        ? { boxShadow: ["0 0 10px rgba(112,0,255,0.3)", "0 0 20px rgba(112,0,255,0.6)"] }
                        : {}
            }
            transition={{
                boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }
            }}
            className={cn(
                "relative rounded-sm uppercase font-heading font-medium tracking-wide transition-colors flex items-center justify-center gap-2",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {/* Decorative corners for tech look */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-50" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-50" />

            {children}
        </motion.button>
    );
};
