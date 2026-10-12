import React from 'react';

/**
 * World-class Industrial Engineering Emblem Mark for MR. ELECTRICAL WORKS
 * Designed in compliance with Swiss Industrial Precision & Technical Specification Architecture (DESIGN.md)
 */
export const LogoMark = ({ size = 42, className = "" }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="logoCopperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C85D19" />
            <stop offset="100%" stopColor="#9C4208" />
          </linearGradient>
          <linearGradient id="logoSteelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22262B" />
            <stop offset="100%" stopColor="#121417" />
          </linearGradient>
        </defs>

        {/* Chamfered Industrial Chassis Frame */}
        <path 
          d="M12 2 H52 L62 12 V52 L52 62 H12 L2 52 V12 Z" 
          fill="url(#logoSteelGrad)" 
          stroke="#323842" 
          strokeWidth="1.75"
        />

        {/* 1px Technical Alignment Crosshairs */}
        <line x1="32" y1="4" x2="32" y2="60" stroke="#323842" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />
        <line x1="4" y1="32" x2="60" y2="32" stroke="#323842" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />

        {/* Architectural Busbar Monogram 'M' */}
        <path 
          d="M14 48 V20 L24 34 L32 24 L40 34 L50 20 V48 H44 V29 L38 38 H36 L32 32 L28 38 H26 L20 29 V48 Z" 
          fill="#ECEFF2" 
          opacity="0.95"
        />

        {/* High-Voltage Copper Surge Conductor Core */}
        <path 
          d="M32 14 L24 30 H34 L28 46 L42 28 H32 Z" 
          fill="url(#logoCopperGrad)"
        />

        {/* Precision Terminal Bolt Rivets */}
        <circle cx="12" cy="12" r="1.5" fill="#B35010" />
        <circle cx="52" cy="12" r="1.5" fill="#6B7280" />
        <circle cx="12" cy="52" r="1.5" fill="#6B7280" />
        <circle cx="52" cy="52" r="1.5" fill="#0E639C" />
      </svg>
    </div>
  );
};

const Logo = ({ 
  variant = "dark", // "dark" (for light backgrounds) | "light" (for dark backgrounds)
  size = "md",      // "sm" | "md" | "lg"
  showSubtitle = true 
}) => {
  const isLight = variant === "light";
  
  const sizeMap = {
    sm: { mark: 30, title: "text-sm sm:text-base", sub: "text-[8px] sm:text-[8.5px]", telemetry: "text-[7px]" },
    md: { mark: 38, title: "text-base sm:text-lg md:text-xl", sub: "text-[8.5px] sm:text-[9.5px]", telemetry: "text-[7.5px]" },
    lg: { mark: 50, title: "text-xl sm:text-2xl md:text-3xl", sub: "text-[10px] sm:text-[11px]", telemetry: "text-[8.5px]" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none group cursor-pointer">
      {/* Precision Engineered Trademark Mark */}
      <div className={`p-1 sm:p-1.5 rounded-sm flex items-center justify-center transition-all duration-200 border shrink-0 ${
        isLight 
          ? "bg-[#16191D] border-[#2C323B] shadow-sm group-hover:border-[#B35010]" 
          : "bg-white border-[#D7DBE0] shadow-sm group-hover:border-[#B35010]"
      }`}>
        <LogoMark size={currentSize.mark} />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        {/* Authoritative Architectural Wordmark */}
        <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
          <span className={`font-display font-extrabold tracking-tight ${currentSize.title} ${
            isLight ? "text-white" : "text-[#121417]"
          } transition-colors group-hover:text-[#B35010] whitespace-nowrap`}>
            MR. ELECTRICAL
          </span>
          <span className={`font-display font-extrabold tracking-wide ${currentSize.title} text-[#B35010] whitespace-nowrap`}>
            WORKS
          </span>
        </div>

        {showSubtitle && (
          <div className="flex flex-col mt-0.5 sm:mt-1 space-y-0.5">
            <span className={`font-mono font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase leading-tight ${currentSize.sub} ${
              isLight ? "text-[#9CA3AF]" : "text-[#5C6470]"
            } truncate`}>
              TURNKEY ENGINEERING &amp; CONTRACTING
            </span>
            <div className="hidden sm:flex items-center gap-2">
              <span className={`font-mono font-medium ${currentSize.telemetry} tracking-wider ${
                isLight ? "text-[#6B7280]" : "text-[#8892A0]"
              }`}>
                11kV/415V HT·LT · PATANCHERU, HYD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E639C] inline-block animate-pulse" title="Grid Active Incomer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
