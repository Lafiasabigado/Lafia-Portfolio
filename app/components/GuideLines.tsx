import * as React from "react";

export default function GuideLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block overflow-hidden"
    >
      <div className="relative mx-auto h-full max-w-[760px] px-5">
        {/* Left dotted guideline */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px border-l border-dashed border-line"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent)",
          }}
        >
          <div className="absolute -top-1 -left-[4px] text-[10px] text-muted/50 font-mono select-none">
            +
          </div>
        </div>

        {/* Right dotted guideline */}
        <div
          className="absolute right-5 top-0 bottom-0 w-px border-l border-dashed border-line"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent)",
          }}
        >
          <div className="absolute -top-1 -left-[4px] text-[10px] text-muted/50 font-mono select-none">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
