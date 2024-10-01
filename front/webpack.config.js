const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: "./scripts/index.js",
        create: "./scripts/createMovie.js",
    },
    output: {
        path: path.resolve(__dirname + "/public"),
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./pages/sites.html", // Apunta a tu archivo HTML principal
            filename: "index.html", // Nombre de salida
            chunks: ["index"], // Asegúrate de que inserte el script correcto
        }),
        new HtmlWebpackPlugin({
            template: "./pages/createMovie.html",
            filename: "createMovie.html",
            chunks: ["create"],
        }),
    ],
};
