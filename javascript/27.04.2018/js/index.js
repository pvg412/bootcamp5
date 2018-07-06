'use strict';

// /*
//     Создать переменную message, в которую записать строку
//     результата запроса ввода пользователя (prompt)
//
//     Затем для переменной inLowerCase надо присвоить
//     результат вызова метода обработки строки message так,
//     чтобы все символы строки были в нижнем регистре.
//
//     Для переменной inUpperCase - в верхнем регистре.
// */
//
// // Заменить '' на message и вызов метода
//
// let message = prompt('Hello World');
//
// let inLowerCase = message.toLowerCase();
// let inUpperCase = message.toUpperCase();
//
// console.log(message);
// console.log(inLowerCase);
// console.log(inUpperCase);
//



// --------------------------------------------------------------------
//
// /*
//   Есть 3 переменные в которых хранится  размер
//   составляющих блочной модели в формате Npx,
//   где N это целое число.
//
//   Используя эти переменные, запишите в
//   переменную totalWidth общую ширину
//   блока в формате Npx.
//
//   К примеру "сумма" '20px' и '30px' будет равна '50px'.
//
//   Если все верно, то в консоли будет выведена строка '125px'
// */
//
//
// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";
//
// let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + 'px';
//
// console.log(parseInt(padding));
// console.log(totalWidth); // '125px'
//



// --------------------------------------------------------------------
//
// /*
//   Есть 3 переменные в которых хранится  размер
//   составляющих блочной модели в формате Npx,
//   где N это число с плавающей запятой.
//
//   Используя эти переменные, запишите в
//   переменную totalWidth общую ширину
//   блока в формате Npx.
//
//   К примеру "сумма" '20.20px' и '30.25px'
//   будет равна '50.45px'.
//
//   Если все верно, то в консоли будет
//   выведена строка '125.85px'
// */
//
// const padding = "20.25px";
// const border = "5.15px";
// const contentWidth = "100.45px";
//
// let totalWidth = parseFloat(padding) + parseFloat(border) + parseFloat(contentWidth) + 'px';
//
// console.log(totalWidth); // '125.85px'
//




// --------------------------------------------------------------------
//
// /*
//   Реализовать скрипт подсчета общей суммы покупки
//
//   Всегда есть 2 числа с плавающей запятой, после запятой
//   всегда 2 знака!
//   Необходимо сложить и вывести результат в консоль.
// */
//
// const a = 0.1;
// const b = 0.2;
// const c = 0.3;
//
// // Исправить вычисления
// const summ = a + b + c;
// let x = 15.2;
// let y = 15.3;
// console.log(x + y);
// console.log(summ);
// console.log(summ.toFixed(1));
// console.log(summ.toFixed(3));
// console.log('0.6' === summ.toFixed(1)); // должно быть true









// ------------------------------------ Модуль 2 ----------------------------

// /*
//   Число участников лотореи 250 человек.
//
//   Переменной winner присвойте результат выражения,
//   на основе Math.random, которое вернет
//   целое число от 1 до 250 включительно.
// */
// let winner = Math.floor(Math.random() * 250);
// console.log(`Победитель является обладателем номера ${winner}!`);



// -------------------------------------------------------------------------
//
// /*
//   Создайте поиск отелей.
//
//   Пользователь с помощью prompt должен ввести число от 1 до 5.
//
//   Проверить что пользователь ввел именно цифру от 1 до 5.
//   Если введенные данные не валидны, вывести alert с текстом
//   "Неверный ввод, возможные варианты 1-5!"
//
//   Если же пользовател ввел валидное число,
//   в зависимости от числа, используя if/else или switch,
//   вывести alert с одной из строк:
//
//     1 - "Каталог хостелов"
//     2 - "Каталог бюджетных отелей"
//     3 - "Каталог отелей ***"
//     4 - "Каталог отелей ****"
//     5 - "Каталог лучших отелей"
// */
//
// let enterNumber = prompt('Enter number from 1 to 5.');
//
// let answer = enterNumber;
// console.log(answer);
//
// if (enterNumber >=5 || enterNumber <= 0) {
//    alert('Not valid. Please, enter number from 1 to 5.')
// } else if (enterNumber === '1') {
//   alert('Каталог хостелов')
// } else if (enterNumber === '2') {
//   alert('Каталог бюджетных отелей')
// } else if (enterNumber === '3') {
//   alert('Каталог отелей ***')
// } else if (enterNumber === '4') {
//   alert('Каталог отелей ****')
// } else if (enterNumber === '5') {
//   alert('Каталог лучших отелей')
// }
//


// ------------------------------------------------------------------------

/*
  В переменную num записывается случайное число

  Используя ветвления запишите в переменную type
  строку "even" если num четное, и "odd" если не четное.
*/

// const num = Number.parseInt(Math.random() * 100);
// let type = num % 2 === 0 ? 'odd' : 'even';
//
// console.log(`${num} is ${type}`);



// ------------------------------------------------------------------------

/*
  Время состоит из:
    часов(hours)
    минут (minutes)
    секунд(seconds).

  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45

  Составляющие времени не гарантированно состоят из 2-х цифр!

  Напишите скрипт который проверяет каждую составляющую
  и добавлят 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;
//
// let test = hours;
// if (hours <=10) {
//   hours = '0' + hours
// } else {
//   hours = hours
// }
// console.log(test);
//
// let time = `${hours}:${minutes}:${seconds}`;
//
// console.log('Time is: ', time);






// ------------------------------------ Модуль 3 ----------------------------

// ------------------------------------------------------------------------

/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
//
// console.log(users.length); // 4
//
// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax




// ------------------------------------------------------------------------

/*
  Есть массив имен пользователей.
  Используя методы массива выполнить следующие операции.
*/

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
//
//
// // Удалить из начала массива нулевой элемент и вывести в консоль результат.
// console.log(users.shift());
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
//
// // Удалить из конца массив последний элемент и вывести в консоль результат.
// console.log(users.pop());
// console.log(users); // ["Poly", "Ajax"]
//
// // Добавить в начало массива любое имя
// console.log(users.unshift('dr'));
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
//
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users.push('candy', 'wandy'));
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]



// ------------------------------------------------------------------------

/*
  Попросить пользователя ввести произвольную строку.

  Используя методы строки преобразовать ее в массив.
  Вывести в консоль длину массива.

  Используя цикл, перебрать массив и последовательно
  вывести элементы массива в консоль.
*/

let string = prompt('Enter word or letters');
let arr = string;

let index = string.indexOf('a');
console.log(index);
for (let i = 0; i < string.length; i += 1) {

}

console.log(typeof arr);
// Составить массив из строки и записать в переменную arr
console.log(arr.split(''));

// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr
console.log();

// Используя цикл, вывести в консоль все элементы массива arr
console.log();

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
console.log();



// --------------------------------------
// while
// let counter = 0;
//
// while (counter < 10) {
//   console.log("counter: ", counter);
//   // запись counter += 1 аналогична counter = counter + 1
//   counter += 1;
// }
//
// do while
// let input = 0;
//
// do {
//   input = prompt('Введите число больше 10', '');
// } while(input <= 10);
//
// for
// const number = 10;
//
// for(let i = 0; i < number; i += 1) {
//   console.log(i);
// }






// ------------------------------------------ 02.05.2018 ------------------------------------------

// this

// let account = {
//   cash: 12000,
//   spend: function (amount) {
//     this.cash -= amount;
//     console.log(`New balance is ${this.cash}`);
//   },
//   test: function () {
//     console.log(`test ${this.spend}`);
//   }
// }
//
// console.log(account);
// account.spend(1000); // вызов метода
//
// account.name = 'ID000-1';
// console.log(account.name);
// account.name = 'ID000-3';
// console.log(account.name);
//
//
//
//
// Object.defineProperty(account,'name', {
//   value: 'ID000-1',
//   writable: true,
//   enumerable: true,
// });
//
// console.log(account.name);
// account.name = 'ID000-3';
// console.log(account.name);
//
// // hasOwnProperty - метод, который дает задачу искать только в объекте, который мы указали
//
//
// const petya = {
//   name: 'Petya',
//   showName () {
//     console.log(this.name);
//   }
// };
// petya.showName();
//
//
// const person = {
//   name: 'Max',
//   age: 20,
//   green:
// }



// при стрелочной функции, this определяется местом, где он укахан.



/*
const hotel = {
  name: 'Resort',
  showThis: function () {
    const test = () => {
      return this        // в this попадет объект hotel - мы этоуказываем в строке (` hotel.showThis(); `)
    };
    console.log(test()); // запускаем функцию test
  },
  test: () => {          // <-- пример того, как делать не нужно
    return this
  }
}

hotel.showThis(); // запускаем метод showThis
console.log(hotel.test()); // <-- консоль примера того, как делать не нужно
*/

/*
const hotel =  {
  name: 'qwe'
};

const hotel2 =  {
  name: 'asd'
};

const hotel3 =  {
  name: 'zxc'
};

const hello = function (clientName, stars) {
  return `${clientName} wellcome ${this.name} ${stars}`
};

hotel.wellcome = hello;

// console.log(hotel.wellcome());
// delete hotel.wellcome();
// console.log('wellcome' in hotel);

// метод функции call - запустить ту или инную функцию в контексте конкретного объекта
console.log(hello.call(hotel)); // запустить функцию - 'hello' в контексте  объекта - 'hotel'
console.log(hello.call(hotel2, 'Samy')); // через запятую, мы прописываем параметр, который --->
// ---> переается в функцию hello на метсро clientName
console.log(hello.call(hotel3, 'Petya', 4));

// метод функции apply - принимает в себя только два параметар - объект и массив параметров
console.log(hello.apply(hotel3, ['Petya', 5]));

// метод функции  bind - (жесткая привязка) - с его помощью, мы можем чётко сказать, какой
// контекст будет использоваться в той или инной функции

const test = document.querySelector('#test');
console.log(test);
function showThis() {
  console.log(this);
}
showThis();
const bindThis = showThis.bind(window);
test.addEventListener('click',showThis.bind(window));
console.log(bindThis);
*/


// constructor - (результатом работы конструктора всегда будет Object)
// для создания множества однотипных объктов с разными параметрами(ключами, своствами)
// конструкторы создаются с помощью обычных функций
// имя функции конструктора принято писать с заглавной буквы

// function Human() {
//
// }
//
// let man = new Human();
// man.name = 'Max';
//
// console.log(man);

// function Person(name, age) {
//   // this = {} // сначала создаем пустой объект 'this'
//   this.name = name;
//   this.age = age;
//   //return this
// }
//
// const jane = new Person('Jane', 25)
// console.log(jane);
// const den = new Person('Den', 30)
// console.log(den);

// function Person (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function() {
//     console.log(`My name is ${this.name}`);
//   };
//   this.showAge = function() {
//     console.log(`My age is ${this.age}`);
//   }
// }
//
// const jane = new Person('Jane', 25)
// // console.log(jane);
// jane.showName(); // My name is Jane
// jane.showAge(); // My age is 25
// const den = new Person('Den', 30)
// // console.log(den);
// den.showName(); // My name is Den
// den.showAge(); // My age is 30


// function Person (name, age) {
//   const forName = 'My name is' // приватная (частная) переменная
//   const forAge = 'My age is'
//   this.name = name;
//   this.age = age;
//   this.showName = function() {
//     console.log(`${forName} ${this.name}`);
//   };
//   this.showAge = function() {
//     console.log(`${forAge} ${this.age}`);
//   }
// }
//
// const jane = new Person('Jane', 25)
// console.log(jane);
// console.log(jane.name);
// console.log(jane.forAge);
// jane.showName();
// jane.showAge();


// function Student(name = 'Student', modules = 0) {
//   this.name = name;
//   this.modules = modules;
//   this.learn = function(theme) {
//     this.modules =+ 1;
//     return `Student ${this.name} learn ${theme}`
//   }
// }
//
// console.log(new Student('mick', 5));
// console.log(new Student('jane', 3));



// ------------------------------------------- DOM ---------------------------------------

// DOM (document object models) - объектная модель документа
// тег (teg) - тот html код, который прописан в редакторе вручную
// элементы (elements)- код, который прописан на основе кода тегов html
// все наши элементы имею древо-видную структуру - один родитель и дети

// const body = document.body;
// console.log(body);
// childNode    -
//
// parrent для родительских
// child для детей (lastchild, firstchild, childnode, )
// previos для соседей


// console.log(document.querySelector('#title')); // любой селектор можно передать через querySelector
// console.log(document.querySelectorAll('.item')); // выберет все селекторы, с классом .item


// matches - совпадение
// const p = document.querySelector('p');
// console.log(p.matches('.text')); // спрашиваем: (есть ли в элементе 'p' класс '.text') консоль выдаст false
// console.log(p);



// innerHTML    - выведет в консоль всё дерево html (и теги и контент)
// innerHTML    - всегда перезаписывает (стирает старое и записывает новое)
// textContent  - выведет в консоль только контент тегов



// classList    - метод для работы с классами элементов DOM
// title.classList.add('big')    - add - для добавления класса 'тег.classList.add('класс который добавляем')'
// title.classList.remove('big') - remove - удалить класс
// title.classList.toggle('big') - toggle - выключит если есть, включить если нет



// attr -
// const a = document.querySelector('a');
// console.log(a);
// console.log(a.hasAttribute('href'));
// hasAttribute - есть ли там такой атрибут
// getAttribute - получить значение атрибута
// setAttribute - добавить атрибут в тег





// data     -
// dataset  -
// как создавать: data- (дата дефис - стандартная запись) через дефис пишем имя data-animals="bird"



// appendChild    - метод, всегда вставляет в конец того контейнера, в который мы указали первой записью
// в какой элемент.appenChild(что вставить в элемент)
// // const h1 = document.querySelector('h1');
// // h1.textContent = 'Hello';
// // console.log(h1);
//
// // const div = document.querySelector('div');
// // div.appenChild(h1);
// div.insertBefore(h1,document.querySelector('#title'));

// after    - div.append(h1);
// before   - div.before(h1);
// replace  - div.replace

// append - в конец контейнера (выбираем контейнер и говорим, что в него нужно вставить В КОНЕЦ)
// prepend - вставить в самое начало (выбираем контейнер и говорим, что в него нужно вставить В НАЧАЛО)

// document.querySelector('ul').before(h1); // поставится перед ul
// document.querySelector('ul').after(h1);  // после ul

//
// const list = document.querySelector('.list');
// list.before(h1);
// div.replaceWith(h1); // способ поменять местами элементы



// incertAdjacentHTML - в отличие от способа innerHTML - не перезаписывает, а создает и редактирует новую
// beforebegin - перед элементом
// afterend    - после элемента
// beforeend   - заходит в элемент и внутри него вставит в конец
// afterbegin  - заходит в элемент и внутри него вставит в начале



// clone - способ клонирование выбранного нами элемента
// const article = document.querySelector(.'article');
// const clone = article.clonNode(true); // скопирует все, что есть в элементе с классом
// const clone = article.clonNode(false); // скопирует только сам элемент с классом
// console.log(clone);





// createDocumentFragment - по сути оболочка, в которую мы копируем элементы, а потом все эти элементы вставляем в DOM
// const frag = document.createDocumentFragment();



// console.log(history);  - выведет в консоль историю
// console.log(location); - информация о сайте
// console.log(navigator);- выводит в консоль всю доступную информацию о пользователе


// --------------------------------------- События --------------------------
// listener - слушатели событий
/*
  На одну и ту-же кнопку можем вешать сразу несколько событий.
  Если на одной кнопке навешано много событий, выполняются они в порядке очереди

  addEventListener - способ назначения слушателя событий
  one.addEventListener('click', first); odd - переменная, addEventListener - способ,
                                              'click' - какое событие,
                                              first - функция,которая будет выполненая после события (передавать без круглых скобок, которые запускают функцию)

  так-же мы можем нашего слушателя (addEventListener) - удалить
  one.removeEventListener('click', withRemoveListener);


  this при обработчике событий
  function showThis() {
    console.log(this);
  }
  showThis();
  one.addEventListener('click', showThis);




  ------------------------------- event --------------------------------
function showEvent(event) {
  console.log(event.target); // показывает элемент, на котором всплытие НАЧАЛОСЬ
  console.log(event.currentTarget); // показывает последний элемент, а котором ЗАКОНЧИЛОСЬ всплытие
  console.log(this);
}

  ------------------------------- Всплытие событий --------------------------------





  ---------------- Как отменить стандартное поведение элементов браузера ----------------
  event.preventDefault(); -






  ------------------------------- Делегирование событий -----------------------------------




*/

// ------------------------------ Классная задача 02.05.2018 -----------------------------
// let ulClick = document.querySelector('.menu'); // присваиваем переменной ulCkick навешанный на элемент HTML querySelector
//
// function showItem (event) {
//   let a = event.target;
//   console.log(a);
//   console.log(Array.from(ulClick.children).indexOf(a));
// }
//
// ulClick.addEventListener('click', showItem); //
//
// console.log(ulClick); // выводим в консоль значение переменной ulClick
// console.log(typeof(ulClick)); // смотрим, каким типом является ulClick
// console.log(ulClick.children); // выводим в консоль детей переменной 'ulClick'
