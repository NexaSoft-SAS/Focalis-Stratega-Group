import React from "react";

/**
 * CTAButton - Call-to-action button with arrow animation
 * Glassmorphism style with hover effects
 */
const CTAButton = ({ href, emoji, label, className = "" }) => (
  <a 
    href={href}
    className={`mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group ${className}`}
  >
    {emoji && <span>{emoji}</span>}
    <span>{label}</span>
    <svg 
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
);

export default CTAButton;
