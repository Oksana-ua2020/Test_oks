const possibleOutcome = {
    "11": 'Ничья',
    "12": 'Победа игрока 1 , камень разбивает ножницы.',
    "13": 'Победа игрока 2, бумага заворачивает камень.',
    "21": 'Победа игрока 2, камень разбивает ножницы.',
    "22": 'Ничья',
    "23": 'Победа игрока 1, ножницы режут бумагу.',
    "31": 'Победа игрока 1, бумага заворачивает камень.',
    "32": 'Победа игрока 2, ножницы режут бумагу.',
    "33": 'Ничья',
}

function resultButtonClick() {
    const {selectionPlayer1, selectionPlayer2} = document.getElementsByClassName('field')[0].elements
    const result = selectionPlayer1.value + selectionPlayer2.value;
    console.log (result);
    const winMessage = possibleOutcome[result];
    document.getElementsByID('gameResult').innerHTML = winMessage;
}
 