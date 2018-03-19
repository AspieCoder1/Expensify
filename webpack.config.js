const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles/styles.css');

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'dist/bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.(jsx|js)$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use: [{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							minimize: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							minimize: true
						}
					}]
				})
			}]
		},
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'public', 'dist'), path.join(__dirname, 'public', 'styles')],
			historyApiFallback: true
		},
		plugins: [ CSSExtract ]
	};
};