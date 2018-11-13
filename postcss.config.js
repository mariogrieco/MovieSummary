module.exports = {
  plugins: [
    require('cssnano'),
    require('autoprefixer', {
      flexbox: true
    }),
    require('postcss-flexbugs-fixes')
  ]
}