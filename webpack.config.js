var path = require('path');
var webpack = require('webpack');

var DEV = process.env.NODE_ENV !== 'production';

var javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
var htmlEntryPath = path.resolve(__dirname, 'src', 'index.html');
var buildPath = path.resolve(__dirname, 'public', 'build');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
]

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true', 
    javascriptEntryPath,
    htmlEntryPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=10000',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
    }],
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.join(__dirname, './src')]
  },
  devtool: 'cheap-module-source-map',
  plugins: [ 
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css', {disable: DEV}),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
