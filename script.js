'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button')[3]; // Робить псевдо масив і відбирати елемент потрібно по індексу
// console.log(btns[1]);


// const criles = document.getElementsByClassName('circle');
// console.log(criles);

// const hearts = document.querySelectorAll('.heart'); // Якщо працюєм з СSS селектором (КРАПКА, #) ставиться

// hearts.forEach(item => {
//    console.log(item);
// });

// const oneHeart = document.querySelector('div'); // Цей метод відбирає перший елемент по порядку який йому попадеться
// console.log(oneHeart);



const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      criles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');



box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'backround-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
criles[0].style.backgroundColor = 'yellow';


// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
// }


hearts.forEach(item => {
   item.style.backgroundColor = 'green';
});


const div = document.createElement('div'); // Сворює блок (Вказуєш який потрібно)

// const text = document.createTextNode('jskfd'); НЕ використовується

div.classList.add('black'); // Додаєм йому стиль класс з CSS файлу

wrapper.append(div); // Добваляє в кінці блоку
// wrapper.appendChild(div);

// wrapper.prepend(div); // Добваляє на початку блоку

// hearts[0].after(div); // після перед елементом вставити
// hearts[0].before(div);

// wrapper.insertBefore(div, hearts[1]); // Вставлє ЕЛ (який ЕЛ вставити,  перед яким) - СТАРИЙ МЕТОД

//  criles[0].remove(); // удаляє елемент

// wrapper.removeChild(hearts[1]); // // удаляє елемент - СТАРИЙ МЕТОД

//  hearts[0].replaceWith(criles[0]); // Заміняє один елемент на інший ( перше вказуєш який ел замінити - в методі на який.)

// wrapper.replaceChild(criles[0], hearts[0]); // Заміна файлів - СТАРИЙ МЕТОД


div.innerHTML = '<h1>Hello World</h1>'; // Добавляє динамічно формує структуру сайту

// div.textContent = 'hello'; // Метод Тільки для тексту


// div.insertAdjacentHTML("beforebegin", '<h2>HELLO</h2>'); // вставляє ПЕРЕД елементом 
// div.insertAdjacentHTML("afterend", '<h2>HELLO</h2>'); // всатвляє ПІСДЯ елементу


// div.insertAdjacentHTML("afterbegin", '<h2>HELLO</h2>'); // всатвляє на початоку елементу (в середені)
// div.insertAdjacentHTML("beforeend", '<h2>HELLO</h2>'); // всатвляє в кінець елементу (в середені) 





