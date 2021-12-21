"use strict"; 

let numberFilms;

function start() {
   numberFilms = +prompt('скільки фільмів ви подивились?', '');
   while(numberFilms == '' || numberFilms == null || isNaN(numberFilms)) {
      numberFilms = +prompt('скільки фільмів ви подивились?', '');
   }
}

start();

const personalMouvisDB = {
   count: numberFilms,
   movies: {},
   actors: {},
   genders: [],
   privat: false
};

function rememberMyFilms (){
   for (let i = 0; i<2; i++) {  

      const a = prompt('Один із останіх пееглянутих фільмів?', ''),
            b = prompt('На скільки його оцінете?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMouvisDB.movies[a] = b;
      } else {
         i--;
      }
   }
}

rememberMyFilms ();



function detectPersonalLevel(){
   if (personalMouvisDB.count < 10) {
      console.log('Подивились доволі мало фільмів');
   } else if (personalMouvisDB.count >= 10 && personalMouvisDB.count < 30) {
      console.log('Ви класичний глядач');
   } else if (personalMouvisDB.count >= 30) {
      console.log('Ви кіноман');
   } else {
      console.log('Відбулася помилка');
   } 
}

detectPersonalLevel();


function showMyDB(hidden) {
   if (!hidden) {  
      console.log(personalMouvisDB);
   } 
}

showMyDB(personalMouvisDB.privat);

function writeYourGeners(){
   for (let i = 1; i<=3; i++ ) { 
      personalMouvisDB.genders[i-1] = prompt(`Ваш любимий жанр під номером ${i}`);
   }
}
writeYourGeners();