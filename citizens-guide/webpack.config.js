const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const build = process.env.BUILD ? process.env.BUILD : false;
const devtool = build ? '' : 'inline-source-map';
const mode = build ? 'production' : 'development';

const moduleRules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    },
    {
        test: /\.(css|scss)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.csv$/,
        use: {
            loader: 'csv-loader',
            options: {
                dynamicTyping: true,
                header: true
            }
        }
    },
];

module.exports = [{
    entry: {
        anecdote: './src/anecdote/anecdote.js'
    },
    devtool: devtool,
    devServer: {
        contentBase: 'public',
        watchContentBase: true,
        compress: true
    },
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/assets/',
        publicPath: '/assets/'
    },
    module: {
        rules: moduleRules
    }
},{
    entry: {
        intro: './src/revenue/intro/index.js',
        categories: './src/revenue/categories/index.js',
        trends: './src/revenue/trends/index.js',
        countries: './src/revenue/countries/index.js'
    },
    devtool: devtool,
    devServer: {
        contentBase: 'public',
        watchContentBase: true,
        compress: true
    },
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/revenue/assets/',
        publicPath: '/revenue/assets/'
    },
    module: {
        rules: moduleRules
    }
},{
    entry: {
        categories: './src/spending/categories/index.js',
        countryComparison: './src/spending/countries/index.js',
        intro: './src/spending/intro/index.js',
        trends: './src/spending/trends/index.js'
    },
    devtool: devtool,
    devServer: {
        contentBase: 'public',
        watchContentBase: true,
        compress: true
    },
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/spending/assets/',
        publicPath: '/spending/assets/'
    },
    module: {
        rules: moduleRules
    }
},{
    entry: [
        './src/globalSass/cg.scss', 
        './src/bigPicture/scss/bp.scss', 
        './src/anecdote/anecdote.scss',
        './src/revenue/intro/index.scss',
        './src/spending/intro/spending-intro.scss',
        './src/spending/categories/spending-categories.scss',
        './src/spending/trends/spending-trends.scss',
    ],
    output: {
		path: path.resolve(__dirname, 'public/assets'),
	},
    mode: mode,
    module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
}];

