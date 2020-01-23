export default name => {
    return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "scripts": {
    "build": "rollup -c",
    "prepare": "npm run build && npm run build-web-component && npm run build-web-component-with-libs",
    "start": "rollup -c -w",
    "build-web-component": "cross-env NODE_ENV=production rollup -c rollup.wc.config.js",
    "build-web-component-with-libs": "cross-env NODE_ENV=production rollup -c rollup.wc.config.js --environment entry:libs"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "prop-types": "^15.7.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  },
  "peerDependencies": {
    "react": "^16.8.0",
    "react-dom": "^16.8.0"
  },
  "devDependencies": {
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.8.3",
    "@babel/preset-env": "^7.8.3",
    "@babel/preset-react": "^7.8.3",
    "cross-env": "^6.0.3",
    "hybrids": "^4.1.1",
    "node-sass": "^4.13.1",
    "postcss-copy-assets": "^0.3.1",
    "rollup": "^1.29.1",
    "rollup-plugin-babel": "^4.3.3",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-json": "^4.0.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-peer-deps-external": "^2.2.0",
    "rollup-plugin-postcss": "^2.0.4",
    "rollup-plugin-replace": "^2.2.0",
    "rollup-plugin-scss": "^2.1.0",
    "rollup-plugin-uglify": "^6.0.4",
    "rollup-plugin-url": "^3.0.1"
  },
  "babel": {
    "presets": [
      "@babel/env",
      "@babel/react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}
`
}
