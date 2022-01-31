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
      },
      backgroundImage: {
        'banner-image-left': "url('/images/t1.jpeg')",
        'banner-image-right': "url('/images/t3.jpeg')",
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
        '2/10': '20%'
      },
    },
  },
  plugins: [],
}
