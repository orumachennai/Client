var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: path.join(__dirname, 'src', 'app/index.js'),
    html: path.join(__dirname, 'src', 'index.html')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  node: {
	__dirname: true
	},	
	devServer: {
		headers: { "Access-Control-Allow-Origin": "*" }
	},
	devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
      },
	  {
		test: /\.less$/,
		loader: 'style!css!resolve-url!less'
	},
	{
		test: /\.css$/,
		loader: "style-loader!css-loader"
	},
	{
      test: /\.(jpg|png|svg|xlsx)$/i,
      loader: 'url?limit=25000'
    },
	{
		test: /\.(woff|woff2|eot|ttf|otf)$/, 
		loader: 'url-loader?limit=100000' 
	},
	{
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
    }
    ]          
  },
  resolve : {
    extensions: ['', '.js', '.jsx', '.es6']
  }
};
