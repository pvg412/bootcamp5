'use strict';

// 1. Функция

// function calc() {
//     console.log('inside text');
// }

// 1.1 начала пишем ключевое слово function
// 1.2 calc - имя функции
// 1.3 потом круглые скобки, после имени
// 1.4 {} - тело функции, в которой мы пишем весь код

// 1.5 команда - calc(); - вызовет функции в любом месте кода

// Функция - пример;
// function add() {
//     console.log(5 + 6);
// }
//
// add();

// 1.6 ещё один сопособ создания функции - через переменную;
// let calc = function () {
//
// };





/*

function showText() { // создаем саму функцию showText
    let a = 5; // создаем переменную a
    let b = 6; // создаем переменную b
    return a + b;  //работает на подобии console.log, используется в 99% случаев;
}
let result = showText()  //переменная, в которую вносим результат раб. функции;
console.log(result); // выыводим в консоль переменную result
// слово return возвращает строку(или операцию), которая записана в теле функции
// Когда нет return, операции в фукнции выполняются, но у нас нет к ним доступа(даже если обращаться через console.log())
// Когда есть слово return, то  ....
// После того, как функция встречает return, то она останавливается и больше не выполняется.

*/





/*

//Для того, чтобы передавать инфу в нашу функцию, используем - параметры или аргументы;
// парметры number1 и number2, перечисляются в круглых скобках, стоящих после имени функции, через запятую.
// аргумент - информациия, котрую мы вонисм в ранее заданый параметр парметр

function calc (number1, number2) {  //функция, к тебе прийдет два типа данных - параметры
    return number1 + number2; //ты их между собой суммируй и выдай результат - аргументы
}

console.log(calc(5,10)); //выводим в консоль, со знач.(5,10);
console.log(calc(20,30)); //выводим в консоль, со знач.(20,30);

console.log(calc('function',5)); //выводим в консоль (function5);


// на пример, сделали функцию, котора вычитает значения;
function minus (a,b) { // указываем параметры 'a' и 'b';
    return a - b;
}

console.log(minus(5,2)); // выводим в консоль и считаем аргументы '5' и '2';

*/



/*

//без заранее заданных значений для параметров (в случае, если мы не зададим никаких аргументов, то консоль выдаст в местах '${}' - 'undefined';
function textSh(name, days) {
    return `${name} has tial version ${days}`;
}

console.log(textSh());


// с заранее заданными значениями для параметров (в случае, если мы не зададим аргументы самостоятельно, то консоль выдаст ранее введенные параметры 'Jim' и '30' и функция не выдаст ошибку и будет выполнена.
function textSho(name = 'Jim', days = 30) {
    return `${name} has tial version ${days}`;
}

console.log(textSho());

*/


// Задачка №-1
// Пишем функцию, которая в себя принимает строку
// Проверяет, является ли эта строка палиндромом?
//     делаем split
// reverse для массива
// join
// сравнение
// Выводит в коце true или false
//
// function checkForPolandrom() {
//     let enterWord = prompt('Enter your word');
//     let splitWord = enterWord.split('').reverse().join('');
//     if (enterWord === splitWord) {
//         return 'True';
//     } else {
//         return 'False';
//     }
// }
//
// alert(checkForPolandrom());



// *true*
// "A man, a plan, a canal. Panama"
// "never odd or even"
// "My age is 0, 0 si ega ym."
// "0_0 :slightly_smiling_face: /-\ :slightly_smiling_face: 0-0"


// function checkPalindrome(string) {
//     let modString = string.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//     let palindrom = modString.split('').reverse().join('');
//     if (modString === palindrom) {
//         return true
//     } else {
//         return false
//     }
//     // return modString === palindrom ? true : false;
//     // return modString === palindrom;
// }
// console.log(checkPalindrome('A man, a plan, a canal. Panama'));


// Глобальная область видимости для переменной test;
// let test = 'Global scope';
// console.log(test);

// Локальная область видимости для перемнной test;
// function local() {
//     let test = 'Local scope';
//     console.log(test);
// }
// local();

// Функция в функции и созданные в ней переменные
// function local() {
//     let test = 'Local scope';
//     console.log(test);
//     function inner() {
//         let test = 'Inner scope';
//         return test
//         // console.log(test);
//     }
//     return inner(); //сначала увидели test в функции 'local', потом зашли в функцию 'inner' и в ней уже тоже задана 'return inner()' - который скажет, что нужно ещё и показать результат работы функции 'inner'
// }
// local(); // вызываем функцию в консоль
// console.log(test);






//
// const a = 20;
// const b = 10;
//
// function add() {
//     const  a = 5;
//     return a + b;
// }
//
// console.log(add());
//




//
// function pow(base, exponent) {
//     return Math.pow(base, exponent);
// }
//
// console.log (`2 ** 10 = ${pow(2,10)}`);
//



/*
// function arg() {
//     // return arguments;
//     // arguments;
//     // return Array.from(arguments); //'Array.form(arguments)' - говорит о том, что ему нужно взять и сделать массив из '(arguments)
//     let arr = Array.from(arguments);
//     console.log('Arr arg', arr);
//     let sum = '';
//     for (let item of arr) {
//         sum += item + ' ';
//     }
//
//     return sum;
//
// }
//
// console.log(arg(1,5,9,12)); // вношу значения аргументов, которые при предыдущей команде становятся в массив
// // console.log(arg(5,9));
//
//
//
// let arr = Array.from(arguments);
// console.log('Arr arg', arr);
// let sum = '';
// for (let item of arr) {
//     sum += item + ' ';
// }
//
// return sum;
*/








//------------------------------------------
/*

// Guard Clause

const printArray = function (arr) {
    if(!Array.isArray(arr)) { // стандартная конструкция, в форме записи котрой мы просим сравить ....
        // console.log('error');
        return 'error';
    }
    for (let value of arr) {
        console.log(value);
    }
};

// console.log(printArray( [1,2,3,4] ));
// console.log(printArray( [5,10,15,20]));
console.log(printArray('some string'));

*/



/*
//------------------------------------------
// IIFE (немедленно вызываемая функция) - техника 'IIFE' используется для того, чтобы наш код был изолирован от глобальной области видимости;

let x = 5;
;(function () { // (;) которая стоит перед функцией, гарантирует нам то, что когда мы будем соединять код с другим программистом, можно невелировать тот факт, что он мог забыть поставить в своем коде точку с запятой (;)
   let x = 10;
   let y = 20;

    console.log(x); // 10
    console.log(y); // 20
})(); // круглые скобки '()' после скобки закрытия функции '})' говрят о том, что в этом месте вы сразу-же вызываем эту-же фукнцию;

console.log(x); // 5
// console.log(y); // defined
*/


/*
/!* Задачка №-2

  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*!/

function getPx(str) {
    if (typeof str !== 'string') { // сравниваем, внесенная 'str' не равна ли 'string'
        return null // тут говорим, если не равна, то выводим 'null'
    } else {
        return parseFloat(str) // перевоплощаем str в число
    }
}

console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null
*/










/*

/!*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*!/


// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
    findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
    findLongestWord("May the force be with you")
); // вернет 'force'


function findLongestWord(str) {
    if (typeof str !== 'string') {
        return
    }
    let arr = str.split(' ');
    let word = '';
    let meter = 0;
    // console.log(arr);
    for (let element of arr) {
        // element.length;
        // console.log(element);
        if (word.length > meter) {
            word = element;
            meter = element.length;
        }
    }
    return word
}


// нам нужно найти каждое слово в строке и померять его по длине


*/









/*

/!*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*!/

// Вызовы функции для проверки
console.log(
    titleCase("I'm a little tea pot")
); // вернет "I'm A Little Tea Pot"

console.log(
    titleCase("sHoRt AnD sToUt")
); // вернет "Short And Stout".

console.log(
    titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
); // вернет "Here Is My Handle Here Is My Spout".


function titleCase(str) {
    if (typeof str !== 'string') { // цикл, в котором, если аргумент 'str'  не равен строке 'string' - функция не будет выполнена
        return
    }
    let lowCa = str.toLowerCase(); // переменную 'lowCa' в которой агрументы из 'str' приобретают буквы верхнего регистра;
    let splCa = lowCa.split(' '); // в перемнной 'splCa' мы разделяем содержание строки на элементы массива с помощью '.split';
    let newArray  = []; // создаем пустой массив;
    for (let word of splCa) { // задаем цикл;
        let custo = word.replace(word[0],word[0].toUpperCase()); // задаем новую переменуую 'custo', для которой назначем следующие действия - 'replace' разделить слова по первому символу, потом каждому первому символу назначаем большую букву;
        newArray.push(custo); // запихиваем перемнную 'custo' в массив слов;
    }
    return newArray.join(' '); // объеденяем элементы массива в строку, через пробел;
}

*/













/*

/!*
  Есть массив уникальных чисел uniqNumbers.

  Написать функцию, addUniqNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*!/

const uniqNumbers  = [2, 1, 4, 9];

function addUniqNumbers() { // не пишем количество потенциальных аргументов
    let arr = Array.from(arguments);
    console.log(arr);
    for (let number of arr) {
        if (!uniqNumbers.includes(number)) { // зайди в массив 'uniqNumbers' и проверь, есть ли в нем символы из массива 'number'?
            uniqNumbers.push(number); // этой строкой мы говорим, чтобы в массив uniqNumbers пушились (добавлялись) цифры, которые по условия предыдущего цикла, повторяющиеся будут проигнорированны, а тех, которых в массие ещё нет, будут в него добавлены
        }
    }
}


// Вызовы функции для проверки
addUniqNumbers(1, 2, 3);
console.log(uniqNumbers); // будет [2, 1, 4, 9, 3]

addUniqNumbers(12, 2, 3, 19);
console.log(uniqNumbers); // будет [2, 1, 4, 9, 3, 12, 19]

addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqNumbers); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]


*/














/*

/!*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*!/

function removeFromArray(arr) {
    let newArr = Array.from(arguments); // делаем переменную 'newArr', в которую помещаем псевдомассив 'arguments';
    newArr.shift(); // вырезаем с помощью '.shift()' - нулевой [0] индекс в массиве 'newArr'
    for (let number of newArr) { // запускаем цикл, в котором говорим: в новой созданной переменной 'number' ищем элементы из массива 'newArr';
        if (arr.includes(number)) { //
            let index = arr.indexOf(number);
            arr.splice(index,1);
        }
    }
    return arr;
}



// Вызовы функции для проверки
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // вернет [1, 3, 5]

console.log(removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // вернет [12, 8, 17]
*/








// ------------------Домашяя от 16.04.2018------------------
/*
Есть массив logins с логинами пользователей.
    const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

Написать функцию, addLogin(login) которая:
1) Получает новый логин как аргумент

2) Проверить валидность логина используя вспомогательную
функцию checkLoginValidity(login), которая проверяет
количество символов логина и возвращает true если логин
подходит под условие длины от 4-х до 16-ти включительно,
и false если не подходит.

3) Если логин не валиден, прекратить исполнение функции addLogin
и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.

4) Если логин валиден, проверить уникальность логина с помощью
функции checkIfLoginExists(login), которая проверяет наличие
логина в массиве logins, возвращая false если такого логина
в массиве еще нет, и true если есть.

5) Если checkIfLoginExists вернет false, добавить новый логин
в logins. Если checkIfLoginExists вернет true, тогда addLogin
не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'.*/

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// function addLogin(login) {
//     login = prompt('Enter your login');
//     function checkLoginValidity() {
//         if (login.length >= 4 && login.length <= 16) {
//             function checkLoginExists() {
//                 for (let i = 0; i < logins.length; i++) {
//                     if (!logins.includes(login)) {
//                         logins.push(login);
//                         alert('All be fine');
//                         return;
//                     } else {
//                         alert('Try again');
//                         return;
//                     }
//                 }
//             } checkLoginExists();
//         } else {
//             alert('Error. Your username must be between 4 and 16 characters.')
//             return;
//         }
//     } checkLoginValidity();
// }
// addLogin();
// console.log(logins);





// --------------------ДЗ_модуль_2--------------------
/*
   Есть три курорта: taba, sharm или hurgada.

   Необходимо через prompt попросить ввести число, от 1 до 3-х.

   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.

   После этого вывести сообщение о том, что пользователь
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/

// let resort = ['taba', 'sharm', 'hurgada'];
// let enterWord = +prompt('Please, enter number: 1 - taba; 2 - sharm; 3 - hurgada');
// if (enterWord === 1) {
//     console.log(resort[0]);
// } else if (enterWord === 2) {
//     console.log(resort[1]);
// } else if (enterWord === 3) {
//     console.log(resort[2]);
// } else {
//     console.log('Entered a number for which the resort is not listed')
// }

// --------------------Доп.Задание--------------------
/*
  Пользователь через prompt вводит число участников группы.
  Необходимо проверить является ли введенные данные целым
  положительным числом. Вывести alert в случае ошибочного ввода.

  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6

  Если количество мест позволяет, то вывести пользователю
  сообщение через confirm что есть место в группе такой-то,
  согласен ли пользоваетель быть в этой группе?

  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.

  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/


// let addNumber = +prompt('Enter your number');
// console.log(typeof addNumber);
// let sharm = 15;
// let hurgada = 25;
// let taba = 6;
// let arr = [sharm + hurgada + taba];
// console.log(arr);
// if (addNumber < 0 || addNumber === 'string') {
//     alert('Error. Added symbols is\'nt number');
// } else {
//     alert('Good');
// }

//





// --------------------ДЗ_модуль_3--------------------

// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
// let arrFirst = alphabet.split('');
// let first = arrFirst.slice(0, arrFirst.indexOf('a'));
// let second = arrFirst.slice(arrFirst.indexOf('a'), arrFirst.indexOf('z'));
// let third = arrFirst.slice(arrFirst.indexOf('z'), arrFirst.length);
// let keyboard = [];
// keyboard.push(first, second, third);
// console.log(keyboard);
// let wordHello = keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8];
// console.log(wordHello);
// let wordJavaScript = keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4];
// console.log(wordJavaScript);
// let wordTrainer = keyboard[0][4]+keyboard[0][3]+keyboard[1][0]+keyboard[0][7]+keyboard[2][5]+keyboard[0][2]+keyboard[0][3];
// console.log(wordTrainer);









/*
// --- Задачка №41 --------------------------------------
let a = 'qwertyuiop';
let b = Math.floor(Math.random() * a.length);
let c = a.split('');
// console.log(a.length);
// console.log(b);
// console.log(c);
console.log(c[b]);
let d = c[b];
console.log(d);
*/














