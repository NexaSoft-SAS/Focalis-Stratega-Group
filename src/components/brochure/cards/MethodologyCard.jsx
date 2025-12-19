import React from "react";
import { ShieldCheck } from "lucide-react";

/**
 * MethodologyCard - Displays methodology and differentials
 */
const MethodologyCard = ({ points }) => (
  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
    <h4 className="font-semibold mb-2 flex items-center gap-2">
      <ShieldCheck className="w-5 h-5" />
      Metodología y Diferenciales
    </h4>
    <ul className="text-sm hidden sm:grid gap-1">
      {points.map((point, index) => (
        <li key={index} className="flex gap-2">
          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MethodologyCard;
