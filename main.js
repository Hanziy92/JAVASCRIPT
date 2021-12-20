"use strict"; 

const numberFilms = +prompt('скільки фільмів ви подивились?', '');

const personalMouvisDB = {
   count: numberFilms,
   movies: {},
   actors: {},
   genders: [],
   privat: false
};


for (let i = 0; i<2; i++) {  
   const a = prompt('Один із останіх пееглянутих фільмів?', ''),
         b = prompt('На скільки його оцінете?', '');
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMouvisDB.movies[a] = b;
   } else {
      i--;
   }
}

if (personalMouvisDB.count < 10) {
   console.log('Подивились доволі мало фільмів');
} else if (personalMouvisDB.count >= 10 && personalMouvisDB.count < 30) {
   console.log('Ви класичний глядач');
} else if (personalMouvisDB.count >= 30) {
   console.log('Ви кіноман');
} else {
   console.log('Відбулася помилка');
} 


console.log(personalMouvisDB);