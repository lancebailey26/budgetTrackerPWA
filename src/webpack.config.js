const WebpackPwaManifest = require('webpack-pwa-manifest');


const config = {
  mode: 'development',
  // Update the entry point
  entry: './index.js',
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + './dist',
    filename: "bundle.js"
  },
 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
      new WebpackPwaManifest({
    name: 'Budget Tracker',
    description: 'a simple budget tracker PWA',
    inject:false,
    fingerprints:false,
  })]
};

module.exports = config;
