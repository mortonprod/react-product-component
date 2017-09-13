'use strict';
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports =  {
  entry: {
		bundle: "./product.js"
	},
	plugins: [new ExtractTextPlugin("index.css"),new OptimizeCssAssetsPlugin(), new UglifyJSPlugin() ],
  module:{
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
		{ test: /\.css$/,loader:ExtractTextPlugin.extract("css-loader") },
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
