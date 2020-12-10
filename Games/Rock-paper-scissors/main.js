const wins1 = 'img/wins1.png';
const wins2 = 'img/wins2.png';
const draw = 'img/draw.png';
const fail = 'img/fail.png';

const possibleOutcome = {
    "11": {
        text: 'Ничья',
        img: draw
    },
    "12": {
        text: 'Победа игрока 1, камень разбивает ножницы.',
        img: wins1
    },
    "13": {
        text: 'Победа игрока 2, бумага заворачивает камень.',
        img: wins2
    },
    "21": {
        text: 'Победа игрока 2, камень разбивает ножницы.',
        img: wins2
    },
    "22": {
        text: 'Ничья',
        img: draw
    },
    "23": {
        text: 'Победа игрока 1, ножницы режут бумагу.',
        img: wins1
    },
    "31": {
        text: 'Победа игрока 1, бумага заворачивает камень.',
        img: wins1
    },
    "32": {
        text: 'Победа игрока 2, ножницы режут бумагу.',
        img: wins2
    },
    "33": {
        text: 'Ничья',
        img: draw
    },
}
const errorMessage = {
    text: 'Кто-то из игроков не выбрал. Это провал. Повторите попытку.',
    img: fail
}

let playersChoise = {
    1: '0',
    2: '0'
}

function fixedChoice(player, choise) {
    playersChoise[player] = String(choise);
}

function resultButtonClick() {
    const result = playersChoise[1] + playersChoise[2];
    const gameResult = {
        text: (possibleOutcome[result] && possibleOutcome[result].text) || errorMessage.text,
        img: (possibleOutcome[result] && possibleOutcome[result].img) || errorMessage.img
    }

    document.getElementById("gameResult").innerHTML = `
        <img src=${gameResult.img}>    
        <h1 class="text"><i>${gameResult.text}</i></h1>
    `;

    playersChoise = {
        1: '0',
        2: '0'
    }
}