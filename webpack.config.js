const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
// after compiled, start express server
const StartServerPlugin = require('start-server-webpack-plugin');

const commonOptions = {
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      Shared: path.resolve(__dirname, 'src/shared'),
      Server: path.resolve(__dirname, 'src/server'),
      Browser: path.resolve(__dirname, 'src/browser'),
    }
  },
  rules: [
    {
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }
  ]
}

module.exports = [
  {
    // name which is used in scripts
    name: 'client',
    resolve: commonOptions.resolve,
    entry: './src/browser/index.jsx',
    module: {
      rules: commonOptions.rules.concat([
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
      ]),
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        filename: 'page.html',
        template: './src/shared/index.html',
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename: 'client.bundle.js',
    },
  },
  {
    // name which is used in scripts
    name: 'server',
    resolve: commonOptions.resolve,
    entry: './src/server/server.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
    },
    // need to be specified
    target: 'node',
    // not to bundle node_mouldes while compiling server code
    externals: [nodeExternals()],
    // to use dirname in server code
    node: {
      __dirname: false,
    },
    module: {
      rules: commonOptions.rules,
    },
    plugins: [
      new StartServerPlugin('server.js'),
    ]
  },
];
