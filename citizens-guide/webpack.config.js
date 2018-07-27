const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        overview: './src/overview/js/overview.js',
        receipts: './src/receipts/js/receipts.js',
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
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ],
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                //MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}