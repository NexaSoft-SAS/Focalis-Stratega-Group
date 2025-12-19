import React from "react";

/**
 * PageFrame - Container component for brochure pages
 * Provides gradient background, rounded corners, and decorative SVG geometry
 */
const PageFrame = ({
  children,
  bg = "from-[#0f2e5f] to-[#2aa9e0]",
  bleed = false,
}) => (
  <div className="relative w-full min-h-[500px] lg:pb-[141.4%] lg:min-h-0">
    <div
      className={`lg:absolute lg:inset-0 overflow-hidden rounded-2xl shadow-xl ${
        bleed ? "" : "p-1 sm:p-4"
      }`}
    >
      <div
        className={`lg:absolute lg:inset-0 rounded-[1.25rem] ${bleed ? "" : "p-2 sm:p-6"}`}
      >
        <div
          className={`absolute inset-0 rounded-[1.25rem] bg-gradient-to-br ${bg}`}
        ></div>
        
        {/* Decorative geometry circles */}
        <svg
          className="absolute -top-24 -right-12 opacity-20"
          width="520"
          height="520"
          viewBox="0 0 520 520"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pageframe-g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity=".25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="260" cy="260" r="220" stroke="url(#pageframe-g1)" strokeWidth="2" fill="none" />
          <circle cx="260" cy="260" r="160" stroke="url(#pageframe-g1)" strokeWidth="2" fill="none" />
          <circle cx="260" cy="260" r="100" stroke="url(#pageframe-g1)" strokeWidth="2" fill="none" />
        </svg>
        
        <div className="relative p-4 sm:p-8 flex flex-col text-white min-h-[468px] lg:absolute lg:inset-0 lg:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default PageFrame;
