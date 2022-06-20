const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts'],
        mainFields: ['main'],
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'aws-sdk': 'aws-sdk'
    },
    stats: {
        warningsFilter: 'Critical dependency: the request of a dependency is an expression'
    },
    optimization: {
        minimize: false
    }, 
    target: 'node',
    devtool: 'eval-source-map',
    mode: 'development',
    entry: {
        myHandler: './src/handlers/myHandler/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/index.js',
        libraryTarget: 'commonjs'
    }
};
