module.exports = {
  plugins: [
    require('postcss-prefixwrap')('.canvia'), // Add your custom prefix here
    require('autoprefixer') // Autoprefixer can be used to add browser vendor prefixes (optional)
  ]
};
