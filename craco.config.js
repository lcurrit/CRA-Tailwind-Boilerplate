/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies, global-require */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
      ],
    },
  },
};
