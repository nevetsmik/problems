const path = require('path');

module.exports = {
  entry: './lib/root.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'lib/'),
        exclude: ['node_modules'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
};

// When using webpack.config.js
// webpack --watch

// Without webpack.config.js
// webpack lib/root.js bundle.js
