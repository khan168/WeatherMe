const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Dotenv()],
};
