import type webpack from 'webpack'
import { type iBuildOptions } from './types/config'

export function buildResolves (options: iBuildOptions): webpack.ResolveOptions {
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
