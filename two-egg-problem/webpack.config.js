module.exports = {
  entry: './lib/root.js',
  output: {
    filename: './bundle.js'
  },
  devtool: 'source-map'
};

// When using webpack.config.js
// webpack --watch 

// Without webpack.config.js
// webpack lib/root.js bundle.js