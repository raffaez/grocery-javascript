const prompt = require('prompt-sync')();
const showMenu = require('./modules/showMenu');
const addToList = require('./modules/addToList');
const showList = require('./modules/showList');
const removeFromList =  require('./modules/removeFromList');

const list = [];
let option = 0;

do{
    console.clear();
    showMenu();
    option = Number(prompt('>> '));

    console.clear();

    switch(option){
        case 1:
            addToList(list);
            break;
        case 2:
            showList(list);
            break;
        case 3:
            removeFromList(list);
            break;
        case 4:
            console.log('Exiting...');
            break;
        default:
            console.log('Invalid input.');
            break;
    }

    prompt('Press any key to continue');
}while(option != 4);