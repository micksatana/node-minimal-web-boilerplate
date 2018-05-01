const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin({
            test: /\.js($|\?)/i,
            uglifyOptions: {
                ecma: 8,
                warnings: false,
                parse: {
                    bare_returns: false,
                    ecma: 8,
                    html5_comments: true,
                    shebang: true
                },
                compress: true,
                mangle: true,
                output: {
                  comments: false,
                  beautify: false
                },
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false
              }
        })
    ]
});
