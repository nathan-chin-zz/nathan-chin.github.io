const path = require('path');

// States the rules for the babel-loader
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    // Tell webpack to begin building dependency graph from this fiile
    entry: path.join(__dirname, 'src', 'components', 'App.jsx'),
    // Place the output in the 'build' directory
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
        {
            // JS or JSX files should be parsed with Babel
            test: /\.jsx?$/,
            // Leave npm packages alone since most are pre-transpiled anyways
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            // SASS, SCSS, CSS files
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        // Bottom two loaders allow the reference to an asset in code and add it to the code
        { // Loads assets into files
            test: /\.(jpe?g|png|gif)$/,
            use: [{
                // Inline if smaller than 10 KB, otherwise load as a file
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        { // Tries to inline assets as dataURIs
            test: /\.(eot|svg|ttf|woff2?|otf)$/,
            use: 'file-loader'
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        })
    ]
};
