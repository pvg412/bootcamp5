'use strict';

/*
//
// // ----------------------------------------------------------------
// // функция, которая заменяет свойства, которые выполняет 'includes'
//
// let arr = [1,2,3,4,5,6,7];
// let str = 5;
//
// function includes2(arr, str) {
//     for (let i of arr) {
//         if (i === str) {
//           return true;
//         }
//     }
//     return false;
// }
// includes2(arr, str);
// console.log(includes2(arr, str));
//
*/


/*
//
// //
// // --------------------------------------------------------------------
//
// //написать функцию, которая выведет переменную 'a' в реверсивном порядке
//
// let number = 32243;
//
// function rev() {
//     number = number+''; // делаем из перемнной 'number' - строку;
//     return +number.split('').reverse().join(''); // разделить строку "32243" по символам, потом делаем реверс этой строки, потом соединеям реверсивно выставленные числа, за счет знака "+" перед
// }
//
// console.log(rev());
//
*/


/*
// ----------------------------------------------------------------------
// сделать проверку на палиндром


// let str = prompt('Enter word');
//
// function checkPalindrome(word) {
//     let a = word.split('').reverse().join('');
//     console.log(a);
//     if (a === str) {
//         alert('This word is palindrome');
//     } else {
//         alert('This word is NOT palindrome');
//     }
// }
//
// checkPalindrome(str);


// let str = prompt('Enter word');
//
// function checkPalindrome(word) {
//     let a = word.split(' ').join('');
//     let b = a.split('').reverse().join('');
//     // console.log(a);
//     // console.log(b);
//     if (a === b) {
//         return true;
//     } return false;
// }
//
// console.log(checkPalindrome(str));
// console.log(str);
*/


/*
// нужно сделать функцию, которая в строке 'string' преобразует первые буквы каждого слова в заглавные

// первый способ, который писал я
// let string = 'the quick brown fox';
// let arr = [];
//
// function capitalize(text) {
//     let cupCut = text.split(' ');
//     // console.log(cupCut);
//     for(let item of cupCut) {
//         item = item.replace(item[0], item[0].toUpperCase());
//         // console.log(item);
//         arr.push(item);
//     }
//     arr = arr.join(' ');
//     return arr;
//     console.log(arr);
// }
//
// console.log(capitalize(string));


// способ, который написал Саша.
// let string = "the quick brown fox";
// let newString = "";
//
// function capitalize(text) {
//     let cupCut = text.split(" ");
//     for (let item of cupCut) {
//         item = item.replace(item[0], item[0].toUpperCase());
//         // console.log(item);
//         newString = newString + item + " ";
//
//     }
//     return newString.trim();
// }
*/


/*
// написать функцию, котрая принимает число, как параметр и проверяет массив на наличие гласных букв. А в конце выдавала результат с количеством гласных букв в предложении.

let string = 'eioau';
let input = 'Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.';

function countVowels(input) {
    let arrVowels = string.split('');
    let arrInput = input.toLowerCase().split('');
    // console.log(arrVowels);
    // console.log(arrInput);
    let count = 0;
    for (let letter of arrInput) {
        if (arrVowels.includes(letter)) {
            count += 1;
        }
    }
    return count;
}
// countVowels(input);
console.log(countVowels(input));
*/



/*

// функция, которая проверяет 'num' на то, правильное ли это число

function primeNumber(num) {
    if (!Number.isInteger(num) || num < 2) {
        return false;
    } else if (num === 2) {
        return true;
    }

    //начало цикла //до какаого периода будет работать цкил // шаг цикла
    for (let i = 2; i <= num; i++) {
        if (num % i !== 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(primeNumber(197));
*/





// Функция, которая выполнит счетчик для vasya и petya, но будет считать их и сохранять по отдельности

/*
function fn() { // функция 'обертка'
    let num = 0;
    function counter() { // функция 'counter' будет увеличивать 'num' на 1
        ++num;
        alert('i am alert#' + num);
    }
    // return counter(); - запускаешь
    // return counter; - создаешь, чтобы запустить позже, в другой переменной
    return counter;
}

let vasya = fn();
let petya = fn();

// let bindVasya = vasya.bind(vasya);
// let bindPetya = petya.bind(petya);

document.querySelector('#vasya').addEventListener('click', vasya);
document.querySelector('#petya').addEventListener('click', petya);
*/



// ---------------------------19.04.2018----------------------------------


/*
function sum() {
    console.log(arguments); // вызвыаем псевдомассив
    console.log(Array.from(arguments)); //
    return a + b;
}

let result = sum(1,5,10);
*/


/*
// области видимости

let a = 100;

function numb() {
    let a = 10;
    console.log(a);
    function number() {
        let a = 5;
        console.log(a);
    }
}

numb();
number();
*/



// ---------------------- Замыкание ---------------------------

/*
function generator(input) {
    let number = input; // переменная внутри функции
    function rise() {
        return number * 2;
    }
    return rise;
}

let launchFirst = generator(500);
console.log(launchFirst()); // ЗАПУЩЕННАЯ функция, которая внутри функции
let result = launchFirst; // (инструкция)

let launchSecond = generator(300); //
console.log(launchSecond); //  НЕ ЗАПУЩЕННАЯ функция, которая внутри функции
*/


/*
// function secretPassword() {
//     let password = 'qaz123'; // переменная внутри функции
//     function guessPassword(guess) {
//         if (guess === password) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return guessPassword;
// }
//
// let passwordGame = secretPassword();
// console.log(passwordGame(prompt('pass')));

// passwordGame(prompt('pass'));
// console.log(passwordGame());
// document.write(passwordGame(prompt('pass')))


// let tryOne = passwordGame('qaz123');

// let result = launchFirst; // (инструкция)
// let launchSecond = generator(300); //
// console.log(launchSecond); //  НЕ ЗАПУЩЕННАЯ функция, которая внутри функции

/!*
//------ функцию скинул Вова -----------
function secretPassword() {
    let password = 'xh38sk';
    function guessPassword(guess) {
        if (guess === password) {
            return true;
        } else {
            return false;
        }
    }
    return guessPassword;
}
let passwordGame = secretPassword();
console.log(passwordGame);
let tryOne = passwordGame('heyisthisit?');
let tryTwo = passwordGame('xh38sk');
console.log(tryOne);
console.log(tryTwo);
*!/
*/







// function sum(a,b) {
//     return a + b;
// }
//
// let sum = (a,b) => {
//     return a + b
// }
//
// let sum = (a,b) => a + b;



/*
const showMessage = (cb) => {
    const secretNumb = 15;
    const msg = cb(secretNumb);

    alert(msg)
}
// cb -
*/








// function mylt(number) {
//     return number * 2;
// }
//
// function sum(fun) {
//     let a = 5;
//     let b = fun(a);
//     return a + b; // 5 + (number * 2), где number =
// }
//
// let result = sum(mylt);
// console.log(result);



//
// function factorial(num) {
//     if (num === 1) {
//         return 1
//     }
//     return num * factorial(num-1)
// }
//
// console.log(factorial(5));
//



//
// let arr = [0, 2, 4];
// const addOne = arr.map(function (element) {
//     return element * 2;
// });
//
// console.log(arr);
// console.log(addOne);



/*
// к значению массива добавим значение позиции этого числа
const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index;
// });
//
// console.log(flipFlop);

const flipFlop = numbers.map((element, index) => element + index);

console.log(flipFlop);
*/





// const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = number.filter(function (el) {
//     // if (el > 5) {
//     //     return el;
//     // }
//
//     return el > 5 ? el : null;
// });
//
// console.log(even);


/*
const login = ['einstein', 'newton', 'galilei', 'copernicus'];
let findLlogin = login.find(function (item, index) {
    if (item === 'newton') {
        return index;
    }
    // return item === 'newton';
});
console.log(findLlogin);
*/




/*
// ------------ Task_1 ----------------------
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр

function getDigitSum(digit) {
    let a = String(digit);
    let b = a.split('');
    let sum = 0;
    for (let item of b) {
        sum += +item;
    }
    return sum;
}
console.log(getDigitSum());




/!*                 ------------------------------
// ---------------------- способ reduce -----------------------
const hoursWorkedPerWeek = [9, 8, 8, 8, 10, 5];

const totalPerWeek = hoursWorkedPerWeek.reduce(
    (current, next) => current + next
);
console.log(totalPerWeek);
                   ------------------------------
*!/

// Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

function years() {
    let arr = [];
    for (let i = 0; i <= 2018; i++) {
        if (getDigitSum(i) === 13) {
            arr.push(i)
        }
    }
    return arr;
}

// console.log(arr);
console.log(years());
*/






/* ---------- метод every (проверка каждого элемента массива) ----------
const money = [100, 500, 300, 250]; // [true, true, true, true]
const go1 = money.every(function(el) {
    return el >= 100;
});
console.log(go1);
const go = money.every(item => item >= 100);
console.log(go);
*/



/* ---------- метод sort (сортирвки) ----------
let numbers2 = [4, 2, 5, 1, 3, 11];
numbers2.sort(function (a, b) {
    if (a < b) {
        return -1;
    } else {
        return 1
    }
});
console.log(numbers2);
*/



/*
// ---------------------------- Задачка --------------------------------
// Дан массив с числами.
// Сделайте из него массив, состоящий из квадратов этих чисел.

let arr = [5, 6, 7, 8, 9];
let newArr = arr.map(function (el) { '
    return el * el;
})
    .filter(el => {return el > 40})
    .reduce((curent, element) => {return curent + element});
console.log(newArr);

// Сделать выборку из получегго массива, с числами, которые больше 40.

// let secondArr = newArr.filter(function (el) {
//     return el > 40
// });
// console.log(secondArr);
*/








// Дан массив с числами.
// Проверьте то, что все элементы в массиве больше нуля



// let check = arr.every(function (el) {
//     return el > 0
// });



// let arr = [5, 6, 7, 8, 9, -9];
// let check = arr.every(el => {
//     return el > 0;
// });
// if (check) {
//     let a = arr.filter(function (el) {
//         if (el % 2 === 0) {
//             return el;
//         }
//     });
//     console.log(a);
// }
// else {
//     let odd = arr.filter(el => {
//         return el % 2 !== 0 ? el : null;
//     });
//     console.log(odd);
// }
// console.log(check);



// else {
//     let odd = arr.filter(function (el) {
//         if (el % 2 !== 0) {
//             return el;
//         }
//     });
//     console.log(odd);
// }
































// ---------------------------------- 20.04.2018 --------------------------------
// ---------------------------------- ОБЪЕКТЫ
// метод - функция, которая описана в объекте


// let name = 'resort hotel';
// let stars = 5;
//
// const hotel = {
//     name: name,
//     stars: stars,
//     copacity: 100,
// };

//  добавление
// let manager = 'check';
// hotel.manager = manager;

// удаление
// delete hotel.name;
// hotel.stars = 4;

// ключ в объекте (записывается в форме строки)
// let hasName = 'name' in hotel;
// let hasStars = hotel.hasOwnProperty('stars');
// let hasPool = 'pool' in hotel;






// -------------------------------------------------------------------------
// записывать методы(функции) в объект
// let name = 'resort hotel';
// let stars = 5;

// const hotel = {
//     name: 'resort hotel',
//     stars: stars,
//     copacity: 100,
//     getName: = function () {
//         return hotel.name;
//     },
//     /*getStars: () => hotel.stars,
//     changeCapacity(value) {
//         hotel.capacity = value;
//     },*/
// };

// console.log(hotel.getName());
// console.log(hotel.getStars());
// hotel.changeCapacity(200);
// ---------------------------------------------------------------------------





// console.log(hasName);
// console.log(hasPool);
// console.log(hotel);



// ------- сравнение замены переменных в "ПЕРЕМЕННЫХ" и "ОБЪЕКТАХ ИЛИ МАССИВАХ"

// let a = 5;
// console.log(a);
// let b = a;
// console.log(b);
// a = 10;
// console.log(a, b);



// переменные в объектах
// let obj1 = {
//     name: 'chack',
// };
// // console.log(obj1);
// let obj2 = obj1;
// // console.log(obj2);
// obj1.name = 'Noris';
// console.log('1', obj1);
// console.log('2', obj2);
// console.log(obj1 === obj2);









// ---------------------------------------------
// как достучаться к ключам и их зачения в объекте
// --------------------------первый способ
// let name = 'resort hotel';
// let stars = 5;
//
// const hotel = {
//     name: 'resort hotel',
//     stars: stars,
//     copacity: 100,
// };
//
// for (const key in hotel) {
//     console.log('Key: ', key);
// }
//
// for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
// }
//
// for (const key in hotel) {
//     if (hotel.hasOwnProperty(key)) {
//         console.log('Value: ', hotel[key]);
//     }
// }
//
// console.log(hotel);


// -------------------------------------------
// --------------------------------второй сопособ
// let name = 'resort hotel';
// let stars = 5;
//
// const hotel = {
//     name: 'resort hotel',
//     stars: stars,
//     copacity: 100,
// };
//
// const keys = Object.keys(hotel);
// // ---------------- третий способ - object values
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);
//
// console.log(keys);
// console.log(values);
// console.log(entries);
//
// console.log(hotel);





// -------------------------------------------
// ----------------------------- объединяем объекты в один объект
//

// const first = {name: 'tony'};
// const second = {lastName: 'stark'};
// const sum = Object.assign(first, second);
// // console.log(first);
//
//
// // ------------------------------------------
// const a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// // console.log(a);
//
//
//
// // --------------------------------------------
// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// // console.log(clone);
// // console.log(obj);
// clone.wearpon = 'hammer'; // записываем ключ в объект 'clone'
// console.log(clone);
// console.log(obj);












// пример того, каким способом мы можем заменять данные, которые хранятся в ключах объектов


/*
не корректная форма записи - она просто слишком примитивная, - ниже представлены лучшие сопосбы добавления или изменеиния ключей и их информации в объектах
let name = 'Mango';
let age = 8;


const defaultSettings = {
    name: 'Mango',
    age: 8,
};

const updateSettings = {
  name: 'Mango';
  age: 3,
};


Object.assign(defaultSettings, updateSettings);
console.log(defaultSettings);
*/


/*
const a = {x: 0, y: 1};
const b = {x: 2, z: 3};
console.log(a);




const c = Object.assign({}, a, b);
console.log(c);




const c = {
    ...a,
    ...b,
    q: 44,
};
console.log(c);
*/


/*
let state = {
    a: 5,
    b: 6,
    c: 7,
};

let newState = {
    ...state,
    c: 8,
};

console.log(state);
console.log(newState);
*/









// ------------------------ ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ --------------------

// const hotel = {
//     name: 'resort hotel',
//     stars: 5,
//     copacity: 100,
// };

// --------------------------- примитивный способ
// let name = hotel.name;
// console.log(name);

// объявим перемнные и присвоим им значения из объекта
// const {name, stars, status, copacity} = hotel;
// console.log(name, stars, status, copacity);

// --------------------------- если в объекте нет ключа 'status', то мы можем присвоить ему пустое значение, чтобы, как в предыдщуем случае в информацию о нем 'console.log' не выдавала 'undefined'

// const {name = 'hotel', stars = 3, status = 'empty'} = hotel;
// console.log(name, stars, status);






// ------------------ Задачка №-1 -----------------
/*
  Напишите код, который, для объекта user, последовательно:
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user
    циклом в формате ключ: значение
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
//
// user.mod = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//          console.log('Key: ', user[key]);
//     }
// }
//
// console.log(user);

// ------------------ Задачка №-2 -----------------
/*
  Создайте функцию isObjectEmpty(obj), которая получает
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// коротная форма записи этой функции, которую скинул Ден
// let isObjectEmpty = obj => {
//     return Object.keys(obj).length === 0;
// };

// способой, который написал Вова на доске
// let isObjectEmpty = obj => Object.keys(obj).length === 0;


// function isObjectEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
//
// Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true
//
// console.log(
//     isObjectEmpty({a: 1})
// ); // false





// ------------------ Задачка №-3 -----------------
/*Напишите функцию countOwnProps(obj), считающую вол-во собственных свойств в объекте. Функция возращает кол-во свойств*/

// function countOwnProps(obj) {
//     let a = Object.keys(obj);
//     console.log(a);
//     return a.length;
// }
//
//
// console.log(
//     countOwnProps({})
// ); // 0
//
// console.log(
//     countOwnProps({a: 1, b: 3, c: 'hello'})
// ); // 3





// ------------------ Задачка №-4 -----------------
/*
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию,
  имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// Функция, которую мы написали
// function countTotalSalary(salaries) {
//     let sum = Object.values(salaries);
//     // console.log(sum);
//     if (sum.length !== 0) {
//         let result = sum.reduce(function (current, next) {
//             return current + next;
//         });
//         return result;
//     } else {
//         return 0;
//     }
// }


// тернарная форма записи верхней функции
// let countTotalSalary = salaries => {
//     return Object.values(salaries).length !== 0 ? Object.values(salaries).reduce((current, next) => current + next) : 0
// };

// тернарная форма записи, только без фигурных скобок, что в свою очеред говорит о том, что мы РЕТЕРНИМ функцию автоматом!
// let countTotalSalary = salaries => Object.values(salaries).length !== 0 ? Object.values(salaries).reduce((current, next) => current + next) : 0
// ;


// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
// ); // 0
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80
//     })
// ); // 330







// ------------------ Задачка №-5 -----------------
/*
  Напишите функцию getAllPropValues(prop),
  которая берет массив объектов и
  возвращает массив значений определенного поля prop
*/
// const obj = {
//     name: 'Poly',
//     age: 7,
//     mood: 'happy'
// };
// console.log(obj);
// console.log(obj.name);
// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
//
//
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// function getAllPropValues() {
//     let a = users[0].map();
//     console.log(a);
// }
//
//
// console.log(Object.entries(users));
// // Вызовы функции для проверки
// console.log(
//     getAllPropValues('name')
// ); // ['Poly', 'Mango', 'Ajax']
//
// console.log(
//     getAllPropValues('mood')
// ); // ['happy', 'blissful', 'tired']
//
// console.log(
//     getAllPropValues('active')
// ); // []






















/*

// --------------------------- Задачка №-6 ---------------------------
/!*
    1. Используя метод map, пройдите по массиву guests,
    и составьте новый массив, заменив значение
    поля isActive на противоположное.

    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.

    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)

    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*!/

const guests = [
    {name: 'Mango', inactiveDays: 15, isActive: true},
    {name: 'Poly', inactiveDays: 8, isActive: false},
    {name: 'Ajax', inactiveDays: 32, isActive: false},
    {name: 'Chelsey', inactiveDays: 85, isActive: true}
];

let newArr = guests.map(function (item) {
     if (item.isActive === true) {
         return item.isActive = false
     } else {
         return item.isActive = true
     }
});

// -------------------------- развернутая форма записи функции

function setGuestState(guests, period) {
    return guests.map(function (element) {
            if (element.inactiveDays > period && element.inactiveDays !== false) {
                return {
                    ...element,
                    isActive: false,
                }
            }
            else {
                return {
                    ...element,
                    isActive: true
                }
            }
        }
    )
}

// --------------------------- тернарный способ записи верхней функции

// let setGuestState = (guests, period) => guests.map((element) => element.isActive > period && element.isActive !== false ? {...element, isActive: false,} : {...element, isActive: true,});

console.log(newArr);
// Вызовы функции для проверки
console.log(
    setGuestState(guests, 10)
); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true
console.log(
    setGuestState(guests, 20)
); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true
console.log(
    setGuestState(guests, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
*/










// ------------------------------- 22.04.2018 ---------------------------------
//                              Домашнаяя работа

// --------------------------------Задачка №-3-------------------------------

/*

/!*
    1. Используя метод find, пройдите по массиву guests
      и найдите гостя с id равным 3.
      Результат будет {id: 3, name: 'Ajax', age: 30}

    2. Напишите функию getGuestById(guests, id), принимающую
      guests - массив объектов гостей, id - идентификатор (число).
      Функция должна возвращать объект гостя с совпадающим id.
*!/

const guests = [
    {id: 1, name: 'Mango', age: 20},
    {id: 2, name: 'Poly', age: 18},
    {id: 3, name: 'Ajax', age: 30},
    {id: 4, name: 'Chelsey', age: 45}
];

// Вызовы функции для проверки
console.log(
    getGuestById(3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
    getGuestById(1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
    getGuestById(5)
); // undefined

*/



















// ------------------------------- 23.04.2018 ---------------------------------


/*


//----------------------
let a = {name: 'Chack'}
let b = {last: 'Norris'}
let c = Object.assign(a, b);
// console.log(c);

//----------------------
let user = {
    name: 'Chack',
    last: 'Norris'
};

let user1 = {
    name: 'Tony',
    last: 'Starck'
};

// let user2 = Object.assign({}, user, user1); //
let user2 = {...user, ...user1}; // ... - спред-оператор (выполнит, то-же, что и в предыдущей записи)
console.log(user);
console.log(user1);
console.log(user2);

//----------------------

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [...arr1, ...arr2];
console.log(newArr);


*/


// ------------------------------------ this -----------------------------

// const chuck = {
//     name: 'Chuck',
// };
//
// const bill = {
//     name: 'Bill',
// };
//
// function showName() {
//     return this.name;
// }
//
// chuck.showName = showName;
// bill.showName = showName;
//
// console.log(chuck.showName());
// console.log(bill.showName());
// console.log(showName());




// const petya = {
//     name: 'petya',
//     showThis() {
//         console.log(this);
//     },
//     showName() {
//         console.log(this.name);
//     },
// };
//
// petya.showThis();
// petya.showName();



// const hotel = {
//     showThis: function() {
//         const fn = () => this;
//         console.log(fn());
//     }
// };
//
// hotel.showThis();






// ------------------------------ Задачка №-1 --------------------------------
/*
const fullName = function (a, b, c) {
    let [a, b, c] = arr;
    return `${this.name} ${this.lastName}. I know ${Array.from(arguments)}.`
};

let arr = ['Js', 'reactJs', 'nodeJs'];
let user1 = {
    name: 'Chuck',
    lastName: 'Norris',
    age: 100,
    fullName: fullName,
};

let user2 = {
    name: 'Bill',
    lastName: 'Clinton',
    age: 20,
    fullName: fullName,
};

// user1.fullName = fullName;
// user2.fullName = fullName;

// console.log(user1.fullName());
// console.log(user2.fullName());
// console.log(fullName.call(user1));
// console.log(fullName.call(user2));
// console.log(user1.fullName.call(user2, 'Hello'));
console.log(user1.fullName.call(user2, arr));
*/



// ------------------------------ Задачка №-2 --------------------------------

// let user1 = {
//     name: 'Herny',
//     lastName: 'Merny',
//     showName: function () {
//         return `${this.name} ${this.lastName}`
//     }
// };
//
// let user2 = {
//     name: 'Chuck',
//     lastName: 'Sobchuk',
// };
//
// let bindedShowName = user1.showName.bind(user2); // bind - из метода объекта в функцию
// console.log(bindedShowName());




// ------------------------------ Задачка №-3 --------------------------------

// как удобно заполнять объект данными
/*
function Student (pass, name, course, age, email) {
    let password = pass;
    this.name = name,
    this.course = course,
    this.age = age,
    this.email = email;
    this.changeEmail = function () {
        this.email = prompt('New email')
        alert('Your new email changed')
    };
    this.changePassword = function () {
        let checkPass = prompt('Enter your password');
        if (checkPass === password) {
            password = prompt('Enter new password');
            console.log(password);
            alert('Your password changed')
        } else {
            alert('false')
        }
    }
}


const student1 = new Student ('1234', 'Slavik', 'bootcamp', '19', 'Slavik@gmail.com');
const student2 = new Student ('1234','Igorёk', 'bootcamp', '20', 'Igorёk@gmail.com');
const student3 = new Student ('1234','Senya', 'bootcamp', '21', 'Senya@gmail.com');

let bindedChangeEmail = student1.changeEmail.bind(student1); // привязываем контекст выполнения student1.changeEmail к объекту student1 что бы не терялся контекст при передаче этого метода как каллбек функции

let emailBtn = document.querySelector('#changeEmail');
emailBtn.addEventListener('click', bindedChangeEmail);
// let passBtn = document.querySelector('#change');
// passBtn.addEventListener('click', student1.changePassword);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(bindedChangeEmail);

student1.changePassword();
*/


//--------------------------------ДЗ----------------------------

// Написать функцию конструктор с помощь которой можно создавать  подобные объекты. Конструктор должен называтся Manager и при вызове через new создает объект продавца магазина.  Метод sell принимает название продукта в виде строки, засчитывает +1 продажу(sales), и возвращает строку с информацией о том какой продавец продал какой продукт.

/*
const mango = {
    name: 'Mango',
    sales: 5,
    sell(product) {
        this.sales += 1;
        return `Manager ${this.name} sold ${product}.`;
    }
};

let Manager = function (name, sales) {
    this.soldProducts = [];
    this.name = name;
    this.sales = sales;
    this.sell = function (product) {
        this.sales += 1;
        if (!this.soldProducts.includes(product)) {
            this.soldProducts.push(product)
        }
        return `Manager ${this.name} sold ${product}`;
    }
};

let Boris = new Manager('Boris');
let Igorek = new Manager('Igorek');

console.log(Boris.sell("orange"));
console.log(Boris.sell("potato"));
console.log(Igorek.sell("banana"));
*/




// ------------------------------- 24.04.2018 ---------------------------------
/*

/!*
  Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.

  Это ОБЯЗАТЕЛЬНО должен быть объект со свойствами и методами. Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойтсв являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*!/

// function SocialBook (users = [], posts = {}) {
//     // код
// }

/!*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
*!/
const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

/!*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
*!/
const initialPosts = {
    "-s19a6hqce": [
        { id: "-5sgljaskg", text: "post #1", likes: 3 },
        { id: "-199hb6igr", text: "post #2", likes: 5 },
        { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
        { id: "-5tu69g5rf", text: "post #1", likes: 8 },
        { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
        { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
        { id: "-i03pbhy3s", text: "post #2", likes: 45 }
    ],
};

/!*
  Для создания уникального идентификатора для поля id, используйте
  вспомогательную функцию getId(), возвращающую уникальную строку.

  К примеру: const user = { id: getId(), name: 'Mango' };
*!/
// const getId = () => "-" + Math.random().toString(36).substr(2, 9);

/!*
  Добавьте в SocialBook следующие методы для работы с пользователями:
    - getAllUsers() - возвращает массив всех пользователей

    - getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином

    - getUserStatus(userId) - ищет пользователя по id и возвращает 'active'
      если isActive true, в противном случае возвращает 'inactive'.

    - addser(user) - принимает объект с полями и добавляет в свойство users.
U
    - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id

    - getUsersCount() - возвращает общее количество пользователей
*!/

/!*
  ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***
  Добавьте в SocialBook следующие методы для работы с постами пользователей:
    - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId

    - addPost(userId, post) - добавляет post в поле posts объекта socialBook по ключу userId.

    - removePost(userId, postId) - удаляет post с id равным postId из поля posts
      объекта socialBook по ключу userId

    - getAllLikes(userId) - возвращает сумму всех полей likes постов пользователя с id равным userId

    - addPostLike(userId, postId) - увеличивает значение поля likes на 1 у поста с id равным postId,
      для пользователя с id равным userId

    - getPostsCount(userId) - возвращает общее количество постов пользователя с id равным userId
*!/


// --------------------------------- РЕШЕНИЕ --------------------------------

// const getId = () => "-" + Math.random().toString(36).substr(2, 9);




//socialBook - это функция консруктора
function SocialBook (users = [], posts = {}) {
    this.users = users;
    this.posts = posts;
    this.getId = () => "-" + Math.random().toString(36).substr(2, 9);

    // метод, который возвращает массив всех пользователей
    this.getAllUsers = function() {
        return this.users;
    };
    // метод, который ищет и возвращает объект пользователя с совпадающим логином
    this.getUserByLogin = function (login) {
        for (let obj of this.users) {
            if (obj.login === login) {
                return obj
            }
        }
    };
    // метод, который ищет пользователя по id и возвращает 'active' если isActive true, в противном случае возвращает 'inactive'
    this.getUserStatus = function (userId) {
        for (let obj of this.users) {
            if (obj.isActive === true) {
                return 'active'
            } else {
                return 'inactive'
            }
        }
    };
    //метод, который принимает объект с полями и добавляет в свойство users
    this.addser = function (user) {
        user.id = this.getId();
        // user.id = "-" + Math.random().toString(36).substr(2, 9);
        this.users.push(user);
        return this.getAllUsers();
    };
    // метод, который удаляет пользователя из массива пользователей по полю id
    this.removeUserById = function (userId) {
        for (let obj of this.users) {
            if (obj.id === userId) {
                this.users.splice(this.users.indexOf(obj), 1)
            }
        } return this.users
    };
    // метод, который возвращает общее количество пользователей
    this.getUsersCount = function () {
        return this.users.length;
    };
    // метод, который возвращает массив постов пользователя с id равным userId
    this.getUserPosts = function (userId) {
        return this.posts[userId]; // Аргумент записываем в квадратных скобках, т.к. он приходит в метод в виде строки. И тогда js вычислить его значение и запишет.
    };
    // метод, который добавляет post в поле posts объекта socialBook по ключу userId.
    this.addPost = function (userId, text) {
        let defaultPostObject = { id: this.getId(), text: '', likes: 0 };
        console.log(defaultPostObject);
        this.posts[userId].push(defaultPostObject);
        return this.posts;
    };
    // метод, который удаляет post
    this.removePost = function (userId, postId) {
        this.posts[userId] = this.posts[userId].filter((item) => item.id !== postId);
        console.log('after post delete', this.posts[userId])
    };
    // метод, который возвращает сумму всех полей likes постов пользователя с id равным userId
    this.getAllLikes = function (userId) {
        return this.posts[userId].reduce((current, next) => current = current + next.likes, 0);
    };

    // метод, который увеличивает значение поля likes на 1 у поста с id равным postId, для пользователя с id равным userId
    this.addPostLike = function (userId, postId){
        for (let obj of this.posts[userId]) {
            if (obj.id === postId) {
                ++obj.likes;
            }
        }
        return this.posts;
    };

    // метод, который возвращает общее количество постов пользователя с id равным userId
    this.getPostsCount = function (userId) {
        return this.posts[userId].length;
    };
}



let accountManager = new SocialBook(initialUsers, initialPosts);
console.log(accountManager);
console.log(accountManager.getAllUsers());
console.log(accountManager.getUserByLogin('polysweet@skynet.ze'))
console.log(accountManager.getUserStatus('-s19a6hqce'));
console.log(accountManager.addser({id: '', login: '123@gmail.com', password: '123', isActive: true}));
console.log(accountManager.removeUserById('-s19a6hqce'));
console.log(accountManager.getUsersCount());
console.log(accountManager.getUserPosts('-qkpzenjxe'));
accountManager.addPost('-e51cpd4di');
console.log(accountManager.addPost('-e51cpd4di'));
console.log(accountManager.removeUserById('-s19a6hqce', '-5sgljaskg'));
console.log(accountManager.getAllLikes('-s19a6hqce'));
console.log(accountManager.addPostLike('-s19a6hqce', '-199hb6igr'));
console.log(accountManager.getAllLikes('-s19a6hqce'));
console.log(accountManager.getPostsCount('-s19a6hqce'));

*/





// ------------------------------ 25.04.2018 ---------------------------------

//-------------------------------- DOM -------------------------------------
/*

let myBody = document.body; // создаем переменную, в которую мы помещаем ссылку на body - html
console.log(myBody);
console.log(myBody.children);
console.log('first child', myBody.children[0]); // получаем доступ к эллементам псевдомассива DOM - через указание индекса (порядкового номера)
console.log('second child', myBody.children[1]);

let div = myBody.children[0]; // создаем переменную 'div', в которую сохраняем элемент псевдомассива DOM
console.log(div);
console.log(div.firstElementChild);
console.log(div.children[3]);

let nodesWithTextNodes = myBody.children[0].children;
let Nodes = myBody.children[0].childNodes;
console.log(nodesWithTextNodes);
console.log(Nodes);

document.querySelectorAll('button');
console.log(document.querySelectorAll('button'));

// let but = document.querySelector('button'); // чтобы поменять текст в button, для этого, нужно заменяемому элементу присвоит переменную, в которой мы будем осуществлять замены
// but.innerText = 'javascript'; // с помощью команды innerText - мы заменяем текст, на желаемый.

// а всё, что ниже - мы меняем текстовку во всех элементах DOM, которые выбрали
let buttons = document.querySelectorAll('button'); // меняем
buttons.forEach(element => {
    element.innerText = 'JS'
});


// как достучаться по классу к элементу и сделать цвет кнопки
let redButton = document.querySelector('.red-button');
redButton.style.backgroundColor = 'red'; // запись, не перезапишет предыдущие свойства, которе могли быть заданы ранее, а просто создаст новые (cameCase)

redButton.style = 'background: white'; // а вот такая форма записи перезаписывает свойство, но не создает новое

redButton.style.borderWidth = '3px';
redButton.style.borderColor = 'green';
redButton.style.backgroundColor = 'yellow';

console.log(document.getElementById('btn'));
console.log(document.getElementsByClassName('red-button'));


// перебираем каждый элемент в body, на соответствие с классом .red-button
buttons.forEach(element => {
   console.log(element.matches('.red-button')); // данной формой записи сразу выводим ответ в консоль
});

console.log('mathes', myBody.matches('.red-button')); // false

console.log('mathes', myBody.children[0].children[2].matches('.red-button')); // true


// способ, с помощью которого, мы можем заменить уже существующий id или class на новый, который пожелаем.
let btnWidthId = document.querySelector('#btn'); // создаем переменную, уже в которой мы будем осущесвлять какие либо замены
btnWidthId.id = 'newId'; // замена id
btnWidthId.className = 'jo'; // замена class
console.log(btnWidthId);


// если у какого-то из элементов DOM нет class или id, то мы можем им эти class или id присвоить.
let btnClas = document.querySelector('.red-button');
btnClas.id = 'jof';
console.log(btnClas);


// пример того, как поменять ссылку
let link = document.querySelector('#link'); // создаем переменную, в которую будем сохранять наши изменения
link.href = 'http://www.google.com'; // меняем путь, на тот, который нам нужен
link.innerText = 'linkeroff'; // задаем текст, который отоборазится в браузере
console.log(link);


console.log(myBody.children[0].textContent); // с методом textContent - мы выводим всё, содержимое в body - в виде текста.

// innerHTML - сопосбо создавать код html, который будет прописан в js
// myBody.innerHTML = `<ul id='nav-acces'>`;
// console.log(myBody.innerHTML);


// classList - сопосб назначать классы и применять стили для объектов (тегов)
// myBody.classList.toggle('active');
// console.log(myBody);

let btnFirst = document.querySelector('button');
btnFirst.classList.toggle('active');
console.log(btnFirst);


// создание DOM элемента
let img = document.createElement('img');
console.log(img);
img.setAttribute('src', 'https://cdn.img.inosmi.ru/images/24126/31/241263151.jpg');
myBody.appendChild(img); //добавляем ранее созданный DOM элемент в body в конец
myBody.children[0].insertBefore(img, btnWidthId); //добавляем ранее созданный DOM элемент в body, перед элементом btnWidthId (вторым мы указываем тот элемент, перед которым хотим, чтобы стоял созданный ранее соазднный элемент


// метод replaceWith
let input = document.createElement('input'); // создаем input
img.replaceWith(input); // методом replaceWith - вместо img вставляем input
input.remove(); // remove - метод удаления, удаляет input, но не возвращает img, т.к. интерпретатор браузера идет строго по коду сверху вниз


// метод insertAdjacentHTML - в которомы мы указываем куда, после чего и что добавим
myBody.children[0].insertAdjacentHTML('beforebegin', '<h3>insertAdjacentHTML</h3>');


// метод cloneNode - клонирование узлов (создает глубокую копию элемента
let cloneBody = myBody.cloneNode(true);
myBody.insertAdjacentElement('afterend', cloneBody);


// метод createDocumentFragment
let fragment = document.createDocumentFragment(); // создаем фрагмент

// прописывам цикл (кол-во повторений)
for (let i = 0; i < 11; i++) {
    let li = document.createElement('li');
    li.textContent = `li number ${i}`;
    fragment.appendChild(li);
}
console.log(fragment);

myBody.children[0].appendChild(fragment); // добавляем готовый фрагмент в myBody

console.log(myBody);

*/


// ---------------------------------- 26.04.2018 -------------------------------

// в html есть кнопка, с id '#btn'. мы к ней привязываемся с помощью 'let myBtn = document.querySelector('#btn');'. потом, создаем объект, в котором у нас есть своство 'name:' и характеристтикой 'chuck'. В этом объекте есть функция, которая выдает нам alert, после нажания кнопки 'myBtn'.

// ------------------------------------------------------------
// let myBtn = document.querySelector('#btn');
// let obj = {
//     name: 'Chuck Sobchuk',
//     showName: function (event) {
//         alert(this.name);
//         console.log(event);
//     }
// };
//
// myBtn.addEventListener('click', obj.showName.bind(obj));

//-------------------------------------------------------------
// let parrent = document.querySelector('ul'); // этот querySelector будет искать первый попавшийся ul в html разметке
//
// // функция-обработчик
// function handleClick(event) {
//     console.log('currentTarget', event.currentTarget);
//     console.log('target', event.target);
//     event.target.classList.toggle('active');
// }
//
// parrent.addEventListener('click', handleClick);

//-------------------------------------------------------------------

//
// let input = document.querySelector('#inp');
// function handleMouseMove(ev) {
//     let target = ev.target;
//     if (target.tagName !== 'LI') {
//         input.value =`x: ${ev.clientX} y: ${ev.clientY}`;
//     }
// }
//
// document.body.addEventListener('mousemove', handleMouseMove);



// ------------------------------------------------------------------

/*
  Ознакомьтесь в вкладкой HTML и CSS.

  Напишите скрипт который:
    - При клике по изображению, меняет значение атрибута alt на 'Image has been clicked on!'
    - При клике по изображению, выводит alert со значением атрибута src

    - При клике на ссылку с надписью Google, в консоль выводится значение атрибута href.
    - Каждый клик по ссылке должен поочередно добавлять и удалять класс link-active
    - При этом не должен происходить переход по ссылке!

    - При фокусе текстового поля, в консоль должна выводится строка "Input is in focus!"
    - При наборе текста в текстовое поле, текущее его значение должно отображаться в
      абзаце с классом js-input-value
*/

let img = document.querySelector('.js-img');
function handleImg(ev) {
    img.alt = 'Image has been clicked on!';
    alert('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuEByzAp5ZtLwploeDrJ0Y4pkH0fznMMqd4R8mgjHq5oQVBcw')
}

img.addEventListener('click', handleImg);
