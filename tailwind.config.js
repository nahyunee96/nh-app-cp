/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      translate: {
        '-200': '-200px', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '4xl': {'max': '1920px'},
        // => @media (max-width: 1920px) { ... }

        '3xl': {'max': '1599px'},
        // => @media (max-width: 1599px) { ... }

        '2xl': {'max': '1439px'},
        // => @media (max-width: 1439px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '575px'},
        // => @media (max-width: 575px) { ... }
      },
      width: {
        '96': '96%',
        '128': '32rem',
        '160': '40rem',
        '1200': '1200px',
      },
      height: {
        '600' : '600px'
      },
      maxWidth: {
        'screen-1300': '1300px',
      },
      spacing: {
        '600px': '600px',
      },
      backgroundSize: {
        'auto-600px': 'auto 600px',
      },
      
      
    },
    fontFamily: {
      sans: ['Pretandard', 'sans-serif'],
    },
  },
  plugins: [],
}
