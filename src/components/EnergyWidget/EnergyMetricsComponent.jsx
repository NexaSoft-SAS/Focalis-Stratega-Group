import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { Zap, Sun, TrendingUp, Leaf } from 'lucide-react';

const EnergyMetricsComponent = ({ data }) => {
  const { energyMetrics } = data;
  const { solarProgress, impactMetrics } = energyMetrics;

  const pieData = [
    { name: 'Avance Solar', value: solarProgress.percentage },
    { name: 'Pendiente', value: 100 - solarProgress.percentage }
  ];

  const COLORS = ['#f59e0b', '#fef3c7'];

  const iconMap = {
    Zap,
    Sun,
    TrendingUp,
    Leaf
  };

  const getMetricLabel = (key) => {
    switch (key) {
      case 'energySavings':
        return 'Ahorro en factura energética';
      case 'solarCapacity':
        return 'Potencia solar instalable';
      case 'taxDeduction':
        return 'Deducción fiscal acumulada (Ley 1715)';
      case 'co2Avoided':
        return 'Emisiones evitadas (ISO 14064)';
      default:
        return '';
    }
  };

  const formatValue = (value, unit) => {
    if (unit === 'COP $') {
      return `$${value} COP`;
    }
    return `${value} ${unit}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Indicadores de Desempeño Energético y Tributario
          </h2>
          <p className="text-sm text-gray-600 mt-0.5">
            Métricas clave según ISO 50006 e incentivos certificados bajo Ley 1715 de 2014
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Solar Progress Donut + YoY Trend Card */}
        <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-amber-100 shadow-sm flex flex-col justify-between space-y-4">
          <div className="text-center">
            <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full inline-block mb-3">
              Avance de Metas FNCER
            </span>
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={75}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">
                    {solarProgress.percentage}%
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Avance Proyecto</div>
                </div>
              </div>
            </div>
          </div>

          {/* Year over year trend */}
          <div className="h-28 sm:h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={solarProgress.yearOverYear}>
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                <YAxis hide />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name === 'savings' ? 'Ahorro' : 'Meta']}
                  labelFormatter={(label) => `Año ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="savings" 
                  name="savings"
                  stroke="#f59e0b" 
                  strokeWidth={3} 
                  dot={{ fill: '#f59e0b', r: 4 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  name="target"
                  stroke="#94a3b8" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  dot={{ fill: '#94a3b8', r: 3 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4 Impact Metrics Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {Object.entries(impactMetrics).map(([key, metric]) => {
            const IconComponent = iconMap[metric.icon] || Zap;
            return (
              <div 
                key={key} 
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 bg-amber-100 rounded-lg">
                    <IconComponent className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/50 px-2.5 py-1 rounded-full">
                    {metric.trend}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatValue(metric.value, metric.unit)}
                  </div>
                  <div className="text-xs text-gray-600 leading-snug">
                    {getMetricLabel(key)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnergyMetricsComponent;
