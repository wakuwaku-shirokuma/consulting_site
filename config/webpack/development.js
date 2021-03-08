//process.env.NODE_ENV = process.env.NODE_ENV || 'development'

//const environment = require('./environment')

//module.exports = environment.toWebpackConfig()

const { environment } = require('@rails/webpacker')
// 以下追記
const webpack = require('webpack')
environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    })
)
// ここまで
module.exports = environment.toWebpackConfig();
