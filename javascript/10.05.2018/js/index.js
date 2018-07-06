'use strict';

/*
const source = document.querySelector('#qwe'),innerHtml.trim();

const temp = Handlebars.compile(source);
console.log(temp);

const context = {
    'city' : 'London'
}
*/




/*
         /!*Шаблон меню*!/
const source = document.querySelector('#menu').innerHTML.trim();
//
// console.log(source);
//
const template = Handlebars.compile(source);
// console.log(typeof template);
//
const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
};
const markup = template(menuData);
// console.log(markup);
const container = document.querySelector('#menu-container');
container.innerHTML = markup;*
/

/*

        /!*Шаблон галлереи*!/
const src = document.querySelector('#gallery').innerHTML.trim();

const templ = Handlebars.compile(src);

const galleryItems = {
    images:[
        { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
        { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
        { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
        { img: 'https://placeimg.com/300/150/people', text: 'people' },
        { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
        { img: 'https://placeimg.com/300/150/any', text: 'random' }
    ]
};

const mark = templ(galleryItems);

const contain = document.querySelector('.gallery-content');
contain.innerHTML = mark;
*/





/*

        /!*Шаблон галлереи через способ перебора массива reduce*!/

const galleryItems = [
    {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
    {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
    {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
    {img: 'https://placeimg.com/300/150/people', text: 'people'},
    {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
    {img: 'https://placeimg.com/300/150/any', text: 'random'}
];

const container = document.querySelector('.gallery-content');
const source = document.querySelector('#gallery-item').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = galleryItems.reduce((acc, item) => acc + template(item), '');
console.log(markup);
container.innerHTML = markup;

*/



/*
        /!*перебрал через reduce*!/

const listItems = [
    { name: 'item 1', count: 2 },
    { name: 'item 2', count: 4 },
    { name: 'item 3', count: 12 },
    { name: 'item 4', count: 29 },
];

const container = document.querySelector('.list');
const source = document.querySelector('#menu').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = listItems.reduce((acc, item) => acc + template(item), '');
container.innerHTML = markup;
*/



/*
const listItems = {
    itemsArr:[
        { name: 'item 1', count: 2 },
        { name: 'item 2', count: 4 },
        { name: 'item 3', count: 12 },
        { name: 'item 4', count: 29 },
    ]
}
*/















        /*Шаблоны для телефонов*/

/*let phones = [
    {
        id: "1",
        categoryId: "1",
        name: "Apple iPhone 5c",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 823,
        image: "uploads/iphone5c-selection-hero-2013.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "2",
        categoryId: "1",
        name: "Apple iPhone 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 953,
        image: "uploads/51u6y9Rm8QL._SY300_.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "3",
        categoryId: "4",
        name: "Lenovo A6000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 764,
        image: "uploads/_35%20(1).JPG",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "4",
        categoryId: "5",
        name: "Nokia Lumia 1520",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/Lumia1520-Front-Back-png.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "5",
        categoryId: "3",
        name: "HTC One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "6",
        categoryId: "2",
        name: "Samsung Galaxy S6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    }
];

function createElements(arr) {
    const container = document.querySelector('.card');
    // console.log(container);
    const source = document.querySelector('#card-id').innerHTML.trim();
    // console.log(source);
    const template = Handlebars.compile(source);
    // console.log(template);
    const markup = arr.reduce((acc, item) => acc + template(item), '');
    // console.log(markup);
    container.innerHTML = markup;

    let btn = document.querySelectorAll('.module-card-button');
    let btnArray = Array.from(btn);
    function clickSeeMore(event) {
        if (btnArray.includes(event.target)) {
            event.target.previousElementSibling.classList.toggle('show');
        } else {
            return
        }
    }
    container.addEventListener('click', clickSeeMore);
}
createElements(phones);

let appleBtn = document.querySelector('.filter-apple');
// console.log(appleBtn);

function clickApple() {
    let newPhone = phones.filter(el => el.name.split(' ')[0].toLowerCase() === `${document.querySelector('.text').value.toLowerCase()}`);
    console.log(newPhone);
    createElements(newPhone);
    // console.log(createElements);
}
appleBtn.addEventListener('click', clickApple);

window.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        clickApple();
    } else {
        return;
    }
});*/












        /*Шаблоны для ноутбуков*/
/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.

  Есть массив объектов (дальше в задании), каждый из которых описывает
  ноутбук с определенными характеристиками.

  Поля объекта по которым необходимо производить фильтрацию: size, color, releaseDate.
  Поля объекта для отображения в карточке: name, img, descr, color, price, releaseDate.

  Изначально есть форма с 3-мя секциями, состоящими из заголовка
  и группы чекбоксов (разметка дальше в задании). После того как
  пользователь выбрал какие либо чекбоксы и нажал кнопку Filter,
  необходимо собрать значения чекбоксов по группам.

  Подсказка: составьте объект формата
    const filter = { size: [], color: [], releaseDate: [] }

  После чего выберите из массива только те объекты, которые подходят
  под выбраные пользователем критерии и отрендерите список карточек товаров.

  Каждый раз когда пользователь фильтрует товары, в списке появляются новые
  карточки, соответствующие текущим критериям фильтра.
*/

let a = [];
let b = {};

const c = [];



const laptops = [
    {
        size: 13,
        color: 'white',
        price: 28000,
        releaseDate: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'gray',
        price: 32000,
        releaseDate: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'black',
        price: 35000,
        releaseDate: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'white',
        price: 45000,
        releaseDate: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'gray',
        price: 55000,
        releaseDate: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'black',
        price: 45000,
        releaseDate: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'white',
        price: 65000,
        releaseDate: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'gray',
        price: 75000,
        releaseDate: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'black',
        price: 80000,
        releaseDate: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
];

function drawTags(arr) {
    const source = document.querySelector('#card-id').innerHTML.trim();
    const container = document.querySelector('.card');
    const template = Handlebars.compile(source);
    const markup =  arr.reduce((acc, item) => acc + template(item), '');
    container.innerHTML = markup;

    let btnSee = document.querySelectorAll('.module-card-button');
    let btnArray = Array.from(btnSee);
    function clickSeeMore(event) {
        if (btnArray.includes(event.target)) {
            event.target.previousElementSibling.classList.toggle('show');
        } else {
            return
        }
    }
    container.addEventListener('click', clickSeeMore);
}
drawTags(laptops);

// const filter = {
//     size: [],
//     color: [],
//     releaseDate: [],
// };
//
// let colorArray = laptops.map(item => item.color === 'white' || item.color === 'gray' || item.color === 'black' ? item.color : null);
// let releaseDateArray = laptops.map(item => item.releaseDate === 2015 || item.releaseDate === 2016 || item.releaseDate === 2017 ? item.releaseDate : null);
// let sizeArray = laptops.map(item => item.size === 13 || item.size === 15 || item.size === 17 ? item.size : null);
// // console.log(sizeArray);
// // console.log(colorArray);
// // console.log(releaseDateArray);
//
// let newSizeArray = [...new Set(sizeArray)];
// let newColorArray = [...new Set(colorArray)];
// let newReleaseDateArray = [...new Set(releaseDateArray)];
// console.log(newSizeArray);
// // console.log(newColorArray);
// // console.log(newReleaseDateArray);
// filter.size = newSizeArray;
// filter.color = newColorArray;
// filter.releaseDate = newReleaseDateArray;
// console.log(filter);
// console.log(filter.size[0]);
// console.log(typeof(filter.size[0]));

function handleClickFilter() {
    let siz = document.querySelector('.form');

    let arr = [];
    for (let i of siz) {
        if (i.checked) {
            arr.push(i.value)
        }
    }
    console.log(arr);
    console.log(arr[0]);
    console.log(typeof(arr[0]));

    let filtFunc = function (event) {
        // console.log(event);
        // console.log(event[0].size);
        // console.log(typeof(event[0].size));
        console.log(event.length);

        for (let j = 0; j < event.length; j++) {
            if (parseInt(arr[j]) === event[j].size) {
                console.log(parseInt(arr[j]));
                let newArray = event[j];
                console.log(newArray);
                return drawTags(arr);
            }
        }
    };
    filtFunc(laptops)
}

document.querySelector('.btn').addEventListener('click', handleClickFilter);
