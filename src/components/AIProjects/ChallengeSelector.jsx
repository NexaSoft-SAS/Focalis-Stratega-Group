import React from 'react';
import { challenges } from './data/aiSolutions';

/**
 * ChallengeSelector - Interactive priority selector
 * User selects their business priority to personalize the experience
 */
const ChallengeSelector = ({ selectedChallenge, onSelectChallenge }) => {
  const colorClasses = {
    emerald: {
      active: 'bg-emerald-500 text-white border-emerald-500 shadow-emerald-500/25',
      inactive: 'bg-white text-emerald-700 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50'
    },
    amber: {
      active: 'bg-amber-500 text-white border-amber-500 shadow-amber-500/25',
      inactive: 'bg-white text-amber-700 border-amber-200 hover:border-amber-400 hover:bg-amber-50'
    },
    blue: {
      active: 'bg-blue-500 text-white border-blue-500 shadow-blue-500/25',
      inactive: 'bg-white text-blue-700 border-blue-200 hover:border-blue-400 hover:bg-blue-50'
    },
    violet: {
      active: 'bg-violet-500 text-white border-violet-500 shadow-violet-500/25',
      inactive: 'bg-white text-violet-700 border-violet-200 hover:border-violet-400 hover:bg-violet-50'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          ¿Cuál es tu prioridad principal?
        </h2>
        <p className="text-sm text-gray-500">
          Selecciona para ver soluciones y métricas relevantes
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {challenges.map((challenge) => {
          const Icon = challenge.icon;
          const isSelected = selectedChallenge === challenge.id;
          const colors = colorClasses[challenge.color];
          
          return (
            <button
              key={challenge.id}
              onClick={() => onSelectChallenge(challenge.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 
                ${isSelected ? colors.active + ' shadow-lg scale-105' : colors.inactive}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              `}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className={`
                  p-2 rounded-lg transition-colors
                  ${isSelected ? 'bg-white/20' : 'bg-gray-100'}
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm leading-tight">
                  {challenge.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Selected challenge description */}
      {selectedChallenge && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-sm text-blue-700 text-center">
            {challenges.find(c => c.id === selectedChallenge)?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeSelector;
