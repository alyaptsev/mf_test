const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    publicPath: 'http://localhost:8080/',
    crossOriginLoading: 'anonymous'
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
      name: 'host',
      library: { type: 'var', name: 'host' },
      filename: 'remoteEntry.js',
      remotes: {
        page1: 'page1'
      },
      exposes: {
        './MainPage': './src/components/MainPage'
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
          },
          "react-router-dom": {
            singleton: true
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};
