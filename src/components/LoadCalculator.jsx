import React, { useState, useEffect, useRef, useId } from 'react';
import { MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/mockData';

/**
 * 250ms requestAnimationFrame tween for telemetry readouts.
 * Outputs snap instantly under prefers-reduced-motion (Gate 27).
 */
const useTweenNumber = (value, duration = 250) => {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const startRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setDisplay(value);
      fromRef.current = value;
      return;
    }

    const from = fromRef.current;
    startRef.current = null;

    const step = (timestamp) => {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(from + (value - from) * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = value;
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      fromRef.current = display;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return display;
};

const LoadCalculator = () => {
  const [projectType, setProjectType] = useState('residential'); // 'residential' | 'commercial' | 'industrial'
  const [area, setArea] = useState(1500); // sq ft
  const [appliances, setAppliances] = useState(['ac', 'geyser', 'earthing']);
  const areaSliderId = useId();

  const toggleAppliance = (id) => {
    setAppliances(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Dynamic calculations based on electrical engineering load guidelines
  const calculateSpecs = () => {
    let baseKW = 0;
    let ratePerSqFt = 0;

    if (projectType === 'residential') {
      baseKW = (area / 350) + (appliances.length * 1.5);
      ratePerSqFt = 45; // average turnkey wiring INR / sq.ft
    } else if (projectType === 'commercial') {
      baseKW = (area / 180) + (appliances.length * 2.5);
      ratePerSqFt = 68;
    } else {
      baseKW = (area / 120) + (appliances.length * 4.0);
      ratePerSqFt = 98;
    }

    const estimatedKW = Math.max(3, Math.round(baseKW * 10) / 10);
    const estimatedCost = Math.round(area * ratePerSqFt);

    // Technical recommendations
    let incomer = '32A DP MCB (10kA C-curve)';
    let wireGauge = '2.5–4.0 sq.mm FRLS copper';
    let rccb = '30mA 2-pole RCCB (Type-A)';
    let earthing = 'Dual 50mm GI chemical electrode';

    if (estimatedKW > 7 && estimatedKW <= 18) {
      incomer = '40–63A 4P MCB / MCCB (3-phase)';
      wireGauge = '6.0–10.0 sq.mm multi-strand FRLS';
      rccb = '63A 4P 30/100mA selective RCCB';
      earthing = 'Copper-bonded electrode < 1.0 Ω';
    } else if (estimatedKW > 18) {
      incomer = '100–250A 4P microprocessor MCCB';
      wireGauge = '25–50 sq.mm XLPE armoured Cu/Al';
      rccb = 'Earth leakage relay with CBCT sensing';
      earthing = '4-pit interconnected IS 3043 mesh';
    }

    return { estimatedKW, estimatedCost, incomer, wireGauge, rccb, earthing };
  };

  const specs = calculateSpecs();

  const tweenKW = useTweenNumber(specs.estimatedKW);
  const tweenCost = useTweenNumber(specs.estimatedCost);

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Mr. Nekbor Seikh (MR. ELECTRICAL WORKS),\n\nI calculated my site load on your Engineering Estimator:\n- Sector: ${projectType.toUpperCase()}\n- Built-up Area: ${area.toLocaleString()} Sq.Ft\n- Connected Load: ${specs.estimatedKW} kW\n- Incomer Breaker: ${specs.incomer}\n- Wire Gauge: ${specs.wireGauge}\n- Estimated Turnkey Cost: ₹${specs.estimatedCost.toLocaleString()}\n\nPlease review and share a formal itemized BOQ for my site.`
    );
    window.open(`https://wa.me/91${contactInfo.phone}?text=${text}`, '_blank');
  };

  // Capacity tiers: residential three-phase < 15 kW, commercial LT 15–100 kW, industrial HT > 100 kW
  const kwMaxForBar = 130;
  const loadFraction = Math.min(specs.estimatedKW / kwMaxForBar, 1);
  const tier =
    specs.estimatedKW < 15
      ? { name: 'Residential three-phase', band: '0–15 kW', cut: (15 / kwMaxForBar) * 100 }
      : specs.estimatedKW <= 100
        ? { name: 'Commercial LT panel', band: '15–100 kW', cut: (100 / kwMaxForBar) * 100 }
        : { name: 'Industrial HT substation', band: 'Above 100 kW', cut: 100 };

  return (
    <div className="bg-surface border border-border rounded-md overflow-hidden">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 sm:px-8 py-5 sm:py-6 border-b border-border bg-neutral min-w-0">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-on-surface tracking-tight">
            Electrical load &amp; turnkey cost calculator
          </h3>
          <p className="text-[13px] text-muted mt-1 max-w-2xl">
            Live calculation of sanctioned kilowatt demand, main incomer protection, and cable sizing according to Indian Electricity Rules, calibrated by our chief engineer.
          </p>
        </div>

        <div className="self-start sm:self-auto px-2.5 py-1.5 bg-panel-chassis rounded-sm font-mono text-[11px] text-tertiary-light whitespace-nowrap shrink-0">
          M.Tech (EEE) calibrated
        </div>
      </div>

      <div className="p-4 sm:p-8 bg-surface">

        {/* 01 — Sector selector */}
        <div className="mb-7">
          <div className="label-tech mb-2.5">01: Select sector</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="group" aria-label="Project sector">
            {[
              { id: 'residential', label: 'Residential: villa / apartment' },
              { id: 'commercial', label: 'Commercial: office / hub' },
              { id: 'industrial', label: 'Industrial: factory / warehouse' },
            ].map(type => {
              const isSelected = projectType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  aria-pressed={isSelected}
                  className={`p-3 rounded-sm flex items-center justify-center gap-2 font-sans font-semibold text-[13px] border whitespace-nowrap transition-[background-color,color,border-color] duration-150 ${
                    isSelected
                      ? 'bg-primary text-surface border-primary'
                      : 'bg-surface text-secondary hover:text-on-surface hover:bg-neutral border-border'
                  }`}
                >
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 02 — Built-up area slider */}
        <div className="mb-7 p-4 sm:p-5 bg-neutral border border-border rounded-sm">
          <div className="flex justify-between items-baseline mb-3 gap-4 min-w-0">
            <label htmlFor={areaSliderId} className="label-tech">
              02: Built-up floor area
            </label>
            <div className="font-mono text-lg sm:text-xl font-bold text-on-surface tabular-data whitespace-nowrap">
              {area.toLocaleString()} <span className="text-xs text-muted font-normal">sq.ft</span>
            </div>
          </div>

          <input
            id={areaSliderId}
            type="range"
            min="400"
            max="12000"
            step="100"
            value={area}
            onChange={(e) => setArea(parseInt(e.target.value))}
            className="w-full h-1.5 bg-subtle rounded-sm appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between font-mono text-[10px] text-muted mt-2">
            <span>400</span>
            <span>3,000</span>
            <span>6,000</span>
            <span>12,000 sq.ft</span>
          </div>
        </div>

        {/* 03 — High-demand loads */}
        <div className="mb-8">
          <div className="label-tech mb-2.5">03: Included high-demand loads &amp; infrastructure</div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ac', label: 'Air conditioning (multi-split / VRF)' },
              { id: 'geyser', label: 'Water heating / heavy boilers' },
              { id: 'lift', label: 'Passenger elevator / goods hoist' },
              { id: 'dg', label: 'Diesel generator backup' },
              { id: 'solar', label: 'Solar rooftop net-metering' },
              { id: 'ev', label: 'EV fast-charging station' },
              { id: 'earthing', label: 'Dedicated chemical pipe earthing' },
            ].map(app => {
              const isChecked = appliances.includes(app.id);
              return (
                <button
                  key={app.id}
                  onClick={() => toggleAppliance(app.id)}
                  aria-pressed={isChecked}
                  className={`px-3 py-2 rounded-sm text-xs font-sans font-semibold flex items-center gap-2 border min-w-0 transition-[background-color,color,border-color] duration-150 ${
                    isChecked
                      ? 'bg-primary-light text-primary-hover border-primary/40'
                      : 'bg-surface text-secondary hover:text-on-surface border-border'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border shrink-0 ${
                    isChecked
                      ? 'bg-primary text-surface border-primary'
                      : 'bg-surface border-secondary/50'
                  }`}>
                    {isChecked && (
                      <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" aria-hidden="true">
                        <path d="M1.5 5.5 4 8l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-left leading-tight">{app.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Capacity utilization bar — GPU-composited scaleX only (Gate 10a) */}
        <div className="mb-8">
          <div className="label-tech mb-2.5">04: Sanctioned load placement</div>
          <div className="p-4 bg-neutral border border-border rounded-sm">
            <div className="flex justify-between items-center mb-2.5 gap-3 min-w-0">
              <span className="font-mono text-xs font-semibold text-on-surface">{tier.name}</span>
              <span className="font-mono text-[11px] text-muted whitespace-nowrap">{tier.band}</span>
            </div>
            <div
              className="relative h-3 bg-surface border border-border rounded-sm overflow-hidden"
              role="img"
              aria-label={`Connected load ${Math.round(tweenKW * 10) / 10} kW, ${tier.name} band`}
            >
              <div
                className="absolute inset-y-0 left-0 w-full origin-left bg-primary/80 transition-transform"
                style={{
                  transform: `scaleX(${loadFraction})`,
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDuration: '250ms'
                }}
              />
              {/* Tier dividers at the 15 kW and 100 kW marks */}
              <div className="absolute inset-y-0 border-l border-secondary/40" style={{ left: '11.54%' }} />
              <div className="absolute inset-y-0 border-l border-secondary/40" style={{ left: '76.92%' }} />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-muted mt-1.5">
              <span>0 kW</span>
              <span>15 kW</span>
              <span>100 kW</span>
              <span>130+ kW</span>
            </div>
          </div>
        </div>

        {/* Readout console — high-contrast dark slate deck */}
        <div className="bg-panel-chassis border border-panel-line rounded-sm p-4 sm:p-6">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            <div className="p-4 bg-panel-steel border border-panel-line rounded-sm flex flex-col justify-between min-w-0">
              <span className="font-mono text-[10px] text-panel-dimmed block mb-1">Sanctioned load demand</span>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-primary-light tabular-data">
                {Math.round(tweenKW * 10) / 10} <span className="text-sm font-normal text-surface/80">kW</span>
              </div>
              <span className="font-mono text-[11px] text-tertiary-light/80 mt-2">
                {specs.estimatedKW > 7 ? '3-phase 415V' : 'Single-phase 230V'}
              </span>
            </div>

            <div className="p-4 bg-panel-steel border border-panel-line rounded-sm flex flex-col justify-between min-w-0">
              <span className="font-mono text-[10px] text-panel-dimmed block mb-1">Incomer breaker spec</span>
              <div className="font-mono text-[13px] font-bold text-tertiary-light leading-tight">
                {specs.incomer}
              </div>
              <span className="font-mono text-[11px] text-panel-dimmed mt-2">
                {specs.rccb}
              </span>
            </div>

            <div className="p-4 bg-panel-steel border border-panel-line rounded-sm flex flex-col justify-between min-w-0">
              <span className="font-mono text-[10px] text-panel-dimmed block mb-1">Recommended cable</span>
              <div className="font-mono text-[13px] font-bold text-surface leading-tight">
                {specs.wireGauge}
              </div>
              <span className="font-mono text-[11px] text-panel-dimmed mt-2">
                {specs.earthing}
              </span>
            </div>

            <div className="p-4 bg-panel-steel border border-panel-line rounded-sm flex flex-col justify-between min-w-0">
              <span className="font-mono text-[10px] text-panel-dimmed block mb-1">Estimated turnkey budget</span>
              <div className="font-mono text-xl sm:text-2xl font-bold text-primary-light tabular-data">
                ₹{Math.round(tweenCost).toLocaleString('en-IN')}
              </div>
              <button
                onClick={handleWhatsAppQuote}
                className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-[11px] font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                <MessageSquare size={13} aria-hidden="true" />
                <span>Get itemized BOQ on WhatsApp</span>
              </button>
            </div>
          </div>

          <p className="font-mono text-[10px] text-panel-dimmed mt-4">
            Estimates are indicative, computed from IS 732 wiring rules; a formal BOQ follows a site inspection.
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoadCalculator;
