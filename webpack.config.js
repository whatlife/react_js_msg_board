var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//单独打包css文件
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var CopyWebpackPlugin = require('copy-webpack-plugin');

console.info("目录： 》》》》》" + __dirname);

//模块别名 方便索引
var alias = {
    zepto: 'app/common/lib/zepto.min'
};

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true,
        contentBase: './app',
        port: 8080
    },
    // entry: [
    //     path.resolve(__dirname, 'app/index.jsx')
    // ],
    entry: {
        main: path.resolve(__dirname, 'app/index.jsx'), // 唯一入口文件
        vendor: ['react']   //这里是依赖的库文件配置，和CommonsChunkPlugin配合使用可以单独打包
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    devtool: 'cheap-source-map',
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /^node_modules$/,
            include: path.join(__dirname, 'app'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap")
        }, {
            test: /zepto/,
            loader: 'exports?$'
        }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false
        //     },
        // }),
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        //将第三方库打包到vendor.js
        new CommonsChunkPlugin({
           name: 'vendor',
           filename: 'vendor.js'
        })
    ],
    postcss: [
        require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    ],
    resolve: {
        root: __dirname,
        alias: alias,
        extensions: ['', '.js', '.jsx', 'css', '.scss']
    }
}

// 生产环境打包
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false, // remove all comments
            }
        }),
        new CopyWebpackPlugin([
            { from: './app/index.html', to: 'index.html' },
            { from: './app/**/*.css', to: 'main.css' }
        ]),
    ])
}
