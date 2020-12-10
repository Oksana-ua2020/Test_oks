const possibleOutcome = {
    "11": 'Ничья',
    "12": 'Победа игрока 1, камень разбивает ножницы.',
    "13": 'Победа игрока 2, бумага заворачивает камень.',
    "21": 'Победа игрока 2, камень разбивает ножницы.',
    "22": 'Ничья',
    "23": 'Победа игрока 1, ножницы режут бумагу.',
    "31": 'Победа игрока 1, бумага заворачивает камень.',
    "32": 'Победа игрока 2, ножницы режут бумагу.',
    "33": 'Ничья',
    "00": 'Кто-то из игроков не выбрал. Это провал. Повторите попытку.',
}

let selectionPlayer1 = '0';
let selectionPlayer2 = '0';
let wins1 = 'img/wins1.png';
let wins2 = 'img/wins2.png';
let draw = 'img/draw.png';
let fail = 'img/fail.png';

function fixedChoice(player, choice) {
    let cast = String(choice);
    if (player == '1') {
        selectionPlayer1 = cast
    } else selectionPlayer2 = cast;
}

function resultButtonClick() {
    let result = selectionPlayer1 + selectionPlayer2;
    let check = result < '11' ? (result = '00') : result;
    const winMessage = possibleOutcome[result];
    let picture;
    if (winMessage.includes('Ничья', )) {
        picture = draw
    } else if (winMessage.includes('игрока 1')) {
        picture = wins1
    } else if (winMessage.includes('игрока 2', )) {
        picture = wins2
    } else picture = fail;
    document.getElementById("gameResult").innerHTML = `
    <img src=${picture}>    
    <h1 class="text">${winMessage}</h1>`;
    selectionPlayer1 = '0';
    selectionPlayer2 = '0';
}