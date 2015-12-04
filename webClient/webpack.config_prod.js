var webpack = require("webpack");

module.exports = {
  entry: [
    './src/helloWorld/app.tsx'
  ],
  output: {
    path: 'build/helloWorld',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  },
  ts: {
    configFileName: "./tsconfig.json"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
