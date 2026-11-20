import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  Droplets, 
  Sun, 
  Leaf, 
  Factory, 
  Search, 
  Filter, 
  ExternalLink, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  AlertTriangle, 
  X, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Download
} from 'lucide-react';
import { regulationsSummaryTable, detailedSectors } from './data/regulationsData';

const iconMap = {
  Droplets,
  Sun,
  Leaf,
  Factory,
  ShieldCheck,
  Scale
};

const RegulationsWidget = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [expandedSectorId, setExpandedSectorId] = useState(null);

  // Filtered summary table rows
  const filteredSummary = useMemo(() => {
    return regulationsSummaryTable.filter(item => {
      const matchesSector = selectedSector === 'all' || item.id === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesSector;
      
      const matchesQuery = 
        item.sector.toLowerCase().includes(q) ||
        item.norma.toLowerCase().includes(q) ||
        item.autoridad.toLowerCase().includes(q) ||
        item.iso.toLowerCase().includes(q) ||
        item.foco.toLowerCase().includes(q) ||
        item.impacto.toLowerCase().includes(q);

      return matchesSector && matchesQuery;
    });
  }, [selectedSector, searchQuery]);

  // Filtered detailed sector cards
  const filteredDetailed = useMemo(() => {
    return detailedSectors.filter(item => {
      const matchesSector = selectedSector === 'all' || item.id === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesSector;

      const matchesQuery =
        item.sectorTitle.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.nationalRegulations.some(nr => 
          nr.norma.toLowerCase().includes(q) || 
          nr.description.toLowerCase().includes(q) ||
          nr.authorities.toLowerCase().includes(q)
        ) ||
        item.isoStandards.some(iso => 
          iso.code.toLowerCase().includes(q) || 
          iso.name.toLowerCase().includes(q) ||
          iso.scope.toLowerCase().includes(q)
        ) ||
        item.economicImpact.benefits.toLowerCase().includes(q) ||
        item.economicImpact.consequences.toLowerCase().includes(q);

      return matchesSector && matchesQuery;
    });
  }, [selectedSector, searchQuery]);

  const toggleSectorDetails = (id) => {
    setExpandedSectorId(prev => prev === id ? null : id);
  };

  const handleSelectSector = (id) => {
    setSelectedSector(id);
    if (id !== 'all') {
      setExpandedSectorId(id);
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSector('all');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
      {/* 1. HERO HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-8 sm:px-8 sm:py-10 text-white">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl transform translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-2xl transform -translate-x-20 translate-y-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-sky-300">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-sky-200 border border-white/15">
              <Scale className="w-3.5 h-3.5 text-sky-400" />
              Marco Legal Colombiano & Normas ISO
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 rounded-full text-xs font-semibold text-emerald-300 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Dirección Técnica PMO
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            Compendio Técnico de Normatividad y Estándares
          </h1>

          <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Consulte la base jurídica obligatoria colombiana (CAR, UPME, DIAN, CREG, INVIMA) y los estándares internacionales ISO que rigen las operaciones de Focalis Stratega Group. Estructuración de proyectos con blindaje legal, interventoría independiente y captura de incentivos fiscales.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-bold text-sky-300">5</div>
              <div className="text-[11px] sm:text-xs text-white/70 font-medium">Sectores Regulados</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-bold text-amber-300">10+</div>
              <div className="text-[11px] sm:text-xs text-white/70 font-medium">Leyes & Resoluciones</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-bold text-emerald-300">10</div>
              <div className="text-[11px] sm:text-xs text-white/70 font-medium">Estándares ISO</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-bold text-purple-300">100%</div>
              <div className="text-[11px] sm:text-xs text-white/70 font-medium">Trazabilidad PMO</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <div className="px-3.5 py-6 sm:px-6 sm:py-6 border-b border-gray-100 bg-gray-50/70 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar norma (0631, 1715), entidad (UPME, CAR, INVIMA), ISO..."
              className="w-full pl-9 pr-9 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                title="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Download Original Markdown Compendium Link */}
          <a
            href="/REGULATIONS.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors shadow-xs"
            title="Ver archivo de texto plano original en Markdown"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Ver fuente Markdown (.md)</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        </div>

        {/* Sector Filter Chips */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            type="button"
            onClick={() => handleSelectSector('all')}
            className={`
              px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer
              ${selectedSector === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
              }
            `}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Todos los Sectores</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedSector === 'all' ? 'bg-white/20' : 'bg-gray-100'}`}>
              5
            </span>
          </button>

          {regulationsSummaryTable.map((item) => {
            const isSelected = selectedSector === item.id;
            const Icon = iconMap[item.id === 'agua' ? 'Droplets' : item.id === 'energia' ? 'Sun' : item.id === 'carbono' ? 'Leaf' : item.id === 'alimentos' ? 'Factory' : 'ShieldCheck'] || BookOpen;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectSector(item.id)}
                className={`
                  px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer
                  ${isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                  }
                `}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.shortName}</span>
              </button>
            );
          })}

          {(selectedSector !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-rose-600 hover:bg-rose-50 border border-rose-200 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Restablecer</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="px-3.5 py-6 sm:px-6 sm:py-8 space-y-10">

        {/* SECTION A: THE ENHANCED COMPLEMENTED TABLE */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Sparkles className="w-3 h-3 text-indigo-600" />
                Matriz Comparativa Unificada
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Tabla de Normatividad, Estándares e Incentivos
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Resumen ejecutivo ampliado de la regulación colombiana frente a metodologías internacionales ISO
              </p>
            </div>

            <div className="text-xs text-gray-500 font-medium">
              Mostrando <span className="font-semibold text-gray-900">{filteredSummary.length}</span> de 5 sectores
            </div>
          </div>

          {/* Desktop Table View (sm+) */}
          <div className="hidden md:block rounded-xl border border-gray-200 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white font-semibold border-b border-gray-200 text-[11.5px]">
                    <th className="py-3 px-3.5">Sector</th>
                    <th className="py-3 px-3.5">Norma Colombiana & Autoridad</th>
                    <th className="py-3 px-3.5">Estándar ISO</th>
                    <th className="py-3 px-3.5">Foco de Cumplimiento</th>
                    <th className="py-3 px-3.5">Incentivo o Sanción</th>
                    <th className="py-3 px-3.5 text-right">Módulo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredSummary.length > 0 ? (
                    filteredSummary.map((item) => (
                      <tr 
                        key={item.id} 
                        className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                        onClick={() => toggleSectorDetails(item.id)}
                        title="Click para ver la ficha técnica detallada de este sector"
                      >
                        <td className="py-3.5 px-3.5 font-bold text-gray-900 whitespace-nowrap">
                          <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold border ${item.badgeColor}`}>
                            {item.sector}
                          </span>
                        </td>
                        <td className="py-3.5 px-3.5 font-medium text-gray-900">
                          <div className="font-semibold text-slate-900">{item.norma}</div>
                          <div className="text-[11px] text-gray-500 mt-0.5">{item.autoridad}</div>
                        </td>
                        <td className="py-3.5 px-3.5 font-mono text-[11px] font-semibold text-indigo-700 whitespace-nowrap">
                          {item.iso}
                        </td>
                        <td className="py-3.5 px-3.5 text-gray-600 max-w-xs leading-relaxed">
                          {item.foco}
                        </td>
                        <td className="py-3.5 px-3.5 text-gray-700 max-w-xs leading-relaxed">
                          <span className="text-emerald-700 font-medium">{item.impacto}</span>
                        </td>
                        <td className="py-3.5 px-3.5 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <a
                            href={item.ruta}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                          >
                            <span>Ir al módulo</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500 text-sm">
                        No se encontraron normas coincidentes con la búsqueda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card-Table View (< md) */}
          <div className="md:hidden space-y-3">
            {filteredSummary.length > 0 ? (
              filteredSummary.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2.5">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${item.badgeColor}`}>
                      {item.sector}
                    </span>
                    <a
                      href={item.ruta}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <span>Módulo</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Norma & Autoridad</span>
                      <span className="font-semibold text-gray-900 block">{item.norma}</span>
                      <span className="text-gray-500 text-[11px]">{item.autoridad}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Estándar ISO</span>
                      <span className="font-mono font-semibold text-indigo-700">{item.iso}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Foco de Cumplimiento</span>
                      <span className="text-gray-600">{item.foco}</span>
                    </div>

                    <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-lg p-2 text-emerald-800 mt-2">
                      <span className="font-semibold text-[11px] block">Impacto / Beneficio:</span>
                      <span className="text-[11px] leading-snug">{item.impacto}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleSectorDetails(item.id)}
                    className="w-full mt-2 py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-gray-200/60"
                  >
                    <span>{expandedSectorId === item.id ? 'Ocultar alcance técnico' : 'Ver alcance técnico detallado'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedSectorId === item.id ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500 text-xs bg-white rounded-xl border border-gray-200">
                No se encontraron normas coincidentes con los filtros seleccionados.
              </div>
            )}
          </div>
        </div>

        {/* SECTION B: DETAILED TECHNICAL COMPENDIUM CARDS */}
        <div className="space-y-6 pt-4 border-t border-gray-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-1.5">
              <FileText className="w-3 h-3 text-sky-600" />
              Fichas Técnicas Desglosadas
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Alcance Regulatorio, Sanciones y Rol Focalis PMO
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Desglose exhaustivo por sector de los artículos de ley, estándares ISO, consecuencias legales y entregables de ingeniería
            </p>
          </div>

          <div className="space-y-6">
            {filteredDetailed.map((sector) => {
              const Icon = iconMap[sector.icon] || BookOpen;
              const isExpanded = expandedSectorId === sector.id || selectedSector === sector.id;

              return (
                <div
                  key={sector.id}
                  id={`sector-${sector.id}`}
                  className={`
                    bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-xs
                    ${sector.theme.border}
                  `}
                >
                  {/* Card Header */}
                  <div 
                    className="p-4 sm:p-6 bg-gradient-to-r from-gray-50/80 to-white border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                    onClick={() => toggleSectorDetails(sector.id)}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`p-3 rounded-xl ${sector.theme.bgLight} ${sector.theme.accent} border border-gray-100 shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                            {sector.sectorTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-3xl leading-relaxed">
                          {sector.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
                        {isExpanded ? 'Colapsar detalles' : 'Expandir alcance'}
                      </span>
                      <div className={`p-1.5 rounded-lg bg-gray-100 text-gray-600 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-indigo-600 bg-indigo-50' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Technical Body */}
                  {isExpanded && (
                    <div className="p-4 sm:p-6 space-y-6 bg-white animate-in fade-in duration-200">
                      
                      {/* Grid: 4 Technical Quadrants */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Quadrant 1: Marco Nacional Obligatorio */}
                        <div className="bg-gray-50/70 p-4 sm:p-5 rounded-xl border border-gray-200/80 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                            <Scale className="w-4 h-4 text-indigo-600" />
                            <span>1. Marco Jurídico Nacional (Colombia)</span>
                          </div>

                          <div className="space-y-3">
                            {sector.nationalRegulations.map((norm, nIdx) => (
                              <div key={nIdx} className="bg-white p-3.5 rounded-lg border border-gray-200/60 shadow-xs space-y-1.5">
                                <div className="font-semibold text-xs sm:text-sm text-slate-900">
                                  {norm.norma}
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  {norm.description}
                                </p>
                                {norm.keyPoints && (
                                  <ul className="space-y-1 pt-1 text-[11px] text-gray-700 list-disc list-inside">
                                    {norm.keyPoints.map((kp, kIdx) => (
                                      <li key={kIdx} className="leading-snug">{kp}</li>
                                    ))}
                                  </ul>
                                )}
                                <div className="text-[10px] text-indigo-800 font-medium bg-indigo-50/60 px-2 py-0.5 rounded-md inline-block mt-1">
                                  Vigila: {norm.authorities}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quadrant 2: Estándares Internacionales ISO */}
                        <div className="bg-gray-50/70 p-4 sm:p-5 rounded-xl border border-gray-200/80 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>2. Estándares Internacionales ISO</span>
                          </div>

                          <div className="space-y-2.5">
                            {sector.isoStandards.map((iso, iIdx) => (
                              <div key={iIdx} className="bg-white p-3.5 rounded-lg border border-gray-200/60 shadow-xs">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                    {iso.code}
                                  </span>
                                  <span className="text-[11px] font-semibold text-gray-800">{iso.name}</span>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                                  {iso.scope}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quadrant 3: Impacto Económico, Sanciones e Incentivos */}
                        <div className="bg-gray-50/70 p-4 sm:p-5 rounded-xl border border-gray-200/80 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                            <TrendingUp className="w-4 h-4 text-amber-600" />
                            <span>3. Impacto Económico & Fiscal</span>
                          </div>

                          <div className="space-y-3 text-xs">
                            <div className="bg-rose-50/60 border border-rose-200/80 rounded-lg p-3">
                              <div className="flex items-center gap-1.5 font-semibold text-rose-800 mb-1">
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                                <span>Consecuencias de Incumplimiento</span>
                              </div>
                              <p className="text-rose-950/80 text-[11.5px] leading-relaxed">
                                {sector.economicImpact.consequences}
                              </p>
                            </div>

                            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-3">
                              <div className="flex items-center gap-1.5 font-semibold text-emerald-800 mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>Incentivos Fiscales & Ahorro Operativo</span>
                              </div>
                              <p className="text-emerald-950/80 text-[11.5px] leading-relaxed">
                                {sector.economicImpact.benefits}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Quadrant 4: Rol Técnico Focalis PMO */}
                        <div className="bg-gray-50/70 p-4 sm:p-5 rounded-xl border border-gray-200/80 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                            <BookOpen className="w-4 h-4 text-purple-600" />
                            <span>4. Alcance y Entregables Focalis PMO</span>
                          </div>

                          <div className="bg-white p-3.5 rounded-lg border border-gray-200/60 shadow-xs space-y-2">
                            <p className="text-xs text-gray-700 leading-relaxed font-medium">
                              {sector.focalisPMORole.description}
                            </p>

                            <div className="space-y-1.5 pt-1">
                              {sector.focalisPMORole.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                                  <span className="leading-snug">{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Card Footer: Action Link to Operational Module */}
                      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-xs text-gray-500">
                          Soluciones técnicas integradas en la plataforma Focalis Stratega Group
                        </span>

                        <a
                          href={sector.routeLink}
                          className={`
                            inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                            transition-all duration-200 shadow-xs ${sector.theme.button}
                          `}
                        >
                          <span>{sector.routeLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION C: DOWNLOADABLE SPEC & REPOSITORY SECTION */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-sky-200 border border-white/15">
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                Dossier de Referencia Pública
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                ¿Necesita el compendio regulatorio en formato técnico para su empresa?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Descargue o consulte directamente el archivo de texto plano <code className="bg-white/10 px-1.5 py-0.5 rounded text-sky-300 font-mono">REGULATIONS.md</code> con la citación completa de decretos, artículos y metodologías aplicables a procesos de debida diligencia ambiental y tributaria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
              <a
                href="/REGULATIONS.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-sky-50 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Abrir REGULATIONS.md</span>
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/15"
              >
                <span>Volver al Inicio</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegulationsWidget;
