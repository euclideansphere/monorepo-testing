import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "./src/index.ts",
    output: {
        dir: "dist",
        format: "cjs"
    },
    external: [
        "common",
        "es-common"
    ],
    plugins: [
        alias({
            entries: [
                {
                    find: /^common\/((?!dist).*)/,
                    replacement: "common/dist/$1"
                },
                {
                    find: /^es-common\/((?!dist).*)/,
                    replacement: "es-common/dist/$1"
                }
            ]
        }),
        typescript(),
        commonjs(),
        resolve(),
    ]
}