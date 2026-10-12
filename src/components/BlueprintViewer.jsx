import { useState } from 'react';
import { Layers, Zap, Cpu, Sun, FileCheck, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const blueprints = [
  {
    id: 'substation',
    title: '11kV/415V Substation & Transformer Yard',
    category: 'Heavy Industrial EPC',
    voltage: '11,000V → 415V 3-Phase',
    capacity: '500 kVA to 2,500 kVA',
    breaker: '11kV Vacuum Circuit Breaker (VCB) with IDMT Relays',
    protection: 'Dual Earth Pit System (Chemical & Pipe-in-Pipe) < 1.0 Ω',
    schematicNodes: [
      { label: 'TSSPDCL 11kV Grid Incomer', status: 'Energized', metric: '11.0 kV AC' },
      { label: 'Gang Operated Air Break (GOAB) Switch', status: 'Closed', metric: '630A Rated' },
      { label: 'HT VCB Panel with Numerical Relay', status: 'Armed', metric: '25kA / 3s' },
      { label: 'Step-Down Copper Transformer', status: 'Loaded', metric: '1,250 kVA' },
      { label: 'Main LT Air Circuit Breaker (ACB)', status: 'Online', metric: '1,600A 4P' },
    ],
    features: [
      'Statutory Telangana CEIG Electrical Inspectorate Approval Handling',
      'Step-and-Touch Potential Grounding Grid as per IEEE 80 Standards',
      'Nitrogen Injection Fire Protection System (NIFPS) Integration',
    ]
  },
  {
    id: 'switchgear',
    title: 'Main LT Power Distribution & APFC Panels',
    category: 'Commercial & Manufacturing',
    voltage: '415V AC, 50Hz, 3P+N+E',
    capacity: '800A to 4,000A Incomer',
    breaker: 'Microprocessor-based ACB with LSIG Protection',
    protection: 'Class-I + II Surge Protection Device (SPD)',
    schematicNodes: [
      { label: 'Incoming Busduct / Copper Busbar', status: 'Energized', metric: '415V LT' },
      { label: 'Automatic Power Factor Controller (APFC)', status: 'Active', metric: '0.99 PF Target' },
      { label: 'Harmonic De-tuned Reactor Banks', status: 'Filtered', metric: '7% Detuned' },
      { label: 'Outgoing Motor Control Centers (MCC)', status: 'Running', metric: '48 Feeders' },
      { label: 'Digital Multi-Function Power Meter', status: 'Telemetry', metric: 'Class 0.2S' },
    ],
    features: [
      'Type-Tested CPRI Certified Enclosures up to IP55 / IP65',
      'Electrolytic E91E Grade High-Conductivity Aluminum/Copper Busbars',
      'Interlocking Bus Coupler for Dual Utility/DG Power Sources',
    ]
  },
  {
    id: 'riser',
    title: 'High-Rise Riser Conduit & Villa Electrification',
    category: 'Residential Luxury & Villas',
    voltage: '230V Single-Phase / 415V Three-Phase',
    capacity: '10 kW to 250 kW per Block',
    breaker: 'Four-Pole MCB Incomer with 30mA RCCB Shock Protection',
    protection: 'Copper Bonded Maintenance-Free Earth Rods',
    schematicNodes: [
      { label: 'Main Metering Panel at Ground Floor', status: 'Monitored', metric: 'Multi-Tariff' },
      { label: 'Sandwich Busbar Riser Conduit (BBM)', status: 'Installed', metric: '400A Vertical' },
      { label: 'Floor Tap-Off Isolation Units', status: 'Connected', metric: '63A / Floor' },
      { label: 'Villa Distribution Board (VDB)', status: 'Live', metric: '16-Way TPN' },
      { label: 'FRLS Zero-Halogen Wire Mesh', status: 'Fire-Safe', metric: 'ISI Mark' },
    ],
    features: [
      'Dedicated neutral per circuit to prevent harmonics & neutral overheat',
      '30mA Residual Current Circuit Breaker (RCCB) for human shock safety',
      'Laser-aligned concealed PVC conduits with concealed pull-boxes',
    ]
  },
  {
    id: 'solar',
    title: 'Solar On-Grid Rooftop & DG Auto-Sync System',
    category: 'Green Tech & Backup Power',
    voltage: '415V Synchronized Grid Interconnect',
    capacity: '25 kWp to 500 kWp Rooftop Solar',
    breaker: 'Motorized MCCB with Under/Over Voltage Trip',
    protection: 'Type-1 DC Surge Arrestor & Lightning Rod Arrester',
    schematicNodes: [
      { label: 'Mono-PERC Bifacial Solar PV Array', status: 'Generating', metric: '150 kWp DC' },
      { label: 'Three-Phase String Solar Inverter', status: 'Online', metric: 'MPPT Tracked' },
      { label: 'Automatic Transfer Switch (ATS)', status: 'Standby', metric: '< 20ms Switch' },
      { label: 'Diesel Generator (DG) Synchronizer', status: 'Ready', metric: '250 kVA AMF' },
      { label: 'Discom Net-Metering Bi-Directional Meter', status: 'Exporting', metric: 'Export/Import' },
    ],
    features: [
      'Zero-export device integration when operating on emergency DG set',
      'Telangana DISCOM net-metering synchronization approvals',
      'Real-time IoT cloud monitoring for daily kWh generation yield',
    ]
  }
];

const BlueprintViewer = () => {
  const [activeTab, setActiveTab] = useState(blueprints[0].id);
  const currentBlueprint = blueprints.find(b => b.id === activeTab) || blueprints[0];

  return (
    <div className="bg-[#0E1116] border border-[#242A35] rounded-md overflow-hidden shadow-2xl">
      {/* Top Header Bar with CAD Window Tabs */}
      <div className="bg-[#141820] border-b border-[#242A35] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
          </div>
          <span className="font-mono text-xs font-semibold text-[#8C96A5] uppercase tracking-wider flex items-center gap-2">
            <Layers size={14} className="text-[#B35010]" />
            <span>CAD SCHEMATIC &amp; SLD BLUEPRINT INSPECTOR</span>
          </span>
        </div>

        {/* Technical Revision Stamp */}
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="text-[#8C96A5]">REV: 2026.4</span>
          <span className="text-[#3A4352]">|</span>
          <span className="text-[#34D399] flex items-center gap-1 font-semibold">
            <CheckCircle2 size={12} />
            <span>M.TECH VERIFIED</span>
          </span>
        </div>
      </div>

      {/* Dribbble Style Architectural Tab Switcher */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0A0D12] border-b border-[#242A35]">
        {blueprints.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3.5 text-left border-r border-[#242A35] transition-all relative ${
                isActive 
                  ? 'bg-[#141922] text-white' 
                  : 'text-[#8C96A5] hover:text-[#CBD5E1] hover:bg-[#101319]'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B35010]" />
              )}
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B35010] mb-0.5">
                {item.category}
              </div>
              <div className="text-xs font-bold font-sans truncate">
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive CAD Blueprint Canvas */}
      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D1016]">
        
        {/* Left: Interactive Single Line Diagram (SLD) Visualization */}
        <div className="lg:col-span-7 bg-[#07090C] border border-[#202632] rounded-sm p-6 relative overflow-hidden font-mono text-xs">
          {/* Subtle Drafting Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#B35010 1px, transparent 1px), linear-gradient(90deg, #B35010 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E2430]">
              <span className="text-[11px] font-bold text-[#E57A36] uppercase tracking-wider flex items-center gap-2">
                <Zap size={14} className="text-[#B35010]" />
                <span>SINGLE LINE DIAGRAM (SLD) FLOW</span>
              </span>
              <span className="text-[10px] text-[#6B7280]">
                TELEMETRY: LIVE SIMULATION
              </span>
            </div>

            {/* Schematic Flow Steps */}
            <div className="space-y-3">
              {currentBlueprint.schematicNodes.map((node, i) => (
                <div 
                  key={i} 
                  className="p-3 bg-[#0F131A] border border-[#232A36] rounded-sm flex items-center justify-between gap-4 transition-all hover:border-[#B35010]/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-sm bg-[#1A202C] text-[#8C96A5] text-[10px] font-bold flex items-center justify-center border border-[#2D3748]">
                      0{i + 1}
                    </span>
                    <span className="text-[#E2E8F0] font-sans font-medium text-xs">
                      {node.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[#38BDF8] text-[11px] font-mono font-semibold">
                      {node.metric}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm bg-[#102A1E] text-[#34D399] text-[9.5px] uppercase tracking-wider font-semibold border border-[#059669]/30">
                      {node.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Status Legend */}
            <div className="mt-5 pt-4 border-t border-[#1E2430] flex flex-wrap items-center justify-between text-[11px] text-[#8C96A5]">
              <span>CIRCUIT CONTINUITY: 100% OK</span>
              <span>EARTH RESISTANCE: 0.72 Ω (&lt; 1.0 Ω PASSED)</span>
            </div>
          </div>
        </div>

        {/* Right: Technical Specification Manifest */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#B35010]/15 text-[#E57A36] text-[11px] font-mono font-bold uppercase tracking-wider mb-2 border border-[#B35010]/30">
              {currentBlueprint.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white leading-tight">
              {currentBlueprint.title}
            </h3>
          </div>

          {/* Key Specifications Grid in JetBrains Mono */}
          <div className="bg-[#141820] border border-[#242A35] rounded-sm p-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-[#242A35] pb-2">
              <span className="text-[#8C96A5]">OPERATING VOLTAGE:</span>
              <span className="text-white font-semibold">{currentBlueprint.voltage}</span>
            </div>
            <div className="flex justify-between border-b border-[#242A35] pb-2">
              <span className="text-[#8C96A5]">DESIGN CAPACITY:</span>
              <span className="text-white font-semibold">{currentBlueprint.capacity}</span>
            </div>
            <div className="flex justify-between border-b border-[#242A35] pb-2">
              <span className="text-[#8C96A5]">CIRCUIT BREAKER:</span>
              <span className="text-[#38BDF8] font-semibold text-right">{currentBlueprint.breaker}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8C96A5]">EARTHING SPECS:</span>
              <span className="text-[#34D399] font-semibold text-right">{currentBlueprint.protection}</span>
            </div>
          </div>

          {/* Compliance Checklist */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-[#8C96A5] tracking-wider">
              ENGINEERING GUARANTEES:
            </div>
            {currentBlueprint.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                <ShieldCheck size={14} className="text-[#B35010] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <a
              href={`https://wa.me/918519949762?text=Hello%20Mr.%20Nekbor%20Seikh,%20I%20am%20interested%20in%20a%20turnkey%20engineering%20quote%20for%20${encodeURIComponent(currentBlueprint.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#C25E1A]/50 shadow-md shadow-[#B35010]/20"
            >
              <span>Request CAD Drawings &amp; Quotation</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlueprintViewer;
