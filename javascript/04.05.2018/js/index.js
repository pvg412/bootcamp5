'use strict'

// -------------------------------------- CLASS -----------------------------------------

// Работает так-же, как и prototype. Отличается формой записи (синтаксисом).
// Имеет обязательное слово: метод - constructor
//


// -------------------------- форма записи в ES6
// class Human {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   eat () {
//     console.log(`I can eat`);
//   }
//
//   walk () {
//     console.log(`I can walk`);
//   }
//
//   sleep () {
//     console.log(`I can sleep`);
//   }
// }
//
// let man = new Human('Max', 12);
// console.log(man);
// man.walk();

// ------------------------- старая форма запси с prototype
// function Human (name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// Human.prototype.eat = function () {
//   console.log(`I can eat`);
// };
//
// Human.prototype.walk = function () {
//   console.log(`I can walk`);
// };
//
// Human.prototype.sleep = function () {
//   console.log(`I can sleep`);
// };


// --------------------------- static
// static - статичный метод
// принцип заключается в том, что нам не нужно для того,чтобы достучаться к нашему методу, создавать
// переменную (копию нашего класса): let (переменная) = new (констр).
// мы просто пишем имя нашего класса-class (Имя) и потом имя метода
// class Animal {
//   constructor (name = 'Default', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   static indentificator () {
//     console.log(`Hello i am animal`);
//   }
//   static eat () {
//     console.log(`eat`);
//   }
//   sleep () {
//     console.log(`sleep`);
//   }
//   walk () {
//     console.log(`walk`);
//   }
//   logAge () {
//     `${this.name} is ${this.age} year old`
//   }
// }
//
// // наследование с помощью create (так делали ранее)
// // let animal {
// //   name: 'asasd'
// // }
// // let cat = Object.create(animal)
// // cat.name = 'name';
//
// // ключевое слово extends - говорит нам, что класс Dog - будет наследовать все методы класса Animal
// class Dog extends Animal {
//   constructor (name, age, breed) {
//     super(name, age, breed); // обязательное слово super, с использованием extends.
//                       // это слово по сути заменяет форму записи this.name = name
//                       // в super нужно указать те параметры, которые мы хотим получить
//                       // это слово super, мы можем использовать не только внутри конструктора
//                       // но и внутри самого метода
//     this.breed = breed;
//   }
//
//   logAgeFormDog () {
//     return `${super.logAge()} i am qwerty`
//   }
// }
//
// let dog = new Dog('chappy', 5, 'buldog');
// console.log(dog);
// dog.sleep(); // Dog имеет доступ к методам Animal
// console.log(dog.logAgeFormDog());
// // let dog = new Animal();
// // dog.sleep();
// // Animal.indentificator();
// // Animal.eat();
// // dog.eat();



// --------------------------------- Calculator with CLASS -------------------------------
// class CalcConstructor {
//   constructor() {
//
//   }
//   getValue () {
//     this.a = +prompt('enter a number');
//     this.b = +prompt('enter b number');
//     if(isNaN(this.a) || isNaN(this.b)){
//         return alert('number incorrect');
//     }
//     console.log(this.a, this.b);
//     console.log(this);
//     let a = document.querySelector('#a')
//     a.textContent = `your first number ${this.a}`
//     let b = document.querySelector('#b')
//     b.textContent = `your second number ${this.b}`
//   }
//   sum () {
//     let sum = document.querySelector('#sum');
//     sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
//   }
//   minus () {
//     let minus = document.querySelector('#minus');
//     minus.textContent = this.a - this.b;
//   }
//   mult () {
//     let mult = document.querySelector('#mult');
//     mult.textContent = this.a * this.b;
//   }
//   static divide () {
//     let divide = document.querySelector('#divide');
//     divide.textContent = this.a / this.b;
//   }
//   static pow () {
//     let pow = document.querySelector('#pow');
//     pow.textContent = Math.pow(this.a,  this.b)
//   }
// }
//
// let calculator = new CalcConstructor();
// let start = document.querySelector('.get-Value')
// start.addEventListener('click', calculator.getValue.bind(calculator));
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// console.log(calculator);
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
// document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));
// document.querySelector('.divide').addEventListener('click', CalcConstructor.divide.bind(calculator));
// document.querySelector('.pow').addEventListener('click', CalcConstructor.pow.bind(calculator));



// ---------------------------------- DYNAMIC MENU ------------------------------
// 1) Зверстати структуру HTML header+nav>ul>li*6^^.content
// 2 ) в .content буде наповнення сайту
// 3) nav буде липким меню
// 4) Коли хедер ховається за межі екрану меню стає липким і фіксується на верху браузера
// 5) Коли меню прикріпляється до верху зявляється логотип (LOST) біля пункту меню HOME
// 6) Коли меню кріпиться до верху .content збільшується на 5%.
// Корисні команди
// offsetTop
// window.scrollY

// let navMenu = document.querySelector('#navigation');
// let navTop = navMenu.offsetTop;
//
// function Scroll () {
//   if (window.scrollY >= navTop) {
//     document.body.style.paddingTop = `${navMenu.offsetHeight}px`;
//     navMenu.classList.add('fixed-nav');
//   } else {
//     navMenu.classList.remove('fixed-nav');
//   }
// };
// window.addEventListener('scroll', Scroll);







// ---------------------------------------------------------------------
/*
  Создать класс Account с полями login,
  email и friendsCount.

  Для класса Account, создать метод getAccountInfo(),
  который выводит в консоль значения всех полей.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.
*/

class Account {
  constructor (login = 'Default', email = 'example@excample.com', friendsCount = 0) {
    this.login = login;
    this.email = email;
    this.friendsCount = friendsCount;
  }
  getAccountInfo () {
    return `${this.login} and ${this.email} and ${this.friendsCount}`;
  }
}

let arrAccounts = [];
function getFormValue (event) {
  event.preventDefault(); // дает команду, чтобы по нажатии конпки, метод свои прямые функции не выполнял
  let log = document.querySelector(`[name = 'login']`).value;
  let email = document.querySelector(`[name = 'email']`).value;
  let count = document.querySelector(`[name = 'counter']`).value;
  let account = new Account(log, email, count);
  let result = arrAccounts.some(function (element) {
    return element.login === account.login || element.email === account.email;
  })
  if (!result) {
      arrAccounts.push(account);
  } else {
    return
  }
  localStorage.setItem(arrAccount);
}

let butt = document.querySelector('.btn');
butt.addEventListener('click', getFormValue);
console.log(arrAccounts);






// -------------------
