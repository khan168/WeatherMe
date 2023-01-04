import { resolve } from "path";

export const entry = "./src/app.js";
export const output = {
    filename: "main.js",
    path: resolve(__dirname, "dist"),
};
