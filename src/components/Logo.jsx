import React from 'react';
import mrElectricLogo from '../assets/mr-electric-logo.png';

/**
 * Official Brand Emblem for MR. ELECTRICAL WORKS
 * Dynamic electric swirl plug with crystal-clear transparent background
 */
export const LogoMark = ({ size = 42, className = "" }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      aria-label="MR. ELECTRICAL WORKS Emblem"
    >
      <img 
        src={mrElectricLogo} 
        alt="MR. ELECTRICAL WORKS Emblem" 
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        loading="eager"
      />
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
    sm: { mark: 34, title: "text-sm sm:text-base", sub: "text-[8px] sm:text-[8.5px]", telemetry: "text-[7px]" },
    md: { mark: 44, title: "text-base sm:text-lg md:text-xl", sub: "text-[8.5px] sm:text-[9.5px]", telemetry: "text-[7.5px]" },
    lg: { mark: 56, title: "text-xl sm:text-2xl md:text-3xl", sub: "text-[10px] sm:text-[11px]", telemetry: "text-[8.5px]" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      {/* Official MR. Electric Swirl Plug Emblem */}
      <div className={`p-1 sm:p-1.5 rounded-full flex items-center justify-center transition-all duration-200 border shrink-0 ${
        isLight 
          ? "bg-[#141821]/80 border-[#2C323B] shadow-sm group-hover:border-[#E57A36] group-hover:shadow-[0_0_12px_rgba(229,122,54,0.3)]" 
          : "bg-white border-[#D7DBE0] shadow-sm group-hover:border-[#E57A36]"
      }`}>
        <LogoMark size={currentSize.mark} />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        {/* Authoritative Architectural Wordmark */}
        <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
          <span className={`font-display font-extrabold tracking-tight ${currentSize.title} ${
            isLight ? "text-white" : "text-[#121417]"
          } transition-colors group-hover:text-[#E57A36] whitespace-nowrap`}>
            MR. ELECTRICAL
          </span>
          <span className={`font-display font-extrabold tracking-wide ${currentSize.title} text-[#E57A36] whitespace-nowrap`}>
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block animate-pulse" title="Grid Active Incomer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
