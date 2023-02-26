// Задание 1
// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

// Задание 2
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

const data = JSON.parse(dataInfo);
console.log(data);

// Задание 3
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

const content = document.querySelector('.content');

data.forEach(element => {

    const contentEl = document.createElement('div');
    const img = document.createElement('img');
    const setup = document.createElement('p');
    const punchline = document.createElement('p');
    const id = document.createElement('h5');

    img.src = element.img;
    setup.textContent = element.setup;
    punchline.textContent = element.punchline;
    id.textContent = element.id;

    content.appendChild(contentEl)
    contentEl.appendChild(id);
    contentEl.appendChild(setup);
    contentEl.appendChild(punchline);
    contentEl.appendChild(img);

});

// img.src = data[0].img;
// setup.textContent = data[0].setup;
// punchline.textContent = data[0].punchline;
// id.textContent = data[0].id;





// Задание 4
// 1. Создать все необходимые заголовки, параграфы изображения(из
//     данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости





