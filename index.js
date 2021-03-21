const loader_utils = require('loader-utils');
const fs = require('fs'); 


function replaceAll(html,components){
    var regex = new RegExp(Object.keys(components).join("|"),"gi");

    return html.replace(regex, function(matched){
        return components[matched];
    });
}

module.exports = function (html) {

    const path = loader_utils.getOptions(this).componentPath;

    // create object of the compontents { component: '{conponent content}' }

    const components = {};

    fs.readdirSync(path).map(file=>{
        const componentName = `<${file.replace('.html','')}/>`;
        const content = fs.readFileSync(`${path}/${file}`,'utf8');

        components[componentName] = content;
    });


    return replaceAll(html,components);
}