const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone
      },
      fontFamily: {
        sans: ["Recursive", ...defaultTheme.fontFamily.sans],
        serif: ["Poppins", ...defaultTheme.fontFamily.serif],
        mono: ["Recursive", ...defaultTheme.fontFamily.mono]
      }
    }
  }
}
