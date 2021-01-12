const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'cheap-module-source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3001/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'page1',
      library: { type: 'var', name: 'page1' },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/components/Page'
      },
      shared: [
        {
          react: {
            singleton: true
          },
          "react-dom": {
            singleton: true
          },
          "styled-components": {
            singleton: true
          }
        }
      ]
    }),
  ]
};
