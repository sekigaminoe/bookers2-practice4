const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/scss/jquery',
    jQuery: 'jquery/scss/jquery',
    Popper: 'popper.js',
  })
  )
