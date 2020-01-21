const path = require('path')
const MiniCssExtractPlagin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'assets/[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.(png|jpg|gif|svg)/,
            loader: 'file-loader',
            options:{
                name: "[name].[ext]"
            }
        },
        {
            test: /\.css/,
            use: [
                "style-loader",
                MiniCssExtractPlagin.loader, 
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: { path: 'src/js/postcss.config.js' }}
                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ]
        },
        {
            test: /\.scss/,
            use: [
                "style-loader",
                MiniCssExtractPlagin.loader, 
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: { path: 'src/js/postcss.config.js' }}
                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ]
        }
    ]
    },

    devServer: {
        contentBase: './dist',
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlagin({
            filename: "assets/[name].css"
        }),
        new HtmlWebPackPlugin({
            hash: false,
            template: 'src/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'src/img/', to: 'assets/img'}
        ]) 
    ]
}