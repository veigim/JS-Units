"use strict";

// if (4 == 9) {
//     console.log("OK!");
// }   else {
//         console.log("ERROR!");
// }


// if (num<49) {
//     console.log('error')
// } else if (num>100) {
//     console.log('to much')
// } else {
//     console.log ('ok!')
// }

// (num = 50) ? console.log('ok!') : console.log('error');


// switch (num) {
//     case 49: 
//         console.log(`wrong`);
//         break;
//     case 100:
//         console.log(`wrong`);
//         break;
//     case 50:
//         console.log(`yes`);
//         break;
//     default:
//         console.log(`other time`);
//         break;
// }       
let num = 50;

// while (num < 55) {
//     console.log(num);
//     ++num;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1;i < 8; i++) {
//     if (i==6) {
//         continue;
//     }
//     console.log(i);
// }

// let question = prompt('Какое «официальное» название JavaScript?', '');

//     if (question == 'ECMAScript') {
//         alert('Exactly');
// }
//     else {
//         alert('Не знаете? ECMAScript');
// }

// let value = +prompt('Write a number', '10');

// if (value > 0) {
//     alert(1);
// }
// else if (value < 0){
//     alert(-1);
// }
// else {
//     alert(0);
// }

// let result,
//     a = prompt('chose number'),
//     b = prompt('chose number');


// result = (a + b < 4) ? 'мало' : 'mного' ;

// alert(result);



// let login = prompt('введите логин'),
//     message;

//     message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ?  'Здравствуйте' :
//     (login == 'Вадим') ? 'Ти найкращий' : 'ты никто' ;
//     alert(message);

// let i = 0,
//     b = +prompt('введите число больше 100');
// for (i = 0;i <= 10;i++) {
//     if (i % 2 == 0) {
    
//         alert(i);
//     }
// }


// while (i <= 10) {
//     if (i % 2 == 0) {
//     alert(i);
//     }
//     ++i;
// }


///однакові рішення 2 задач
// for (i = 0;i < 10;i++) {
//     if (b > 100) {
//         alert('thanks');
//         break;
//     }
//     else {
//         b = +prompt('введите число больше 100');
//     }
// }
// let num;

// do {
//     num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

// let i = 2,
//     n = prompt('введите число');

// for (i = 2; i < n; i++){
//     if (n % i == 0 && n % n == 0) {
//         alert(i);
//     } 
// }

let n = 10;

for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) { 
        continue ;
    } // не подходит, берём следующее
  }

  alert( i ); // простое число
}