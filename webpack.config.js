/**
 *
 * webpack 配置文件
 */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        myMainPage: path.join(__dirname, './js/myMainPage.js'),
        homePage: path.join(__dirname, './js/homePage.js'),
        login: path.join(__dirname, './js/login.js'),
    },
    output: {  // 输出文件的相关配置
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    plugins: [ // 配置插件的节点
        new VueLoaderPlugin()
    ],
    module: {   // 用于配置第三方模块加载器
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },  // 配置打包处理css文件s
            { test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
            { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            { test: /\.jpeg|png|jpg|bmp|gif$/, use: 'url-loader'},    // 这里可以通过limit值设置base64编码的最高图片大小
            { test: /\.(ttf|woff|eot|svg|woff2)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},    // 配置babel来转换高级ES语法
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {

    }
}