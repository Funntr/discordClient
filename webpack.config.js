const path = require("path");
module.exports = {
    "mode": "development",
    entry: "./src/app.js",
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};