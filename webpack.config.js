const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const build = process.env.BUILD ? process.env.BUILD : false;
const devtool = build ? '' : 'inline-source-map';
const mode = build ? 'production' : 'development';

// const mapping = require('json-loader!yaml-loader!./_data/object_mapping.yml');

// console.log('m', mapping)

const cssRules = [
    {
        test: /\.scss$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].css',
                    publicPath: '/assets/ffg/css/'
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
    {
        test: /\.yml$/,
        use: 'js-yaml-loader'
    },
],
    devServer = {
        contentBase: [path.resolve('static-snapshots'), path.resolve('')],
        watchContentBase: true
    };

module.exports = [{
    entry: {
        bp: './citizens-guide/src/bigPicture/index.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/bp/',
        publicPath: '/assets/ffg/bp/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: {
        glossary: './citizens-guide/src/components/glossary/glossary.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/components/glossary/',
        publicPath: '/assets/ffg/components/glossary/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: {
        tabs: './citizens-guide/src/components/tabs/tabs.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/components/tabs/',
        publicPath: '/assets/ffg/components/tabs/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: {
        intro: './citizens-guide/src/revenue/intro/index.js',
        categories: './citizens-guide/src/revenue/categories/index.js',
        trends: './citizens-guide/src/revenue/trends/index.js',
        countryComparison: './citizens-guide/src/revenue/countries/index.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/revenue/',
        publicPath: '/assets/ffg/revenue/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: {
        categories: './citizens-guide/src/spending/categories/index.js',
        countryComparison: './citizens-guide/src/spending/countries/index.js',
        intro: './citizens-guide/src/spending/intro/index.js',
        trends: './citizens-guide/src/spending/trends/index.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/spending/',
        publicPath: '/assets/ffg/spending/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: {
        countryComparison: './citizens-guide/src/deficit/countries/index.js',
        intro: './citizens-guide/src/deficit/intro/index.js',
        trends: './citizens-guide/src/deficit/trends/index.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/deficit/',
        publicPath: '/assets/ffg/deficit/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: {
        intro: './citizens-guide/src/debt/intro/index.js',
        trends: './citizens-guide/src/debt/trends/index.js',
        analysis: './citizens-guide/src/debt/analysis/index.js',
        countryComparison: './citizens-guide/src/debt/countries/index.js',
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/ffg/debt/',
        publicPath: '/assets/ffg/debt/'
    },
    module: {
        rules: moduleRules
    }
}, {
    entry: [
        './citizens-guide/src/globalSass/cg.scss',
        './citizens-guide/src/globalSass/chapterIntroCommon.scss',
        './citizens-guide/src/globalSass/countryCommon.scss',
        './citizens-guide/src/globalSass/trendsCommon.scss',
        './citizens-guide/src/bigPicture/scss/bp.scss',
        './citizens-guide/src/deficit/trends/deficit-trends.scss',
        './citizens-guide/src/revenue/categories/revenue-categories.scss',
        './citizens-guide/src/spending/categories/spending-categories.scss',
        './citizens-guide/src/debt/trends/debt-trends.scss',
        './citizens-guide/src/debt/analysis/debt-analysis.scss'
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        path: __dirname + '/assets/ffg/css/',
        publicPath: '/assets/ffg/css/'
    },
    mode: mode,
    module: {
        rules: cssRules
    }
}];
