const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		// configuration regarding modules

		rules: [
			// rules for modules (configure loaders, parser options, etc.)
			{
				test: /\.jsx?$/,
				include: [ path.resolve(__dirname, 'src') ],
				exclude: [ path.resolve(__dirname, 'node_modules') ],
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html' //source html
		})
	]
};
