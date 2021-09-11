const { job, start, stop } = require("microjob");
const loader_utils = require('loader-utils');
const fs = require('fs').promises;
const xFs = require('fs');
const chokidar = require('chokidar');
const { transformAsync } = require("@babel/core");
const reactPreset = require('@babel/preset-react');
const path = require('path');
const getPathAndDir = require('./lib/getPath');

const componentReg = new RegExp(/<[A-Z]([^\/>]*)+\s?\/>/, "g");
const componentNameReg = /(?<=<)[A-Z]\w+/;
const argumentReg = new RegExp(/[A-Za-z]\w+=(("|')([^("|')]*)("|')|\d+)/, "g");
const templateReg = new RegExp(/{([A-za-z])\w+}/, "g");


const compDir = './compiled-src';
const babalConf = {
    presets: ['@babel/preset-env', reactPreset]
}
const components = {};
const compDirPath = path.resolve(__dirname, compDir);
const domServerPath = path.resolve(__dirname, './node_modules/react-dom/server');

let config = null;

let init = true;


function watchComponents() {
    const watcher = chokidar.watch('./src/**/*.jsx');

    watcher.on('add', async function (filePath) {

        const [fileName, directory] = getPathAndDir(filePath);

        const aDir = path.resolve(compDirPath, `./${directory}/`);

        const esNext = await fs.readFile(filePath, 'utf8');
        if (!xFs.existsSync(aDir)) {
            await fs.mkdir(aDir, { recursive: true });
        }
        transpile(esNext, fileName, aDir);
    });

    watcher.on('change', async function (filePath) {
        const [fileName, directory] = getPathAndDir(filePath);
        const aDir = path.resolve(compDirPath, `./${directory}/`);

        const esNext = await fs.readFile(filePath, 'utf8');
        if (esNext) {
            transpile(esNext, fileName, aDir);
        }
    });

}
async function sleep (milliseconds){

    new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    });
} 
async function reloadPage(componentName) {

    const htmlFileDir = config.reload.dir || './src';
    const files = (await fs.readdir(htmlFileDir)).filter(e => e.includes('.html'));



    try {
        if (currentServingPath === '/') {

            fs.appendFile(`${htmlFileDir}/index.html`, ' ');

        } else if (currentServingPath) {
            fs.appendFile(`${htmlFileDir}/${currentServingPath}`, ' ');

        } else if (files.includes(`${componentName}.html`)) {

            fs.appendFile(`${htmlFileDir}/${componentName}.html`, ' ');

        } else {
            // Logic for itarating over files and change all
        }
    } catch (err) {
        // console.log(err);
    }
}

async function replaceAsync(str, regex, asyncFn) {
    const promises = [];
    str.replace(regex, (match, ...args) => {
        const promise = asyncFn(match, ...args);
        promises.push(promise);
    });
    const data = await Promise.all(promises);
    return str.replace(regex, () => data.shift());
}

function genRectTohtml({ code, domServerPath }) {

    const vm = require('vm');
    const context = { html: '', require, exports, console, domServerPath };

    const script = new vm.Script(code);
    vm.createContext(context);
    script.runInContext(context);

    return context.html
}

async function componentHandler(component) {
    const componentName = component.match(componentNameReg)[0];
    let htmlComponent = '';

    const localDir = config.componentPath.split('src').slice(-1)[0];
    const aDir = path.resolve(compDirPath, `./${localDir}`)


    const code = `
            const ReactDomServer = require(domServerPath);
            const fs = require('fs');

            if(fs.existsSync('${aDir}/${componentName}.js')){
                const ${componentName} = require('${aDir}/${componentName}').default;
                html = ReactDomServer.renderToStaticMarkup(${componentName}());
            }
        `;


    try {
        await start({ maxWorkers: 4 });
        htmlComponent = await job(genRectTohtml, { data: { code, domServerPath } });

    } catch (err) {
        console.error(err);
    } finally {
        await stop();
    }

    return htmlComponent
}



async function transpile(esNext, ...others) {
    const es15 = await transformAsync(esNext, babalConf);
    es15 && writeFile(others, es15.code);
}

async function writeFile(_, data) {

    const [fileName, aDir] = _;
    const name = fileName.split('.')[0]
    // name = name[0].toUpperCase() + name.slice(1);

    components[name] = {
        es15: `${aDir}/${name}.js`,
    }

    await fs.writeFile(components[name].es15, data);
    if (config.reload && config.reload.status === true) {
        reloadPage(name);
    }
}

async function clearOldComponents() {
    await fs.rm(compDirPath, {
        recursive: true
    });

    fs.mkdir(compDirPath);
}

module.exports = function (html) {

    const callback = this.async();
    config = loader_utils.getOptions(this);

    if (init && config.componentPath) {
        watchComponents(config.componentPath);
        clearOldComponents();
        init = false;
    }

    (async function () {
        const newHtml = await replaceAsync(html, componentReg, componentHandler);
        callback(null, newHtml)
    })();


}