// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// const elem1 = document.getElementById('super_link');
// console.log(elem1);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

// const elem2 = document.querySelectorAll('.card-link');

// for (let i = 0; i < elem2.length; i++) {
//     elem2[i].textContent = 'ссылка';
    
// }

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const elem31 = document.querySelector('.card-body');
// const elem32 = elem31.querySelectorAll('.card-link');
// console.log(elem32);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const elem4 = document.querySelector('[data-number="50"]');
// console.log(elem4);

// 5. Выведите содержимое тега title в консоль.

//Я такого тега не нашла в теле файла html

// const elem5 = document.querySelector('.title');
// console.log(elem5);



// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// const elem6 = document.querySelector('.card-title');
// console.log(elem6);
// console.log(document.querySelector('.card-title').parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// const card = document.querySelector('.card');
// const elem7 = document.createElement('p');
// elem7.textContent = 'Привет';
// card.prepend(elem7);

// 8. Удалите тег h6 на странице.

// elem8 = document.querySelector('.card-subtitle');
// elem8.remove();

