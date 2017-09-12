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
		{ test: /\.css$/, loader: 'css-loader' },
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
  ]
  },
  externals: {
    'react': 'commonjs react', 
		'react-router-dom':'commonjs react-router-dom'
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
