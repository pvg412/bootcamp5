'use strict'


// ------------------------- Асинхронный код ------------------------

// console.log('qwe');
// setTimeout (function () {
//   console.log('Goodbye');
// }, 2000); // 2000 м/сек - время задержки выполнения
// console.log('sdfghj');

//    setTimeout - с какой задержкой будет выполнятся код
//    setInterval - с каким интервалом (периодичностью) будет осуществляться повторение кода

// const timerId = setTimeout(callback, delay);

// function sayHello () {
//   console.log('Hello!');
// }

// const timerId = setTimeout(sayHello, 5000); // будет выполнен третим по очереди
// const timerI = setTimeout(sayHello, 4000); // будет выполнен вторым
// const timerID = setTimeout(sayHello, 3000); // будет выполнен первым

// console.log(timerID);
// console.log(timerI);
// console.log(timerId);

// clearTimeout(timerId);  // функция, чтобы остановить setTimeout

// const timerInt = setInterval(callback, delay); // будет работать бесконечно, пока мы его не остановим
// const timerInt = setInterval(function() {
//   console.log('I love async JS');
// }, 1000);

// this - в асинхронном функции (setTimeout или setInterval) ведёт себя так-же, как и в обычных условиях
// (имеется ввиду стрелочные и простые функции)

// интервал работает с меньшей периодичностью, если вкладка открыта в фоновом режиме

// Date - объект
// let date = new Date();
// console.log(date);

// let date = new Date("March 4, 2017");
// console.log(date);

// new Date(year, month, date, hours, minutes, seconds, ms);
// месяц и день недели начинаются отсчет с цифры "0", как в массивах или объектах
// let date = new Date (2000, 5, 8, 12, 0, 0, 0);
// console.log(date);


// ------------- стандартные методы для работы с датами и временем -----------------

// let date = Date.now();
// console.log(date);

// let date = new Date();
// console.log('date:' + date);
// console.log('getDate():', date.getDate());
// console.log('getDay():', date.getDay());
// console.log('getMonth():', date.getMonth());
// console.log('getFullYear():', date.getFullYear());
// console.log('getHours():', date.getHours());
// console.log('getMinutes():', date.getMinutes());
// console.log('getSeconds():', date.getSeconds());
// console.log('getMilliseconds():', date.getMilliseconds());
// console.log('getTime():', date.getTime());


// let birth = new Date('December, 4, 1991');
// let today = new Date();
// console.log(today.getFullYear() - birth.getFullYear());





// let secondDate = new Date ();
// secondDate.setFullYear(2017, 6, 14);
// secondDate.setHours(5, 40, 0, 0);
// console.log(
//   `Set: date 2017, 6, 14, 5, 40 соответсвует ${secondDate.getTime()}`
// );
// console.log(
//   `Set: date 2017, 6, 14, 5, 40 соответсвует ${secondDate}`
// );





// for (var i = 1; i <= 3; i++) {
//   setTimeout(function() {
//     console.log(i + 'seconds(s)');
//   }, i * 1000);
// }

// for (var i = 1; i <= 3; i++) {
//   (function (i) {
//     setTimeout(function() {
//       console.log(i + 'seconds(s)');
//     }, i * 1000);
//   })(i);
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function() {
//     console.log(i + 'seconds(s)');
//   }, i * 1000);
// }






// localStorage -
//

// const settings = {
//   theme: 'dark',
//   isAuthenticator: true,
//   options: [1, 2, 3],
// };
//
// let data = JSON.stringify(settings); // метод для превращения в строку JSON.stringify
// console.log(data);
// localStorage.setItem('settings', data); // метод setItem

// let result = localStorage.getItem("theme");
// console.log(result);

// let result = JSON.parse(localStorage.getItem("theme"));
// console.log(result);
// const settingsFromLS = localStorage.getItem("settings");
// console.log(JSON.parse(localStorage(settingsFromLS)));


// removeItem - метод, чтобы удалить информацию из localStorage
// setItem - метод, чтобы добавить информацию в localStorage
// getItem - метод, чтобы получить информацию, которая хранится в localStorage
// JSON.stringify - метод, чтобы превратить в строку
// JSON.parse - преращает информацию в localStorage в рабочий объект (привычная для нас форма записи)
// clear - очистить полностью весь localStorage







// ---

// эта часть отвечает за поле выбора логина
// див обертка создается в HTML. все остальные
// элементы должны должы создаваться как DOM.
// привязка через qurtySelector.
// запуск функции через addEventListener.
// нужно сделать так, чтобы объект, который создается
// в массиве arrAccounts попадал в localStorage



// <div class="app-ctrls">
// <select name="" class="app-ctrls__select">
// <option value="1">1</option>
// <option value="2">qweqwe2</option>
// </select>
// <button class="app-ctrls__btn">Show Profile</button>
// </div>



class Account {
  constructor (login = 'Default', email = 'example@excample.com', friendsCount = 0, count = 'Default', name = 'Default',
country = 'Default', city = 'Default', birthday = 'Default', about = 'Default', avatar = 'Default') {
    this.login = login;
    this.email = email;
    this.friendsCount = friendsCount;
    this.count = count;
    this.name = name;
    this.country = country;
    this.city = city;
    this.birthday = birthday;
    this.about = about;
    this.avatar = avatar;
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
  let name = document.querySelector(`[name = 'name']`).value;
  let coutry = document.querySelector(`[name = 'country']`).value;
  let city = document.querySelector(`[name = 'country']`).value;
  let birthday = document.querySelector(`[name = 'birthday'`).value;
  let about = document.querySelector(`[name = 'about']`).value;
  let avatar = document.querySelector(`[name = 'avatar']`).value;
  let account = new Account(log, email, count, name, country, city, birthday, about, avatar);

  let result = arrAccounts.some(function (element) {
    return element.login === account.login || element.email === account.email;
  })
  if (!result) {
      arrAccounts.push(account);
  } else {
    return
  }
  // localStorage.setItem(arrAccount);
}

let butt = document.querySelector('.btn');
butt.addEventListener('click', getFormValue);
console.log(arrAccounts);
