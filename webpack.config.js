var webpack = require('webpack');

// json stringify
var jStringify = (val) => {
  return JSON.stringify(val);
}

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
          'NODE_ENV': jStringify(process.env.NODE_ENV) 
          || jStringify('development')
        }
      })
    ]
}