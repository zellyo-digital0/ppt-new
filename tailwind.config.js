/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*', './node_modules/flowbite/**/*.js'],
  // coustomize your brand style
  theme: {
    // extend your classes
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
