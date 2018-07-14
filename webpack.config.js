const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  //   entry:[
  //     // 'webpack/hot/dev-server',
  //     // 'webpack-hot-middleware/client',
  //     "./public/js/index.js"
  //   ],
  //   output: { 
  //     path: '/dist',
  //     //publicPath: 'http://localhost:3000/public/',
  //     publicPath: '/public/',
  //     filename: 'bundle.js'
  // },
  entry: [
    "./public/index.js",
    "./views/index.pug"
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
           // options: { minimize: true }
          },
          {
            loader: "pug-html-loader",
            options: { data: {
              title: "My TITLE"}
             }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./views/index.pug",
      filename: "./index.html"
    })
  ]
};
