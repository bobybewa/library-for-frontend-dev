module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        '400' : '#dfeeea',
        '500' : '#3a7865',
        '600' : '#3e7075'
      },
      orange: {
        '400' : '#F6DCBF',
        '500' : '#E1701A',
        '600' : '#FF7B17'
      },
      darkblue: {
        '400' : '#3D5D6C',
        '500' : '#0E4D6C'
      },
      pink: {
        '400' : '#FFBE9D'
      },
      gray: {
        '50' : '#F9FAFB'
      }
    },
    extend: {},
    screens: {
      'hp' : '375px',
      'tablet': '768px',
      'laptop': '990px',
      'desktop': '1710px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
