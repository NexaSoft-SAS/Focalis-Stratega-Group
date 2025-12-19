import React from 'react';
import { timelineSteps } from './data/aiSolutions';

/**
 * ProcessTimeline - Implementation roadmap visualization
 */
const ProcessTimeline = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
        Proceso de Implementación
      </h2>
      
      <div className="relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-emerald-400 z-0" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timelineSteps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {/* Step circle */}
              <div className="relative z-10 mx-auto w-16 h-16 bg-white rounded-full border-2 border-blue-200 flex items-center justify-center shadow-sm mb-3 transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                <span className="text-2xl">{step.icon}</span>
              </div>
              
              {/* Step number badge */}
              <div className="absolute -top-1 -right-1 md:right-1/3 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                {step.step}
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-gray-500 mb-1 leading-tight hidden sm:block">
                {step.description}
              </p>
              <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                {step.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-6">
        Metodología ágil adaptada a las necesidades de cada proyecto
      </p>
    </div>
  );
};

export default ProcessTimeline;
