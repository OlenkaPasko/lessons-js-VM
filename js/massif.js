//Примітивний тип даних
//let value = 1;
//let test = value;

//оновлюємо value
//value += 10;

//console.log('value',value);
//console.log("test", test);
//value += 10; 10 - це тип даних - намбер.Number-примітивний тип даних.
//В нього відбувається копіювання по значенню.Якщо value присвоїти "hello", то 1 заміниться на"hello"-стрінг.
//З примвтивними - дві комірки для пам'яті!

//Складний тип даних
//const array = [1, 2, 3, 4, 5];
//const copy = array;
//array.push(6, 7);
//copy.push(8, 9);

//console.log(array);
//console.log(copy);
//Відповідьв консолі ідентичні та однакові.Браузер розуміє,що це складний тип даних і робить посилання на еррей.
//в даному випадку ми звертаємось до одного і того ж місця і типу даних.
//В складних типах даних - одна комірка для пам'яті.

//Будь який "примітивний тип" - немутабельний.
//1.Всі примітивні мають присвоєння за значенням.
//Знак присвоєння =, перевизначити можна тільки так.Інших методів ніяких не існує.
//let number = 1;
//number += 15;
//console.log(number);

//[]масив або об'єкт - складний тип даних,являється мутабельним.
//const array = [1, 2, 3]
//ми можемо змінити значення без перевизначення.
//array.push(4, 5)
//console.log(array)//оператора = не має,але ми якось змінили значення.