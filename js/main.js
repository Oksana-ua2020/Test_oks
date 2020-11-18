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
console.log('задача № Integer3: Размер в байтах:', fB, 'Размер в полных килобайтах:', fK);  
//-------//
let n2 = 28;
let n21;
let n22;
n21 = Math.trunc(n2/10);
n22 = n2%10;
console.log('задача № Integer7: ','Число:', n2,'; Сумма =', n21+n22, '; Произведение =', n21*n22);
//-------//
let n3 = 379;
let n31;
let n32;
let n33;
n31 = Math.trunc(n3/100);
n32 = Math.trunc(n3/10)-n31*10;
n33 = n3%10;
console.log('задача № Integer15: ', 'Число:', n3,'; Результат:', Number(String(n32) + String(n31) + String(n33)));
//-------//
let k = 281;
let nDayIr;
nDayIr = k%7;
let nDay = nDayIr < 3 ? nDayIr + 5 : nDayIr - 2;
console.log('задача № Integer27: ', 'Порядковый № дня -', k, '. День недели:', nDay);
//-------//
let Year = 0;
let Vek = (Year >0 ? Math.trunc((Year-1)/100)+1 : 'Это до нашей эры! Не буду считать.');
console.log('задача № Integer30: ', 'Введенный год:', Year, '. Какой век? ', Vek);
//-------//
let a = 9;
let b = 0;
let propTrue = a > 2 && b <= 3;
console.log('задача № Boolean4: ', 'A =', a, ', B =', b, 'Высказывание "Справедливы неравенства А > 2 и В <=3"' , propTrue === true ? 'истинно.' : 'ложно.');
//-------//
let a1 = 1;
let b1 = 1;
let propTrue1 = a1 % 2 > 0 && b1 % 2 > 0;
console.log('задача № Boolean8: ', 'A =', a1, ', B =', b1, 'Высказывание "Каждое из чисел А и В нечетное"' , propTrue1 === true ? 'истинно.' : 'ложно.');
//-------//
let n = 101;
let nEven = n%2;
let nTreeDig = n > 99 ? 1 : 0;
console.log ('задача № Boolean17: Число:', n, 'Высказывание "Данное число является нечетным трехзначным"', (nEven + nTreeDig) > 1 ? 'истинно.' : 'ложно.');
//-------//
let nIn = 1221;
let n_L_R = String(nIn);
let n_R_L = (n_L_R.charAt(3) + n_L_R.charAt(2) + n_L_R.charAt(1) + n_L_R.charAt(0));
let txt = 'Высказывание "Данное число читается одинаково слева направо и справа налево"';
console.log('задача № Boolean23: Число:', nIn, n_L_R.length !== 4? 'не четырехзначное!' : (n_L_R === n_R_L ? txt + ' истинно.' : txt + ' ложно.'));