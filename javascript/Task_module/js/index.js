'use strict';

// -------------------------- module 03 -----------------------------


// -------------------------- task 03 -----------------------------
/*
  Попросить пользователя ввести произвольную строку.

  Используя методы строки преобразовать ее в массив.
  Вывести в консоль длину массива.

  Используя цикл, перебрать массив и последовательно
  вывести элементы массива в консоль.
*/

// let string = prompt('write a string here');
// let arr = string.split('');
// for (let i of arr) {
//   let index = arr.indexOf(i);
//   console.log(index);
// }
//
// for (let j = 0; j < arr.length; j++) {
//   let element = arr[j];
//   console.log(element);
// }
//
//
// // console.log(typeof(arr));
//
// // Составить массив из строки и записать в переменную arr
// console.log(arr);
//
// // Вывести в консоли общую длину массива arr
// // console.log(arr.length);
//
// // Используя цикл, вывести в консоль все индексы массива arr
// console.log();
//
// // Используя цикл, вывести в консоль все элементы массива arr
// console.log();
//
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// console.log();


// -------------------------- task 04 -----------------------------
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
*/

let numbers = [];
for (let i = 1; i < 10; i++) {
  numbers.push(i);
}
console.log(numbers);
let input = prompt(`Введите цифру между ${numbers[0]} и ${numbers[numbers.length-1]}`);
console.log(typeof(input));
let a = Number(input);
if (a !== Number) {
  alert('Not a number')
}
console.log(a);
console.log(typeof(a));


// -------------------------- tast 05 -----------------------------
/*
Напишите скрипт, который выбирает из массива numbers
все числа, которые больше чем значение переменной num.
В результате получается новый массив, только с подходящими
числами.
*/
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
