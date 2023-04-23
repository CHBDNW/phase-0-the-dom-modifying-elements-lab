// Write your code here!
const mainNode = document.querySelector('#main');
mainNode.parentNode.removeChild(mainNode);

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'Your Victory Message Goes Here';
newHeader.textContent = `${`Chris`} is the champion`;