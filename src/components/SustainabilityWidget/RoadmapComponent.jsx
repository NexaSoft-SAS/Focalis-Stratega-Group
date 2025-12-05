import React, { useState } from 'react';
import { Search, Settings, BarChart3, Rocket, CheckCircle, Clock, Circle } from 'lucide-react';

const RoadmapComponent = ({ phases }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const iconMap = {
    Search: Search,
    Settings: Settings,
    BarChart3: BarChart3,
    Rocket: Rocket
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
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
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Roadmap de Implementación</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200"></div>
        
        <div className="space-y-6">
          {phases.map((phase, index) => {
            const IconComponent = iconMap[phase.icon];
            const isSelected = selectedPhase === phase.id;
            
            return (
              <div key={phase.id} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${getStatusColor(phase.status)} shadow-sm z-10`}></div>
                
                <div 
                  className={`ml-16 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-emerald-50 border-emerald-200 shadow-md' 
                      : 'bg-gray-50 border-gray-100 hover:bg-gray-100'
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
                        <h3 className="font-semibold text-gray-900">{phase.name}</h3>
                        <p className="text-sm text-gray-600">{phase.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-11 sm:ml-0">
                      {getStatusIcon(phase.status)}
                      <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                        phase.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        phase.status === 'in-progress' ? 'bg-amber-100 text-amber-700' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {phase.status === 'completed' ? 'Completado' :
                         phase.status === 'in-progress' ? 'En progreso' : 'Pendiente'}
                      </span>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-emerald-200 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-sm text-gray-700 mb-3">{phase.description}</p>
                      {phase.completionDate && (
                        <p className="text-xs text-emerald-600 font-medium">
                          Completado: {new Date(phase.completionDate).toLocaleDateString('es-ES')}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progreso General</span>
            <span className="text-sm font-semibold text-emerald-600">50%</span>
          </div>
          <div className="w-full bg-emerald-100 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapComponent;