// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('.content');

data.forEach(element => {

    const contentEl = document.createElement('div');
    contentEl.classList.add('class');

    const fact = document.createElement('p');
    const img = document.createElement('img');
    const activity = document.createElement('p');
    const type = document.createElement('p');
    const key = document.createElement('h2');

    fact.textContent = element.fact;
    img.src = element.img;
    activity.textContent = element.activity;
    type.textContent = element.type;
    key.textContent = element.key;

    content.appendChild(contentEl);
    contentEl.appendChild(key);
    contentEl.appendChild(fact);
    contentEl.appendChild(activity);
    contentEl.appendChild(type);
    contentEl.appendChild(img);

});

