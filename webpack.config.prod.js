/* eslint-disable global-require, max-len */
require('dotenv').config();

const {
    AUTH_ENDPOINT, ENDPOINT, NODE_ENV
} = process.env;
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.scss', ' json'],
        alias: {
            '@reducers': path.resolve(__dirname, './src/reducers'),
            '@components': path.resolve(__dirname, './src/components'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@services': path.resolve(__dirname, './src/services'),
            '@selectors': path.resolve(__dirname, './src/selectors'),
            '@sagas': path.resolve(__dirname, './src/sagas'),
            '@actions': path.resolve(__dirname, './src/actions'),
            '@model': path.resolve(__dirname, './src/model'),
            '@util': path.resolve(__dirname, './src/util'),
            '@root': __dirname
        }
    },
    output: {
        path: path.join(__dirname, 'public/assets'),
        publicPath: '/assets/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.js$/,
            include: [
                /node_modules\/react-native-/,
                /node_modules\/react-router-native/,
                /node_modules\/@indec/
            ],
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.json$/,
                /\.s?css$/,
                /\.(jpg|png)/
            ],
            loader: 'url-loader',
            options: {name: '[name].[ext]', limit: 10000}
        }, {
            test: /\.(jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {name: '[name].[ext]'}
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 400000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(require('./package.json').version),
            ENDPOINT: JSON.stringify(ENDPOINT),
            AUTH_ENDPOINT: JSON.stringify(AUTH_ENDPOINT)
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].bundle.css'
        }),
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: true
        }),
        new HtmlWebpackPlugin({
            hash: true,
            templateParameters: {
                title: require('./package.json').description
            },
            template: './public/template.html',
            filename: '../index.html',
            favicon: 'public/images/favicon.png',
            'apple-touch-icon': 'public/images/favicon.png',
            inject: true,
            meta: {
                charset: {charset: 'utf-8'},
                viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
                'theme-color': '#58565a',
                'msapplication-TileColor': '#58565a',
                'application-name': require('./package.json').name,
                'apple-mobile-web-app-title': require('./package.json').name
            }
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
