//Семинар
//Блок 1

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”


// window.addEventListener('load', function (e) {               // описывает процесс когда произойдет событие (загрузка)
//     console.log('Страница загрузилась');
// });

// const butEl = document.querySelector('.button'); 
// butEl.onclick = function () {
//     console.log('Событие onclick'); 
// }

// document.addEventListener('click', function (e) {  
//     console.log('Событие addEventListener');
// });

//Блок 2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали

// document.addEventListener('click', function (e) {  
//     console.log(e.target);
// });

// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль

// const butEl4 = document.querySelector('.button4');

// let count = 0;
// butEl4.onclick = function () {
//     count++;
//     console.log(`Вы нажали ${count} раз`);
// }

// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку

// const butEl5 = document.querySelector('.button5');

// butEl5.onclick = function () {
//    butEl5.textContent = 'Вы нажали на эту кнопку' ;

// }

//Блок 3
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок", данный элемент нужно расположить после кнопки

// const but1El1 = document.querySelector('.button1');
// const txtEl = document.createElement('h1');
// txtEl.textContent = 'Новый заголовок';

// but1El1.onclick = function () {
//     but1El1.parentElement.appendChild(txtEl);
// }

// Создать вторую кнопку, которая будет удалять созданный заголовок h1

// const but1El2 = document.querySelector('.button2');

// but1El2.onclick = function () {
//     but1El2.parentElement.removeChild(txtEl);
// }


// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const but1El3 = document.querySelector('.button3');

// let count = 0;
// but1El3.addEventListener('mouseover', function () {
//     count++;
//     console.log(`вы навели на данную кнопку ${count} раз`);
// });

// but1El3.addEventListener('mouseout', function () {
//     console.log(`Наведения на кнопку больше нет`);
// });

//Блок 4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”

// const but1 = document.querySelector('.button1');                                  // захват кнопки и списка
// const list = document.querySelector('ul');

     
// but1.onclick = function () {                                                      // создали функцию в момент клика происходит действие
//     list.appendChild(document.createElement('li'));                               // Добавили новый элемент в тот момент когда подцепили его к его родителю
//     list.children[list.children.length-1].textContent = 'новый элемент списка';   // обратились к длинне списка всех элементов к последнему элементу и у 
// }                                                                                 // этого элемента обратились к полю текстКонтент что бы добавить текст
    


// Создать кнопку, которая будет удалять первый элемент из созданного списка

// const but2 = document.querySelector('.button2');
// but2.onclick = function () {
//     list.removeChild(list.children[0]);
// }


// Создать кнопку, при клике на которую ей добавляется класс “click”

// const but3 = document.querySelector('.button3');

// but3.onclick = function () {
//     but3.className = 'click';
// }

//Блок 5
// Создайте с помощью javascript новый элемент button

const div = document.querySelector('div');
const btn = document.createElement('button');

div.appendChild(btn);

// Добавьте текст для кнопки “Отправить”

btn.textContent = 'Отправить';

// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

btn.onclick = function () {
    btn.textContent = 'Текст отправлен';
};
