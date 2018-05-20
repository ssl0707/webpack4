const HtmlWebPackPlugin = require('html-webpack-plugin')//使用html-webpack-plugin插件对html进行打包
require('babel-polyfill') // babel-polyfill-垫片 识别es6语法
const path = require('path');
const webpack = require('webpack');
module.exports = {
    module: {// webpack loader加载器
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            }

        ]
    },
    plugins:[// 插件是一个数组
        new HtmlWebPackPlugin({// 构造函数
            template:'./src/index.html',// 默认值  打包html过后的文件名
            filename:'./index.html'//生成文件名
        }),
        new webpack.NamedModulesPlugin(),//使用该插件会显示模块的相对路径
        new webpack.HotModuleReplacementPlugin() //运行过程中替换、添加或删除模块，而无需重新加载整个页面
    ],
    // 启动服务
    devServer:{
        contentBase:require('path').join(__dirname, 'dist'),// 服务器跟目录
        compress:true,
        port:8080,// 服务器的端口号
        host:'127.0.0.1',
        hot:true
    }
}
// 1.全局安装webpack       npm install -g webpack

// 2.创建项目文件，初始化项目文件目录  npm init

// 到项目文件下安装webpack   npm install webpack

// 3.安装全局的webpack-cli     npm install -g webpack-cli  //获取当前webpack版本号配置文件

// 4.配置mode 

// 默认有production和development两种模式可以设置

// 5.新建入口  在项目文件目录下新建src文件夹，新建index.js文件入口

// 6.文件打包   命令行输入 webpack --mode development 或 webpack --mode production
// 1、webpack-cli必须要全局安装，否则不能使用webpack指令； 
// 2、webpack也必须要全局安装，否则也不能使用webpack指令。 
// 3、webpack4.x中webpack.config.js这样的配置文件不是必须的。 
// 4、默认入口文件是./src/index.js，默认输出文件./dist/main.js。




// webpack3和webpack4的区别
// webpack4不用配置生产环境和开发环境,只需要在package.json里面scripts配置生产环境和开发环境
//webpack没有入口文件和出口文件
// 安装全局的webpack-cli     npm install -g webpack-cli  //获取当前webpack版本号配置文件