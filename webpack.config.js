const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ["./src/index.js", "@babel/polyfill"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
                }
            }
        ]
    }
}