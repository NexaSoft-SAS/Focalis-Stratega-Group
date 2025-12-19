import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import ChallengeSelector from './ChallengeSelector';
import KPIPanel from './KPIPanel';
import SolutionCards from './SolutionCards';
import ProcessTimeline from './ProcessTimeline';
import CTAComponent from './CTAComponent';
import { Toaster } from '@/components/ui/toaster';

/**
 * AIWidget - Main orchestrator for AI Projects page
 * Manages state and composes all dashboard components
 */
const AIWidget = ({ 
  title,
  subtitle,
  description,
  onFormSubmit,
  className = "" 
}) => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleFormSubmit = (formData) => {
    console.log('AI Project form submitted:', formData);
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Hero Header */}
      <HeaderComponent 
        title={title}
        subtitle={subtitle}
        description={description}
      />
      
      <div className="p-6 space-y-8">
        {/* Challenge Selector - User picks priority */}
        <ChallengeSelector 
          selectedChallenge={selectedChallenge}
          onSelectChallenge={setSelectedChallenge}
        />
        
        {/* KPI Dashboard - Updates based on selection */}
        <KPIPanel selectedChallenge={selectedChallenge} />
        
        {/* Solution Cards - Highlights relevant solutions */}
        <SolutionCards selectedChallenge={selectedChallenge} />
        
        {/* Implementation Timeline */}
        <ProcessTimeline />
        
        {/* CTA with context from selection */}
        <CTAComponent 
          onFormSubmit={handleFormSubmit}
          selectedChallenge={selectedChallenge}
        />
      </div>
      
      <Toaster />
    </div>
  );
};

export default AIWidget;
