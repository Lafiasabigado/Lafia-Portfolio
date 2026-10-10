import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "active" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "border-line text-fg-soft bg-white/[0.03]",
    active: "bg-white text-black border-white font-medium",
    accent: "border-accent/40 text-blue-400 bg-blue-500/10",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[13px] leading-none border transition-colors",
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
