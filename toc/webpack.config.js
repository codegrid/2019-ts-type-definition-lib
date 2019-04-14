module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }, ]
  },
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: 'Toc',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  }
};