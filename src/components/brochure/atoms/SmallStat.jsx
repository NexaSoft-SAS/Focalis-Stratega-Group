import React from "react";

/**
 * SmallStat - Compact stat display component
 * Shows a label and value in a glass-style box
 */
const SmallStat = ({ label, value }) => (
  <div className="rounded-xl bg-white/10 px-3 py-2 border border-white/15">
    <div className="text-xs opacity-80">{label}</div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);

export default SmallStat;
