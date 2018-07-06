'use strict';

/*-----------------------------------------------------------------------------------------*/

class Account {
    constructor(name, login, email, country, city, birth, about, link) {
        this.name = name;
        this.login = login;
        this.email = email;
        this.country = country;
        this.city = city;
        this.birth = birth;
        this.about = about;
        this.link = link;
    }
}
let arrAccount;
if (JSON.parse(localStorage.getItem('users')) !== null) {
    arrAccount = JSON.parse(localStorage.getItem('users'));
}
else {
    arrAccount = [];
}
// let arrAccount = JSON.parse(localStorage.getItem('users'));
// console.log(arrAccount);
function getForm(event) {
    event.preventDefault();
    let name = document.querySelector(`[name='name']`).value;
    let login = document.querySelector(`[name='login']`).value;
    let mail = document.querySelector(`[name='mail']`).value;
    let country = document.querySelector(`[name='country']`).value;
    // console.log(count);
    let city = document.querySelector(`[name='city']`).value;
    let birth = document.querySelector(`[name='birth']`).value;
    let about = document.querySelector(`[name='about']`).value;
    let link = document.querySelector(`[name='link']`).value;
    let account = new Account(name, login, mail, country, city, birth, about, link); //создаем account - новый экз. класса и задаем ему значение полей инпут (7 верхних строчки)
    console.log(account);
    let result = arrAccount.some(function (element) { //проверка - если вводимый логин  и почта уже существ. - то не добавлять в массив
        return element.login === account.login || element.email == account.email //здесь названия полей емаил и логин надо брать с class Account: login и email, а не mail
    });
    if (!result) { //иначе - добавить логин в массив
        arrAccount.push(account);
        localStorage.setItem('users', JSON.stringify(arrAccount));
    }
    console.log(arrAccount);
}
document.querySelector('.subm').addEventListener('click', getForm);
// localStorage.clear();
let divApp = document.querySelector('.app-ctrls');
let select = document.createElement('select');
select.classList.add('app-ctrls__select');
divApp.appendChild(select);
let btn = document.createElement('button');
btn.classList.add('app-ctrls__btn');
btn.textContent = 'show profile';
divApp.appendChild(btn);
// let option1 = document.createElement('option');
// option1.setAttribute('value', '1');
// option1.textContent = 'dfghj';
// select.appendChild(option1);
for (let item of arrAccount) {
    let option1 = document.createElement('option');
    option1.textContent = item.name;
    option1.setAttribute('value', item.name);
    select.appendChild(option1);
    console.log(item.name);
    console.log(option1);
}

let newArr;
function selector() {
    let selectValue = document.querySelector('.app-ctrls__select').value;
    // console.log(selectValue);
    newArr = arrAccount.find(function (elem) {
        return elem.name === selectValue;
    });
    // console.log(newArr);
    let divCard = document.querySelector('#card');
    divCard.innerHTML = '';
    let imageCard = document.createElement('img');
    imageCard.setAttribute('id', 'userImage');
    imageCard.setAttribute('src', newArr.link); // link - помилка!!!
    let h4 = document.createElement('h4');
    h4.setAttribute('id', 'playerName' );
    h4.textContent = newArr.name;
    divCard.appendChild(imageCard);
    divCard.appendChild(h4);
}
document.querySelector('.app-ctrls__btn').addEventListener('click', selector);
console.log(newArr);
// document.querySelector('button').style.display = 'none';
// в индексе добавить див с классом, в жс внизу достуч. до него, и этот новый див реплейс-вис с дивом формы
// document.querySelector('#card').replaceWith(divApp);
//*