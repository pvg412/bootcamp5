'use strict'

// function audio (event) {
//     console.log(event.keyCode);
//     let arr = document.querySelector(`[data-key = '${event.keyCode}']`);
//     arr.classList.add('playing');
// }
// window.addEventListener('keydown', audio);

// function audio (event) {
//     console.log(event);
//     let arr = document.querySelector(`[data-key = '${event.target.dataset.key}']`);
//     arr.classList.remove('playing');
// }
//
// window.addEventListener('transitionend', audio);


window.addEventListener('keydown', function (e) {
  let arr = document.querySelector(`[data-key = '${event.keyCode}']`);
  let audio = document.querySelector(`audio[data-key = '${event.keyCode}']`);
  audio.play(); // метод запуска audio
  audio.currentTime = 0; // если мы нажмем на кнопку
  if (!arr) {
    return
  }
  arr.classList.add('playing');
})

window.addEventListener('transitionend', function (e) {
  let arr = document.querySelector(`[data-key = '${event.target.dataset.key}']`);
  arr.classList.remove('playing');
})
