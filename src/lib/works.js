const name = require('../../package.json').name;
const version = require('../../package.json').version;

function works() {
    const element = document.createElement('div');

    element.className = 'it-works';
    element.innerHTML = `${name}@${version} works!`;

    return element;
}

module.exports = works;