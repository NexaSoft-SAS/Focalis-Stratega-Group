import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { TrendingDown, Calendar, ShieldCheck } from 'lucide-react';

const SavingsProjection = ({ projectionData }) => {
  const chartData = [
    {
      metric: 'Factura Energía',
      actual: projectionData.current.energyCost,
      proyeccion: projectionData.projection.energyCost,
      industria: projectionData.industry.energyCost,
      unit: ' M COP/año',
    },
    {
      metric: 'Emisiones CO₂',
      actual: projectionData.current.emissions,
      proyeccion: projectionData.projection.emissions,
      industria: projectionData.industry.emissions,
      unit: ' tCO₂/año',
    },
    {
      metric: 'Independencia',
      actual: projectionData.current.independence,
      proyeccion: projectionData.projection.independence,
      industria: projectionData.industry.independence,
      unit: '%',
    },
    {
      metric: 'Incentivos Ley 1715',
      actual: projectionData.current.incentivesCaptured,
      proyeccion: projectionData.projection.incentivesCaptured,
      industria: projectionData.industry.incentivesCaptured,
      unit: '%',
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3.5 rounded-lg shadow-lg border border-gray-200 text-xs">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="py-0.5" style={{ color: entry.color }}>
              <span className="font-medium">{entry.name}</span>: {entry.value}{data.unit}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Proyección de Ahorro e Impacto vs. Industria
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Comparativa de desempeño financiero y ambiental con sistema solar implementado
            </p>
          </div>
        </div>

        <div className="h-72 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
            >
              <XAxis
                dataKey="metric"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: '#4b5563' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: '#6b7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} 
              />
              <Bar
                dataKey="actual"
                name="Sin Solar (Actual)"
                fill="#ef4444"
                radius={[3, 3, 0, 0]}
              />
              <Bar
                dataKey="proyeccion"
                name="Con Solar (Proyección)"
                fill="#f59e0b"
                radius={[3, 3, 0, 0]}
              />
              <Bar
                dataKey="industria"
                name="Referencia Industria"
                fill="#94a3b8"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Improvement Cards */}
      <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-1">
            <TrendingDown className="w-4 h-4 text-amber-600" />
            <span>Ahorro Anual Estimado</span>
          </div>
          <div className="text-lg font-bold text-gray-900">COP $228M</div>
          <div className="text-[11px] text-emerald-700 font-medium">39.5% de reducción neta</div>
        </div>

        <div className="p-3.5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Retorno de Inversión</span>
          </div>
          <div className="text-lg font-bold text-gray-900">3.2 Años</div>
          <div className="text-[11px] text-gray-600">ROI acelerado por Ley 1715</div>
        </div>

        <div className="p-3.5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-center gap-1.5 text-xs text-blue-800 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Vida Útil Fotovoltaica</span>
          </div>
          <div className="text-lg font-bold text-gray-900">25+ Años</div>
          <div className="text-[11px] text-gray-600">Garantía de generación tier-1</div>
        </div>
      </div>
    </div>
  );
};

export default SavingsProjection;
