import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300",
        variant === "primary" &&
          "bg-anivel-black text-white hover:bg-anivel-700",
        variant === "outline" &&
          "border border-anivel-black text-anivel-black hover:bg-anivel-black hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
