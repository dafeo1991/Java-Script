// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function cube(num) {
//     let res = num * num * num;
//     return res;
// }

// console.log(cube(2) + cube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function salaryWithoutTaxes(money) {
//     if (isFinite(money)) {
//         money = money * 0.87;
//         console.log(`Размер заработной платы за вычетом налогов равен ${money}`);
//     } else {
//         console.log("Значение задано неверно");
//     }
// }
// let money = prompt("Введите размер вашей заработной платы");
// salaryWithoutTaxes(money);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function maxNum(num1, num2, num3) {

//     if (num3 < num2 && num2 > num1) {
//         console.log(`Самое большое число ${num2}`);
//     } else if (num2 < num3 && num3 > num1) {
//         console.log(`Самое большое число ${num3}`);
//     } else if (num2 < num1 && num1 > num3) {
//         console.log(`Самое большое число ${num1}`);
//     } else {
//         console.log("Числа равны");
//     }
// }

// maxNum(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")), Number(prompt("Введите третье число")));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// function sum(num1, num2) {
//     console.log(`Сумма чисел равна ${num1 + num2}`);
// }
// sum(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")));

// function diff(num3, num4) {
//     if (num3 > num4) {
//         console.log(`Разность чисел равна ${num3 - num4}`);
//     } else if (num3 < num4) {
//         console.log(`Разность чисел равна ${num4 - num3}`);
//     }
//     else {
//         console.log(`Разность чисел равна ${num3 - num4}`);
//     }
// }
// diff(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")));

// function mult(num5, num6) {
//     console.log(`Произведение чисел равно ${num5 * num6}`); 
// }
// mult(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")));

// function div(num7, num8) {
//     if (num7 > num8) {
//         console.log(`Частное чисел равно ${num7 / num8}`);
//     } else if (num7 < num8) {
//         console.log(`Частное чисел равно ${num8 / num7}`);
//     }
//     else {
//         console.log(`Частное чисел равно ${num7 / num8}`);
//     }
// }

// div(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")));

