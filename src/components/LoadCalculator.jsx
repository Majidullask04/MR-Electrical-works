import React, { useState, useId } from 'react';
import { Zap, ShieldCheck, Calculator, ArrowRight, MessageSquare, Check, Building, Home, Factory } from 'lucide-react';
import { contactInfo } from '../data/mockData';

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
    let incomer = '32A Double Pole MCB (10kA C-Curve)';
    let wireGauge = '2.5 - 4.0 sq.mm FRLS Copper';
    let rccb = '30mA Sensitivity 2-Pole RCCB (Type-A)';
    let earthing = 'Dual 50mm GI Chemical Earth Electrode';

    if (estimatedKW > 7 && estimatedKW <= 18) {
      incomer = '40A - 63A 4-Pole MCB / MCCB (3-Phase)';
      wireGauge = '6.0 - 10.0 sq.mm Multi-strand FRLS Copper';
      rccb = '63A 4-Pole 30mA/100mA Selective RCCB';
      earthing = 'Copper-Bonded Maintenance-Free Electrode < 1.0 Ω';
    } else if (estimatedKW > 18) {
      incomer = '100A - 250A 4P Microprocessor MCCB';
      wireGauge = '25 - 50 sq.mm XLPE Armoured Cu/Al Cable';
      rccb = 'Earth Leakage Relay (ELR) with CBCT Sensing';
      earthing = '4-Pit Interconnected Earth Mesh as per IS 3043';
    }

    return { estimatedKW, estimatedCost, incomer, wireGauge, rccb, earthing };
  };

  const specs = calculateSpecs();

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Mr. Nekbor Seikh (MR. ELECTRICAL WORKS),\n\nI calculated my site load on your Engineering Estimator:\n- Sector: ${projectType.toUpperCase()}\n- Built-up Area: ${area.toLocaleString()} Sq.Ft\n- Connected Load: ${specs.estimatedKW} kW\n- Incomer Breaker: ${specs.incomer}\n- Wire Gauge: ${specs.wireGauge}\n- Estimated Turnkey Cost: ₹${specs.estimatedCost.toLocaleString()}\n\nPlease review and share a formal itemized BOQ for my site.`
    );
    window.open(`https://wa.me/91${contactInfo.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#0E1116] border border-[#242A35] rounded-md p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white">
      {/* CAD Watermark Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#B35010 1px, transparent 1px), linear-gradient(90deg, #B35010 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#242A35]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#B35010]/15 text-[#E57A36] text-[11px] font-mono font-bold uppercase tracking-wider mb-2 border border-[#B35010]/30">
              <Calculator size={13} />
              <span>ELECTRICAL TELEMETRY &amp; LOAD ESTIMATOR</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              Interactive Load &amp; Turnkey Cost Calculator
            </h3>
            <p className="text-sm text-[#8C96A5] mt-1">
              Real-time engineering calculation of sanctioned kilowatt demand, main incomer protection, and cable sizing according to Indian Electricity Rules.
            </p>
          </div>
          
          <div className="flex items-center gap-2 self-start sm:self-auto p-2.5 rounded-sm bg-[#141820] border border-[#242A35] text-xs font-mono text-[#CBD5E1]">
            <ShieldCheck size={16} className="text-[#34D399]" />
            <span>M.TECH (EEE) CALIBRATED</span>
          </div>
        </div>

        {/* Sector Selector */}
        <div className="mb-8">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#8C96A5] mb-3">
            01. SELECT SECTOR / ENVIRONMENT
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'residential', label: 'Residential (Villa / Apartment)', icon: Home },
              { id: 'commercial', label: 'Commercial (Office / Hub)', icon: Building },
              { id: 'industrial', label: 'Industrial (Factory / Warehouse)', icon: Factory },
            ].map(type => {
              const Icon = type.icon;
              const isSelected = projectType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`p-3.5 rounded-sm flex items-center justify-center gap-2.5 font-sans font-semibold text-xs uppercase tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-[#B35010] text-white border-[#C25E1A] shadow-md shadow-[#B35010]/20'
                      : 'bg-[#141820] text-[#8C96A5] hover:text-white hover:bg-[#1A202A] border-[#242A35]'
                  }`}
                >
                  <Icon size={16} />
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Built-up Area Slider */}
        <div className="mb-8 p-6 bg-[#07090C] border border-[#202632] rounded-sm">
          <div className="flex justify-between items-center mb-3">
            <label htmlFor={areaSliderId} className="text-xs font-mono uppercase tracking-wider text-[#8C96A5]">
              02. BUILT-UP FLOOR AREA (SQ.FT)
            </label>
            <div className="font-mono text-xl font-bold text-[#E57A36]">
              {area.toLocaleString()} <span className="text-xs text-[#8C96A5] font-normal">SQ.FT</span>
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
            className="w-full h-2 bg-[#202632] rounded-sm appearance-none cursor-pointer accent-[#B35010]"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mt-2">
            <span>400 SQ.FT</span>
            <span>3,000 SQ.FT</span>
            <span>6,000 SQ.FT</span>
            <span>12,000 SQ.FT</span>
          </div>
        </div>

        {/* Heavy Load Toggles */}
        <div className="mb-10">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#8C96A5] mb-3">
            03. INCLUDED HIGH-DEMAND LOADS &amp; INFRASTRUCTURE
          </label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'ac', label: 'Air Conditioning Units (Multi-Split / VRF)' },
              { id: 'geyser', label: 'Water Heating / Heavy Boilers' },
              { id: 'lift', label: 'Passenger Elevator / Goods Hoist' },
              { id: 'dg', label: 'Diesel Generator (DG) Backup Integration' },
              { id: 'solar', label: 'Solar Rooftop Net-Metering' },
              { id: 'ev', label: 'EV Fast-Charging Station' },
              { id: 'earthing', label: 'Dedicated Chemical Pipe Earthing' },
            ].map(app => {
              const isChecked = appliances.includes(app.id);
              return (
                <button
                  key={app.id}
                  onClick={() => toggleAppliance(app.id)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-mono font-medium transition-all flex items-center gap-2 border ${
                    isChecked
                      ? 'bg-[#B35010]/20 text-[#E57A36] border-[#B35010]/50'
                      : 'bg-[#141820] text-[#8C96A5] hover:text-white border-[#242A35]'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[10px] border ${
                    isChecked ? 'bg-[#B35010] text-white border-[#B35010]' : 'border-[#4A5568]'
                  }`}>
                    {isChecked ? '✓' : ''}
                  </span>
                  <span>{app.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculated Specification Readout (Engineering Matrix in JetBrains Mono) */}
        <div className="p-6 bg-[#141820] border border-[#242A35] rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          <div className="border-b md:border-b-0 md:border-r border-[#242A35] pb-4 md:pb-0 md:pr-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C96A5] block mb-1">
              SANCTIONED LOAD DEMAND
            </span>
            <div className="font-mono text-3xl font-bold text-[#E57A36]">
              {specs.estimatedKW} <span className="text-sm font-normal text-white">kW</span>
            </div>
            <span className="text-[11px] font-mono text-[#6B7280]">
              {specs.estimatedKW > 7 ? '3-PHASE 415V' : 'SINGLE-PHASE 230V'}
            </span>
          </div>

          <div className="border-b md:border-b-0 lg:border-r border-[#242A35] pb-4 md:pb-0 lg:pr-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C96A5] block mb-1">
              INCOMER BREAKER SPEC
            </span>
            <div className="font-mono text-sm font-bold text-[#38BDF8] leading-tight">
              {specs.incomer}
            </div>
            <span className="text-[11px] font-mono text-[#6B7280]">
              {specs.rccb}
            </span>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-[#242A35] pb-4 md:pb-0 md:pr-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C96A5] block mb-1">
              RECOMMENDED CABLE
            </span>
            <div className="font-mono text-sm font-bold text-white leading-tight">
              {specs.wireGauge}
            </div>
            <span className="text-[11px] font-mono text-[#34D399]">
              {specs.earthing}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C96A5] block mb-1">
              ESTIMATED TURNKEY BUDGET
            </span>
            <div className="font-mono text-2xl font-bold text-white">
              ₹{specs.estimatedCost.toLocaleString()}
            </div>
            <button
              onClick={handleWhatsAppQuote}
              className="mt-2 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-[11px] font-semibold uppercase tracking-wider transition-all"
            >
              <MessageSquare size={13} />
              <span>Get Itemized BOQ</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoadCalculator;
