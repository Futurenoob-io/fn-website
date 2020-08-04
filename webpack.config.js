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
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[hash]-[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		]
	},

	// devServer: {
	// 	contentBase: path.resolve(__dirname, 'public'),
	// 	port: 9000
	// },
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'public'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html' //source html
		})
	]
};
