// Семинар
// Блок 1

// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

//  const blok = document.querySelector('.block');        // указываем элемент с которым будем работать
//  const item = document.createElement('div');          // создаем элемент
//  item.className = 'item';                             // присваеваем элементу класс
//  item.textContent = 'Элемент внутри';                 // присваеваем значение элементу, то что внути 
//  item.style.color = 'blue';                           // задаем стили элементу
//  item.style.border = '1px solid black';
//  item.style.backgroundColor = '#f8f8f8';
//  item.style.padding = '16px'; 
//  item.setAttribute('class', 'item_1');                // добавили блоку класс
//  blok.appendChild(item);                              // добавили в родительский блок созданный элемент


// Блок 2

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const par = document.querySelector('.text');                                    // указываем элемент с которым будем работать
// console.log(par.previousElementSibling);                                        // обратиться к предидущему элементу
// console.log(par.parentElement);                                                 // обратиться к родительскому элементу
// console.log(par.parentElement.previousElementSibling);                          // обратиться к соседу родителя
// console.log(par.parentElement.parentElement.children[0]);                       // обратиться к соседу родителя
// console.log(par.parentElement.parentElement);                                   // обратиться к родителю родителя

// Блок 3

//  С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const elem = document.querySelector('.subtitle');          // указываем элемент с которым будем работать
// let parent = elem.parentElement;                           // создали переменную и поместили информацию о родителе заголовка
// while (parent.className) {                                 // запускаем цикл, пока идем по объектам у которых имя класса существует  
//     console.log(parent.className);                         // выводим значение класса
//     parent = parent.parentElement;                         // переприсваиваем переменную, записываем в нее ссылку на родителя
// }

// let parent = elem.parentNode;
// while (parent.className) {
//     console.log(parent.className);
//     parent = parent.parentNode;
// }

// console.log(elem.parentElement);  
// console.log(elem.parentElement.parentElement); 
// console.log(elem.parentElement.parentElement.parentElement); 

// Блок 4

// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const form = document.querySelector('form');     // указываем элемент с которым будем работать. который содержит два дочерних элемента поле ввода и кнопка 
const input = form.children[0];                    //создали 2 объекта с помощью которых будем управлять элементами - детьми form
const btn = form.children[1];                      // обращаемся к каждому компоненту по отдельности

const text = document.createElement('h2');         // создаем элемент - заголовок
text.textContent = '';                             // изначально он пустой

form.appendChild(text);                            // в объект form добавляем ребенка text

btn.onclick = function () {                        // функция реакции нажатия на кнопку, привязана к кнопке btn
    
    if (input.value.length == 0) {                 // если поле ввода пустое, длинна переменной которая там = 0
        text.textContent = 'вы не заполнили поле ввода';     // выведится надпись
    } else  {
        text.textContent = '';                      // если в поле есть что нибудь оповещение стираем
    }
}

// Блок 5

// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const div = document.querySelector('.content');
const btn = document.createElement('button');
btn.textContent = 'Отправить';
div.appendChild(btn);
btn.addEventListener('click', function () {
    btn.textContent = 'текст отправлен';
} );
