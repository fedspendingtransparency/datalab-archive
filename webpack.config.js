const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const build = process.env.BUILD ? process.env.BUILD : false;
const devtool = build ? '' : 'inline-source-map';
const mode = build ? 'production' : 'development';

const cssRules = [
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
];

function configFactory(entry, assetFolderName, rules) {
  let assetPath = path.join(__dirname, '../assets/ffg/');

  if (assetFolderName) {
    assetPath = assetPath + assetFolderName + '/';
  }

  rules = rules || [
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

  return {
    entry: entry,
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      })
    ],
    output: {
      filename: '[name].js',
      path: assetPath,
    },
    module: {
      rules: rules
    }
  };
}

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
],
      devServer = {
        contentBase: [path.join(__dirname, './static-snapshots/'), path.join(__dirname, './')],
        watchContentBase: true,
        compress: true,
      };

module.exports = [{
  entry: {
    bp: './citizens-guide/src/bigPicture/index.js'
  },
  devtool: devtool,
  devServer: devServer,
  mode: mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: __dirname + './assets/ffg/bp',
  },
  module: {
    rules: moduleRules
  }
},{
  entry: {
    anecdote: './citizens-guide/src/anecdote/anecdote.js',
  },
  devtool: devtool,
  devServer: devServer,
  mode: mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: __dirname + './assets/ffg',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: __dirname + './assets/ffg/components/glossary',
  },
  module: {
    rules: moduleRules
  }
},{
  entry: {
    tabs: './citizens-guide/src/components/tabs/tabs.js'
  },
  devtool: devtool,
  devServer: devServer,
  mode: mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: __dirname + './assets/ffg/components/tabs',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: __dirname + './assets/ffg/revenue/',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: __dirname + './assets/ffg/spending/',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../assets/ffg/deficit'),
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './assets/ffg/debt'),
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
    './citizens-guide/src/anecdote/anecdote.scss',
    './citizens-guide/src/deficit/trends/deficit-trends.scss',
    './citizens-guide/src/revenue/categories/revenue-categories.scss',
    './citizens-guide/src/spending/categories/spending-categories.scss',
    './citizens-guide/src/debt/trends/debt-trends.scss',
    './citizens-guide/src/debt/analysis/debt-analysis.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../assets/ffg/css'),
  },
  mode: mode,
  module: {
    rules: cssRules
  }
}];
