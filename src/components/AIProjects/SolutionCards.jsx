import React, { useState } from 'react';
import { ChevronDown, Clock, CheckCircle2 } from 'lucide-react';
import { solutions } from './data/aiSolutions';

/**
 * SolutionCards - Expandable AI solution cards
 * Highlights cards relevant to selected challenge
 */
const SolutionCards = ({ selectedChallenge }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Soluciones de IA
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          const isRelevant = !selectedChallenge || solution.relatedChallenges.includes(selectedChallenge);
          const isExpanded = expandedCard === solution.id;
          const hasKpiForChallenge = selectedChallenge && solution.kpis[selectedChallenge];
          
          return (
            <div
              key={solution.id}
              className={`
                bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden
                ${isRelevant 
                  ? 'border-blue-200 shadow-md hover:shadow-lg' 
                  : 'border-gray-100 opacity-60'}
                ${isExpanded ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              `}
            >
              {/* Card Header - Always visible */}
              <button
                onClick={() => toggleCard(solution.id)}
                className="w-full p-5 text-left focus:outline-none"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`
                      p-2.5 rounded-xl transition-colors
                      ${isRelevant ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`
                    w-5 h-5 text-gray-400 transition-transform duration-300
                    ${isExpanded ? 'rotate-180' : ''}
                  `} />
                </div>
                
                {/* Quick KPI badge if relevant */}
                {hasKpiForChallenge && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {solution.kpis[selectedChallenge].value} {solution.kpis[selectedChallenge].label}
                  </div>
                )}
              </button>
              
              {/* Expandable Content */}
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 text-sm mt-4 mb-4">
                    {solution.description}
                  </p>
                  
                  {/* Benefits list */}
                  <div className="space-y-2 mb-4">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Implementation time */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 pt-3 border-t border-gray-100">
                    <Clock className="w-4 h-4" />
                    <span>Tiempo de implementación: <strong>{solution.implementationTime}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SolutionCards;
