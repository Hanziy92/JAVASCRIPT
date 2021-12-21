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

