module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.gif|png|jpg|eot|woff|ttf|svg$/,
                use: ['url-loader']
            }
        ]
    }
}