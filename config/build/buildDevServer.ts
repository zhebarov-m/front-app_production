import {iBuldOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from  'webpack-dev-server'

export function buildDevServer(options: iBuldOptions): DevServerConfiguration {

    return {
        port: options.port,
        open: true
    }
}