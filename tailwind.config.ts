import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg: 'hsl(var(--bg))',
        'bg-deep': 'hsl(var(--bg-deep))',
        fg: 'hsl(var(--fg))',
        muted: 'hsl(var(--muted))',
        'muted-light': 'hsl(var(--muted-light))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          light: 'hsl(var(--accent-light))',
          glow: 'hsl(var(--accent-glow))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          hover: 'hsl(var(--card-hover))',
        },
        border: 'hsl(var(--border))',
        'border-light': 'hsl(var(--border-light))',
        steel: 'hsl(var(--steel))',
        'steel-light': 'hsl(var(--steel-light))',
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-light)) 100%)',
        'steel-gradient': 'linear-gradient(135deg, hsl(var(--steel) / 0.2) 0%, hsl(var(--steel-light) / 0.1) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'var(--radius-lg)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        '8xl': ['5rem', { lineHeight: '1' }],
        '9xl': ['6.5rem', { lineHeight: '1' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'draw-line': 'draw-line 1.5s ease-out forwards',
        'rocket-climb': 'rocket-climb 0.8s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px hsl(var(--accent-glow) / 0.3)' },
          '100%': { boxShadow: '0 0 40px hsl(var(--accent-glow) / 0.5), 0 0 60px hsl(var(--accent-glow) / 0.3)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'rocket-climb': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-100vh + 200px))' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
