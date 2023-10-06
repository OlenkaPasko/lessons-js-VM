const title = document.querySelector('h1')
//за тегом ніхто не звертається, звертаються за id: #title;
//const title = document.querySelector("#title");
console.log(title);
//але найрозповсюджений спосіб отримання html-елемента за його класом.
//Якщо ми шукаємо не за тегомо, не за айді, то пишемо так:
//const title = document.querySelector(".js-title");
//console.log(title);
//Якщо працюємо з html-елементом краще використовувати console.dir:зручно розкрити у вигляді об'єкту.
//const title = document.querySelector(".js-title");
//console.dir(title.textContent);
//можемо тепер перевизначити текст
//title.textContent="Hello JS"


//ClassList
title.classList.add('title-color');//додати
title.classList.remove('title-color');//видалити
title.classList.toggle('title-color');
title.classList.toggle('title-color');//якщо є клас,він додасть,якщо немає прибере
title.style.fontSize= '50px'//інлайновий спосіби,але це не правило,а як виняток,щоб додати один стиль.
