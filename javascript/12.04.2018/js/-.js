/*
* Два способа создать массив
* */
/*
let arr = [];
let a = new Array();
*/
/*let firstArray = [1,2,3];
let secondArray = new Array(5,6,7,8);
console.log(firstArray, secondArray);
console.log(firstArray.length); //Знайти довжину масива
let arr = [1,2,3,[5,6,[54,56,57,58],7]];
[Считаем вложенность по запятым.]*/


// replace (Меняем место необходимого массива)
/*
let firstArray = [1,2,3];
firstArray[1] = 100;
firstArray[3] = 6;
firstArray[6] = 25;
console.log(firstArray);
*/

// push (Добавляем в конец)
/*
let firstArray = [1,2,3];
// firstArray[3] = 6;
firstArray.push(10);
firstArray.push(12);
console.log(firstArray);
*/

// pop (Удаляем последний )
/*
let firstArray = [1,2,3];
let del = firstArray.pop();
console.log(del);
console.log(firstArray);
*/

// shift Удаляем первую цифру
/*
let firstArray = [1,2,3,4];
console.log(firstArray.shift());
console.log(firstArray);
*/

// unshift Добавляет первую цифру
/*let firstArray = [1,2,3,4];
firstArray.unshift(27);
console.log(firstArray);*/

// indexOf Ищет пока каким порядковым номером находится то или иное значение.
/*let firstArray = [1,2,3,4];
console.log(firstArray.indexOf(3));*/
// console.log(firstArray);

// includes Поиск по значению массива.

/*
let firstArray = [1,2,3,4];
console.log(firstArray.includes(3));
firstArray.push('test');
console.log(firstArray.includes('test'));
console.log(firstArray.includes('t'));*/

// Ищем имя на сайте

/*let users = ['Jon', 'Frank', 'Mick'];
let newUser = prompt('Enter name');
console.log(users.includes(newUser));*/

// splice start. Вірезаеm с момента ..().

/*let firstArray = [10,8,7,5];
let newArr = firstArray.splice(1,2); //(1- откуда начнем обрезать, 2- сколько штук надо обрезать)
console.log(newArr);
console.log(firstArray);*/

// slice start/ Он копирует и вырезает из массива. Удобнее.

/*
let firstArray = [10,8,7,5];
let newArr = firstArray.slice(1, 3); //(1- откуда начнем обрезать, 3 - место где надо остановиться, но не включая его)
console.log(newArr);
console.log(firstArray);*/

// reverse

/*let firstArray = [10,8,7,5];
console.log(firstArray.reverse());*/

//concat / Створюеm новий масив. Створити нову змінну і записати результат в нову змінну.
/*let firstArray = [10,8,7,5];
let newArray = ['add me', 'join us'];
let result = firstArray.concat(newArray);
console.log(result);
console.log(newArray);
console.log(firstArray);*/

// sort / Сортировка по алфавитному порядку
let numbers = [2, 1, 4, 3, 5];
let clients = ['Boof', 'Zoog', 'Aago'];
console.log(clients.sort());
console.log(numbers.sort());
console.log(clients);
console.log(numbers);
