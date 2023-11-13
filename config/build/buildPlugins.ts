import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {iBuldOptions} from "./types/config";

export function buildPlugins({paths}: iBuldOptions): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}