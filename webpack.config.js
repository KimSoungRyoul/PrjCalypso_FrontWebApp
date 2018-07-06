const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        app: '',
    },
    output: {
        path: './public',
        filename: './src/main.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                filename: 'bundle.js',
                options: {
                    presets: ['ex2015', 'react']
                }
            }
        ]

    },
    plugins: [],
    optimization: {},
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
};