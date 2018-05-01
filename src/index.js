import './style.css';

const packageJson = require('../package.json');

function works() {
    const element = document.createElement('div');

    element.className = 'it-works';
    element.innerHTML = `${packageJson.name}@${packageJson.version} works!`;

    return element;
}

document.body.appendChild(works());
