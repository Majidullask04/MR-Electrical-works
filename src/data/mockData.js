import { Home, Lightbulb, Zap, Factory, Shield, HeartPulse, Building2, HardHat, Warehouse, Award, CheckCircle } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'House & Villa Wiring',
    description: 'Precision conduit piping, FRLS fire-retardant wiring, and modular switchboard layout for villas & residential apartments.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Architectural & LED Lighting',
    description: 'Cove lighting, profiles, high-bay factory lights, commercial track lighting, landscape and exterior illumination.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Distribution Boards & Panels',
    description: 'Main LT panels, Sub-DBs, MCB/RCCB earth leakage breaker setups, busbar chambers, and phase-balancer installations.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Industrial Electrical Works',
    description: 'Heavy machinery cabling, perforated cable tray networks, bus ducts, motor control centers (MCC), and plant energization.',
    icon: Factory,
  },
  {
    id: 5,
    title: 'Commercial Infrastructure',
    description: 'Complete electrical turnkey solutions for hospitals, tech parks, shopping malls, educational institutions, and showrooms.',
    icon: Building2,
  },
  {
    id: 6,
    title: 'Fault Finding & Testing AMCs',
    description: 'Megger insulation testing, earth-pit resistance measurement, thermal scanning, short-circuit recovery, and 24/7 breakdown callouts.',
    icon: Shield,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Luxury Villa Turnkey Electrification',
    location: 'Patancheru, Hyderabad',
    client: 'Gokul Enclave Residence',
    services: 'FRLS Concealed Wiring, Custom DB, Architectural Lighting',
    duration: '14 Days',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Corporate Software Hub LT Panel & Wiring',
    location: 'Hitec City / Financial District',
    client: 'FinTech Solutions Pvt Ltd',
    services: '3-Phase Busbar, Server Room Power, UPS Integration',
    duration: '21 Days',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    category: 'Commercial'
  },
  {
    id: 3,
    title: 'Industrial Manufacturing Unit Power Setup',
    location: 'Bolarum / Pashamylaram Industrial Zone',
    client: 'Precision Engineering Plant',
    services: 'Heavy Cable Trays, MCC Panels, Machine Power Drop',
    duration: '45 Days',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800',
    category: 'Industrial'
  }
];

export const industries = [
  { name: 'Residential Villas & High-Rises', icon: Home },
  { name: 'Commercial Tech Parks & Offices', icon: Building2 },
  { name: 'Industrial Plants & Factories', icon: Factory },
  { name: 'Hospitals & Medical Centers', icon: HeartPulse },
  { name: 'Schools & University Campuses', icon: Shield },
  { name: 'Warehouses & Logistics Hubs', icon: Warehouse },
  { name: 'Commercial Showrooms & Retail', icon: HardHat },
];

export const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Trusted Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Safety Standards' },
];

export const leadership = {
  name: 'Mr. Nekbor Seikh',
  qualification: 'M.Tech - Electrical & Electronics Engineering (EEE)',
  role: 'GM - Projects & Lead Consultant',
  experience: 'M.Tech Qualified Lead Engineer with 5+ years driving residential, commercial, and industrial turnkey electrical contracts.',
  photo: '/images/nekbor-seikh.jpg',
  photoSquare: '/images/nekbor-seikh-square.jpg',
  businessCard: '/images/mr-electrical-card.jpg',
  credentials: [
    'Master of Technology (M.Tech) in Electrical & Electronics Engineering',
    'General Manager (Projects) leading field engineering & safety oversight',
    'Specialist in Load Balancing, Circuit Breakers (MCB/RCCB) & IS Code Compliance',
    'Expertise in LT/HT Panel Design, Busbar Trunking & Chemical Earthing'
  ],
  quote: "Electrical safety isn't an afterthought—it's engineered into every wire, breaker, and panel board before current ever flows."
};

export const contactInfo = {
  name: 'MR. ELECTRICAL WORKS',
  owner: 'Nekbor Seikh (M.Tech - EEE)',
  role: 'GM - Projects',
  phone: '8519949762',
  displayPhone: '+91 85199 49762',
  email: 'mrelectricalworks02@gmail.com',
  address: 'No. 83, Gokul Nagar, Patancheru, Hyderabad, Telangana - 502319',
  addressDetails: {
    street: 'No. 83, Gokul Nagar',
    area: 'Patancheru',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '502319',
    country: 'India'
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gokul+Nagar+Patancheru+Hyderabad+Telangana+502319',
  whatsappUrl: 'https://wa.me/918519949762?text=Hi%20Mr.%20Nekbor%20Seikh%2C%20I%20visited%20MR.%20ELECTRICAL%20WORKS%20website%20and%20would%20like%20to%20discuss%20an%20electrical%20project%20quote.'
};

export const faqs = [
  {
    question: 'How do you ensure wiring safety in residential & commercial projects?',
    answer: 'Under the direct supervision of Mr. Nekbor Seikh (M.Tech - EEE), we compute electrical load balance, install genuine ISI-marked FRLS (Fire Retardant Low Smoke) wires, implement calibrated MCB & RCCB dual leakage trip protection, and verify safe earthing resistance before handover.'
  },
  {
    question: 'Can you handle industrial electrical installations and HT/LT panel boards?',
    answer: 'Yes. Our core industrial division handles factory machine power feeds, perforated and ladder cable trays, LT distribution switchgear panels, busbar trunking, and DG changeover panels across Patancheru, Pashamylaram, Bolarum, and greater Hyderabad.'
  },
  {
    question: 'Do you provide emergency breakdown support?',
    answer: 'Yes, we provide emergency diagnostic visits for severe short-circuits, phase failures, panel tripping, or transformer/cable breakdowns.'
  },
  {
    question: 'Which areas do MR. ELECTRICAL WORKS service?',
    answer: 'We cover Patancheru, Sangareddy, Ameenpur, Beeramguda, Bolarum, Miyapur, Hitec City, Gachibowli, Kukatpally, and all industrial and residential belts across Hyderabad and Telangana.'
  },
  {
    question: 'Do you offer a warranty on completed electrical work?',
    answer: 'Yes, we provide an authentic workmanship guarantee on all wiring and panel installations, along with OEM manufacturer warranties on all switchgear and cables deployed.'
  }
];
