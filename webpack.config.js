'use strict';
const webpack = require('webpack');
const path = require('path');
module.exports =  {
  entry: {
		bundle: "./product.js"
	},
//	plugins: ["transform-react-jsx"],
  module:{
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
  ]
  },
	output:{
    libraryTarget: 'umd',
  	filename: 'index.js',	
		path: path.resolve(__dirname, 'dist')
	},
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
