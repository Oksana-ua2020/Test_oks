"use strict"
let word1 = "камень";
let word2 = "ножницы";
let word3 = "бумага";
let act1 = "камень разбивает ножницы.";
let act2 = "ножницы режут бумагу.";
let act3 = "бумага заворачивает камень.";
let act4 = "ничья.";
let rem1 = "Это что за слово - ";
let rem2 = " Ты ошибся со словом. Я так играть не могу!";
let rem3 = "В этом случае "
let rem4 = "Что-то я не поняла... У тебя свои слова? Вот и играй сам! Я отказываюсь!"

let signFault = 0;
let signFaultWord;
let word1num;
let word2num;
// let wordUsEsc;

// if (confirm("Поиграем в 'Камень-ножницы-бумага'?")) {
  // let word1user = prompt('Введи любое слово из трех: камень; ножницы; бумага.');
  // let word2user = prompt('Введи второе слово. "Напоминаю: камень, ножницы, бумага"');
  let word1user = 'камень';//
  let word2user = 'ножницы';
  if (Boolean(word1user) && Boolean(word2user)) {

    console.log(word1user);//
    console.log(word2user);//

    let word1userLow = word1user.toLowerCase();
    let word2userLow = word2user.toLowerCase();
    if (word1userLow === word1 || word1userLow === word2 || word1userLow === word3) {} else {
      signFault = ++signFault;
      signFaultWord = word1user;
    }
    if (word2userLow === word1 || word2userLow === word2 || word2userLow === word3) {} else {
      signFault = signFault + 2;
      signFaultWord = word2user;
    }
    if (signFault !== 0) {
      if (signFault === 3) {
        // document.getElementById("app5").innerHTML = `
        // <h1>Сам такой!!</h1>
        // <img src="img/провал.png" alt="Fail" width="500">
        // `;
        // confirm(rem4);
        console.log(rem4);
      } else {
        // document.getElementById("app5").innerHTML = `
        // <h1>Что-то не так!!!</h1>
        // <img src="img/Слово.png" alt="Fail word" width="500">
        // `;
        console.log(rem1 + "'" + signFaultWord + "'?" + rem2);
        // confirm(rem1 + "'" + signFaultWord + "'?" + rem2);
      }
    }

    if (word1userLow === word1) {
      word1num = 1;
    } else if (word1userLow === word2) {
      word1num = 2;
    } else if (word1userLow === word3) {
      word1num = 3;
    }
    if (word2userLow === word1) {
      word2num = 1;
    } else if (word2userLow === word2) {
      word2num = 2;
    } else if (word2userLow === word3) {
      word2num = 3;
    }
    let wordNumSum = word1num + word2num;

    if (word1userLow === word2userLow) {
      // document.getElementById("app4").innerHTML = `
      // <h1>Тоже неплохо!!!</h1>
      // <img src="img/ничья 2.png" alt="Game" width="500">
      // `;
      // confirm(rem3 + act4); //ничья
      console.log(rem3 + act4);
    } else if (wordNumSum === 3) {
      // document.getElementById("app1").innerHTML = `
      // <h1>Да, камень таки разбивает ножницы.!!!</h1>
      // <img src="img/камень 2.png" alt="Rock" width="500">
      // `;
      // confirm(rem3 + act1);
      console.log(rem3 + act1); //камень
    } else if (wordNumSum === 4) {
      // document.getElementById("app3").innerHTML = `
      // <h1>Да, бумага таки заворачивает камень.!!!</h1>
      // <img src="img/бумага 2.png" alt="Paper" width="500">
      // `;
      // confirm(rem3 + act3);
      console.log(rem3 + act3); //бумага
    } else if (wordNumSum === 5) {
      // document.getElementById("app2").innerHTML = `
      // <h1>Да, ножницы таки режут бумагу.!!!</h1>
      // <img src="img/ножницы 2.png" alt="Scissors" width="500">
      // `;
      // confirm(rem3 + act2);
      console.log(rem3 + act2); //ножницы
    }
  } else {
    // document.getElementById("app5").innerHTML = `
    // <h1>Сам такой!!</h1>
    // <img src="img/провал.png" alt="Fail" width="500">
    // `;
    // confirm(rem4);
    console.log(rem4); //фигвам
  }
// }