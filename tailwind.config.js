/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        // DESIGN.md locked brand tokens — every utility resolves to a declared brand colour.
        // <alpha-value> keeps tints (e.g. bg-primary/10) tied to the same token.
        primary: {
          DEFAULT: 'rgb(179 80 16 / <alpha-value>)',   // Electrolytic Busbar Copper
          hover: 'rgb(156 66 8 / <alpha-value>)',
          light: 'rgb(245 235 228 / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(92 100 112 / <alpha-value>)',  // Galvanized Steel / Cable Tray Zinc
          hover: 'rgb(71 79 90 / <alpha-value>)',
          light: 'rgb(230 232 235 / <alpha-value>)',
        },
        tertiary: {
          DEFAULT: 'rgb(14 99 156 / <alpha-value>)',   // Grid Incomer Breaker Active
          light: 'rgb(230 243 250 / <alpha-value>)',
          bright: 'rgb(20 112 173 / <alpha-value>)',
        },
        neutral: {
          DEFAULT: 'rgb(244 245 247 / <alpha-value>)', // Substation drafting vellum
          dark: 'rgb(234 236 239 / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(252 252 253 / <alpha-value>)', // Chassis white, never glare white
          dim: 'rgb(240 242 245 / <alpha-value>)',
        },
        'on-surface': 'rgb(18 20 23 / <alpha-value>)', // Transformer core silicon steel
        muted: 'rgb(92 100 112 / <alpha-value>)',
        subtle: 'rgb(234 236 239 / <alpha-value>)',
        border: 'rgb(215 219 224 / <alpha-value>)',    // 1px technical hairline rule
        error: 'rgb(168 40 16 / <alpha-value>)',       // High-voltage tripped arc red
        // High-contrast dark panel readouts (terminal telemetry only, small areas)
        panel: {
          chassis: 'rgb(18 20 23 / <alpha-value>)',
          steel: 'rgb(26 29 33 / <alpha-value>)',
          line: 'rgb(44 50 59 / <alpha-value>)',
          dimmed: 'rgb(138 148 160 / <alpha-value>)',
        },
        ok: { // keep for the small compliance status chips only
          DEFAULT: 'rgb(14 99 156 / <alpha-value>)',
        },
      },
      borderRadius: {
        none: '0px',
        sm: '2px',    // Technical buttons, inputs, toggles
        md: '6px',    // Panel containment cards
        lg: '10px',   // Major showcase modules
        full: '9999px',
      },
      boxShadow: {
        // Structured physical shadows with a real light direction (no unanchored glows)
        'tech-sm': '0 1px 2px rgba(18, 20, 23, 0.05)',
        'tech-md': '0 2px 6px -1px rgba(18, 20, 23, 0.08), 0 1px 3px rgba(18, 20, 23, 0.04)',
        'tech-lg': '0 6px 16px -2px rgba(18, 20, 23, 0.10), 0 2px 6px rgba(18, 20, 23, 0.04)',
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
