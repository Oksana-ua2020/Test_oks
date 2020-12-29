   "use strict"
   let arr = [1, 2, 3, 4, 5, 6, 7];
   let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let arr3 = [...Array(30)].map(_ => Math.round(Math.random() * 20 - 10));
   let arr4 = [...Array(Math.round(Math.random() * 100 + 50))].map(_ => Math.round(Math.random() * 50 - 25));


   function getEvenOdd() {
     let arrEven = [];
     let arrOdd = [];

     arr.forEach(function (item) {
       (item % 2 > 0) ? arrOdd.push(item): arrEven.push(item);
     });

     console.log("Задание № 1");
     console.log("arr", arr);
     console.log("arrEven", arrEven);
     console.log("arrOdd", arrOdd.reverse());
   }

   function calcSum() {
     let resultSum = arr2.reduce((sum, item) => sum + item, 0);

     console.log("Задание № 2");
     console.log("arr", arr2);
     console.log("Sum", resultSum);
   }

   function showSortArr() {
     let resultMin;
     let resultMax;
     let arr3Ascending = [...arr3];
     let arr3Descending = [...arr3];
     let resultComparison = [];
     let resultComparisonFilter = [];
     let resultComparisonFind = "нет";
     let userNumber = 7;

     resultComparisonFilter = arr3.filter((item, index) => item === userNumber);
     if (arr3.find(item => item === userNumber)) {
       resultComparisonFind = "есть"
     };
     resultComparison.push(userNumber);
     resultComparison.push(resultComparisonFind)
     resultComparison.push(resultComparisonFilter.length)
     arr3.forEach(function (item, index) {
       if (item === userNumber) {
         resultComparison.push(index)
       }
     });
     resultMin = Math.min.apply(null, arr3)
     resultMax = Math.max.apply(null, arr3)
     arr3Ascending.sort((a, b) => a - b);
     arr3Descending.sort((a, b) => b - a);

     console.log("Задание № 3");
     console.log("arr", arr3);
     console.log("Min", resultMin);
     console.log("Max", resultMax);
     console.log("Ascending", arr3Ascending);
     console.log("Descending", arr3Descending);
     resultGetRepeat();
     console.log("Число, наличие, Количество повторений, Индексы...", resultComparison);
   }

   function resultGetRepeat() {
     let arr3Repeat = [...arr3];
     let objRepeat = {};

     arr3Repeat.sort((a, b) => a - b);

     let number = 0;

     arr3Repeat.forEach(function (item, index) {
       let elementPlus = arr3Repeat[++index];
       if (item == elementPlus) {
         number++;
       } else if (number > 0) {
         objRepeat[item] = ++number;
         number = 0;
       }
     });

     console.log("Repeat", objRepeat);
   }

   function arrButton() {
     let arr4Button = [...arr4];
     let countButton = Math.ceil(arr4Button.length / 10);
     let result = "";

     for (let i = 1; i <= countButton; i++) {
       let comment = (i * 10 - 10) + " - " + ((i * 10 - 1) > arr4Button.length ? (arr4Button.length - 1) : (i * 10 - 1));
       result += `
        <p><button class="button" onclick="fixedChoice(${i})"><alt="Choice">${comment}</button></p>
        `;
     }
     console.log(arr4);
     document.getElementById("app").innerHTML = result

   }

   function fixedChoice(val) {
     let arr4Choice = [...arr4];
     let arrStart = (val * 10 - 10);
     let arrFinish = (val * 10) > arr4Choice.length ? (arr4Choice.length + 1) : (val * 10);
     let arrFixedChoice = arr4Choice.slice(arrStart, arrFinish);
     let result = "";

     console.log(arrFixedChoice);
     let elementIndex = arrStart;
     arrFixedChoice.forEach(function (elementValue) {
           result += `
            <p>Element index = ${elementIndex}, Element value = ${elementValue}</p>
          `;
          ++elementIndex;
     });
     document.getElementById("choice").innerHTML = result;
   }

   arrButton();
   //  getEvenOdd();
   //  calcSum();
   //  showSortArr();