/* 1.Різниця між функ:
У звичайній функції контекст визначається в момент запуску.
Для стрілочної в момент створення */

//const foo = () => {
    //console.log(this);
//};візьме контекст глобально з window. Контекст-це спеціальна зміна,яка створена в середині функції.
//стрілочна функція в більшості завжди window
//foo();

//const user = {
    //test() {
        //foo();
    //}

//};
/*2.Функція яка передає дв параметри
foo.call({}5,3)
Коли використовуємо метод call і apply,bind першим аргументом передаємо контекст.
Викликаємо функ.метод кол і першим аргументом передали контекст - {}, тобто пустий об'єкт.
Далі через кому передаємо аргументи які нам потрібні. - 5,3.
call і apply,bind - ці методи використовуються не часто, їх замінили стрілочні функції
bind - коли функція колбек передається в іншу функ.this//
 */
//function showThis() {
    //console.log("This in showThis")
//}
//showThis();//звичайна функція в момент запуску.Window//use strict=>undefined

//const user = {
  //username: "mango",
//};
//user.showContext = showThis;
//user.showContext();//запускаєьтся в контексті юзера

