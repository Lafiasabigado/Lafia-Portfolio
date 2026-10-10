import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  innerClassName?: string;
  radius?: "md" | "lg" | "xl";
  interactive?: boolean;
}

export function Card({
  className,
  innerClassName,
  radius = "lg",
  interactive = true,
  children,
  ...props
}: CardProps) {
  const radiusOuter = {
    md: "rounded-[18px]",
    lg: "rounded-[28px]",
    xl: "rounded-[36px]",
  }[radius];

  const radiusInner = {
    md: "rounded-[12px]",
    lg: "rounded-[22px]",
    xl: "rounded-[30px]",
  }[radius];

  return (
    <div
      className={cn(
        "bg-card-ring p-2 shadow-glow transition-all duration-300",
        radiusOuter,
        interactive && "hover:shadow-glow-lift hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-bg-elevated overflow-hidden w-full h-full border border-white/[0.04]",
          radiusInner,
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
