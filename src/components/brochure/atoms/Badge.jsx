import React from "react";

/**
 * Badge - Small pill-shaped label component
 * Used for category/section labels with glassmorphism effect
 */
const Badge = ({ children, className = "" }) => (
  <span 
    className={`px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 ${className}`}
  >
    {children}
  </span>
);

export default Badge;
