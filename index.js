const loader_utils = require('loader-utils');
const fs = require('fs').promises;
const xFs = require('fs');
const chokidar = require('chokidar');
const { transformAsync } = require("@babel/core");
const reactPreset = require('@babel/preset-react');
const xPath = require('path');
const vm = require('vm');


const componentReg = new RegExp(/<[A-Z]([^\/>]*)+\s?\/>/, "g");
const componentNameReg = /(?<=<)[A-Z]\w+/;
const argumentReg = new RegExp(/[A-Za-z]\w+=(("|')([^("|')]*)("|')|\d+)/, "g");
const templateReg = new RegExp(/{([A-za-z])\w+}/, "g");


const compDir = './components';
const babalConf = {
    presets: ['@babel/preset-env', reactPreset]
}
const components = {};
const compDirPath = xPath.resolve(__dirname,compDir);

let init = true;

// function injectArgs(component,args) {
//     var parsedComp;

//     if(args){
//         parsedComp = component.replace(templateReg,(match)=>{
//             var key = match.replace('{','').replace('}','');
//             if(args[key]){
//                 return args[key]
//             }
//         });
//     }else{
//         parsedComp = component; 
//     }

//     return parsedComp;

// }

function compExe(code) {
    const context = { html: '',require,exports,console}

    const script = new vm.Script(code);
    vm.createContext(context);
    script.runInNewContext(context);

    return context.html;
}

function injector(html) {

    return html.replace(componentReg, function (component) {
        var componentName = component.match(componentNameReg)[0];

        // console.log(`${compDir}/${componentName}.js`);

        const code = `
            const ReactDOMServer = require('react-dom/server');
            const fs = require('fs');

            if(fs.existsSync('${compDirPath}/${componentName}.js')){
                const ${componentName} = require('${compDirPath}/${componentName}').default;
                html = ReactDOMServer.renderToStaticMarkup(${componentName}());
                console.log(html)
            }
        `;


        // if (components[componentName]) {
            console.log(`'${compDirPath}/${componentName}.js'`);
            return compExe(code);
        // }
        // var arguments;

        // var argsArr = component.match(argumentReg);

        // if(argsArr){
        //     var argsString = `{ ${argsArr.map(item=>item.replace('=',':')).join(',')} }`
        //     arguments = eval(`(${argsString})`);
        // };

        // if(components[componentName]){
        //     return injectArgs(components[componentName],arguments);
        // }
        console.log(component)
        return component
    });
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

function writeFile(path, data) {

    const name = path.split('/').slice(-1)[0].split('.')[0];
    components[name] = {
        es15: xPath.resolve(__dirname,`./${compDir}/${name}.js`),
        esNext: path
    }

    console.log(components);

    fs.writeFile(xPath.resolve(__dirname,`${compDir}/${name}.js`), data);
}

module.exports = function (html) {

    const config = loader_utils.getOptions(this);

    if (init && config.componentPath) {
        watchComponents(config.componentPath);
        init = false;
    }

    // console.log(xFs.existsSync('compiled','This Directory exists'));

    xFs.readdir(xPath.resolve(__dirname,compDir),'utf-8',(err,data)=>{
        console.log(data);
    });









    // create object of the compontents { component: '{conponent content}' }
    // if (currentServingPath) {
    // console.log(currentServingPath,'-x-x-x-x-x--xx------x------xx----x-------------x---xx-------xx-x---x--------------')

    console.log(html)

    return injector(html);
}