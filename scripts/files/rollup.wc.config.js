import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import copy from "postcss-copy-assets";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import replace from "rollup-plugin-replace";

const withLibs = process.env.entry === "libs";

export default {
    external: withLibs ? [] : ["react", "react-dom", "moment", "core-js"],
    input: "src/index.wc.js",
    output: {
        file: withLibs
            ? "dist/web-component-with-libs.js"
            : "dist/web-component.js",
        format: "iife",
        globals: withLibs
            ? {}
            : {
                react: "React",
                "react-dom": "ReactDOM",
                moment: "moment"
            }
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        postcss({
            extract: true,
            plugins: [copy({ base: "dist" })]
        }),
        json(),
        resolve({
            browser: true
        }),
        babel({
            exclude: /node_modules/
        }),
        commonjs({
            include: /node_modules/,
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
        }),
        uglify()
    ]
};
