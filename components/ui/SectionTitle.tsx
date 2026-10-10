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
        "mb-10 md:mb-14",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="font-handwritten text-muted text-xl md:text-2xl mb-2 tracking-wide">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
