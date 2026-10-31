/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C8202B',
        'primary-dark': '#9E1820',
        'primary-light': '#E5575F',
        accent: '#E8A90C',
        'accent-dark': '#C28D08',
        leaf: '#2E8B57',
        sea: '#2D5FA8',
        background: '#FBF8F2',
        surface: '#FFFFFF',
        ink: '#161B2E',
        muted: '#5E6272',
        divider: '#E6E0D4',
        deep: '#0E1A33',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'drift-up': 'drift-up 9s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'drift-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(-140px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
