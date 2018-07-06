"use strict";

// Два способа создать массив
// let arr = [];
// let a = new Array();

// let firstArray = [1,2,3];
// let secondArray = new Array(5,6,7,8);
// console.log(firstArray, secondArray);
// console.log(firstArray.length); //Знайти довжину масива
// let arr = [1,2,3,[5,6,[54,56,57,58],7]];
// console.log(arr);
// [Считаем вложенность по запятым.]

// replace (Меняем место необходимого массива)
// let firstArray = [1,2,3];
// firstArray[1] = 100;
// firstArray[3] = 6;
// firstArray[6] = 25;
// console.log(firstArray);

// push (Добавляем в конец)
// let firstArray = [1,2,3];
// // firstArray[3] = 6;
// firstArray.push(10);
// firstArray.push(12);
// console.log(firstArray);

// pop (Удаляем последний )
// let firstArray = [1,2,3];
// let del = firstArray.pop();
// console.log(del);
// console.log(firstArray);

// shift Удаляем первую цифру
// let firstArray = [1,2,3,4];
// console.log(firstArray.shift());
// console.log(firstArray);

// unshift Добавляет первую цифру
// let firstArray = [1,2,3,4];
// firstArray.unshift(27);
// console.log(firstArray);

// indexOf Ищет под каким порядковым номером находится то или иное значение.
// let firstArray = [1,2,3,4];
// console.log(firstArray.indexOf(3));
// console.log(firstArray);

// includes Поиск по значению массива.

// let firstArray = [1,2,3,4];
// console.log(firstArray.includes(3));
// firstArray.push('test');
// console.log(firstArray.includes('test'));
// console.log(firstArray.includes('t'));

// Ищем имя на сайте
// let users = ['Jon', 'Frank', 'Mick'];
// let newUser = prompt('Enter name');
// console.log(users.includes(newUser));

// splice start. Вырезает из момента ..().

// let firstArray = [10,8,7,5];
// let newArr = firstArray.splice(1,2); //(1- откуда начнем обрезать, 2- сколько штук надо обрезать)
// console.log(newArr);
// console.log(firstArray);

// slice start/ Он копирует и вырезает из массива. Удобнее.

// let firstArray = [10,8,7,5];
// let newArr = firstArray.slice(1, 3); //(1- откуда начнем обрезать, 3 - место где надо остановиться, но не включая его)
// console.log(newArr);
// console.log(firstArray);

// reverse

// let firstArray = [10,8,7,5];
// console.log(firstArray.reverse());

//concat / Создает новый массив. Задать новую переменную 'і' и записать результат в новую переменную.
// let firstArray = [10,8,7,5];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(newArray);
// console.log(result);
// console.log(newArray);
// console.log(firstArray);

// sort / Сортировка по алфавитному порядку
// let numbers = [2, 1, 4, 3, 5];
// let clients = ['Boof', 'Zoog', 'Aago'];
// console.log(clients.sort());
// console.log(numbers.sort());
// console.log(clients);
// console.log(numbers);



// Задачка №1
// Вгадати тварину загадану компютером
// компютер загадує випадкову тварину з списку
// просить користувача ввести свій варіант
// відбувається перевірка значень компютера і користувача
// Виводить через alert результат, вгадав чи не вгадав. якщо не вгадав тоді додатково показує що було загадано.

// let animals = ["cat","dog","rabbit","bird","fish"];
// let rand = Math.floor(Math.random() * animals.length);
// let message = prompt('which animals computer chose? "cat","dog","rabbit","bird","fish"');
// let a = animals[rand];
// if (message === a) {
//     alert('ok')
// }   else {
//     alert(`Wrong ${a}`)
// }





// let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];
// let a = Math.floor(Math.random() * quotes.length);
// let b = quotes[a];
// alert(b);







// Циклы:
// 1. while
// let number = 1;
// let arr = [];
// while (number < 10) {
//     arr.push(number);
//     number++;
// }
// console.log(arr);



// 2. do - while
// let condition = false;
// do {
//     console.log('done');
// }
// while (condition);



// 3. for
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let arr = [5,8,'w','wewqr'];
// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         // break - выполнит итеррации, но остановится перед (в нашем случае) 3 и выключит цикл;
//         // continue - выполнит все итеррации, кроме (в нашем случае) 3;
//     }
//     console.log(i);
// }


// задание - нужно вывести в консоль, только парные числа
for(let i = 0; i <= 10; i+=2) {
    console.log(i);
}