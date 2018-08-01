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
          }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        })
    ]
};
