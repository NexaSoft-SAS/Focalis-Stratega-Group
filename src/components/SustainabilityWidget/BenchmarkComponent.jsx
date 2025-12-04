import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const BenchmarkComponent = ({ benchmarkData }) => {
  // Prepare data for the chart
  const chartData = [
    {
      metric: 'Emisiones CO₂',
      actual: benchmarkData.current.emissions,
      proyeccion: benchmarkData.projection.emissions,
      industria: benchmarkData.industry.emissions,
      unit: 'tCO₂/año'
    },
    {
      metric: 'Eficiencia',
      actual: benchmarkData.current.efficiency,
      proyeccion: benchmarkData.projection.efficiency,
      industria: benchmarkData.industry.efficiency,
      unit: '%'
    },
    {
      metric: 'Energía Renovable',
      actual: benchmarkData.current.renewableEnergy,
      proyeccion: benchmarkData.projection.renewableEnergy,
      industria: benchmarkData.industry.renewableEnergy,
      unit: '%'
    },
    {
      metric: 'Gestión Residuos',
      actual: benchmarkData.current.wasteManagement,
      proyeccion: benchmarkData.projection.wasteManagement,
      industria: benchmarkData.industry.wasteManagement,
      unit: '%'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}{data.unit}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Calculate improvement percentages
  const calculateImprovement = (current, projection) => {
    const improvement = ((projection - current) / current) * 100;
    return improvement.toFixed(0);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Benchmark vs. Industria</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="metric" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="actual" 
                  name="Estado Actual"
                  fill="#ef4444" 
                  radius={[2, 2, 0, 0]}
                  animationDuration={800}
                />
                <Bar 
                  dataKey="proyeccion" 
                  name="Proyección Verde"
                  fill="#10b981" 
                  radius={[2, 2, 0, 0]}
                  animationDuration={1200}
                />
                <Bar 
                  dataKey="industria" 
                  name="Media Industria"
                  fill="#6b7280" 
                  radius={[2, 2, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Improvement Cards */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 mb-4">Mejoras Proyectadas</h3>
          
          {chartData.map((item, index) => {
            const improvement = calculateImprovement(item.actual, item.proyeccion);
            const isPositive = improvement > 0;
            
            return (
              <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                  <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                    isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {isPositive ? '+' : ''}{improvement}%
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Actual: {item.actual}{item.unit}</span>
                    <span>Meta: {item.proyeccion}{item.unit}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${Math.min((item.proyeccion / Math.max(item.actual, item.proyeccion, item.industria)) * 100, 100)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">Potencial de Mejora</h4>
            <p className="text-sm text-gray-600">Comparado con la media de la industria</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">+68%</div>
            <div className="text-xs text-gray-500">Mejora promedio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkComponent;