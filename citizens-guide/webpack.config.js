const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        overview: './src/overview/js/overview.js',
        receipts: './src/receipts/sect-1-2/index.js',
        receiptsTrend: './src/receipts/sect-3/index.js',
        receiptsCountryComparison: './src/receipts/sect-4/index.js',
        outlays: './src/outlays/js/outlays.js'
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
        path: __dirname + '/public/assets',
        publicPath: '/assets/'
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