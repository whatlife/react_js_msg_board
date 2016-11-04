var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//单独打包css文件
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// var appModulesPath = path.resolve('app'); // gulpfiles process is run in ./tools folder
// var nodeModulesPath = path.join(__dirname, 'node_modules');

console.info("目录： 》》》》》" + __dirname);

//模块别名 方便索引
var alias = {
    jquery: 'app/common/lib/jquery',
    zepto: 'app/common/lib/zepto.min'
};

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    },
    entry: [
        path.resolve(__dirname, 'app/index.jsx')
    ],
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
            loader: ExtractTextPlugin.extract("style", "css-loader?sourceMap")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
        }, {
            test: /jquery/,
            loader: 'exports?$'
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
        // //将第三方库打包到vendor.js
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // })
    ],
    resolve: {
        root: __dirname,
        alias: alias,
        extensions: ['', '.js', '.jsx', 'css', '.scss']
    }
}

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
        })
    ])
}
