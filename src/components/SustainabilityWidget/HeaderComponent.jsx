import React from 'react';
import { Leaf, TrendingUp } from 'lucide-react';

const HeaderComponent = ({ title, subtitle }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-8 rounded-t-2xl">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/25">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Cumplimiento Verificado</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {title || "Panel de Cumplimiento y Ahorro Industrial"}
        </h1>
        
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          {subtitle || "Asegure el cumplimiento de la normatividad colombiana (Res. 0631, Ley 1715, INVIMA), acceda a incentivos tributarios y reduzca costos operativos con dirección técnica PMO e ingeniería asistida por IA."}
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent;