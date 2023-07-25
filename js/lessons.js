//const hours = 14;
//const minutes = 1;

//let timestring;
//if (minutes) {
    //console.log(`${hours}г ${minutes}хв.`);
//} else {
   // console.log(`${hours}г ${minutes}хв.`);
//}

//Розгалуження
//const userInput = Number(prompt('Введіть число'));//
//вказуємо з інверсією '!'
//console.log(typeof userInput);
//if (!userInput) {//
  //console.log("Це нуль");
//} else if (userInput > 0) {//
   // console.log("Це позитивне число");
//}
//else {
  //console.log("Це негативне число");  
//}

//Вкладені розгалуження
const a = 120;
const b = 180;

//if (a > 100 && b > 100) {
  //if (a > b) {
    //console.log(a);
  //} else {
   // console.log(b);
  //}
//} else {
  //console.log(b + 512);
//}
//або тернарним скорочуємо запис

if (a > 100 && b > 100) {
  console.log(a > b ? a : b);
} else {
  console.log(b + 512);
}

