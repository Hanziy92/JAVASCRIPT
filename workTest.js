"use strict"; 

const inputDataArray = [ 
   {parentName: null, itemName: 'programming'}, 
   {parentName: 'mobile', itemName: 'ios'}, 
   {parentName: 'mobile', itemName: 'android'}, 
   {parentName: 'backend', itemName: 'nodejs'}, 
   {parentName: 'frontend', itemName: 'angular'}, 
   {parentName: 'frontend', itemName: 'react'}, 
   {parentName: 'programming', itemName: 'web'}, 
   {parentName: 'frontend', itemName: 'vue'}, 
   {parentName: 'backend', itemName: 'nodejs'}, 
   {parentName: 'web', itemName: 'backend'}, 
   {parentName: 'programming', itemName: 'mobile'}, 
   {parentName: 'web', itemName: 'frontend'}
];



const getResult = (inputDataArray, parentName) => {
   let resultObj = {};

   for (let i = 0; i < inputDataArray.length; i++) {
      if (inputDataArray[i].parentName === parentName) {
         resultObj[inputDataArray[i].itemName] = getResult(inputDataArray, inputDataArray[i].itemName);
      }
   }
   return resultObj;
};

console.log(JSON.stringify(getResult(inputDataArray, null), null, 4));




// output: {
//    "programming": {
//       "web":{
//          "backend":{
//             "node.js": {}
//          },
//          "frontend": {
//             "angular": {},
//             "react": {},
//             "vue": {}
//          }
//       },
//       "mobile": {
//          "ios": {},
//          "android": {}
//       }
//    }
// } 
