const path = require("path");

module.exports = {
    entry: "./client/index.js",
    output: {
        filename: "bundle.js",
        publicPath: "client/dist/",
        path: path.resolve(__dirname, "client/dist")
    },
    devServer: {
        port: 8000,
        open: true,
        watchContentBase: true,
        writeToDisk: true,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "client/dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.(ttf|eot)$/,
                use: [
                    {
                        loader: "file-loader"
                    },
                    {
                        loader: "url-loader"
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
