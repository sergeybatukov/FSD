const path = require('path')
const fs = require('fs')
const MiniCssExtractPlagin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../FSD/src'),
    dist: path.join(__dirname, '../FSD/dist'),
    assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

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
        rules: [
        {
            test: /\.pug$/,
            oneOf: [
                {
                    use: ['pug-loader']
                }]
        },    
        {
            test: /\.js/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options:{
                name: "[name].[ext]"
            }
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
        new CopyWebpackPlugin([
            {from: 'src/img/', to: 'assets/img'},
            {from: 'src/fonts/', to: 'assets/fonts'}
        ]),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))
    ]
}