import React, { useState } from 'react';
import { 
  Search, 
  Settings, 
  ShieldCheck, 
  Hammer, 
  CheckCircle2, 
  Clock, 
  Circle,
  FileCheck2
} from 'lucide-react';

const iconMap = {
  Search,
  Settings,
  ShieldCheck,
  Hammer,
  CheckCircle2,
  FileCheck2
};

const ImplementationTimeline = ({ phases = [] }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-amber-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'in-progress':
        return 'bg-amber-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Fases de Implementación Solar PMO
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Ruta crítica desde el diagnóstico hasta la certificación RETIE y conexión CREG 030
            </p>
          </div>
        </div>

        <div className="relative mt-6">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200" />

          <div className="space-y-5">
            {phases.map((phase) => {
              const IconComponent = iconMap[phase.icon] || Settings;
              const isSelected = selectedPhase === phase.id;

              return (
                <div key={phase.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${getStatusColor(phase.status)} shadow-sm z-10`} />

                  <div
                    className={`ml-16 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50/70 border-amber-300 shadow-sm'
                        : 'bg-gray-50/80 border-gray-100 hover:bg-gray-100/70'
                    }`}
                    onClick={() => setSelectedPhase(isSelected ? null : phase.id)}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          phase.status === 'completed' ? 'bg-emerald-100' :
                          phase.status === 'in-progress' ? 'bg-amber-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            phase.status === 'completed' ? 'text-emerald-600' :
                            phase.status === 'in-progress' ? 'text-amber-600' : 'text-gray-500'
                          }`} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                            {phase.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Duración: {phase.duration}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 ml-11 sm:ml-0">
                        {getStatusIcon(phase.status)}
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap ${
                          phase.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                          phase.status === 'in-progress' ? 'bg-amber-100 text-amber-800' : 
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {phase.status === 'completed' ? 'Completado' :
                           phase.status === 'in-progress' ? 'En progreso' : 'Por iniciar'}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-amber-200/80 text-xs text-gray-700 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                        <p className="mb-2">{phase.description}</p>
                        {phase.completionDate && (
                          <p className="text-emerald-700 font-semibold">
                            Hito superado: {phase.completionDate}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress bar + RETIE notice */}
      <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
          <div className="flex items-center justify-between mb-1.5 text-xs">
            <span className="font-semibold text-gray-700">Avance de Ruta Crítica (Fases 1-2)</span>
            <span className="font-bold text-amber-700">35%</span>
          </div>
          <div className="w-full bg-amber-200/60 rounded-full h-2">
            <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: '35%' }} />
          </div>
        </div>

        <p className="text-[11px] text-gray-500 italic">
          * Nota técnica: La inspección y certificación RETIE (Fase 5) es realizada por un organismo de inspección acreditado por el ONAC, gestionado bajo la supervisión de Focalis PMO.
        </p>
      </div>
    </div>
  );
};

export default ImplementationTimeline;
