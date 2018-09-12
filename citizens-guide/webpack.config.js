const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        intro: './src/income/intro/index.js',
        incomeToGdp: './src/income/gdp/index.js',
        categories: './src/income/categories/index.js',
        trend: './src/income/trends/index.js',
        countryComparison: './src/income/countries/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'public',
        watchContentBase: true,
        // hot: true,
        compress: true
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
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
        rules: [
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
                    //MiniCssExtractPlugin.loader,
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
        ]
    },
}