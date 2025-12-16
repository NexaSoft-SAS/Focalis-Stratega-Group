import React from 'react';
import HeaderComponent from '@/components/SustainabilityWidget/HeaderComponent';
import ImpactoVerdeComponent from '@/components/SustainabilityWidget/ImpactoVerdeComponent';
import RoadmapComponent from '@/components/SustainabilityWidget/RoadmapComponent';
import BenchmarkComponent from '@/components/SustainabilityWidget/BenchmarkComponent';
import CTAComponent from '@/components/SustainabilityWidget/CTAComponent';
import { sustainabilityData } from '@/data/mock';
import { Toaster } from '@/components/ui/toaster';
 
const SustainabilityWidget = ({ 
  title, 
  subtitle, 
  data = sustainabilityData, 
  onFormSubmit,
  className = "" 
}) => {
  const handleFormSubmit = (formData) => {
    console.log('Form Sustainability submitted:', formData);
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <HeaderComponent title={title} subtitle={subtitle} />
      
      <div className="p-6 space-y-8">
        <ImpactoVerdeComponent data={data} />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <RoadmapComponent phases={data.roadmapPhases} />
          <BenchmarkComponent benchmarkData={data.benchmarkData} />
        </div>
        
        <CTAComponent onFormSubmit={handleFormSubmit} /> 
      </div>
      
      <Toaster />
    </div>
  );
};

export default SustainabilityWidget;