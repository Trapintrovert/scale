
const webpack = require("webpack");
module.exports = {
    webpack: (config) => {
    config.node = {
    fs: "empty",
    };

    config.plugins.push(
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }));
    return config;
    },
};