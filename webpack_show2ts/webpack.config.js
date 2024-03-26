const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
    port:9000
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // tsc --init生成ts配置文件
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}