var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loaders: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: [
                    "transform-react-jsx",
                    "react-html-attrs" // 组件中添加class 替代className  npm install --save-dev babel-plugin-react-html-attrs
                ],
            }
        },
        // css 私有化的

        
        {
            test: /\.css$/,
            loader: 'style-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        },
        // {
        //     test: /\.css$/, loader: 'style-loader!css-loader'
        // },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/assets/',
    }
}