const loader_utils = require('loader-utils');
const fs = require('fs'); 

var componentReg = new RegExp(/<[A-Z]([^>]*)+\s?\/>/,"g");
var componentNameReg = /(?<=<)[A-Z]\w+/;
var argumentReg = new RegExp(/[A-Za-z]\w+=(("([^"]*)"|\d+)|('([^']*)'|\d+))/,"g");
var templateReg = new RegExp(/{([A-za-z])\w+}/,"g");

function injectArgs(component,args) {
    var parsedComp;

    if(args){
        parsedComp = component.replace(templateReg,(match)=>{
            var key = match.replace('{','').replace('}','');
            if(args[key]){
                return args[key]
            }
        });
    }else{
        parsedComp = component; 
    }

    return parsedComp;

}

function injector(html,components){

    return html.replace(componentReg, function(component){
        var componentName = component.match(componentNameReg)[0];
        var arguments;

        var argsArr = component.match(argumentReg);

        if(argsArr){
            var argsString = `{ ${argsArr.map(item=>item.replace('=',':')).join(',')} }`
            arguments = eval(`(${argsString})`);
        };

        if(components[componentName]){
            return injectArgs(components[componentName],arguments);
        }
    });
}

module.exports = function (html) {

    const path = loader_utils.getOptions(this).componentPath;

    // create object of the compontents { component: '{conponent content}' }

    const components = {};

    fs.readdirSync(path).map(file=>{
        const componentName = file.replace('.html','');
        const content = fs.readFileSync(`${path}/${file}`,'utf8');

        components[componentName] = content;
    });


    return injector(html,components);
}