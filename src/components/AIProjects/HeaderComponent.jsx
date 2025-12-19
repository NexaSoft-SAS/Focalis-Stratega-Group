import React from 'react';
import { Sparkles } from 'lucide-react';
import { heroContent } from './data/aiSolutions';

/**
 * HeaderComponent - Hero section with value proposition
 */
const HeaderComponent = ({ title, subtitle, description }) => {
  const content = {
    title: title || heroContent.title,
    subtitle: subtitle || heroContent.subtitle,
    description: description || heroContent.description
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-10 rounded-t-2xl">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full transform -translate-x-24 translate-y-24" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-blue-300 text-sm font-medium">Inteligencia Artificial Aplicada</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
          {content.title}
        </h1>
        
        <p className="text-blue-100 text-lg max-w-2xl mb-2">
          {content.subtitle}
        </p>
        
        <p className="text-blue-200/70 text-sm max-w-xl">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent;
