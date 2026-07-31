import { Home, Lightbulb, Zap, Factory, Shield, HeartPulse, Building2, HardHat, Warehouse } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'House Wiring',
    description: 'Complete wiring for new homes with premium safety standards.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Lighting Installation',
    description: 'LED, Decorative, Outdoor, Garden, Office, and Industrial lighting setups.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Distribution Boards',
    description: 'MCB, RCCB, ELCB, and comprehensive panel installations.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Industrial Electrical Works',
    description: 'Factories, Machines, Cable Trays, and Power Distribution.',
    icon: Factory,
  },
  {
    id: 5,
    title: 'Commercial Works',
    description: 'Electrical solutions for Offices, Shops, Hospitals, Schools, and Hotels.',
    icon: Building2,
  },
  {
    id: 6,
    title: 'Fault Finding & Maintenance',
    description: 'Short Circuit, Leakage, Power Failure resolution & AMCs.',
    icon: Shield,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Premium House Wiring',
    location: 'Patancheru',
    client: 'Private Residence',
    services: 'House Wiring, Lighting',
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Commercial Office Setup',
    location: 'Hyderabad',
    client: 'Tech Corp',
    services: 'Lighting + DB Installation',
    duration: '15 Days',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    category: 'Commercial'
  },
  {
    id: 3,
    title: 'Factory Power Distribution',
    location: 'Bolarum Industrial Area',
    client: 'Manufacturing Ltd',
    services: 'Industrial Power Distribution, Cable Trays',
    duration: '1 Month',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=600',
    category: 'Industrial'
  }
];

export const industries = [
  { name: 'Residential', icon: Home },
  { name: 'Commercial', icon: Building2 },
  { name: 'Industrial', icon: Factory },
  { name: 'Hospitals', icon: HeartPulse },
  { name: 'Schools', icon: Shield },
  { name: 'Warehouses', icon: Warehouse },
  { name: 'Construction Sites', icon: HardHat },
];

export const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Safety Standards' },
];

export const contactInfo = {
  name: 'MR. ELECTRICAL WORKS',
  owner: 'Nekbor Seikh (M.Tech - EEE)',
  phone: '8519949762',
  email: 'mrelectricalworks02@gmail.com',
  address: 'No.83, Gokul Nagar, Patancheru, Hyderabad, Telangana 502319',
};

export const faqs = [
  {
    question: 'How much does house wiring cost?',
    answer: 'The cost depends on the size of the house and the specific requirements. Contact us for a free quote tailored to your needs.'
  },
  {
    question: 'Do you provide emergency service?',
    answer: 'Yes, we provide 24/7 emergency support for critical electrical faults like power failures or short circuits.'
  },
  {
    question: 'Do you provide industrial work?',
    answer: 'Absolutely. We handle large-scale industrial projects including factories, machine wiring, and power distribution.'
  },
  {
    question: 'Which areas do you cover?',
    answer: 'We cover Patancheru, Hyderabad, and surrounding areas in Telangana.'
  },
  {
    question: 'Do you provide warranty?',
    answer: 'Yes, we provide a warranty on our workmanship and standard warranties apply to all installed equipment and materials.'
  }
];
