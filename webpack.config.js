const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: './app/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
			inject: true,
			template: './index.html'
	}),
	new CopyWebpackPlugin([
		{
		  from: path.join(__dirname, 'app', 'images'),
		  to: path.join(__dirname, 'dist', 'app', 'images'),
		  toType: 'dir'
		}
	  ], {debug:'debug'})
],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'app')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],
					presets: [
						[
							'@babel/preset-react',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: path.resolve(__dirname, "app/"),
							outputPath: path.resolve(__dirname, 'dist/'),
                            publicPath: '../',
                            useRelativePaths: true
						}
					}
				] 
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  'style-loader',
				  'raw-loader',
				  // Compiles Sass to CSS
				  'resolve-url-loader',
				  {
					loader: 'sass-loader',
					options: {
					  // Prefer `dart-sass`
					  implementation: require('sass'),
					}
				},
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	resolve: {
	 alias: {
		 utils: path.resolve(__dirname, 'app/utils/'),
		 components: path.resolve(__dirname, 'app/components/'),
		 constants: path.resolve(__dirname, 'app/constants')
	 }
 },

	devServer: {
		open: true
	}
};
