import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Zap, Droplets, TrendingUp, Recycle } from 'lucide-react';

const ImpactoVerdeComponent = ({ data }) => {
  const { co2Reduction, impactMetrics } = data;

  // Prepare data for pie chart
  const pieData = [
    { name: 'Reducción Conseguida', value: co2Reduction.percentage },
    { name: 'Objetivo Pendiente', value: 100 - co2Reduction.percentage }
  ];

  const COLORS = ['#10b981', '#f3f4f6'];

  // Icon mapping
  const iconMap = {
    Zap: Zap,
    Droplets: Droplets,
    TrendingUp: TrendingUp,
    Recycle: Recycle
  };

  const formatNumber = (value, unit) => {
    if (unit === '€' && value >= 1000) {
      return `${(value / 1000).toFixed(0)}k€`;
    }
    return `${value}${unit}`;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Impacto Verde Actual</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CO2 Reduction Chart */}
        <div className="space-y-4">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
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
                  <div className="text-3xl font-bold text-emerald-600">
                    {co2Reduction.percentage}%
                  </div>
                  <div className="text-sm text-gray-500">CO₂ reducido</div>
                </div>
              </div>
            </div>
          </div>

          {/* Year over year trend */}
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={co2Reduction.yearOverYear}>
                <XAxis dataKey="year" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name === 'reduction' ? 'Conseguido' : 'Objetivo']}
                  labelFormatter={(label) => `Año ${label}`}
                />
                <Line type="monotone" dataKey="reduction" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
                <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#94a3b8', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(impactMetrics).map(([key, metric]) => {
            const IconComponent = iconMap[metric.icon];
            return (
              <div key={key} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg">
                    <IconComponent className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {metric.trend}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-xl font-bold text-gray-900">
                    {formatNumber(metric.value, metric.unit)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {key === 'energySaved' && 'Energía ahorrada'}
                    {key === 'waterSaved' && 'Agua conservada'}
                    {key === 'economicBenefit' && 'Ahorro económico'}
                    {key === 'wasteReduction' && 'Residuos reducidos'}
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

export default ImpactoVerdeComponent;