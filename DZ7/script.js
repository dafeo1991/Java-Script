// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// const elem1 = document.querySelectorAll('.dropdown-item');

// elem1.forEach(elem1 => {
//    elem1 = elem1.classList.add('super-dropdown');

// });

// console.log(elem1);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// const elem2 = document.querySelector('.btn');


// if (elem2.classList.contains('btn-secondary')) {
//     elem2.classList.remove('btn-secondary');

// } else {
//     elem2.classList.add('btn-secondary');

// }

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

// const elem3 = document.querySelector('.menu');
// elem3.classList.remove('dropdown-menu');

// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// const elem4 = document.querySelector('#dropdownMenuButton');
// elem4.id = 'superDropdown';


// 5. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// const elem5 = document.querySelector('[aria-labelledby="dropdownMenuButton"]');

// 1 способ
// elem5.dataset.dd = 3;

// 2 способ
// elem5.setAttribute('data-dd', '3');

// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".

// const elem6 = document.querySelector('.dropdown-toggle');
// elem6.removeAttribute('type');

