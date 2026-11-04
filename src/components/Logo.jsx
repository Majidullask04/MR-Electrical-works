import React from 'react';
import mrElectricLogo from '../assets/mr-electric-logo.png';

/**
 * Official Brand Emblem for MR. ELECTRICAL WORKS
 */
export const LogoMark = ({ size = 42, className = "" }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="MR. ELECTRICAL WORKS Emblem"
    >
      <img
        src={mrElectricLogo}
        alt="MR. ELECTRICAL WORKS Emblem"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};

const Logo = ({
  variant = "dark", // "dark" (light backgrounds) | "light" (dark chassis panels)
  size = "md",      // "sm" | "md" | "lg"
  showSubtitle = true
}) => {
  const isLight = variant === "light";

  const sizeMap = {
    sm: {
      mark: 28,
      title: "text-[12px] xs:text-sm sm:text-base",
      sub: "text-[7.5px] xs:text-[8px] sm:text-[8.5px]",
      telemetry: "text-[7px]"
    },
    md: {
      mark: 34,
      title: "text-[13px] xs:text-base sm:text-lg md:text-xl",
      sub: "text-[8px] xs:text-[8.5px] sm:text-[9.5px]",
      telemetry: "text-[7.5px]"
    },
    lg: {
      mark: 46,
      title: "text-base xs:text-xl sm:text-2xl md:text-3xl",
      sub: "text-[9px] xs:text-[10px] sm:text-[11px]",
      telemetry: "text-[8.5px]"
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 select-none max-w-full min-w-0">
      {/* Official MR. Electric emblem in a machined hairline roundel */}
      <div className={`p-0.5 xs:p-1 sm:p-1.5 shrink-0 flex items-center justify-center border rounded-full ${
        isLight
          ? "bg-panel-chassis border-panel-line"
          : "bg-surface border-border"
      } transition-colors`}>
        <LogoMark size={currentSize.mark} />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        {/* Wordmark — one colour, brand copper carried by the roundel */}
        <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
          <span className={`font-display font-bold tracking-tight whitespace-nowrap ${currentSize.title} ${
            isLight ? "text-surface" : "text-on-surface"
          }`}>
            MR. ELECTRICAL
          </span>
          <span className={`font-display font-bold tracking-wide whitespace-nowrap ${currentSize.title} text-primary`}>
            WORKS
          </span>
        </div>

        {showSubtitle && (
          <div className="flex flex-col mt-0.5 sm:mt-1 space-y-0.5 min-w-0">
            <span className={`font-mono font-semibold leading-tight ${currentSize.sub} ${
              isLight ? "text-secondary-light/70" : "text-muted"
            } truncate`}>
              <span className="sm:hidden">Turnkey EPC · Hyderabad</span>
              <span className="hidden sm:inline">Turnkey engineering &amp; contracting</span>
            </span>
            <div className="hidden sm:flex items-center gap-2">
              <span className={`font-mono ${currentSize.telemetry} ${
                isLight ? "text-secondary-light/50" : "text-secondary/70"
              }`}>
                11kV/415V HT·LT · Patancheru, Hyderabad
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
