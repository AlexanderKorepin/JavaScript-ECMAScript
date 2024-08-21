// Домашнее задание
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, 
// решение задание должно состоять из одной строки
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
// класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
//----------------------------------------------------------------
//Задание_1
//1
// const arr = [1, 5, 7, 9];
// const minValue = Math.min(...arr);
// console.log(minValue);
//2
// const minValue = (arr) => Math.min(...arr);
// console.log(minValue([9, 5, 7, 9]));
//---------------------------------------------------------------
// Задание_2
// function createCounter(params) {
//     let counter = params;
//     return {
//         increment() {
//             counter++;
//             return counter;
//         },
//         decrement() {
//             counter--;
//             return counter;
//         },
//         getCounterValue() {
//             return counter;
//         }
//     };
// }
// const counter = createCounter(10);
// console.log(counter.increment()); // 11
// console.log(counter.decrement()); //10
// console.log(counter.decrement()); // 9
// console.log(counter.getCounterValue()); // 9
//---------------------------------------------------------------
// Задание_3
//3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
// класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
function findElementByClass (element, className) {
    // Проверяем, содержил ли переданный корневой элемент указанный класс
    if (element.classList.contains(className)){
        return element;
    }
    // Проверяем дочерние элементы текущего узла
    for (let child of element.children) {
        const result = findElementByClass(child, className);       
        // Если нашли нужный элемент, возвращаем его
        if (result!== null)  {
            return result;
        }
    }
    // Если не нашли нужный элемент, возвращаем null
    return null;   
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


