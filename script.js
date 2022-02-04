'use strict';


// ВІЖБІР ЕЛЕМЕНТА ТА МАНІПУЛЯЦІЇ З НИМ

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

//  const p = document.querySelectorAll('p');

//  console.log(p);













//  /// ДИНАМІЧНИЙ СКРІПТ  

//  const script = document.querySelector('script');
//  script.src = "script.js";
//  script.async = false;
//  document.body.append(script);


//  function loadScript(src) {
//    const script = document.querySelector('script');
//    script.src = "script.js";
//    script.async = false;
//    document.body.append(script);
//  }

//  loadScript(script.js);
//  loadScript(worjs.js);









// CLASSLIST

// const btns = document.querySelectorAll('button');

// // console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1)); // показує клас по порядку-без аргумента показує кількість
// console.log(btns[0].classList.add('red', 'sadas')); // Добавляє клас
// console.log(btns[0].classList.remove('blue')); // Видаляє клас
// console.log(btns[0].classList.toggle('blue')); // якщо є клас до видаляє якщо нема то добавляє


// if (btns[1].classList.contains('red')) { // Провіряє на класи і вертає Boolean значення
//    console.log('REDCLASS');
// }

// btns[0].addEventListener('click', () => {
//    // if(!btns[1].classList.contains('red')) {
//    //    btns[1].classList.add('red');
//    // } else {
//    //    btns[1].classList.remove('red');
//    // }


//    btns[1].classList.toggle('red');
// });













// ДЕЛЕГІРОВАННЯ ОБРОБОТКА НА ВСІ ЕЛЕМЕНТИ ОДНАКОВІ В БЛОЦІ

//  ПОТРІБНО У IF Вказувати і перще значення, tagName перевіряє в блоці чи є такі елементи і на них вішаєш подію

// wrapper.addEventListener('click', (e) => {
//    if (e.target && e.target.tagName == "BUTTON") {
//       console.log('Hello');
//    }
// });  

// ЧИ СПІВБАДАЄ ЕЛЕМЕНт З ЧИМОСЬ ШО ВКАЗУЄМ В ПЕРЕДАЧУ МЕТОДУ І ТОДІ ВІДБУВАЄТЬСЯ ДІЯ
// wrapper.addEventListener('click', (e) => {
//    if (e.target && e.target.matches("button.red")) {
//       console.log('Hello');
//    }
// });

// btns.forEach (btn => {
//    btns.addEventListener('click', () => {
//       console.log('Hello');
//    });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);





























// РОБОТА З ДАТАМИ

// const now = new Date(); // ВИДАЄ ПОТОЧНУ ДАТУ
// const now = new Date('2022-01-28'); ПОКАЗУЄ ДАТУ А ЧАС ПОКАЖЕ 00:00:00
// const now = new Date(2022, 1, 28, 20);



// МЕТОДИ ДАТИ

// const now = new Date();

// console.log(now.setHours(18, 40)); 
// console.log(now);


// console.log(now.getFullYear()); // ПОЛУЧАЄМ ТІЛЬКИ РІК
// console.log(now.getMonth()); // ПОЛУЧАЄМ МІСЯЦЬ
// console.log(now.getDate()); // ПОЛУЧАЄМ ДЕНЬ
// console.log(now.getDay()); // ПОЛУЧАЄМ НОМЕР ДНЯ ТИЖНЯ
// console.log(now.getHours()); 
// console.log(now.getUTCHours()); 

// console.log(now.getTimezoneOffset()); 
// console.log(now.getTime());


// let start = new Date();

// for (let i = 0;  i <100000; i++) {
//    let some = i ** 3;
// }

// let and = new Date();

// alert(`цикл відпрацював за ${and - start} мілісекунд`);
// document.querySelector('.box')



















const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;


// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);


// btn.addEventListener('click', () => {
// box.style.height = box.scrollHeight + 'px';
//    console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0; // СКРОЛИТЬ У ВЕРХ САМИЙ

// window.scrollBy(0, 400); // ВІД ТЕКУЩОГО положення СКРОЛИТЬ в НИЗ
// window.scrollTo(0, 400); // ВІД Загальної сторінки СКРОЛИТЬ в НИЗ


