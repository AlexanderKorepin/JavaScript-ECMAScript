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
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.items = [];
        this.totalCost = initialTotalCost;
    }
    addItem(product, quantity = 1) {
        this.items.push({ product, quantity });
        this.totalCost += product.price * quantity;
    }
    getCurrentTotalCost() {
        return this.totalCost;
    }
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
    }

}

const product1 = new Product("Карандаш", 7);

const product2 = new Product("Маркер", 10);

const cart = new ShoppingCart("Корепин Александр", 0);

cart.addItem(product1, 3);
cart.addItem(product2, 4);

console.log(`Общая стоимость товора ${cart.getCurrentTotalCost()}`); //61

cart.checkout(); // Заказ оформлен для John Doe. Общая стоимость заказа: 5 рублей. Спасибо за покупку!
