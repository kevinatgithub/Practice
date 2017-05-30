const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: 'inline-sourcemap',
    entry: './js/client.jsx',
    output: {
        path: path.join(__dirname, '/src/'),
        filename: 'client.min.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                        'react-html-attrs',
                        'transform-decorators-legacy',
                        'transform-class-properties',
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                 { loader: 'style-loader' },
                 { loader: 'css-loader' },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
