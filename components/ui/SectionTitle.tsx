import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

export function SectionTitle({
  className,
  eyebrow,
  title,
  subtitle,
  align = "left",
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-6 md:mb-8",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="font-handwritten text-muted text-lg mb-1 tracking-wide">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1.5 text-muted text-xs sm:text-sm max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
