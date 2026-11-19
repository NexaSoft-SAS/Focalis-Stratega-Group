import React, { useState, useEffect } from 'react';
import { Home, Leaf, Cpu, Sun } from 'lucide-react';
import focalisLogo from '@/assets/Logo Focalis V1.png';

const navItems = [
  {
    path: '/',
    label: 'Inicio',
    shortLabel: 'Inicio',
    icon: Home,
    activeColor: 'bg-slate-900 text-white shadow-md shadow-slate-900/20',
    hoverColor: 'hover:bg-slate-100 text-slate-700'
  },
  {
    path: '/sustainability',
    label: 'Sostenibilidad',
    shortLabel: 'Sostenibilidad',
    icon: Leaf,
    activeColor: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25',
    hoverColor: 'hover:bg-emerald-50 hover:text-emerald-700 text-gray-700'
  },
  {
    path: '/ai-projects',
    label: 'Ingeniería IA',
    shortLabel: 'IA',
    icon: Cpu,
    activeColor: 'bg-blue-600 text-white shadow-md shadow-blue-600/25',
    hoverColor: 'hover:bg-blue-50 hover:text-blue-700 text-gray-700'
  },
  {
    path: '/energy',
    label: 'Transición Solar',
    shortLabel: 'Solar',
    icon: Sun,
    activeColor: 'bg-amber-500 text-white shadow-md shadow-amber-500/25',
    hoverColor: 'hover:bg-amber-50 hover:text-amber-700 text-gray-700'
  }
];

const normalizePath = (path) => {
  if (!path) return '';
  const trimmed = path.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

const Navbar = ({ currentPath = '' }) => {
  const [activePath, setActivePath] = useState(normalizePath(currentPath));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = currentPath || window.location.pathname;
      setActivePath(normalizePath(path));
    }
  }, [currentPath]);

  const isItemActive = (itemPath) => {
    return activePath === normalizePath(itemPath);
  };

  return (
    <nav className="max-w-6xl mx-auto mb-6 sticky top-3 z-50 transition-all duration-300">
      <div className="bg-white/92 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-md hover:shadow-lg transition-shadow px-3 py-2 sm:px-5 sm:py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo / Brand Link to Home */}
          <a
            href="/"
            className="flex items-center gap-2 group flex-shrink-0 py-1 focus:outline-none"
            title="Focalis Stratega Group - Inicio"
          >
            <img
              src={focalisLogo.src}
              alt="Focalis Logo"
              className="h-6 sm:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-bold text-gray-900 text-xs sm:text-sm tracking-wide hidden md:inline">
              FOCALIS
            </span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = isItemActive(item.path);
              const Icon = item.icon;

              return (
                <a
                  key={item.path}
                  href={item.path}
                  title={item.label}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold
                    transition-all duration-200 touch-manipulation select-none
                    ${active
                      ? `${item.activeColor} scale-[1.02]`
                      : `${item.hoverColor} hover:bg-gray-100/80`
                    }
                  `}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="inline md:hidden text-[11px] sm:text-xs">
                    {item.shortLabel}
                  </span>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
