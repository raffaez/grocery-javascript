const showList = require('./showList');
const prompt = require('prompt-sync')();

function removeFromList(list){
    showList(list);
    const posText = prompt('Item to remove: ');
    const pos = Number(posText)-1;
    const item = list[pos-1]
    list.splice(pos, 1);
    console.log(`${item} was successfully removed.`);
}

module.exports = removeFromList;