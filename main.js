"use strict"; 

// const personalMouvisDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genders: [],
//    privat: false,
//    start: () => { 
//       personalMouvisDB.count = +prompt('скільки фільмів ви подивились?', '');
//       while(personalMouvisDB.count == '' || personalMouvisDB.count == null || isNaN(personalMouvisDB.count)) {
//          personalMouvisDB.count = +prompt('скільки фільмів ви подивились?', '');
//       }
//    },
//    rememberMyFilms: () => {
//       for (let i = 0; i<2; i++) {  
   
//          const a = prompt('Один із останіх пееглянутих фільмів?', ''),
//                b = prompt('На скільки його оцінете?', '');
   
//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMouvisDB.movies[a] = b;
//          } else {
//             i--;
//          }
//       }
//    },
//    detectPersonalLevel: () => {
//       if (personalMouvisDB.count < 10) {
//          console.log('Подивились доволі мало фільмів');
//       } else if (personalMouvisDB.count >= 10 && personalMouvisDB.count < 30) {
//          console.log('Ви класичний глядач');
//       } else if (personalMouvisDB.count >= 30) {
//          console.log('Ви кіноман');
//       } else {
//          console.log('Відбулася помилка');
//       } 
//    },
//    showMyDB: (hidden) => {
//       if (!hidden) {  
//          console.log(personalMouvisDB);
//       } 
//    },
//    writeYourGeners: () => {
//       for (let i = 1; i<=3; i++ ) { 
//          let gener = prompt(`Ваш любимий жанр під номером ${i}`).toLowerCase();
//          if (gener === '' || gener === null) {
//             console.log('Ви велли некоректні дані');
//             i--;
//          } else {
//             personalMouvisDB.genders[i-1] = gener;
//             personalMouvisDB.genders.sort();
//          }
//       }
//       personalMouvisDB.genders.forEach((item, i) => {
//          console.log(`Любимий жанр ${i+1} - это ${item}`)
//       });
//    },
//    toogleVisibleMyDB: () => {
//       if(personalMouvisDB.privat) {
//          personalMouvisDB.privat = false;
//       } else {
//          personalMouvisDB.privat = true;
//       }
  
//    },
 
// };


// personalMouvisDB.start();
// personalMouvisDB.rememberMyFilms ();
// personalMouvisDB.detectPersonalLevel();
// personalMouvisDB.showMyDB(personalMouvisDB.privat);


// personalMouvisDB.writeYourGeners();
// personalMouvisDB.toogleVisibleMyDB();





// var a = 1;
// if (a) {
//    function foo() {};
//    a += foo;
// }

// console.log(a);


// function foo (time, str, callback) {
//   setTimeout( () => {
//      callback(str + " world!");
//   }, time);  
// }
// foo(3000, "Hello", (responseStr) => {
//    console.log(responseStr);
// });


// function Order(status) {
//    this.status = status;

//    this.showStatus = () => {
//       console.log(this.status);
//    }
// }

// var order = new Order('new');

// order.showStatus();

