/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.js",

    // Or if using `src` directory:
    "./blum/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        'xxl': '1600px',
      },
      backgroundImage: {
        'bgSecondary': "url('/BG/footer6.webp')",
        'bgTitle': "url('/BG/flores.webp')",
        'bgtertiary': "url('/BG/footer8.webp')",
      },
      dropShadow: {
        'primary': '0 4px 25px rgba(12, 52, 60, 0.8)', 
        'secondary': '0 4px 25px rgba(254, 153, 0, 0.8)',
      },
      colors: {
        primary: {
          DEFAULT: '#0c343c',  // Color de fondo primario
          hover: '#ffffff',    // Nuevo color de fondo al pasar el mouse
          active: '#ffffff',
        },
        secondary: '#fe9900',  // Color secundario
        tertiary:'#E99006',
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'purple': '#611F69',
        'lightgrey': '#8C8C8C',
        'green': '#6B9F36',
        'lightpink': '#FCF6EF',
        'orange': '#F9CD92',
        'grey500': '#ECECEC',
        'bgpink': "#FCF5EF",
        'bgpurple': '#451F49',
        'emailbg': '#6a4c6d',
        'offwhite': ' #FDFDFD',
        'offblack': '#333333',
        'red': '#FF605C',
      },
      fontFamily: {
        'inter': ['Inter', "sans-serif"],
        'oxanium': ['Oxanium', 'sans-serif'],
        'aileron':['Aileron','sans-serif']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      width: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '1/12': '8.333333%',
        '340px': '340px',
        full: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      }),
      lineHeight: {
        '4px': '85px',
      },
    },
  },
  variants: {},
  plugins: [],
}
