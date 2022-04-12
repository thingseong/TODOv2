const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename: 'index_bundle.js'
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, "public")
            
        },
        port: 8080,
    },
    plugins:[
        new HtmlWebpackPlugin({template:"./index.html"})
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}