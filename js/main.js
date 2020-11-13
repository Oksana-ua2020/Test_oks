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
// //-------//
// let A = 5;
// let B = 7;
// let C = 9;
// let D = C;
// C = B, B = A, A = D;
// console.log('задача № Begin23 ', A, B, C);  
// //-------//
// let x = 5;
// let y;
// y = 4*((x-3)**6)-7*((x-3)**3)+2;
// console.log('задача № Begin26 ', y);  
// //-------//
// let s;
// let h;
// // s = prompt('Сколько секунд?');
// s = 9850;
// h = Math.trunc(s/3600);
// console.log('задача № Integer20 ', h);  
//-------//
let fB;
let fK;
fB = 9850;
fK = Math.trunc(fB/1024);
console.log('задача № Integer3 ', fK);  
//-------//
let n2 = 28;
let n21;
let n22;
n21 = Math.trunc(n2/10);
n22 = n2%10;
console.log('задача № Integer7 ','Число:', n2,'; Сумма =', n21+n22, '; Произведение =', n21*n22);
//-------//
let n3 = 379;
let n31;
let n32;
let n33;
n31 = Math.trunc(n3/100);
n32 = Math.trunc(n3/10)-n31*10;
n33 = n3%10;
console.log('задача № Integer15 ', 'Число:', n3,'; Результат:', Number(String(n32) + String(n31) + String(n33)));
//-------//
let k = 9;
let mon = 1;
let tue = 2;
let wed = 3;
let thu = 4;
let fri = 5;
let sat = 6;
let sun = 7;
let nWeek;
let nDay;

nWeek = Math.trunc((k-1)/7);
nDay = k%7;





console.log(nWeek, nDay);