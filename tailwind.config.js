const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xss': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        'vw-90': '90vw',
        'vw-80': '80vw',
        'vw-10': '10vw',
        'custom': '31%'
      },
      backgroundImage: {
        'banner-image-left': "url('/images/t1.jpeg')",
        'banner-image-right': "url('/images/t3.jpeg')",
        'banner-image-main': "url('/images/backgroundmain.jpg')",
        'banner-image-eventweb': "url('/images/imagem_topo.jpg')",
      },
      fontSize: {
        'i-5': ['5rem','5rem'],
        'i-6': ['6rem','6rem'],
        'i-7': ['7rem','7rem'],
        'i-8': ['8rem','8rem'],
        'i-9': ['9rem','9rem'],
      },
      maxWidth: {
        '28': '7rem'
      },
      inset: {
        '1/10': '10%',
        '2/10': '20%',
        '9/10': '90%',
        'vw-9/10': '90vw',
        'vh-9/10': '90vh',
        'vh-85': '85vh',
        'vw-5': '5vw',
        'vw-5-': '-5vw',
        'vw-15': '15vw',
      },
      fontFamily: {
        'title': '"Montserrat Alternates",sans-serif'
      },
      minWidth: {
        '40': '10rem',
        '44': '11rem',
        '48': '12rem'
      },
      minHeight: {
        '50': '10rem'
      },
      colors: {
        table: '#F9FAFB',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
