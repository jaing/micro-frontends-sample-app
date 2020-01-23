import tplPackage from './templates/package.json';
import tplIndex from './templates/index';
import tplIndexWc from './templates/index.wc';
const fs = require('fs');
require('colors');

const widgetsDir = './widgets';

function createFile(path, data) {
    fs.writeFileSync(path, data, { overwrite: false });
    console.log(`Created file: ${path}`.bold.green);
}

function createDirectory(path) {
    fs.mkdirSync(path);
}

function createWidget() {
    const name = process.env.NAME;
    if (!name) {
        console.log('!!! - Missing env param NAME'.red.bold);
    }
    const widgetFolder = widgetsDir + '/' + name;

    if (fs.existsSync(widgetFolder)) {
        return console.log('!!! - Widget already exist'.red.bold);
    }

    console.log('Creating folders'.yellow);
    createDirectory(widgetFolder);
    createDirectory(`${widgetFolder}/src`);

    console.log('Creating files'.yellow);
    createFile(`${widgetFolder}/package.json`, tplPackage(name));
    createFile(`${widgetFolder}/src/index.js`, tplIndex(name));
    createFile(`${widgetFolder}/src/index.wc.js`, tplIndexWc(name));

    console.log('Coping files'.yellow);
    console.log(`Copied file: rollup.config.js`.bold.magenta);
    fs.copyFileSync('./scripts/files/rollup.config.js', `${widgetFolder}/rollup.config.js`);
    console.log(`Copied file: rollup.wc.config.js`.bold.magenta);
    fs.copyFileSync('./scripts/files/rollup.wc.config.js', `${widgetFolder}/rollup.wc.config.js`);
}

createWidget();
