
module.exports = {
  entry: [
    './src/helloWorld/app.tsx'
  ],
  output: {
    path: 'build/helloWorld',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
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
  }
};

