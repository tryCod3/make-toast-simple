const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[hash:6].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
      rules:[
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: "/node_modules/"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ]
    },
    resolve: {
      alias: {
          '@': path.resolve(__dirname, "./src/"),
          'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['.ts', '.js', '.vue', '.json'],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
};
