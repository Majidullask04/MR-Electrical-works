import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blueprints = [
  {
    id: 'substation',
    title: '11kV/415V Substation & Transformer Yard',
    category: 'Heavy industrial EPC',
    voltage: '11,000V → 415V 3-phase',
    capacity: '500 kVA to 2,500 kVA',
    breaker: '11kV VCB with IDMT relays',
    protection: 'Dual earth pit (chemical & pipe-in-pipe) < 1.0 Ω',
    schematicNodes: [
      { label: 'TSSPDCL 11kV grid incomer', status: 'Energized', metric: '11.0 kV AC' },
      { label: 'Gang operated air break (GOAB) switch', status: 'Closed', metric: '630A rated' },
      { label: 'HT VCB panel with numerical relay', status: 'Armed', metric: '25kA / 3s' },
      { label: 'Step-down copper transformer', status: 'Loaded', metric: '1,250 kVA' },
      { label: 'Main LT air circuit breaker (ACB)', status: 'Online', metric: '1,600A 4P' },
    ],
    features: [
      'Statutory Telangana CEIG electrical inspectorate approval handling',
      'Step-and-touch potential grounding grid as per IEEE 80 standards',
      'Nitrogen injection fire protection system (NIFPS) integration',
    ]
  },
  {
    id: 'switchgear',
    title: 'Main LT Power Distribution & APFC Panels',
    category: 'Commercial & manufacturing',
    voltage: '415V AC, 50Hz, 3P+N+E',
    capacity: '800A to 4,000A incomer',
    breaker: 'Microprocessor-based ACB with LSIG protection',
    protection: 'Class-I + II surge protection device (SPD)',
    schematicNodes: [
      { label: 'Incoming busduct / copper busbar', status: 'Energized', metric: '415V LT' },
      { label: 'Automatic power factor controller (APFC)', status: 'Active', metric: '0.99 PF target' },
      { label: 'Harmonic de-tuned reactor banks', status: 'Filtered', metric: '7% detuned' },
      { label: 'Outgoing motor control centers (MCC)', status: 'Running', metric: '48 feeders' },
      { label: 'Digital multi-function power meter', status: 'Telemetry', metric: 'Class 0.2S' },
    ],
    features: [
      'Type-tested CPRI certified enclosures up to IP55 / IP65',
      'Electrolytic E91E grade high-conductivity busbars',
      'Interlocking bus coupler for dual utility/DG power sources',
    ]
  },
  {
    id: 'riser',
    title: 'High-Rise Riser Conduit & Villa Electrification',
    category: 'Residential villas',
    voltage: '230V single-phase / 415V three-phase',
    capacity: '10 kW to 250 kW per block',
    breaker: 'Four-pole MCB incomer with 30mA RCCB protection',
    protection: 'Copper-bonded maintenance-free earth rods',
    schematicNodes: [
      { label: 'Main metering panel at ground floor', status: 'Monitored', metric: 'Multi-tariff' },
      { label: 'Sandwich busbar riser conduit (BBM)', status: 'Installed', metric: '400A vertical' },
      { label: 'Floor tap-off isolation units', status: 'Connected', metric: '63A / floor' },
      { label: 'Villa distribution board (VDB)', status: 'Live', metric: '16-way TPN' },
      { label: 'FRLS zero-halogen wire mesh', status: 'Fire-safe', metric: 'ISI mark' },
    ],
    features: [
      'Dedicated neutral per circuit to prevent harmonics & neutral overheat',
      '30mA RCCB for human shock safety',
      'Laser-aligned concealed PVC conduits with concealed pull-boxes',
    ]
  },
  {
    id: 'solar',
    title: 'Solar On-Grid Rooftop & DG Auto-Sync System',
    category: 'Green tech & backup',
    voltage: '415V synchronized grid interconnect',
    capacity: '25 kWp to 500 kWp rooftop solar',
    breaker: 'Motorized MCCB with under/over voltage trip',
    protection: 'Type-1 DC surge arrestor & lightning rod arrester',
    schematicNodes: [
      { label: 'Mono-PERC bifacial solar PV array', status: 'Generating', metric: '150 kWp DC' },
      { label: 'Three-phase string solar inverter', status: 'Online', metric: 'MPPT tracked' },
      { label: 'Automatic transfer switch (ATS)', status: 'Standby', metric: '< 20ms switch' },
      { label: 'Diesel generator (DG) synchronizer', status: 'Ready', metric: '250 kVA AMF' },
      { label: 'Discom net-metering bi-directional meter', status: 'Exporting', metric: 'Export / import' },
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
  const reduced = useReducedMotion();

  return (
    <div className="bg-panel-chassis border border-panel-line rounded-md overflow-hidden shadow-tech-lg min-w-0">

      {/* Inspector title bar — a stamp, not a fake browser window */}
      <div className="bg-panel-steel border-b border-panel-line px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-4 min-w-0">
        <span className="font-mono text-[11px] font-semibold text-panel-dimmed whitespace-nowrap">
          CAD schematic &amp; SLD blueprint inspector
        </span>

        {/* Technical revision stamp */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] whitespace-nowrap">
          <span className="text-panel-dimmed">Rev 2026.4</span>
          <span className="border-l border-panel-line pl-3 text-tertiary-light">
            M.Tech verified
          </span>
        </div>
      </div>

      {/* Layer tabs — the active layer lights its copper rule; inactive layers dim */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-panel-line" role="tablist" aria-label="Schematic layers">
        {blueprints.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              role="tab"
              aria-selected={isActive}
              className={`p-3 sm:p-3.5 text-left border-b sm:border-b-0 sm:border-r border-panel-line last:border-r-0 transition-[background-color,color] duration-150 ${
                isActive
                  ? 'bg-panel-chassis text-surface'
                  : 'text-panel-dimmed hover:text-secondary-light'
              }`}
            >
              <div className={`font-mono text-[10px] mb-1 ${isActive ? 'text-primary-light' : 'text-panel-dimmed'}`}>
                {item.category}
              </div>
              <div className="text-xs font-bold font-sans leading-snug whitespace-normal">
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Blueprint canvas */}
      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

        {/* Left: single line diagram with animated copper circuit spine */}
        <div className="lg:col-span-7 bg-panel-chassis border border-panel-line rounded-sm p-4 sm:p-6 relative overflow-hidden min-w-0">
          {/* Drafting grid */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none grid-copper grid-copper-fine"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-panel-line">
              <span className="font-mono text-[11px] font-semibold text-primary-light">
                Single line diagram: energization flow
              </span>
              <span className="font-mono text-[10px] text-panel-dimmed">
                Telemetry: live simulation
              </span>
            </div>

            <div className="relative space-y-2.5 sm:space-y-3" key={activeTab}>
              {/* Copper circuit spine drawn once per layer change (pathLength 0 → 1) */}
              {!reduced && (
                <svg
                  className="absolute left-[15px] top-2 bottom-2 w-5 h-[calc(100%-16px)] pointer-events-none"
                  viewBox="0 0 20 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M10 4 L10 96"
                    stroke="rgb(179 80 16)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </svg>
              )}

              {currentBlueprint.schematicNodes.map((node, i) => (
                <motion.div
                  key={activeTab + i}
                  initial={reduced ? false : { opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={reduced ? { duration: 0 } : { duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
                  className="relative pl-9 pr-3 py-2.5 sm:py-3 bg-panel-steel border border-panel-line rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 hover:border-primary/50 transition-colors duration-150"
                >
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-panel-chassis border border-panel-line text-panel-dimmed text-[10px] font-bold flex items-center justify-center rounded-sm z-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans font-semibold text-[13px] text-secondary-light leading-snug">
                    {node.label}
                  </span>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <span className="font-mono text-[11px] font-semibold text-tertiary-light tabular-data whitespace-nowrap">
                      {node.metric}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm border border-tertiary/40 text-tertiary-light font-mono text-[9.5px] whitespace-nowrap">
                      {node.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom status legend */}
            <div className="mt-5 pt-4 border-t border-panel-line flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-panel-dimmed">
              <span>Circuit continuity: 100% OK</span>
              <span className="tabular-data">Earth resistance 0.72 Ω (under the 1.0 Ω pass mark)</span>
            </div>
          </div>
        </div>

        {/* Right: technical specification manifest */}
        <div className="lg:col-span-5 space-y-5 min-w-0">
          <div>
            <div className="font-mono text-[11px] font-semibold text-primary-light mb-1.5">
              {currentBlueprint.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-surface leading-tight">
              {currentBlueprint.title}
            </h3>
          </div>

          {/* Key specifications — tabular rows in mono */}
          <div className="bg-panel-steel border border-panel-line rounded-sm p-4 space-y-3 font-mono text-xs min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2 border-b border-panel-line pb-2.5">
              <span className="text-panel-dimmed text-[11px]">Operating voltage</span>
              <span className="text-surface font-semibold sm:text-right">{currentBlueprint.voltage}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2 border-b border-panel-line pb-2.5">
              <span className="text-panel-dimmed text-[11px]">Design capacity</span>
              <span className="text-surface font-semibold sm:text-right">{currentBlueprint.capacity}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2 border-b border-panel-line pb-2.5">
              <span className="text-panel-dimmed text-[11px]">Circuit breaker</span>
              <span className="text-tertiary-light font-semibold sm:text-right">{currentBlueprint.breaker}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2">
              <span className="text-panel-dimmed text-[11px]">Earthing</span>
              <span className="text-primary-light font-semibold sm:text-right">{currentBlueprint.protection}</span>
            </div>
          </div>

          {/* Compliance checklist */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] font-semibold text-panel-dimmed">
              Engineering guarantees
            </div>
            <ul className="space-y-1.5">
              {currentBlueprint.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[13px] text-secondary-light pl-3 border-l-2 border-primary/40">
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct dispatch */}
          <div className="pt-2">
            <a
              href={`https://wa.me/918519949762?text=Hello%20Mr.%20Nekbor%20Seikh,%20I%20am%20interested%20in%20a%20turnkey%20engineering%20quote%20for%20${encodeURIComponent(currentBlueprint.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
            >
              <span>Request CAD drawings &amp; quotation</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintViewer;
