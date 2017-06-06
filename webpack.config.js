const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

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
                use: ['style-loader', 'css-loader'],
                include: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                ]),
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
