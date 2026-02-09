import { motion, type HTMLMotionProps } from "framer-motion";
import "./Button.css";
import { clsx } from "clsx";

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
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
                "btn",
                `btn-${variant}`,
                `btn-${size}`,
                className
            )}
            {...props}
        >
            <span className="btn-corner btn-corner-tl" />
            <span className="btn-corner btn-corner-br" />
            {children}
        </motion.button>
    );
};
