const path = require('path');
var webpack = require("webpack");
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      "root.jQuery": "jquery",
    })
  ],
  module: {
    rules: [
      {
        test: "/[\/\\]node_modules[\/\\]jquery-validation[\/\\]dist[\/\\]jquery.validate\.js$/",
        loader: 'imports-loader',
        options: {
          type: 'commonjs',
          imports: [
            'named jquery-validation validate',
            {
              moduleName: 'jquery-validation',
              name: 'validate',
            },
          ],}
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};