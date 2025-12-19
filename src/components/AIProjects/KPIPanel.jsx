import React from 'react';
import { TrendingUp } from 'lucide-react';
import { globalKPIs } from './data/aiSolutions';

/**
 * KPIPanel - Dashboard-style metrics display
 * Updates based on selected challenge
 */
const KPIPanel = ({ selectedChallenge }) => {
  // Default to showing all if nothing selected
  const kpis = selectedChallenge 
    ? globalKPIs[selectedChallenge] 
    : globalKPIs.costs; // Default view

  const colorClasses = {
    costs: 'from-emerald-500 to-teal-600',
    speed: 'from-amber-500 to-orange-600',
    decisions: 'from-blue-500 to-indigo-600',
    automation: 'from-violet-500 to-purple-600'
  };

  const bgGradient = selectedChallenge 
    ? colorClasses[selectedChallenge] 
    : colorClasses.costs;

  return (
    <div className={`bg-gradient-to-br ${bgGradient} p-6 rounded-xl text-white relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-semibold">
            {selectedChallenge 
              ? 'Métricas Clave' 
              : 'Impacto Potencial'}
          </h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {kpis.map((kpi, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-2xl mb-1">{kpi.icon}</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{kpi.value}</div>
              <div className="text-xs text-white/80 leading-tight">{kpi.label}</div>
            </div>
          ))}
        </div>
        
        {!selectedChallenge && (
          <p className="mt-4 text-sm text-white/70 text-center">
            ↑ Selecciona tu prioridad para ver métricas específicas
          </p>
        )}
      </div>
    </div>
  );
};

export default KPIPanel;
