/**
 * Created by Anshi on 2017/6/30.
 */
let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/*const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');*/

module.exports = {
    entry: path.resolve(__dirname, 'static/index.js'), //这里是绝对路径
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'index.js',
    },
    devtool: 'source-map', //添加map，便于debug
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader" // add ?minimize could minify translates CSS into CommonJS
                    }, {
                        loader: "postcss-loader"
                    },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }]
                })
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        /*new HtmlPlugin({
            template: 'test.html', //模板选择，支持ejs等，具体配置看文档
            filename: 'index.html', //不是写生成路径，是写名字
            title: 'exam', //生成的html文档
            hash: true // 是否为html包含的script和css添加hash值
        }),*/
        new ExtractTextPlugin("index.css") /*,//这里负责另外生成css，而不内嵌
        new UglifyJSPlugin({ //这里是负责压缩的
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        })*/
    ]
};