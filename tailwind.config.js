/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      screens: {
        xs: '380px',
      },

      colors: {
        base: 'var(--bg)',
        base2: 'var(--bg2)',
        card: 'var(--card)',
        elevated: 'var(--elevated)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',

        violet: {
          DEFAULT: '#8B5CF6',
          soft: 'rgba(139, 92, 246, 0.12)',
        },
        blue: {
          DEFAULT: '#3B82F6',
          soft: 'rgba(59, 130, 246, 0.12)',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          soft: 'rgba(34, 211, 238, 0.12)',
        },
        emerald: {
          DEFAULT: '#34D399',
          soft: 'rgba(52, 211, 153, 0.12)',
        },
        amber: {
          DEFAULT: '#F59E0B',
          soft: 'rgba(245, 158, 11, 0.12)',
        },
      },

      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        'glow-violet': '0 0 0 1px rgba(139,92,246,0.18), 0 8px 30px -8px rgba(139,92,246,0.25)',
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.18), 0 8px 30px -8px rgba(34,211,238,0.25)',
        'glow-blue': '0 0 0 1px rgba(59,130,246,0.18), 0 8px 30px -8px rgba(59,130,246,0.25)',
        'glow-emerald': '0 0 0 1px rgba(52,211,153,0.18), 0 8px 30px -8px rgba(52,211,153,0.25)',
        'glow-amber': '0 0 0 1px rgba(245,158,11,0.18), 0 8px 30px -8px rgba(245,158,11,0.25)',
        card: '0 4px 24px -8px rgba(0,0,0,0.5)',
      },

      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'scale(0.96)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
      },

      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        fadeIn: 'fadeIn 0.4s ease-out both',
        scaleIn: 'scaleIn 0.25s ease-out both',
      },
    },
  },

  plugins: [],
}
