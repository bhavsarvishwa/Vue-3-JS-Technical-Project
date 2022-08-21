module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or "media" or "class"
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        100: '#F4F6F8',
        700: '#343A40',
      },
      blue: {
        100: '#E5E8FD',
        700: '#253CF2',
      },
      red: {
        100: '#f8eaea',
        700: '#c54a4a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
