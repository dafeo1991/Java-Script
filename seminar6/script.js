// Семинар

// Блок 1
// Задание 1

//<div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

// const lin1 = document.querySelectorAll('p');
// const lin2 = document.querySelector('#block');
// console.log(lin2);
// console.log(lin1[0].textContent);

// Задание 2
// Получите ссылку на первый абзац с классом www. и вывести его в консоль



// const lin3 = document.querySelector('.www');
// console.log(lin3.textContent);


// Блок 2
// Задание 1

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 

// const linkEl = document.querySelector('.link');
// linkEl.textContent = 'link text js';
// linkEl.href = 'https://developer.mozilla.org/ru/';
// console.log(linkEl);

// Задание 2
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const imgEl = document.querySelector('.photo');
// imgEl.src = 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-23.jpg';


// Блок 3
// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 

// const content = document.querySelector('.content');
// const newCnt = document.createElement('p');
// newCnt.textContent = 'Новый текстовый элемент';
// content.appendChild(newCnt);
// content.removeChild(newCnt);

// Блок 4
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const counterText = document.createElement('p');

button1.textContent = 'Нажми меня';
button2.textContent = 'Обнулить счетчик';


const content = document.querySelector('.content');

content.appendChild(button1);
content.appendChild(button2);
content.appendChild(counterText);

let counter = 0;
counterText.textContent = (`Совершено ${counter} нажатий`);

button1.onclick = function () {
    counter++;
    counterText.textContent = (`Совершено ${counter} нажатий`);
}

button2.onclick = function () {
    counter = 0;
    counterText.textContent = (`Совершено ${counter} нажатий`);
}


