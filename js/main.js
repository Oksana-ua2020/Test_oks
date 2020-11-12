    "use strict"
    //     let name ="John";
    //     let age16 = true;
    //     let numCard = 25;
    //     let maxPrice = 1000200030004000500060007000n;
    //     let sex;
    //     let city = null;

    // console.log('option 1');  
    //     console.log(
    //     `${typeof(name)} - ${name}, ${typeof(age16)} - ${age16}, ${typeof(numCard)} - ${numCard}, `
    //     + typeof(maxPrice) + ' - ' + maxPrice + ', "undefined" - ' + typeof(sex) + ', '  + "'null'"  + ' - ' + city);

    // console.log('option 2');  
    //     console.log(
    //         `${"string"} - ${name}, ${"boolean"} - ${age16}, ${"number"} - ${numCard}, `
    //         + 'bigint - ' + maxPrice + ', "undefined" - ' + sex + ', ' + "'null'" + ' - ' + city);
 
let A = 5;
let B = 7;
let C = 9;
let D = C;
C = B, B = A, A = D;
console.log('Begin23 ', A, B, C);  

let x = 5;
let y;
y = 4*((x-3)**6)-7*((x-3)**3)+2;
console.log('Begin26 ', y);  

let s;
let h;

s = prompt('Сколько секунд?');

h = Math.trunc(s/3600);

console.log('Integer20 ', h);  
