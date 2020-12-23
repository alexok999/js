"use strict";
const start = document.querySelector('#start');
// alert(1);
console.log('HI');

let number = 3;
const leftBorderWidth = 1;

const person = 'Alex';
const bool = false;

console.log(bool);
//
const obj = {
    name: 'John',
    age: 25,
    isMarried: false,
};
console.log(obj.name);

//Массив
let arr = ['apple.jpg', 'orange.png', 6, {}, [] ];
console.log(arr[1]);

//Взаимодействие с пользователем


// alert('Hello');
// const result = confirm('Вы тут?');
// const answer = prompt("Вам есть 18 лет?", "18");
// console.log(answer);

// const answer = prompt("Вам есть 18 лет?", "18");
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers);

//Интерполяции строк работает только с косыми лапками (чтобы не плюсовать)
const category = 'toys';
console.log(`http://someurl.com/${category}/5`);

// Операторы

// const isChecked = true,
//         isClose = false;
// console.log(isChecked && isClose);

const isChecked = true,
        isClose = false;
console.log(isChecked || isClose);

console.log(2 + 2 * 2 != 8);