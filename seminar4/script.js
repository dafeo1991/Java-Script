//Лекция

// let count = 0;
// while (count<3) {
//     console.log('Привет!!!');
//     count++;
// }

// for (let i = 0; i < 3; i++) {

//     console.log('Привет!!!');
// }

// for (let j = 0; j < 5; j++) {
//     console.log(j);

// }

// let pass;
// let count = 0;

// do {
//     if (count >= 3) {
//         alert('Пароль неверный!')
//     }
//     pass = Number(prompt("Введите пароль"));
//     count++;

// } while (pass !== 234);

//Создание массива

// const array = [];
// array.push(5);
// console.log(array);

// const arr = [1, 2, 'hello'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);

// const user = [];
// const userName = prompt('Ваше имя');
// const userAge = prompt('Возраст');

// user.push(userName);
// user.push(userAge);

// user.push(prompt('Ваше имя'));
// user.push(Number(prompt('Возраст')));

// console.log(user);

// const numbers = [2, 3, 19, 15];
// alert(`Запомни цифры ${numbers}`);
// console.log(numbers.pop());
// console.log(numbers);

// const arr = [1, 2, 3, 7, 19 ];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// const arr = [5, 56, 23, 1, 2, 3, 7, 19];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }


// const arrAnswer = ['елка', 'ёлка', 'ель'];
// const userAnswer = prompt('Зимой и летом одним цветом');

// for (let i = 0; i < arrAnswer.length; i++) {
//     const element = arrAnswer[i];
//     if (element === userAnswer) {
//         console.log("Молодец");
//         break;
//     } else {
//         continue;
//     }
// }


//Лекция

// Блок1
//Задание 1
// Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

// const arr = [1,2,3];
// console.log(arr);


// Задание 2
// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// let num = Number(prompt('Введите размер массива'));
// const arr = [];
// for (let i = 0; i < num; i++) {
//   arr.push(Math.round(Math.random()*100));

// }
// console.log(arr);


// Задание 3
//Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// const arr = ['a', 'b', 'c'];

// for (let i = 0; i < arr.length; i++) {

//     arr[i] = i+1;
// }
// console.log(arr);

// Блок 2
//Задание 1
//Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {

//     arr[i]++;
// }
// console.log(arr);

// Блок 2
//Задание 2
// Узнайте длину следующего массива:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// Блок 2
//Задание 3
// Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// console.log(arr);
// arr.push(4,5);
// console.log(arr);

// Блок 2
//Задание 4
//Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

// const arr = [];
// let size = 5;
// for (let i = 0; i < size; i++) {
//   arr.push(Math.round(Math.random()*100));

// }
// console.log(arr);
// console.log(arr.length);
// arr.splice(3,4);
// // arr.pop();
// // arr.pop();
// console.log(arr);
// console.log(arr.length);

// Блок 3
//Задание 1

// С помощью цикла for выведите в консоль числа от 11 до 33.
// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
// С помощью цикла for выведите в консоль числа от 100 до 0.
// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

// for (let item = 11; item <= 33; item++){
//     console.log(item);
// }

// for (let item = 1; item <= 99; item = item + 2) {
//     console.log(item);
// }

// for (let item = 100; item >= 0; item--) {
//     console.log(item);
// }

// let num = (Math.round(Math.random() * 10));
// console.log(num);
// let count = 0;
// while (num <= 1000) {
//     num = num * 3;
//     count++;
// }
// console.log(num, count);

// Блок 4
//Задание 1
// Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {

//     if (10 > arr[i] && arr[i] > 3) console.log(arr[i]);

// }


// Задание 2
// Найдите сумму четных чисел от 2 до 100.

// let sum = 0;

// for (let item = 2; item <= 100; item += 2) {
//     sum += item;
// }

// console.log(sum);

// Задание 3
// Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

// const arr = [2, 5, 9, 3, 1, 4];
// let arrSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arrSum = arrSum + arr[i];

// }
// console.log(arrSum);

// Задание 4
// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let str = '-';
// for (let digitl = 1; digitl <= 9; digitl++) {
//     str += digitl + '-';

// }
// console.log(str);

// Задание 5
// Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.


// const arr = [2, 5, 9, 0, 3, 1, 4];
// 
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
//     if (arr[index] == 0) {
//         break;
//     }

// }

// for (let index = 0; index < arr.length && arr[index - 1] != 0; index++) {
//     console.log(arr[index]);


// }

// Блок 5
//Задание 1

// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

// const arr = [2, 5, 9, 0, 3, 1, 4, 5, 546, 56];
// console.log(arr);
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 == 0) {
//         console.log(arr[index] * arr[index]);
//     } else if (arr[index] % 3 == 0) {
//         console.log(arr[index] * arr[index] * arr[index]);
//     }

// }

//Задание 3
// С помощью двух вложенных циклов выведите на экран следующую строку:
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == 3)
//         count++;
// }
// console.log(arr);
// console.log(count);

//Задание 3
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:

// [1, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);



