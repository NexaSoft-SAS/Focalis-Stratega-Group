import React, { useState } from 'react';
import { ChevronDown, Clock, CheckCircle2, Zap, Battery, ShieldCheck, Sun } from 'lucide-react';

const iconMap = {
  Zap,
  Battery,
  ShieldCheck,
  Sun
};

const SolarSolutionsCards = ({ solutions = [] }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Soluciones de Transición Energética Solar
          </h2>
          <p className="text-sm text-gray-600 mt-0.5">
            Estructuración técnica, regulatoria y financiera según la escala operativa de su planta
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {solutions.map((solution) => {
          const isExpanded = expandedCard === solution.id;
          const Icon = typeof solution.icon === 'string' 
            ? (iconMap[solution.icon] || Sun) 
            : (solution.icon || Sun);

          return (
            <div
              key={solution.id}
              className={`
                bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between
                ${isExpanded ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-lg' : 'border-gray-100 hover:border-amber-200 hover:shadow-md'}
              `}
            >
              {/* Card Header */}
              <button
                type="button"
                onClick={() => toggleCard(solution.id)}
                className="w-full p-5 text-left focus:outline-none flex-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-amber-100 text-amber-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ChevronDown className={`
                      w-5 h-5 text-gray-400 transition-transform duration-300 mt-1
                      ${isExpanded ? 'rotate-180 text-amber-600' : ''}
                    `} />
                  </div>

                  <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">
                    {solution.title}
                  </h3>

                  <p className="text-xs font-medium text-amber-700 mb-3">
                    {solution.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span>{isExpanded ? 'Ocultar detalles' : 'Ver alcance y beneficios'}</span>
                  <span className="text-gray-400">{isExpanded ? '▲' : '▼'}</span>
                </div>
              </button>

              {/* Expandable Content */}
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-5 pb-5 border-t border-amber-100 bg-amber-50/30">
                  <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider mt-4 mb-3">
                    Beneficios del Proyecto
                  </h4>

                  <div className="space-y-2.5 mb-4">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Implementation Time */}
                  <div className="flex items-center gap-2 text-xs text-gray-600 pt-3 border-t border-gray-200/60">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Tiempo de ejecución: <strong className="text-gray-900">{solution.implementationTime}</strong></span>
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

export default SolarSolutionsCards;
