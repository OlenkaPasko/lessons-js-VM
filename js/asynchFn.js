//promise
[1, 2, 3, 4].map((element, index, array)=> {
    
});//джс так влаштований, що як тільки map і колбек він має
//доситуп до element, index, array(масива).Точно по такій схемі працює проміс

//const promise = new Promise((resolve, reject) => {
    //r//esolve(10);   
//});//resolve, reject дефолтні функції
//const promise = new Promise((resolve, reject) => {
  //reject(10);//
//});
//const promise = new Promise((ok,error)=>{});- перший аргумент відповідає за
//успішне виконнання, а другий помилкове.Але назви resolve, reject - це домовленість.
/*Для чого потрібні проміси?Для того, щоб із синхронного зробити асинхрн.СетТймаут використовувати 
не обов'зково.СетТймаут щоб імітувати затримку в коді
Бувають частини оду довго виконуються. асинхрн.щоб швидше працювало*/

let total = 0;
for (let i = 0; i < 1000000000000; i++) {
    total += 1;
}//довго працюватиме в браузері.

const result = new Promise((resolve, reject) => {
  let total = 0;
  for (let i = 0; i < 1000000000000; i++) {
    total += 1;
  }
});
console.log(result);
//так задопомого. проміс швидше
