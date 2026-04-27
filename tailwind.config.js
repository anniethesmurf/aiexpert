import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './pages/**/*.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        midnight: '#05111f',
        ocean: '#0b5fae',
        cyanline: '#38d8ff',
        ember: '#ff8a2a',
        graphite: '#d9e8f7'
      },
      boxShadow: {
        panel: '0 24px 80px rgba(0, 91, 172, 0.28)',
        glow: '0 0 36px rgba(56, 216, 255, 0.24)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: [forms]
};
