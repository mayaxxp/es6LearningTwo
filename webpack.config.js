var path=require('path');
var htmlwebpackPlugin=require('html-webpack-Plugin');
const {VueLoaderPlugin}=require('vue-loader');
module.exports={
    entry:path.join(__dirname,'index.js'),
    output:{path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.js$/,use:'babel-loader', exclude:'/node_modules/'},
            {test:/\.vue$/,use:'vue-loader', exclude:'/node_modules/'}
        ]
    }
    ,
    devServer:{
        open:true,
        port:8080,
        contentBase:'src',
        hot:true
    }
    ,
    plugins:[
    	new VueLoaderPlugin(),
        new htmlwebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]
}
