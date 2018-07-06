"use strict";

/*let num = 3;
alert(num);*/

/*let a = 17;
let b = 10;
let c = (a - b);
console.log(c);
let d = 7;
console.log(d);
let result = (c + d);
console.log(result);
document.write (result);*/


/*let a = 'hello';
console.log(a.substring(1,3));*/
/*substring(1,3) - продемонстрировать нам буквы от 1 до 3, не включая 3
*
* substr - включая цифру 3*/


let b = 'hello';
console.log(b.endsWith('o'));
console.log(b.startsWith('h'));
console.log(b.includes('r'));
console.log(b.indexOf('h'));
console.log(b.repeat(5));
/*
endsWith, startsWith - команды, с помощью которых мы проверяем правильность записи строки в её начале или окончании (чувствительны к реистру)
includes - правда ли то, что в этой переменной есть бука ('r')
indexOf - какая по номеру эта буква в переменной
repeat - какое количество раз нам повторить слово в консоли
 */



/*

document.write ('Hello World!');
let x = 5;
x = 20;
console.log('first', x);
x = "word";
console.log('second', x);
let y = 10;
console.log(y);
/!*const z = 50;
z = 60;
console.log(z);*!/

/!*let q = "qwerty";
console.log(typeof q);

let question = confirm ('are you student?')
console.log(question);

let question2 = prompt ('how old are you?')
console.log(question);*!/



//математические операции
/!*let a = 5;
let b = 10;
console.log(a + b); //15*!/

let s = 5;
let o = 6;
console.log(s += o); //11
/!*a = a + b  -  это все равно что a += b   -   таким образом мы переназначем a *!/

//let c = a + b; //третий сопосб математической операции


//let g = 5;
/!*console.log(g++);
console.log(g);*!/
//console.log(++g);


let a = 10;
console.log(a++);
console.log(++a);

console.log(20+30+(50+'2')); //при выполнении данной операции мы получаем число 50502;

let aq = true; //булво значение всегда принимает число 1
let bq = 11;
console.log(aq + bq);


let qwe = undefined;
let qwr = 10;
console.log(qwe + qwr); //NaN - not a number
console.log(typeof NaN);


//вычитание
let t = 10;
t--;
console.log(t); // получим цифру 9

let ji = Infinity;
let ju = 100;
console.log(ji * ju);
console.log(typeof (ji * ju));



let p = 2;
let m = 8;
console.log(p % m); //с символом % мы получим не делимый остаток, который отобразится в консоли

let l = 2.1;
let v = 2.55;
console.log((l * v).toFixed(3));
//.toFixed(3) - в скобках мы указываем, до какого числа, после десятичного знака - округлять.
//.toFixed - переделывает число в строку(string)
//чтобы из строки сделать число, то перед именем переменной нужно поставить знак + console.log(+(l*v))

console.log(parseInt('10px')); // переделает строку в число
console.log(parseFloat('25.5px')); // переделает строку в число

/!*
Короткая форма записи для команды console.

z.log+tab = console.log(z);


Если использовать let, то js не будет заменять или дублировать переменную, а выдаст ошибку в консоли.
По этой причине нужно использовать let или даже const

let x = 20;
let x = 30;


При такой форме записи, в консоли возникнет ошибка, с указанием номера строки, в которой просходит конфликт.
Использую let, мы предупреждаем появление несозданных ранее переменных

console.log(z);
let z = 5;
*!/



let name = prompt('Enter your name');
let age = prompt('Enter your age');
console.log(`My name is ${name} and i am ${age}`);
/!*С помощью символа `` (ёё) в рамках которого мы будем указывать желаемый текст. Пример правильной записи указан выше*!/


let rd = 'Hello World';
let splitWorld = rd.split('').reverse();
console.log(splitWorld.join(''));
/!*Результат смотри в браузере*!/*/
