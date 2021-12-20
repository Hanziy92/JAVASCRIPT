"use strict"; 

const num = 52;

if (num<50){
   console.log('Не віно');
} else if (num>100){
   console.log('Не віно');
} else {
   console.log('Віно');
};


(num === 50) ? console.log('Віно') : console.log('Не віно');


switch (num){
   case 50:
      console.log('Не віно');
      break;
   case 34:
      console.log('Не віно');
      break;
   case 100:
      console.log('Не віно');
      break;
   default:
      console.log('Не в цей раз');
}