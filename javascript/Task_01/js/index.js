"use strict";

//1
/*let num = 3;
alert(num);*/

//2
/*let a = 10;
let b = 2;
let c = (a + b);
let d = (a - b);
let e = (a * b);
let f = (a / b);
console.log(c);
document.write(c);
console.log(d);
document.write(d);
console.log(e);
document.write(e);
console.log(f);
document.write(f);*/

//3
/*let c = 15;
let d = 2;
let result = (c + d);
document.write(result);*/

//4
/*
let a = 10;
let b = 2;
let c = 5;
document.write(a + b + c);*/

//5
/*
let a = 17;
let b = 10;
let c = (a - b);
let d = 7;
let result = (c + d);
document.write(result);*/

//6
/*let name = prompt('enter your name');
alert(name);*/

//7
/*let number = prompt('enter your number');
let a = (number * number);
alert(a);*/

//8
/*let sec = 1;
let min = 60;
let hour = 60;
let day = 24;
let month = 30;
let secMin = (sec * min);
let secHour = (secMin * hour);
let secDay = (secHour * day);
let secMonth = (secDay * month);
console.log(secMin);
console.log(secHour);
console.log(secDay);
console.log(secMonth);*/

//9
/*
let hour = '11';
let min = '09';
let sec = '59';
let time = `${hour}:${min}:${sec}`;
console.log(time);
document.write(time);*/

//10
/*
let a = 5;
let b = (a * a);
console.log(b);
document.write(b);*/

//11 - не сделал

//12 - не сделал

//13
/*let str = "Hello World";
console.log(str);
document.write(str);*/

//14
/*let str1 = 'Hello ';
let str2 = 'World!';
let a = (str1 + str2);
console.log(a);
document.write(a);*/

//15
/*
let name = "Vasiliy";
let age = 26;
document.write(`Hi, my name is ${name}! I am ${age} years old!`);*/

//16
/*let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);
document.write(str[0],str[2],str[4]);*/

//17 - не сделал
/*
let num = '12345';
let a = (num[0] + num[1]);
console.log(a);*/

//18
/*let a = 'js';
console.log(a.toUpperCase());
document.write(a.toUpperCase());*/


//19
/*let a = 'JS';
console.log(a.toLowerCase());
document.write(a.toLowerCase());*/

//20
/*let a = 'я вчу javascript!';
console.log(a.length);
document.write(a.length);*/

//21
// let a = 'я вчу javascript!';
// console.log(a.substr(2,4));
// console.log(a.substr(6));
// let b = (a.substr(2,4));
// let c = (a.substr(6));
// let d = (b + c);
// console.log(d);
// document.write(d);

//22
// let a = 'я вчу javascript!';
// console.log(a.indexOf('вчу'));

//23
// let a = 'я вчу javascript!';
// console.log(a.split(''));

//24 - по моему он такой-же, как и 23

//25
// let firstName = prompt('Your name');
// let lastName = prompt('You surname');
// let age = prompt('Your age');
// console.log(`My name is ${firstName}. My surname ${lastName} and i am a ${age} years old.`);

//26
// let a = 'Hello word!';
// console.log(a.charAt(0));
// console.log(a.charAt(4));
// console.log(a.charAt(5));

//27
// let a = 'first';
// let b = 'second';
// let c = 'third';
// let d = a.concat(b,c);
// console.log(d);

//28
// let a = 'Hello world, welcome to the universe.';
// console.log(a);



// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// console.log(myFish);
// var removed = myFish.splice(2, 0, 'drum');
// console.log(myFish);

// var numbers = [ 1, -12, 8, -4, 25, 42 ];
// function condition(value, index, array) {
//     var result = false;
//     if (value > 0) {
//         result = true;
//     }
//     return result;
// };
// var passed = numbers.every(condition);
// document.write(passed); // false

// var animal = {
//     eats: true
//   };
//   var rabbit = {
//     jumps: true
//   };

  
// // rabbit.__proto__ = animal;
// rabbit.__proto__ = animal;
// // в rabbit можно найти оба свойства
// alert( rabbit.jumps ); // true
// alert( rabbit.eats ); // true

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let userCancel = 'Отменено пользователем!';
let userError = 'Доступ запрещён!';
let userWellcome = 'Добро пожаловать!';

let login = prompt('Enter login');

if (login === null) {
    alert(stouserCancelp)
} else if (login !== adminLogin ) {
    alert(userError)
} else if (login === adminLogin) {
    let password = prompt('Enter your password');
    
    if (password === null) {
        alert(stouserCancelp)
    } else if (password !== adminPassword) {
        alert(userError)
    } else if (password === adminPassword) {
        alert(userWellcome)
    }
}

