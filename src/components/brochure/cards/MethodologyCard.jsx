import React from "react";
import { ShieldCheck } from "lucide-react";

/**
 * MethodologyCard - Displays methodology and differentials
 */
const MethodologyCard = ({ points, dark = false }) => (
  <div
    className={`rounded-xl p-4 border ${
      dark
        ? "bg-white/5 border-white/10 text-white"
        : "bg-slate-50 border-slate-200 text-slate-900"
    }`}
  >
    <h4 className="font-semibold mb-2 flex items-center gap-2">
      <ShieldCheck className="w-5 h-5" />
      Metodología y Diferenciales
    </h4>
    <ul className="text-sm hidden sm:grid gap-1">
      {points.map((point, index) => (
        <li key={index} className="flex gap-2">
          <span
            className={`mt-2 block w-1.5 h-1.5 rounded-full shrink-0 ${
              dark ? "bg-white/40" : "bg-slate-400"
            }`}
          ></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MethodologyCard;
