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



// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       criles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');



// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'backround-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';
// criles[0].style.backgroundColor = 'yellow';


// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
// }


// hearts.forEach(item => {
//    item.style.backgroundColor = 'green';
// });


// const div = document.createElement('div'); // Сворює блок (Вказуєш який потрібно)

// const text = document.createTextNode('jskfd'); НЕ використовується

// div.classList.add('black'); // Додаєм йому стиль класс з CSS файлу

// wrapper.append(div); // Добваляє в кінці блоку
// wrapper.appendChild(div);

// wrapper.prepend(div); // Добваляє на початку блоку

// hearts[0].after(div); // після перед елементом вставити
// hearts[0].before(div);

// wrapper.insertBefore(div, hearts[1]); // Вставлє ЕЛ (який ЕЛ вставити,  перед яким) - СТАРИЙ МЕТОД

//  criles[0].remove(); // удаляє елемент

// wrapper.removeChild(hearts[1]); // // удаляє елемент - СТАРИЙ МЕТОД

//  hearts[0].replaceWith(criles[0]); // Заміняє один елемент на інший ( перше вказуєш який ел замінити - в методі на який.)

// wrapper.replaceChild(criles[0], hearts[0]); // Заміна файлів - СТАРИЙ МЕТОД


// div.innerHTML = '<h1>Hello World</h1>'; // Добавляє динамічно формує структуру сайту

// div.textContent = 'hello'; // Метод Тільки для тексту


// div.insertAdjacentHTML("beforebegin", '<h2>HELLO</h2>'); // вставляє ПЕРЕД елементом 
// div.insertAdjacentHTML("afterend", '<h2>HELLO</h2>'); // всатвляє ПІСДЯ елементу


// div.insertAdjacentHTML("afterbegin", '<h2>HELLO</h2>'); // всатвляє на початоку елементу (в середені)
// div.insertAdjacentHTML("beforeend", '<h2>HELLO</h2>'); // всатвляє в кінець елементу (в середені) 











// ПОДІЯ

// const btn = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// // btn.onclick = function() {
// //    alert('click');
// // };

// // btn.onclick = function() {
// //    alert('second click');
// // };

// // btn.addEventListener('click', () => {
// //    alert('Click');
// // });

// // btn.addEventListener('click', () => {
// //    alert('Second Click');
// // });


// // Получаєм дані про обєкт ПОТРІБНО  В CALLBACK АРГУМЕНТ ДОДАТИ

// // let i = 0;
// const dltElement = (e) => {
//    console.log(e.currentTarget);
//    console.log(e.type);
//    // i++;
//    // if (i == 1) {
//    //    btn.removeEventListener('click', dltElement); // DELETE EVENT
//    // }
// };
 
// // btn.addEventListener('click', dltElement);
// // overlay.addEventListener('click', dltElement);

// btn.forEach(item => {
//    item.addEventListener('click', dltElement, {one: true});
// });


// // ВІДМІНЯТИ СТАНДАРТНЕ ПОВЕДІНКУ БРАУЗЕРА

// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//    e.preventDefault();

//    console.log(e.target);
// });




// DOM


// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); // подучає що є в середені батька
// console.log(document.body.firstNodes); // получаєм перший вузел в батька
// console.log(document.body.lastNodes); // получаєм останій вузел в батька


// console.log(document.querySelector('#current').parentNode); // получає батька елемента на один рівень
// console.log(document.querySelector('#current').parentElement);


// // console.log(document.querySelector('[data-current="3"]').nextSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Получає наступний елемент баька
// console.log(document.body.firstElementChild); // Получає перший елемент баька



// for (let node of document.body.childNodes) {
//    if (node.nodeName == '#text') {
//       continue;
//    }
//    console.log(node);
// }








//  ПОДІЯ НА ТЕЛ

// touchstart -  При нажиманні пальцьом касанія
// touchmove - Коли малець рухається зїздає
// touchend - Коли палець відірвався
// touchenter - коли палець при скальзуванні переходить на елемент то спрацьовує
// touchleave - коли скадьзить і пішов за межі елемента
// touchcancel - коли виходить за межі браузера


// e.touches - список пальців скільки зараз використовується

// e.targetTouches - скільки пальців на елементі

// e.changedTouches - які пальци зробили дію



// window/addEventListener('DOMContentLoaded', () =>{
//    const box = document.querySelector(',box');

//    box.addEventListener('touchstart', (e) => {
//       e.preventDefault();
//       console.log('start');
//       console.log(e.touches);
     


//    });

//    box.addEventListener('touchmove', (e) => {
//       e.preventDefault();
//       console.log('Move');


//    });


//    box.addEventListener('touchend', (e) => {
//       e.preventDefault();
//       console.log('End');

//    });


// });


 const p = document.querySelectorAll('p');

 console.log(p);

 /// ДИНАМІЧНИЙ СКРІПТ  

 const script = document.querySelector('script');
 script.src = "script.js";
 script.async = false;
 document.body.append(script);


 function loadScript(src) {
   const script = document.querySelector('script');
   script.src = "script.js";
   script.async = false;
   document.body.append(script);
 }

 loadScript(script.js);
 loadScript(worjs.js);

