//Лекция

// function helloName(name) {
//     console.log(name);
// }
// helloName("Darya");

// let count = 5;

// function counter() {
//     return count++;
// }
// counter ();

// console.log(count);

// let age = Number(prompt("Сколько вам лет?"));

// function upAge() {
//     let sum = age + 5;
//     return sum;
// }
// upAge()
// console.log(`Через 5 лет вам будет ${upAge()}`);

// const lvlUpAge = () => {
//     return age + 5;
// }

// const lvlUpAge = () => age + 5;   
// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// function hello() {
//     console.log('Hello function');
// }
// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// const result = sum(2,5);
// console.log(result);
// //или
// console.log(sum(2,5));

// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }
// const userMoney = Number(prompt('Сколько ты зарабатываешь?'));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать ${salary(userMoney)}`);
// console.log(`На еду желательно потратить не более чем ${moneyMonth * 0.30}`);

// function sayHello() {
//     alert ("Привет!");
//     alert ("Нажали на кнопку");
// }

// sayHello();

// const hello = () => {
//     alert ("Привет Darya!");
// }

// hello();

// let userAnswer = prompt('Зимой и летом одним цветом');
// if (userAnswer==='елка') {
//     console.log("Угадал!");
// } else {
//     console.log("Не угадал!");
// }

// let userAnswer2 = prompt('Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает');
// if (userAnswer2==='лук') {
//     console.log("Угадал!");
// } else {
//     console.log("Не угадал!");
// }

// function askQuestion(answer, question) {
//     const userAnswer = prompt(question);
//     if (userAnswer.toLowerCase() === answer) {
//         console.log("Угадал!");
//     } else {
//         console.log("Не угадал!");
//     }
// }

// askQuestion('елка', 'Зимой и летом одним цветом');
// askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает');

// function pazzle() {
//     askQuestion('елка', 'Зимой и летом одним цветом');
//     askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает');
// }

//Семинар
//Блок 1
//Задание 1

// function hello(userName, userLastName, userAge ) {
//     console.log(`Привет ${userName} ${userLastName} с возрастом ${userAge}`);
// }

// const hello = (userName, userLastName, userAge) => {
//     console.log(`Привет ${userName} ${userLastName} с возрастом ${userAge}`);
// }

// hello("Иван", "Петров", 17);

//Задание 2
// function quad(num) {
//     let res = num * num;
//     return res;
// }

// console.log(quad(5)); 

//Задание 3

// function isPositive(num) {
//     if (num > 0) {
//         console.log("+++");
//     } else if (num < 0) {
//         console.log("---");
//     }
//     else {
//         console.log("Число = 0");
//     }
// }

// isPositive(6);
// isPositive(-3);
// isPositive(0);

//Блок 2
//Задание 1

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function getSumm(num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     return sum;
// }

// console.log(getSumm(param1, param2, param3));


//Блок 3
//Задание 1

// function getRoot(num) {
//     return Math.sqrt(num);
// }

// console.log(getRoot(3) + getRoot(4));

//Задание 2
// function getMinimal(num1, num2) {
//         if (num1 > num2) {
//             console.log(`Первое число ${num1} больше второго ${num2}`);
//         } else if (num1 < num2) {
//             console.log(`Первое число ${num1} меньше второго ${num2}`);
//         }
//         else {
//             console.log("Числа равны");
//         }
//     }
// getMinimal(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")));

//Блок 4
//Задание 1

// function day(num) {

//     switch (num) {
//         case 1:
//             console.log('Понедельник');
//             break;
//         case 2:
//             console.log('Вторник');
//             break;
//         case 3:
//             console.log('Среда');
//             break;
//         case 4:
//             console.log('Четверг');
//             break;
//         case 5:
//             console.log('Пятница');
//             break;
//         case 6:
//             console.log('Суббота');
//             break;
//         case 7:
//             console.log('Воскресенье');
//             break;
//         default:
//             console.log('Число введено неверно')
//             break;
//     }
// }

// day(Number(prompt("Введите число от1 до 7")));

//Задание 2

function greetingUserWithDayTime(firstName) {
    let time = new Date();
    let howHour = Number(time.getHours());
    console.log(time);
    console.log(howHour);
    if (howHour < 7) {
        console.log(`Доброй ночи ${firstName}`);
    } else if (howHour < 13) {
        console.log(`Доброе утро ${firstName}`);
    } else if (howHour < 18) {
        console.log(`Добрый день ${firstName}`);
    } else {
        console.log(`Добрый вечер ${firstName}`);
    }
}
let userName = prompt("Введите ваше имя");
greetingUserWithDayTime(userName);