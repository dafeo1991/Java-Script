//Лекция

// const productNew = {
//     name: 'стол',
//     price: 2000,
//     count: 2,
//     userRegistred: false,
//     reg: function () {
//         this.userRegistred = true
//     },
//     countProduct: function () {
//         if (this.count > 0) {
//             console.log('Вы можете купить данный товар');
//         } else {
//             console.log('Данный товар нельзя купить');
//         }
//     },
//     buyProduct: function () {
//         if (this.userRegistred) {
//             console.log('Товар в корзине');
//         } else {
//             console.log('Вам необходимо зарегестрироваться');
//         }
//     }
// }

// productNew.countProduct();
// productNew.buyProduct();
// productNew.reg();
// productNew.buyProduct();

// let sale = product;
// sale.price = 1500;
// console.log(product);
// console.log(sale);

// Семинар

// Блок 1
// Задание 1

//Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”

// const weekDay = {
//     1:"Понедельник",
//     2:"Вторник",
//     3:"Среда",
//     4:"Четверг",
//     5:"Пятница",
//     6:"Суббота",
//     7:"Воскресенье"
// };
// console.log(weekDay[2]);

// Задание 2
//Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
//Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
//Удалите свойство surname

// const user = {
//     firstName: 'Darya',
//     surName: 'Feoktistova',
//     age: 31,
//     showAll: function () {
//         let str = '';
//         for (const key in user) {
//             if (key != 'showAll')
//                 str += '-' + user[key];
//         }
//         console.log(str);
//     }
//     // showAll: function () {
//     //     console.log('-' + this.firstName, '-' + this.surName, '-' + this.age);
//     // }
// }

// user.showAll();
// let newProp = prompt('Название свойства');
// user[newProp] = prompt('Введите значение свойства');
// // console.log(user);
// user.showAll();
// delete user.surName;
// user.showAll();

// Блок 2
// Задание 1
// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const weekDay = {};
// for (let i = 0; i < arr1.length; i++) {
//     weekDay[arr1[i]] = arr2[i];

// }
// console.log(weekDay);

// Задание 2
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// const obj = {x: 1, y: 2, z: 3};
// console.log(obj);
// for(const key in obj){
// obj[key]*=obj[key];
// }
// console.log(obj);

// Блок 3
// Задание 1

// Найдите сумму элементов приведенного объекта.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// let sum = 0;
// for (const key in obj) {
//     for (const keyInsite in obj[key]) {
//        sum += obj[key][keyInsite] ;

//     }
// }
// console.log(sum);

// Блок 4

// Создайте объект riddles 
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

// const riddles = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'Ель',
//     count: 0,
//     hints: {
//         hints1: 'Хвойное дерево',
//         hints2: 'Есть иголки'
//     },
//     askQuestion: function () {
//         if (prompt(this.question) == this.answer) {
//             alert('Молодец!');
//             this.count = 0;
//         } else {
//             if (this.count == 0) {
//                 alert('Неверный ответ, первая подсказка: ' + this.hints.hints1);
//                 this.count++;
//             } else if (this.count == 1) {
//                 alert('Неверный ответ, вторая подсказка: ' + this.hints.hints2);
//                 this.count++;
//             } else if (this.count == 2) {
//                 alert('Вы проиграли, правильный ответ: ' + this.answer);
//                 this.count = 0;
//             }
//         }
//     }
// }

// do {
//     riddles.askQuestion();
// } while (riddles.count !=0);
