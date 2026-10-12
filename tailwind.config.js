/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens defined in DESIGN.md (Audited by @google/design.md)
        primary: {
          DEFAULT: '#B35010', // Electrolytic Busbar Copper
          hover: '#9C4208',
          light: '#F5EBE4',
        },
        secondary: {
          DEFAULT: '#5C6470', // Galvanized Steel / Cable Tray Zinc
          hover: '#474F5A',
        },
        tertiary: {
          DEFAULT: '#0E639C', // Grid Incomer Breaker Active
          light: '#E6F3FA',
        },
        neutral: {
          DEFAULT: '#F4F5F7', // Substation Drafting Vellum / Technical Sheet
          dark: '#EAECEF',
        },
        surface: {
          DEFAULT: '#FCFCFD', // Clean Architectural Panel White
          elevated: '#FFFFFF',
          dim: '#F0F2F5',
        },
        'on-surface': '#121417', // Transformer Core Silicon Steel Graphite
        subtle: '#EAECEF',
        border: '#D7DBE0', // 1px Technical Hairline Rule
        error: '#A82810',  // High-Voltage Tripped Arc Red

        // High-Contrast Technical Palette
        panel: {
          chassis: '#121417',
          steel: '#1A1D21',
          border: '#2C323B',
          muted: '#8A94A0',
        }
      },
      borderRadius: {
        none: '0px',
        sm: '2px', // Technical buttons & inputs
        md: '6px', // Panel containment cards
        lg: '10px', // Major showcase modules
        full: '9999px', // Telemetry & breaker pills
      },
      boxShadow: {
        // Structured Physical Shadows with Real Light Direction (no unanchored glows)
        'tech-sm': '0 1px 2px rgba(18, 20, 23, 0.05)',
        'tech-md': '0 2px 6px -1px rgba(18, 20, 23, 0.08), 0 1px 3px rgba(18, 20, 23, 0.04)',
        'tech-lg': '0 6px 16px -2px rgba(18, 20, 23, 0.10), 0 2px 6px rgba(18, 20, 23, 0.04)',
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}
