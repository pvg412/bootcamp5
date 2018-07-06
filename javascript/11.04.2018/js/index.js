"use strict"

// let a = 'moe im\`z';
// console.log(a);


// let a = '1';
// let b = 1;
// console.log(a == b);
// console.log(a === b);

// let a = 1;
// let b = '1';
// console.log(a !== b);
// console.log(a != b);
//
//

// let turn = prompt("ты куда?")
//
// if (turn === 'right') {
//     console.log('метро');
// } else {
//     console.log('немае метро');
// }



//смотри что просиходит в браузере
// let turn = prompt('Куда ты повернешь?').toLowerCase();
// let lower = turn.toLowerCase;
// turn.toLowerCase;
// let buy = prompt('Ты купил жетон?').toLowerCase();
// let take = prompt('Куда ты поедешь?').toLowerCase();
//
// if (turn === 'right' && buy === 'buy' && take ==='home') {
//     console.log('Welcome Home');
// } else {
//     console.log('false');
// }




// Написать код, который покажешь нам время года в зависимости от месяца

// 1. Написать код, который попросит у пользователя ввести номер месяца
// 2. Написать проверку, которая выведет нам на экран "зима", если полльзователь ввел чилос 12 или 1 или 2
// 3. весна 3, или 4, или 5
// 4. лето 6, или 7, или 8
// 5. осень 9, или 10, или 11
// 6. Проверка на ошибки

// let month = +prompt('Какой сейчас месяц?');
// console.log(month);
// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима');
// }   else if (month === 3 || month === 4 || month === 5) {
//     console.log('Весна');
// }   else if (month === 6 || month === 7 || month === 8) {
//     console.log('Лето');
// }   else if (month === 9 || month === 10 || month === 11) {
//     console.log('Осень');
// }   else {
//     console.log('Error');
// }




// let luckyNumber = 8;
//
// switch (luckyNumber) {
//     case 1:
//         console.log('it is one');
//         break;
//     case 8:
//         console.log('it is eight');
//         break;
//     case 7:
//         console.log('You win');
//         break;
//     default:
//         console.log('error');
// }






// let result = a === b ? 'true' : 'false';
// console.log(result);

// let test = 5 < 6 ? 'Evrika' : 'Too bad';
// console.log(test);


let color = prompt('Enter color').toLowerCase();

let result = color === 'white' || color === 'red' || color === 'green' ? 'Day' : 'Night';
console.log(result);


