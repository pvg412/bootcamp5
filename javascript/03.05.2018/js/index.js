'use strict';

// ----------------------------- РАСЧЕТ СТОИМОСТИ кг ШАШЛЫКА --------------------------

let total = document.querySelector('.total');
let form = document.querySelector('.form');

function calc () {
  let price =  document.querySelector('#price').value;
  let range = document.querySelector('#quantity').value;
  document.querySelector('.amount').innerText = range;
  total.textContent=`${(price * range).toFixed(2)} $`;
}

form.addEventListener('input', calc);
calc();
window.addEventListener('DOMContentLoaded', calc);


// ------------------------------------ КАЛЬКУЛЯТОР -----------------------------------

// 1) Створити калькулятор за допомогою конструктора
// 2) Конструктор має мати такі методи:
// 2.1) getValue - запитати 2 числа в користувача і зберегти їх в властивості обєкта
// 2.2) sum - метод що додає 2 числа;
// 2.3) minus - метод що віднімає 2 числа;
// 2.4) mult -метод що перемножує 2 отриманих числа
// 2.5) devide - метод ділить число а на b
// 2.6) pow - метод що підносить а до степеня b
// 3 ) створити в розмітці 6 кнопок кожна з яких буде запускати свій метод калькулятора
// 4 ) Вивести на екран резльтат роботи кожного метода калькулятора після натискання
//     відповідної кнопки (Наприклад при натисканні на створену кнопку + вивести на екран
//     фразу "Сума = і результат робити метода sum")



// function CalcConstructor () {
//     this.getValue = function () {
//       this.a = +prompt('enter number');
//       this.b = +prompt('enter number');
//       //if (isNan(this.a) && isNan(this.b)) {
//       //  return alert('Йди огородами!')
//       //}
//       console.log(this.a);
//       console.log(this.b);
//       let a = document.querySelector('#a');
//       a.textContent = `Your number 'a' - is ${this.a}`;
//       let b = document.querySelector('#b');
//       b.textContent = `Your number 'b' - is ${this.b}`;
//     }
//     this.sum = function () {
//       let sum = document.querySelector('#sum');
//       sum.textContent = this.a + this.b;
//     }
//     this.minus = function () {
//       let minus = document.querySelector('#minus');
//       minus.textContent = this.a - this.b;
//     }
//     this.mult = () => {
//       let mult = document.querySelector('#mult');
//       mult.textContent = this.a * this.b;
//     }
//     this.divide = () => {
//       let divide = document.querySelector('#divide');
//       divide.textContent = this.a / this.b;
//     }
//     this.pow = () => {
//       let pow = document.querySelector('#pow');
//       pow.textContent = Math.pow(this.a, this.b);
//     }
// };
//
// let calc = new CalcConstructor();
//
// document.querySelector('.get-Value').addEventListener('click', calc.getValue.bind(calc));
// document.querySelector('.minus').addEventListener('click', calc.minus.bind(calc));
// document.querySelector('.mult').addEventListener('click', calc.mult);
// document.querySelector('.divide').addEventListener('click', calc.divide);
// document.querySelector('.pow').addEventListener('click', calc.pow);
// document.querySelector('.sum').addEventListener('click', calc.sum.bind(calc));
//



// ------------------ Объекто ориетированное программирование ----------------------

// __proto__  - объединяет объект в цепь (создаем прототип объекта, для другого объекта)

// const animal = {
//   eat: true,
//   walk: true,
// };

// const cat = {
//   jump: true
// };

// console.log(animal.eat);
// cat.__proto__ = animal; //   <----- так делать не рекомендуется
// console.log(cat);
// console.log(cat.jump);
// console.log(cat.walk);
// console.log(cat.eat);
// console.log(cat);
// let arr = [1, 2, 3];
// console.log(arr);
// {}
// new Object {}


// const cat = Object.create(animal);
// создаем 'cat' и методом Object.create('указываем - кто будет прототипом') - говорим,
// сделай 'cat' - прототипом 'animal'
// console.log(cat);
// cat.jump = true; // добавили ключи 'jump: true'
// console.log(cat);

// как сделать объект без прототипа
// const people = Object.create(null); // метод, чтобы сделать объект без прототипа - нужно написать в
// поле для указания прототипа - 'null'
// console.log(people);



// ---------------------------------------- PROTOTYPE ----------------------------------

// let person = {
//   name: 'Max',
//   age: 35,
// };
// console.log(person);
// new Object()

// Object.prototype.greet = function () {
//   console.log('Hello i am from main obj');
// };
//
// person.greet();
// console.log(person);
//
// let max = Object.create(person);
// console.log(max.name);
// max.greet();
//
// let anna = Object.create(person);
// anna.name = 'Anna';
// console.log(anna);
// console.log(Object.getPrototypeOf(anna));
// console.log(Object.getPrototypeOf(person));
// Object.prototype.showName = function () {
//   console.log(`I am ${this.name}`);
// };
// max.showName();
// anna.showName();


// function Human (name) {
//   this.name = name;
// }
//
// console.log(Human.prototype);
//
// Human.prototype.hello = function () {
//   console.log(`Hello`);
// };
//
// Human.prototype.friends = ['Jony', 'Jah', 'Jackson'];
//
// let man = new Human('Max');
// let anna = new Human('Anna');
// let mick = new Human('Mick');
// console.log(man);
// console.log(anna);
// console.log(mick);
// man.hello();
// anna.hello();
// console.log(man.friends);
// console.log(anna.friends);
// console.log(mick.friends);





// ---------------------------- CALCULATOR НА PROTOTYPE ------------------------------------

// function CalcConstructor () {
//     //  this.getValue = function () {
//     //     this.a = +prompt('enter a number');
//     //     this.b = +prompt('enter b number');
//     //     if(isNaN(this.a) || isNaN(this.b)){
//     //         return alert('number incorrect');
//     //     }
//     //     console.log(this.a, this.b);
//     //     console.log(this);
//     //     let a = document.querySelector('#a')
//     //     a.textContent = `your first number ${this.a}`
//     //     let b = document.querySelector('#b')
//     //     b.textContent = `your second number ${this.b}`
//     // }
//     // this.sum = function () {
//     //     let sum = document.querySelector('#sum');
//     //     sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
//     //     console.log(this.a, this.b);
//     //     console.log(this)
//     // }
//     // this.minus = function () {
//     //     let minus = document.querySelector('#minus');
//     //     minus.textContent = this.a - this.b;
//     // }
//     // this.mult = () =>{
//     //     let mult = document.querySelector('#mult');
//     //     mult.textContent = this.a * this.b;
//     // }
//     // this.divide = () => {
//     //     let divide = document.querySelector('#divide');
//     //     divide.textContent = this.a / this.b;
//     // }
//     // this.pow = () => {
//     //     let pow = document.querySelector('#pow');
//     //     pow.textContent = Math.pow(this.a,  this.b)
//     // }
// }
//
// CalcConstructor.prototype.getValue = function () {
//   this.a = +prompt('enter a number');
//   this.b = +prompt('enter b number');
//   if(isNaN(this.a) || isNaN(this.b)){
//       return alert('number incorrect');
//   }
//   console.log(this.a, this.b);
//   console.log(this);
//   let a = document.querySelector('#a')
//   a.textContent = `your first number ${this.a}`
//   let b = document.querySelector('#b')
//   b.textContent = `your second number ${this.b}`
// };
// CalcConstructor.prototype.sum = function () {
//   let sum = document.querySelector('#sum');
//   sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
//   console.log(this.a, this.b);
//   console.log(this)
// };
// CalcConstructor.prototype.minus = function () {
//   let minus = document.querySelector('#minus');
//   minus.textContent = this.a - this.b;
// };
// CalcConstructor.prototype.mult = function () {
//   let mult = document.querySelector('#mult');
//   mult.textContent = this.a * this.b;
// };
// CalcConstructor.prototype.divide = function () {
//   let divide = document.querySelector('#divide');
//   divide.textContent = this.a / this.b;
// };
// CalcConstructor.prototype.pow = function () {
//   let pow = document.querySelector('#pow');
//   pow.textContent = Math.pow(this.a,  this.b)
// };
//
// let calculator = new CalcConstructor();
// let start = document.querySelector('.get-Value')
// start.addEventListener('click', calculator.getValue.bind(calculator));
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// console.log(calculator);
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
// document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));
// document.querySelector('.divide').addEventListener('click', calculator.divide.bind(calculator));
// document.querySelector('.pow').addEventListener('click', calculator.pow.bind(calculator));



/* ------------------------------- BURGER ------------------------------ */

const menu = {
    size: {
        small: {
            name: 'small',
            price: 100,
            calories: 100,
        },
        large: {
            name: 'large',
            price:250,
            calories:350,
        },
    },
    fillings: {
        cheese: {
            name: 'cheese',
            price:15,
            calories:50,
        },
        salad: {
            name: 'salad',
            price:10,
            calories:10,
        },
        potato: {
            name: 'potato',
            price:10,
            calories:50,
        },
        cucumber: {
            name: 'cucumber',
            price:20,
            calories:30,
        },
        hamon: {
            name: 'hamon',
            price:30,
            calories:50,
        },
    },
    additives: {
        mayo: {
            name: 'mayo',
            price:7,
            calories:50,
        },
        ketchup: {
            name: 'ketchup',
            price:6,
            calories:40,
        },
        spice: {
            name: 'spice',
            price:5,
            calories:0,
        },
        mustard: {
            name: 'mustard',
            price:5,
            calories:5,
        },
    }
};

const BIG = menu.size.large;
const SMALL = menu.size.small;
const CHEESE = menu.fillings.cheese;
const SALAD = menu.fillings.salad;
const POTATO = menu.fillings.potato;
const CUCUMBER = menu.fillings.cucumber;
const HAMON = menu.fillings.hamon;
const MAYO = menu.additives.mayo;
const KETCHUP = menu.additives.ketchup;
const SPICE = menu.additives.spice;
const MUSTARD = menu.additives.mustard;

function Burger (size, filling) {
  this.size = size; // констр. примет в себя параметр размера бургера
  this.fillings = [filling]; // констр. примет в себя параметр одной обязательной начинки
  this.price = size.price + filling.price; // считаем общую цену выбранных добавок
  this.calories = size.calories + filling.calories; // считаем общее кол-во калорий
  this.additives = []; // констр. примет в себя какие-то добавки
}

Burger.prototype.addAdditives = function (additive) {
  let addAdditives = document.querySelector('#addAdditives');
  if (this.additives.includes(additive)) {
    alert(`Sorry, you already choose this ${additive}`);
    return;
  } else {
    this.additives.push(additive);
    this.price += additive.price;
    this.calories += additive.calories;
  }
}

Burger.prototype.additivesList = function () {
  return this.additives.map(elem => elem.name);
}

Burger.prototype.burgerSize = function () {
  return this.size.name;
}

Burger.prototype.totalPrice = function () {
  return this.price;
}

Burger.prototype.totalFat = function () {
  return this.calories;
}

Burger.prototype.mainInfo  = function () {
  return `U are welcome, your ordered ${this.size.name} burger, the price is ${this.price} uah,
  the calories is ${this.calories} c/cal`
}

Burger.prototype.removeAdditives = function (additive) {
  this.price -= additive.price;
  this.calories -= additive.calories;
  return this.additives = this.additives.filter(elem => additive === elem ? null : elem)
}

Burger.prototype.addFilling = function (filling) {
  if (!this.fillings.includes(filling)) {
    this.fillings.push(filling)
    this.price += filling.price
    this.calories += filling.calories
  } else {
    alert('This filling already added in burger')
  }
}

Burger.prototype.showFilling = function () {
  return this.fillings.map(el => el.name);
}

Burger.prototype.removeFilling = function (filling) {
  if (this.fillings.length === 1) {
    alert('You can\'t delete last filling')
    return;
  }
  return this.fillings = this.fillings.filter(el => el === filling ? null : el)
}

let cheesburger = new Burger();
document.querySelector('.addAdditives').addEventListener('click', cheesburger.addAdditives.bind(burger));
console.log(cheesburger);
cheesburger.addAdditives(MAYO);
cheesburger.addAdditives(KETCHUP);
cheesburger.additivesList();
console.log(cheesburger.additivesList());
console.log(cheesburger.burgerSize());
console.log(cheesburger.totalPrice());
console.log(cheesburger.totalFat());
console.log(cheesburger.mainInfo());
console.log(cheesburger.removeAdditives(MAYO));
console.log(cheesburger.addFilling(POTATO));
console.log(cheesburger.showFilling());
console.log(cheesburger.removeFilling(CUCUMBER));
