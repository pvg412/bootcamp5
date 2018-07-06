'use strict';

const galleryItems = [
  { preview: 'img/preview-01.jpeg', fullview: 'img/fullview-01.jpeg', alt: "alt text 01" },
  { preview: 'img/preview-02.jpeg', fullview: 'img/fullview-02.jpeg', alt: "alt text 02" },
  { preview: 'img/preview-03.jpeg', fullview: 'img/fullview-03.jpeg', alt: "alt text 03" },
  { preview: 'img/preview-04.jpeg', fullview: 'img/fullview-04.jpeg', alt: "alt text 04" },
  { preview: 'img/preview-05.jpeg', fullview: 'img/fullview-05.jpeg', alt: "alt text 05" },
  { preview: 'img/preview-06.jpeg', fullview: 'img/fullview-06.jpeg', alt: "alt text 06" },
  { preview: 'img/preview-07.jpeg', fullview: 'img/fullview-07.jpeg', alt: "alt text 07" },
  { preview: 'img/preview-08.jpeg', fullview: 'img/fullview-08.jpeg', alt: "alt text 08" },
  { preview: 'img/preview-09.jpeg', fullview: 'img/fullview-09.jpeg', alt: "alt text 09" },
  { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
  { preview: 'img/preview-11.jpeg', fullview: 'img/fullview-11.jpeg', alt: "alt text 11" },
  { preview: 'img/preview-12.jpeg', fullview: 'img/fullview-12.jpeg', alt: "alt text 12" },
];

function fullView(url, ) {
    let string = `
        <div class='fullview'>
            <img src="${url}" alt="alt text 1">
        </div>`;
    return string;
}
let imgGallery = document.querySelector('.image-gallery');
imgGallery.insertAdjacentHTML('afterBegin', fullView('img/fullview-01.jpeg'));

/*
//- fullview содержит в себе увеличенную версию выбранного изображения из preview, и
// создается динамически при загрузке страницы.
function fullView(url){ //Создаем функцию в которую передаем url для src атрибута картинки
    let string = `<div class="fullview">
<img src="${url}" alt="alt text 1">
</div>`; // Создаем строку с розметкой в которую будет передаваться "${url}".
    return string;
}

let imgGallery = document.querySelector('.image-gallery'); // Получаем доступ к ДОМ элементу в который будем вставлять розметку.
imgGallery.insertAdjacentHTML('afterBegin', fullView('img/fullview-01.jpeg')); // Test в дальнейшем может быть использована.
*/

function preView(data) {
    let string = `<ul class="preview"> 
        ${data.reduce((acc, item) => acc = acc + `<li><img src="${item.preview}" data-fullview="${item.fullview}" alt="${item.alt}"></li>`, '')}</ul>`;
return string;
}
imgGallery.insertAdjacentHTML('beforeend', preView(galleryItems));

let fullViweImage = document.querySelector('.fullview>img');
let active = null;
// let active = document.querySelector('.preview img')

function handleСlickPreview(event) {
    if (active !== null) {
        active.classList.remove('active');
    }
    
    fullViweImage.src = event.target.dataset.fullview;
    fullViewImage.alt = event.target.alt;

    event.target.classList.add('active');
    active = event.target;
}

let previewContainer = document.querySelector('.preview');
previewContainer.addEventListener('click', handleСlickPreview);

// при клике, выбраный элемент из preview должен получить произвольный жлемент выделения









/*
let image = document.querySelector('.preview>img');

let image = {
  tagneme: 'img',
  src: 'img/preview-01.jpeg',
  alt: 'alt text 1',
  dataset: {
    fullView: 'img/fullview-01.jpeg',
  }
};
*/