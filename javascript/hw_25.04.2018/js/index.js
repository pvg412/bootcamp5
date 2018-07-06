'use strict';

// --------------------------------- Домашка ----------------------------------
/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
/*

function createPostCard() {
    let mainDiv = document.createElement('div'); // создаем DOM div
    mainDiv.setAttribute('class', 'post');
    console.log();

    let img = document.createElement('img'); // создаем DOM img
    img.setAttribute('src', 'http://via.placeholder.com/400x150');
    img.setAttribute('alt', 'post__image');
    img.classList.add('post__image');
    mainDiv.appendChild(img);

    let h2 = document.createElement('h2'); //создаем DOM h2
    h2.classList.add('post__title'); // создаем класс для h2
    h2.innerText = 'Lorem ipsum dolor'; // контент h2
    mainDiv.appendChild(h2); // добавляем DOM в наш div

    let p = document.createElement('p');
    p.classList.add('post__text');
    p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
    mainDiv.appendChild(p);

    let ul = document.createElement('ul');
    ul.classList.add('actions', 'post__actions');
    mainDiv.appendChild(ul);

    let li = document.createElement('li');
    li.classList.add('actions__item');
    let btn = document.createElement('button');
    btn.classList.add('actions__btn');
    let span1 = document.createElement('span');
    span1.classList.add('actions__icon', 'actions__icon--like');
    let span2 = document.createElement('span');
    span2.classList.add('actions__count');
    span2.innerText = '0';

    // добавляем вышесозданные элементы в необходимые им элементы
    btn.appendChild(span1); // добавляем в btn - span
    btn.appendChild(span2); // добавляем в btn - span
    li.appendChild(btn);

    // клонируем li
    let li2 = li.cloneNode(true);
    let li3 = li2.cloneNode(true);

    // добавляем вторые классы
    li.children[0].children[0].classList.add('actions__icon--like');
    li2.children[0].children[0].classList.add('actions__icon--dislike');
    li3.children[0].children[0].classList.add('actions__icon--fav');

    // добавляем li в ul
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);

    console.log(mainDiv);
    return mainDiv;

}

// createPostCard(); // запускаем функцию
document.body.appendChild(createPostCard());
*/


function createPostCard(post) {

    let postCardHTML = `
    <div class="post">
        <img class="post__image" src=${post.img} alt="post image">
        <h2 class="post__title">${post.title}</h2>
        <p class="post__text">${post.text}</p>

        <ul class="actions post__actions">
            <li class="actions__item">
                <button class="actions__btn ">
                    <span class="actions__icon actions__icon--like"></span>
                    <span class="actions__count">${post.stats.likes}</span>
                </button>
            </li>
            <li class="actions__item">
                <button class="actions__btn">
                    <span class="actions__icon actions__icon--dislike"></span>
                    <span class="actions__count">${post.stats.dislikes}</span>
                </button>
            </li>
            <li class="actions__item">
                <button class="actions__btn">
                    <span class="actions__icon actions__icon--fav"></span>
                    <span class="actions__count">${post.stats.fav}</span>
                </button>
            </li>
        </ul>
    </div>`;
    return postCardHTML;
}

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 6,
            dislikes: 2,
            fav: 3
        }
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 124,
            dislikes: 8,
            fav: 36
        }
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 800,
            dislikes: 36,
            fav: 147
        }
    }
];

function makeCards(posts) {
    let result = '';
    for (let item of posts) {
            result += createPostCard(item);
    }
    return result;
}

let sum = `<ul>${posts.reduce((acc, next) => acc + `<li>${createPostCard(next)}</li>`, '')}</ul>`;

console.log(sum);

document.body.insertAdjacentHTML('beforeEnd', makeCards(posts));

// document.body.insertAdjacentHTML('beforeend', createPostCard(posts[0]));
// document.body.insertAdjacentHTML('beforeend', createPostCard(posts[1]));
// document.body.insertAdjacentHTML('beforeend', createPostCard(posts[2]));
// console.log(createPostCard(posts[0]));