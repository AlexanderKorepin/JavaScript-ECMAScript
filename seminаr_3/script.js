// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.
// const obj = {};
// const prototypeChain = getPrototypeChain(obj);
// console.log(prototypeChain);
// const MusicSeries = {
//     model: "music series",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     startWipe: function () {
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log('I am the method of MusicSeries');
//         console.log('I am starting to wipe the floor...');
//     }
//     };
    
//     const Blues = {
//         model: "Bluees-1",
//         power: 250,
//         batterySize: 2500,
//         workTime: 50,
//     };
//     Object.setPrototypeOf(Blues, MusicSeries);
//     function getPrototypeChain(obj) {
//         const prototypeChain = [];
//         let currentObj = obj;
//         while (currentObj !== null) {
//             prototypeChain.push(currentObj);
//             currentObj = Object.getPrototypeOf(currentObj);         
//         }
//         return prototypeChain;
//     }
//     const prototypeChain = getPrototypeChain(Blues);
//     console.log(prototypeChain);
//----------------------------------------------------------------
// Задание 2 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
//     ● Свойство name (строка) - имя животного.
//     ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
//     ● Свойство breed (строка) - порода собаки.
//     ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} издает звук.`);
//     }
// }   
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);  // Вызов конструктора родительского класса
//         this.breed = breed;
//     }
//     fetch() {
//         console.log(`Собака ${this.name} принесла мяч.`);
//     }
// }
// const animal1 = new Animal("Животное");
// animal1.speak(); // Животное издает звук.

// const dog1 = new Dog("Бобик", "Дворняжка"); 
// dog1.speak(); // :Животное Бобик издает звук.
// console.log(dog1.breed); // Дворняжка
// dog1.fetch(); // Собака Бобик принесла мяч.
//----------------------------------------------------------------
//Задание 3 (Class 40 минут)
// Создайте класс Product, который будет представлять товар. У класса Product должны быть следующие свойства:
// - name (строка) - название товара
// - price (число) - цена товара за одну единицу

// Создайте класс ShoppingCart, представляющий корзину интернет-магазина. 
// Конструктор класса ShoppingCart должен принимать два параметра:
// - customerName (строка) - имя покупателя
// - initialTotalCost (число) - начальная общая стоимость заказа
// (может быть равна 0, если корзина пуста)

// У класса ShoppingCart должны быть метод addItem(product, quantity), который добавляет товар к корзине.
// Метод должен принимать два параметра:
// - product (объект класса Product) - товар который добавляется в корзину.
// - quantity (число, по умолчанию 1) - количество этого товара, нужно добавить в корзину.

// Если quantity не указано, считается, что добавляется 1 единица товара.

// У класса ShoppingCart должны быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.

// У класса ShoppingCart должны быть метод checkout(), который оформляет заказ и выводит сообщение с общей стоимостью заказа и 
// благодарностью за покупку.
// Формат вывода сообщения:
// "Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость заказа} рублей. Спасибо за покупку!"
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }
// class ShoppingCart {
//     constructor(customerName, initialTotalCost = 0) {
//         this.customerName = customerName;
//         this.items = [];
//         this.totalCost = initialTotalCost;
//     }
//     addItem(product, quantity = 1) {
//         this.items.push({ product, quantity });
//         this.totalCost += product.price * quantity;
//     }
//     getCurrentTotalCost() {
//         return this.totalCost;
//     }
//     checkout() {
//         console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
//     }

// }

// const product1 = new Product("Карандаш", 7);

// const product2 = new Product("Маркер", 10);

// const cart = new ShoppingCart("Корепин Александр", 0);

// cart.addItem(product1, 3);
// cart.addItem(product2, 4);

// console.log(`Общая стоимость товора ${cart.getCurrentTotalCost()}`); //61

// cart.checkout(); // Заказ оформлен для John Doe. Общая стоимость заказа: 5 рублей. Спасибо за покупку!
//--------------------------------------------------------
// напишите функцию на javascript которая будет выводить в консоль числа от 0 до 1000, кратные трем и некратные 5, сумма цифр которых меньше 10
// function translations () {
//     for (let i = 0; i <= 1000; i++) {
//         if (i % 3 === 0 && i % 5!== 0 && sumOfDigits(i) < 10) {
//             console.log(i);
//         }
//     }
    
//     function sumOfDigits(num) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10); // Округляем дробное число вниз до целого. Это позволяет избежать путаницы с десятями. �� деление нацело приводит к числу без дробной части. ��нотакже, округление дробного числа
            
//         }
//         return sum;
//     }  // ��ункция для подсчета суммы цифр числа. Эта функция работает быстрее и эффективнее чем рекурсивная.
    
// }

// translations(); // Выводит числа от 0 до 1000, кратные трем и некратные 5, сумма цифр которых меньше 10
//----------------------------------------
//Создайте конструктор, экземпляры которого будут возвращать инкрементированное число:
// let increment = new Increment();
// alert (increment); // 1
// alert (increment); // 2
// // alert (increment + increment); // 4
// class Increment {
//     constructor() {
//         this.count = 0;
//     }

//     increment() {
//         this.count++;
//         return this.count;
//     }
    
// }

// // let increment = new Increment();
//------------------------------------

// Имеется текст:

// HTTP — протокол прикладного уровня передачи данных,
// изначально — в виде гипертекстовых документов в формате HTML,
// в настоящее время используется для передачи произвольных данных.



// Напишите код, который сделает этот текст максимально адаптивным с учётом норм и правил типографики, чтобы 
// он выглядел аккуратно при любых разрешениях экранов с шириной не менее ширины слова "гипертекстовых".

// Важно: не забывайте о том, что ширина слова "гипертекстовых" зависит от размера шрифта и размера экрана.

// Напишите CSS-код таким образом, чтобы на странице отобразился квадрат размером 300x300px, внутри которого пять квадратов
//  размером 100x100px — по одному в каждом углу и один по центру. Изменять HTML-код при этом нельзя.


  



