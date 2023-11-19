import webpack from "webpack";
import {iBuldOptions} from "./types/config";

export function buildResolves(options: iBuldOptions): webpack.ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {}
    }
}