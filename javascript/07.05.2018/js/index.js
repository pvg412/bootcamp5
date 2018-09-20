'use strict';


/*
                    /!*   Курс валют ПриватБанка   *!/

let btnNal = document.querySelector('#nal');
let firstFetch = function () {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5') // по этой ссылке получаем информацию с сервера (API link)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            console.log('nal', result);
            createHtml(result); // запускаем в fetch функцию createHtml и передаем в неё параметр (result)
        });
};

let btnBnal = document.querySelector('#bnal');
let secondFetch = function () {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(data => data.json())
        .then(result => createHtml(result));
};

/!*
1. Нужно написать функцию, которая будет чертить разметку
2.
 *!/
function createHtml(info) {
    let reduceResult = info.reduce(function (acc, element, i) {
       return acc + `
    <tr>
        <th scope="row">${i + 1}</th>
        <td>${element.ccy}</td>
        <td>${element.buy}</td>
        <td>${element.sale}</td>
    </tr>`
    }, ''); // чтобы аккумулятор знал, сколько ему добавлять строк
    let table = `
<table class="table table-hover table-dark">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Currency</th>
        <th scope="col">Buy price</th>
        <th scope="col">Sell price</th>
    </tr>
    </thead>
    <tbody>
    ${reduceResult}
    </tbody>
</table>`;
    document.querySelector('.container').innerHTML = table;
}

btnNal.addEventListener('click', firstFetch);
btnBnal.addEventListener('click', secondFetch);
// createHtml();
*/



/*  Задача #2 (07.05.2018)   */

/*
1. Нужно чтобы была строка запроса
2.
3.
4.
5.
*/

/*
1. Создать fetch (ссылка для запроса);
2. Нужно найти конечную точну (endpoint);
3. Нужно найти ресурс (resorce) к которому обращаемся;
4. Нужно сфоормировать параметр запроса ? : (тема любая, тип фото, кол-во 9 штук);
5. Перевести из JSON.parse в обычный формат;
6. Использовать данные для отрисовки картинок;
7. Создать функцию, которая отображает галерею (шаблонная строка);
8. Нужно сделать эту галлерею - удобной для пользования;
*/

/*function paintGallery() {
    let value = document.querySelector('.text').value;
    fetch(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&img_type=photo&per_page=9`)
        .then(function (cars) {
            return cars.json()
        })
        .then(function (result) {
            console.log('second then:', result);
            create(result.hits);
        });
}

function create (array) {
    let div = document.querySelector('#container');
    let gallery = array.reduce(function (acc, elem) {
        return acc + `<div class="one">
                <p> ${elem.tags} </p>
                <img src= ${elem.webformatURL} />
            </div>`
    }, '');
    div.innerHTML = gallery;
}

let search = document.querySelector('.btn');
search.addEventListener('click', paintGallery);
window.addEventListener('DOMContentLoaded', paintGallery); // функция, которая запускает функцию, когда страница (html) полностью прогрузится
/!*ниже делаем так, чтобы поиск начинался после того, как мы нажимаем 'enter'*!/
window.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) { // под цифрой '13' - у нас записан uniCode для клавиши 'enter'
        paintGallery();
    } else {
        return;
    }
});*/

/*Часть, в которой добавляем видео*/
// https://pixabay.com/api/videos/?key=8929250-381b43e28bfa30a3211fde2cd&q=yellow+flowers
// https://pixabay.com/api/videos/?key=8929250-381b43e28bfa30a3211fde2cd&q=${value}&video_type=all&per_page=3
// <p> ${elem.tags} </p>

function paintGallery() {
    let value = document.querySelector('.text').value;
    fetch(`https://pixabay.com/api/videos/?key=8929250-381b43e28bfa30a3211fde2cd&q=${value}&video_type=all&per_page=3`)
        .then(function (cars) {
            return cars.json()
        })
        .then(function (result) {
            console.log('second then:', result);
            create(result.hits);
        });
}

function create(array) {
    let div = document.querySelector('#container');
    let gallery = array.reduce(function (acc, elem) {
        return acc + `<div class="one">
               
                <video width="400" height="400" autoplay="autoplay">
                    <source src=${elem.videos.small.url}>
                </video>
            </div>`
    }, '');
    div.innerHTML = gallery;
}

let search = document.querySelector('.btn');
search.addEventListener('click', paintGallery);
window.addEventListener('DOMContentLoaded', paintGallery); // функция, которая запускает функцию, когда страница (html) полностью прогрузится
/*ниже делаем так, чтобы поиск начинался после того, как мы нажимаем 'enter'*/
window.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) { // под цифрой '13' - у нас записан uniCode для клавиши 'enter'
        paintGallery();
    } else {
        return;
    }
});