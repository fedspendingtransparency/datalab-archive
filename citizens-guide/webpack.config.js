const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        incomeToGdp: './src/income/gdp/index.js',
        categories: './src/income/categories/index.js',
        trend: './src/income/trends/index.js',
        countryComparison: './src/income/countries/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'public',
        watchContentBase: true,
        compress: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/assets/income/',
        publicPath: '/assets/income/'
    },
    mode: 'development',
    module: {
        rules: moduleRules
    },
},{
    entry: {
        countryComparison: './src/spending/countries/index.js',
        categories: './src/spending/categories/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'public',
        watchContentBase: true,
        compress: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/assets/spending/',
        publicPath: '/assets/spending/'
    },
    mode: 'development',
    module: {
        rules: moduleRules
    }
},{
    entry: ['./src/globalSass/cg.scss'],
    output: {
		path: path.resolve(__dirname, 'public/assets'),
	},
    mode: 'development',
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
}]