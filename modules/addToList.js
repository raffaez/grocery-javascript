const prompt = require('prompt-sync')();

function addToList(list){
    const pos = list.length;
    const item = prompt(`New item's name: `);
    list[pos] = item;
    console.log(`${item} was successfully added.`);
}

module.exports = addToList;