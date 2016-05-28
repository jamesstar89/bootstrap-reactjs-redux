var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/, 
          loader: 'babel-loader',
          include: __dirname
        }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
}