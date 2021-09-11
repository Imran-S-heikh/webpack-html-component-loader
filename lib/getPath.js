// arg[0] Break Point of the url
function getDirAndPath(path,bp='src') {
    const pathArr = path.split(bp).slice(-1)[0].split('/');
    const fileName = pathArr.pop();
    const dirName = pathArr.join('/');

    return [fileName,dirName];
}

module.exports = getDirAndPath;
