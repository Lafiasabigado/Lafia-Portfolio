import * as React from "react";

export default function GuideLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden md:block overflow-hidden"
    >
      <div className="relative mx-auto h-full max-w-container px-6">
        {/* Left dotted guideline */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px border-l border-dashed border-line"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          {/* Subtle + marker at the top */}
          <div className="absolute -top-1 -left-[5px] text-[10px] text-muted/60 font-mono select-none">
            +
          </div>
        </div>

        {/* Right dotted guideline */}
        <div
          className="absolute right-6 top-0 bottom-0 w-px border-l border-dashed border-line"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          {/* Subtle + marker at the top */}
          <div className="absolute -top-1 -left-[5px] text-[10px] text-muted/60 font-mono select-none">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
