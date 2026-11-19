import React from 'react';
import { Sun, TrendingUp } from 'lucide-react';
import { energyData } from './data/energyData';

const HeaderComponent = ({ title, subtitle }) => {
  const currentTitle = title || energyData.heroContent.title;
  const currentSubtitle = subtitle || energyData.heroContent.subtitle;
  const description = energyData.heroContent.description;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 px-6 py-8 rounded-t-2xl text-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-yellow-300/10 rounded-full transform translate-y-12 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
            <Sun className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/20">
            <TrendingUp className="w-4 h-4 text-amber-100" />
            <span className="text-sm font-medium text-white">Incentivos UPME Certificados</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
          {currentTitle}
        </h1>

        <p className="text-white/95 max-w-2xl text-base md:text-lg font-medium leading-relaxed mb-1">
          {currentSubtitle}
        </p>

        {description && (
          <p className="text-amber-100/90 text-sm max-w-2xl leading-normal mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
