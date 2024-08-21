// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// function mergeArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }
// console.log(mergeArrays(array1, array2));
// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]
// function removeDuplicates(...args) {
//     return [...new Set(args)];
// }

// console.log(removeDuplicates(1, 2, 3, 2, 6, 7, 12, 6, 4, 1, 5));
// function removeDuplicates(...args) {
//     return args.filter((value, index) => args.indexOf(value) === index);
//     // return [...new Set(args)];
//     // return Array.from(new Set(args));
// }

// console.log(removeDuplicates(1, 2, 3, 2, 6, 7, 12, 12, 6, 4, 1, 5, 12));
//------------------------------------------------------------------
// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.
// const getEvenNumbers = (arr) => arr.filter(parameter => parameter % 2 === 0);
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
// console.log(getEvenNumbers([1, 12, 2, 3, 4, 5, 6]));
// const calculateAverage = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
// console.log(calculateAverage([1, 2, 3]));
// function capitalizeFirstLetter(string){
//     return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeFirstLetter("hello world"));
//----------------------------------------------------------------------
// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не напрямую.
// function createCalculator(parameter) {
//     let value = parameter;
    
//     return {
//         add: function(num) {
//             value += num;
//         },
//         subtract: function(num) {
//             value -= num;
//         },
//         getValue: function() {
//             return value;
//         }
//     }   
// }
// const calculator = createCalculator(10);   
// calculator.add(5);
// calculator.subtract(3);
// calculator.add(7);
// console.log(calculator.getValue()); // 19
//----------------------------------------------------------------
// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// function createGreeting(user) {
//     return function() {
//         console.log(`Hello, ${user}!`);
//     }  
// }

// const greeting = createGreeting('John');

// greeting(); // Hello, John!
//----------------------------------------------------------------
// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true
// function createPasswordChecker(params) {
//     return function(password) {
//         return password.length >= params;  
//     } 
// }

// const isPasswordValid = createPasswordChecker(8);

// console.log(isPasswordValid('password')); // false

// console.log(isPasswordValid('secret')); // true
//----------------------------------------------------------------
// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
// function sumDigits(params) {
//     if (params < 10) {
//         return params;
//     } else {
//         return params % 10 + sumDigits(Math.floor(params / 10));
//     }
// }

// console.log(sumDigits(12335465)); // 6


