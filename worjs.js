"use strict"; 

// Умови
//const num = 52;

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

let num = 20;

function showFirstMessage(text) {
   console.log(text);
   let num =10;
   console.log(num);
}

showFirstMessage("HEllo World");
console.log(num);

function calc(a, b) {
   return (a+b);
}
console.log( calc(4, 5) );
console.log( calc(9, 5) );
console.log( calc(15, 57) );


function ret() {
   let num = 50;
   return num;
}

const anotherNum = ret();
console.log(anotherNum);

const good = function(){
   console.log("Hello")
};