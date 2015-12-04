
module.exports = {
  entry: [
    './src/App.tsx'
  ],
  output: {
    path: 'build/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': '$',
    'bluebird': 'Promise',
    'lodash': '_'
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  },
  ts: {
    configFileName: "./tsconfig.json"
  }
};

