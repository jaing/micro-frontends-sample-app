import babel from "rollup-plugin-babel";
import url from "rollup-plugin-url";
import postcss from "rollup-plugin-postcss";
import copy from "postcss-copy-assets";
import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import scss from 'rollup-plugin-scss';
import pkg from "./package.json";

export default {
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        scss({
            exclude: ["src/*.scss"],
            includePaths: ["src/bootstrap/"],
            output: 'boot.css'
        }),
        external(),
        postcss({
            extract: true,
            plugins: [copy({ base: "dist" })]
        }),
        json(),
        url(),
        babel({
            exclude: /node_modules/
        }),
        resolve(),
        commonjs({
            include: "node_modules/**",
            namedExports: {
                "node_modules/react/index.js": [
                    "Children",
                    "Component",
                    "PropTypes",
                    "createElement",
                    "createContext",
                    "Fragment"
                ],
                "node_modules/react-dom/index.js": ["render"]
            }
        })
    ]
};
