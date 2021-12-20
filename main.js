"use strict"; 

const numberFilms = +prompt('скільки фільмів ви подивились?', '');

const personalMouvisDB = {
   count: numberFilms,
   movies: {},
   actors: {},
   genders: [],
   privat: false
};

const a = prompt('Один із останіх пееглянутих фільмів?', ''),
      b = prompt('На скільки його оцінете?', ''),
      c = prompt('Один із останіх пееглянутих фільмів?', ''),
      d = prompt('Один із останіх пееглянутих фільмів?', '');

personalMouvisDB.movies[a] = b;
personalMouvisDB.movies[c] = d;


console.log(personalMouvisDB);