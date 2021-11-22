module.exports = {
  theme: {
    screens: {
      'xs':'540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        body:['Noto Serif']
      },

    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
      animation: ['hover', 'group-hover'] ,
    }
  },
  plugins: [],
}