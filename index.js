const { job, start, stop } = require("microjob");
const loader_utils = require('loader-utils');
const fs = require('fs').promises;
const chokidar = require('chokidar');
const { transformAsync } = require("@babel/core");
const reactPreset = require('@babel/preset-react');
const xPath = require('path');
const { clear } = require("console");


const componentReg = new RegExp(/<[A-Z]([^\/>]*)+\s?\/>/, "g");
const componentNameReg = /(?<=<)[A-Z]\w+/;
const argumentReg = new RegExp(/[A-Za-z]\w+=(("|')([^("|')]*)("|')|\d+)/, "g");
const templateReg = new RegExp(/{([A-za-z])\w+}/, "g");


const compDir = './components';
const babalConf = {
    presets: ['@babel/preset-env', reactPreset]
}
const components = {};
const compDirPath = xPath.resolve(__dirname, compDir);
let config = null;

let init = true;

async function reloadPage(componentName) {

    const htmlFileDir = config.reload.dir || './src';
    const files = (await fs.readdir(htmlFileDir)).filter(e=>e.includes('.html'));

    if(currentServingPath === '/'){

        fs.appendFile(`${htmlFileDir}/index.html`,' ');

    }else if (currentServingPath) {
        fs.appendFile(`${htmlFileDir}/${currentServingPath}`,' ');

    }else if(files.includes(`${componentName}.html`)) {

        fs.appendFile(`${htmlFileDir}/${componentName}.html`,' ');

    }else{
        // Logic for itarating over files and change all
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

function genRectTohtml(code) {
    const vm = require('vm');
    const context = { html: '', require, exports };

    const script = new vm.Script(code);
    vm.createContext(context);
    script.runInContext(context);

    return context.html
}

async function componentHandler(component) {
    const componentName = component.match(componentNameReg)[0];
    let htmlComponent = '';

    const code = `
            const ReactDOMServer = require('react-dom/server');
            const fs = require('fs');

            if(fs.existsSync('${compDirPath}/${componentName}.js')){
                const ${componentName} = require('${compDirPath}/${componentName}').default;
                html = ReactDOMServer.renderToStaticMarkup(${componentName}());
            }
        `;


    try {
        await start({ maxWorkers: 4 });
        htmlComponent = await job(genRectTohtml,{data: code});

    } catch (err) {
        console.error(err);
    } finally {
        await stop();
    }

    return htmlComponent
}


function watchComponents(path) {
    const watcher = chokidar.watch(path);

    watcher.on('add', async function (filePath) {
        const esNext = await fs.readFile(filePath, 'utf8');
        if (esNext) {
            transpile(esNext, filePath);
        }
    });

    watcher.on('change', async function (filePath) {
        const esNext = await fs.readFile(filePath, 'utf8');
        if (esNext) {
            transpile(esNext, filePath);
        }
    });

}

async function transpile(esNext, path) {
    const es15 = await transformAsync(esNext, babalConf);
    es15 && writeFile(path, es15.code);
}

async function writeFile(path, data) {

    const fileName = path.split('/').slice(-1)[0];
    const name = fileName.split('.')[0];
    components[name] = {
        es15: xPath.resolve(__dirname, `./${compDir}/${name}.js`),
        esNext: path
    }


    await fs.writeFile(xPath.resolve(__dirname, `${compDir}/${name}.js`), data);
    if (config.reload && config.reload.status === true) {
        reloadPage(name);
    }
}

async function clearOldComponents() {
    await fs.rm(compDirPath,{
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
        callback(null,newHtml)
    })();

    
}