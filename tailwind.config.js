/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      purple: {
        100: '#A8A4FF',
        125: 'rgba(99, 95, 199, .1)',
        150: 'rgba(99, 95, 199, .25)',
        200: '#635FC7',
      },
      grey: {
        100: '#F4F7FD',
        200: '#E4EBFA',
        300: '#828FA3',
        400: '#3E3F4E',
        500: '#2B2C37',
        600: '#20212C',
        700: '#000112'
      },
      red: {
        100: '#FF9898',
        200: '#EA5555'
      },
      white: '#fff'
    },
  },
  plugins: [],
};
