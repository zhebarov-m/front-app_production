
export type tBuildMode = 'production' | 'development'

export interface iBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface iBuildEnv {
    mode: tBuildMode,
    port: number
}

export interface iBuldOptions {
    mode: tBuildMode,
    paths: iBuildPaths,
    isDev: boolean,
    port: number
}