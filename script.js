'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button')[3]; // Робить псевдо масив і відбирати елемент потрібно по індексу
console.log(btns[1]);


const criles = document.getElementsByClassName('circle');
console.log(criles);

const hearts = document.querySelectorAll('.heart'); // Якщо працюєм з СSS селектором (КРАПКА, #) ставиться

hearts.forEach(item => {
   console.log(item);
});

const oneHeart = document.querySelector('div'); // Цей метод відбирає перший елемент по порядку який йому попадеться
console.log(oneHeart);
