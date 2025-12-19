import React from "react";

/**
 * ServiceCard - Displays a service offering with icon, title, and bullet points
 * Supports both light and dark theme variants
 */
const ServiceCard = ({ icon: Icon, title, bullets, dark = false }) => (
  <div
    className={`rounded-xl ${dark ? "bg-white/5" : "bg-white"} ${
      dark ? "text-white" : "text-slate-900"
    } p-4 shadow-sm border ${dark ? "border-white/10" : "border-slate-200"}`}
  >
    <div className="flex items-center gap-2 mb-2">
      <div
        className={`p-2 rounded-lg ${dark ? "bg-white/10" : "bg-slate-100"}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="font-semibold leading-tight">{title}</h4>
    </div>
    <ul className="text-sm leading-relaxed hidden sm:grid gap-1">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex gap-2">
          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-current/60"></span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
