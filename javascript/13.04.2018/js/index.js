"use strict";

// for (let i = 0; i < 5; i++) {
//     for (let j = 5; j < 7; j++) {
//         console.log(j * i);
//     }
//     console.log(i);
// }



let arr = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
];

let empty = [];
let teamNumber = prompt('Team #');
let teamAmount = prompt('Member of team?');

for (let i = 0; i <= teamNumber; i++) {
    let first = [];
    for (let a = 1; a <= teamAmount; a++) {
        first.push(a+i*3);
        console.log(first);
    }
    empty.push(first);
}
console.log(empty);



// let clients = ['mango', 'ajax', 'poly'];
//
// for (let value of clients) {
//     console.log(value);
// }




// let password = 'qwerty123';
// let question = prompt('Enter your password')
// for (let i = 0, n = 3; i < 3; i++) {
//     if (password !== question && n !== 0) {
//         n--;
//         if (n === 0) {
//             alert ('You have no attempts');
//             break;
//         }
//         alert(`Wrong password. You have ${n} attempts`);
//     }
//     else if (password === question) {
//         alert('Welcome!');
//         break;
//     }
// }


/*
  Написать скрипт, который проверяет произвольную строку
  и находит самое длинное слово в строке.
*/
// const string = "May the force be with you";
// let arr = string.split(` `);
// let result = arr[0];
// for (let i = 0; i < arr.length; i++ ) {
//     if (arr[i].length > result.length) {
//         result = arr[i];
//     }
// }
// console.log(result);





/*
  Создайте игру угадай число.
  Есть массив чисел numbers, содержащий "верные" числа.

  Числа в массиве всегда идут по возрастанию,
  1-5, 20-40, 2-100 и т.п.

  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Пусть prompt говорит
  "Введите цифру между x и y", где x и y соотвественно самый
  маленький и самый большой элемент массива.

  Но пользователь может ввести что угодно,
  необходимо проверить что было введено.
  Преобразовать input в числовой тип и проверить число ли это.

  Если нет - выводим alert с сообщением о том,
  что было введено не число.

  Если да - проверить содержит ли в себе массив numbers это число.

  Если содержит - выводим alert с сообщением
  'Поздравляем, Вы угадали!'.

  Есл не содержит - выводим alert с сообщением
  'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];
// let num = +prompt('Введите цифру между 12 и 41');
// console.log(typeof num);
// let type = (typeof num);
// console.log(type);
// if (num !== num) {
//     alert('Введено не число')
// } else {
//     for (let i of numbers) {
//         if (i === num) {
//             alert('Поздравляем, Вы угадали!');
//         } else {
//             alert('Сожелеем, Вы не угадали!');
//             break;
//         }
//     }
// }






/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100.

  Если посетитель ввёл другое число –
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо
  посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.
*/

// let writeNumber = prompt('Введите число, большее 100');
// for (let i = 0; i <= Infinity; i++) {
//
//     if (writeNumber >= 100) {
//         alert('Ura');
//         break;
//     }
//     else if (writeNumber === null) {
//         break;
//     }
//     else {
//         writeNumber = prompt('Введите число, большее 100');
//     }
// }









/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt
    и сохраняет их в массиве.

  - Заканчивает запрашивать числа, как только посетитель
    введёт пустую строку, не число или нажмёт Cancel.

  - При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - Выводит сумму всех значений массива.
    "Сумма: <сумма всех значений в массиве>"
*/

let arr = [];
let sum = 0;
for (let i = 0; i < Infinity; i++) {
    let number = prompt('Введи число');
    if (number === '' || number === null || isNaN(number)) {
        for (let item of arr) {
            sum += +item;
        }
        break;
    }
    arr.push(number);
}
console.log(arr);
console.log(sum);

