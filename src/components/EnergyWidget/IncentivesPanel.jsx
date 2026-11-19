import React from 'react';
import { DollarSign, ShieldCheck, PackageOpen, Timer } from 'lucide-react';

const iconMap = {
  DollarSign,
  ShieldCheck,
  PackageOpen,
  Timer
};

const colorConfig = {
  emerald: {
    bg: 'bg-emerald-50/70',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    valueColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800'
  },
  blue: {
    bg: 'bg-blue-50/70',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    valueColor: 'text-blue-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800'
  },
  amber: {
    bg: 'bg-amber-50/70',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    valueColor: 'text-amber-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800'
  },
  violet: {
    bg: 'bg-violet-50/70',
    border: 'border-violet-200',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-700',
    valueColor: 'text-violet-700',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-800'
  }
};

const IncentivesPanel = ({ incentives = [] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-xs font-semibold text-amber-800 mb-2">
            Marco Regulatorio Ley 1715 de 2014 & Res. UPME 203
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Incentivos Tributarios para Energía Solar Fotovoltaica
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Beneficios fiscales cuantificables tramitados ante la UPME, ANLA y DIAN con dirección técnica de Focalis
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {incentives.map((item) => {
          const colors = colorConfig[item.color] || colorConfig.amber;
          const Icon = typeof item.icon === 'string' ? (iconMap[item.icon] || ShieldCheck) : (item.icon || ShieldCheck);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-xl border ${colors.bg} ${colors.border} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-base">
                      {item.title}
                    </h3>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${colors.badgeBg} ${colors.badgeText}`}>
                    {item.legalRef}
                  </span>
                </div>

                <div className={`text-3xl font-extrabold ${colors.valueColor} my-3 tracking-tight`}>
                  {item.value}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                <span>Vía radicación SIREE / UPME</span>
                <span className="font-medium text-gray-700">Focalis PMO</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncentivesPanel;
