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
        gdp: './src/revenue/gdp/index.js',
        categories: './src/revenue/categories/index.js',
        trends: './src/revenue/trends/index.js',
        countries: './src/revenue/countries/index.js'
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
        path: __dirname + '/public/revenue/assets/',
        publicPath: '/revenue/assets/'
    },
    mode: 'development',
    module: {
        rules: moduleRules
    },
},{
    entry: {
        bars: './src/spending/bars/index.js',
        categories: './src/spending/categories/index.js',
        categoriesHorizontal: './src/spending/categories-horizontal/index.js',
        categoriesVertical: './src/spending/categories-vertical/index.js',
        countryComparison: './src/spending/countries/index.js',
        donut: './src/spending/donut/index.js',
        treemap: './src/spending/treemap/index.js',
        trends: './src/spending/trends/index.js'
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
        path: __dirname + '/public/spending/assets/',
        publicPath: '/spending/assets/'
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