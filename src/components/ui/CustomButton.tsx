
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "btn relative overflow-hidden group transition-all duration-300",
          {
            "btn-primary": variant === "primary",
            "btn-outline": variant === "outline",
            "btn-ghost": variant === "ghost",
            "px-3 py-2 text-sm": size === "sm",
            "px-4 py-2.5": size === "md",
            "px-6 py-3 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <span className="absolute bg-white/10 inset-0 w-0 group-hover:w-full transition-all duration-500 -z-0"></span>
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
