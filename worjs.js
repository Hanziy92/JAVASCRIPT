"use strict"; 

// Умови
// const num = 52;

// if (num<50) {
//    console.log('Не віно');
// } else if (num>100) {
//    console.log('Не віно');
// } else {
//    console.log('Віно');
// };

// (num === 50) ? console.log('Віно') : console.log('Не віно');

// switch (num) {
//    case 50:
//       console.log('Не віно');
//       break;
//    case 34:
//       console.log('Не віно');
//       break;
//    case 100:
//       console.log('Не віно');
//       break;
//    default:
//       console.log('Не в цей раз');
// }























// Цикли

// let num = 50;

// while (num<55) {
//    console.log(num);
//    num++;
// }


// do {
//    console.log(num);
//    num++;
// }
// while (num<55);

// for (let i =1; i<8; i++) {
//    console.log(num);
//    num++;
// }

// for (let i =1; i<8; i++) {
//    if (i === 6) {
//       break;
//    }
//    console.log(i);
//    i++;
// }


// for (let i =1; i<8; i++) {
//    if (i === 6) {
//       continue;
//    }
//    console.log(i);
// }




























//Функції

// let num = 20;

// function showFirstMessage(text) {
//    console.log(text);
//    let num =10;
//    console.log(num);
// }

// showFirstMessage("HEllo World");


// function calc(a, b) {
//    return (a+b);
// }
// console.log( calc(4, 5) );
// console.log( calc(9, 5) );
// console.log( calc(15, 57) );


// function ret() {
//    let num = 50;
//    return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const good = function(){
//    console.log("Hello")
// };


// const arrow = (a, b) => {return a+b}

// console.log( arrow(5, 6))



























// // методи свойства чисел і рядків

// const str = 'test';

// const arr = [1, 2, 4]; 

// console.log(str.length);
// console.log(arr.length);
// console.log(str.toUpperCase()); // Врхній регістр 
// console.log(str.toLowerCase()); // Нижній регістр



// const frut = "Some fruits";
// console.log(frut.indexOf('fruits'));
// console.log(frut.indexOf('q')); // -1 значить немає такого значення в рядку


// const logg = "Hello World"; 
// console.log(logg.slice(6)); // від аргумента і до кінця
// console.log(logg.slice(6, 11)); // до якого елемента не включаючи його 
// console.log(logg.slice(6, 10));

// console.log(logg.substr(6, 5)); // end arg скільки символів треба вирізати

// // Numbers


// const numer = 12.2;

// console.log(Math.round(numer));

// const test = '12.2px';

// console.log(parseInt(test));  // Зі строки вертає в число заукруглює до цілого 12
// console.log(parseFloat(test));  // вертає дробні числа  12.2




























// Callback function

// function first() {
//    //Do something
//    setTimeout(function(){
//       console.log(1)
//    }, 500)
// }

// function second() {
//    console.log(2);
// }
// first();
// second();


// function learnJS(lang, callback) {
//    console.log(`Я вчу ${lang}`);
//    callback();
// }
// function done() {
//    console.log('Я пройшов урок');
// }
// learnJS('Java Script', done);

















// Об'єкти

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    color: {
//       border: 'blac',
//       bg: 'red'
//    },
//    makeTest: function() {
//       console.log('Test'); 
//    }
// };

// options.makeTest();



// const {border, bg} = options.color; // ДЕСТРУКЦІЯ ОБЄКТА

// console.log(border);




// console.log(Object.keys(options).length); // кількісь файлів в обєкті



// delete options.name; // видаляє з об'єкта


// for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) { 
//          console.log(`Свойсто ${i} має значення ${options[key][i]}`); 
//       } 
//    } else {
//       console.log(`Свойсто ${key} має значення ${options[key]}`);
//    } 
// }


// let counter = 0;
// for (let key in options) {
//    counter++;
// }







































// Масиви

// const arr = [13, 2, 22, 21, 10];
// arr.sort(comperenNum); // СОРТУЄ МАСИВ
// console.log(arr);

// function comperenNum(a, b) {
//    return a -b;
// }

// arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} в середені маиву ${arr}`);
// });

// // console.log(arr.length);

// // arr.pop(); // ВИДАЛЯЄ ОСТАННЄ З МАСИВУ
// // arr.push(10); // ДОДАЄ В КІНЕЦЬ МАСИВУ

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //    console.log(arr[i]);
// // }

// // for (let value of arr) {
// //    console.log(value);
// // }


// const str = prompt('', '');
// const products = str.split(', '); // з рядка в масив
// products.sort();
// console.log(products.join('; ')); // з масива в рядок



































// Передача по ссилці або значенню


// function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for(key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }
//    return objCopy;
// } // поверхосте копіювання

// const numbers = {
//    a: 3,
//    b:5,
//    c: {
//       x:7,
//       g:8
//    }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//    d: 17,
//    e:20
// }



// console.log(Object.assign(numbers, add)); // МЕТОД ДОДАВАННЯ ОБЄКТА ДО ОБЄКТА


// const clone = Object.assign({}, add); // КОПІЮВАННЯ ОБЄКТА
// clone.d = 21;
// console.log(clone);
// console.log(add);




// const oldArray = ['er', 'cw', 'pi', 'ty',];
// const newArray = oldArray.slice(); // МЕТОД КОПІЮВАННЯ МАСИВУ

// newArray[2] = 'dsfg';

// console.log(oldArray);
// console.log(newArray);




// const video = ['youtube', 'hert', 'teryt'],
//       blogs = ['wordpress', 'blogger', 'tiger'],
//       internet = [...video, ...blogs, 'vk', 'fb']; // ... ПЕРЕДАЄ ЕЛЕМЕНТИ МАСИВУ

// console.log(internet);

// function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// const masArr = [2, 5, 7]; 

// log(...masArr); // (...)  ПЕРЕДАСТЬ ПО ЕЛЕМЕНТНО МАСИВ РОЗЛОЖИТЬ ЙОГО НА ЧАСТИНИ


// const sofiArray = ['hg', 'asd'];
// const newSofiArray = [...sofiArray]; // (...) БУДЕ КОМІЯ МАСИВУ!!!!

// const arrOne = {
//    one: 1,
//    two: 2
// };

// const newObjOne = {...arrOne}; // (...)  КОПІЮВАННЯ ОБЄКТА!!!!
// newObjOne.one = 3;
// console.log(newObjOne);
// console.log(arrOne);

























// // ООП
// const soldier = {
//    health: 400,
//    armor: 100,
//    sayHello: function() {
//       console.log('Hello')
//    }
// };

// const jonh = Object.create(soldier); // СТВОРЕННЯ ПРОТОТИМУ



// const jonh = {
//    health: 100
// };

// Jonh.__proto__ = soldier; // СТАРИЙ ВАРІАНТ

// Object.setPrototypeOf(jonh, soldier); // СУЧАСНИЙ МЕТОД

// console.log(jonh.armor);
// jonh.sayHello();










