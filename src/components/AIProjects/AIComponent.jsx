import React from "react";
import pizarraAI from "@/assets/img/pizarraAI.png";
import CTAComponent from '@/components/AIProjects/CTAComponent';

const AI = ({ title, subtitle, description, onFormSubmit }) => {

    const handleFormSubmit = (formData) => {
    console.log('Form AI submitted:', formData);
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">            
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-8 rounded-t-2xl">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>                    
                    <p className="text-gray-700 text-xl max-w-3xl leading-relaxed">{subtitle}</p>
                </div>
                <div className="p-6 space-y-8">
                    <p className="text-gray-600 max-w-2xl leading-relaxed">{description}</p>
                    <br />
                    <img id="pizarraAI" src={pizarraAI.src} alt="pizarra soluciones prácticas con IA" style={{ width: "800px", height: "500px" }} className="rounded-xl shadow-sm border border-gray-100"/>
                    <CTAComponent onFormSubmit={handleFormSubmit} /> 
                </div>
        </div>
    );
};

export default AI;
