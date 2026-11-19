import React from 'react';
import HeaderComponent from './HeaderComponent';
import EnergyMetricsComponent from './EnergyMetricsComponent';
import IncentivesPanel from './IncentivesPanel';
import SolarSolutionsCards from './SolarSolutionsCards';
import ImplementationTimeline from './ImplementationTimeline';
import SavingsProjection from './SavingsProjection';
import CTAComponent from './CTAComponent';
import { energyData } from './data/energyData';
import { Toaster } from '@/components/ui/toaster';

const EnergyWidget = ({ title, subtitle, data = energyData, onFormSubmit, className = "" }) => {
  const handleFormSubmit = (formData) => {
    console.log('Energy form submitted:', formData);
    if (onFormSubmit) onFormSubmit(formData);
  };

  return (
    <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <HeaderComponent title={title} subtitle={subtitle} />
      <div className="p-6 space-y-8">
        <EnergyMetricsComponent data={data} />
        <IncentivesPanel incentives={data.taxIncentives} />
        <SolarSolutionsCards solutions={data.solarSolutions} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ImplementationTimeline phases={data.implementationPhases} />
          <SavingsProjection projectionData={data.savingsProjection} />
        </div>
        <CTAComponent onFormSubmit={handleFormSubmit} />
      </div>
      <Toaster />
    </div>
  );
};

export default EnergyWidget;
