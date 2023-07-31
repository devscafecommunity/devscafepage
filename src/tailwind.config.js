/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['JetBrains Mono', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'devscafe': {
          background: '#c9cdb9',
          Text: '#5B352C',
        },
      },
    },
  },
  plugins: []
});

