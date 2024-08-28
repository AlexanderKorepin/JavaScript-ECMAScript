// Объект робот-пылесос.
const VacuumCleaner = {
    Model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of VacuumCleaner');
    console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    goCharge: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of VacuumCleaner');
    console.log('I am going to charge...');
    }
};


// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.
const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of DancingSeries');
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
    'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
    };
//------------третий робот пылесос----------------------------------
// Объект робот-пылесос.
const Samba = {
// Обновляем свойства под конкретную модель.
model: "Samba-1",
power: 250,
batterySize: 2500,
workTime: 50,
// Делаем ссылку на прототип от родителя.
__proto__: DancingSeries,
};
// Обращение к свойствам объекта.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'
Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'
//------------четвертый робот пылесос----------------------------------
// Объект робот-пылесос.
const Djaiv = {
    // Обновляем свойства под конкретную модель.
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Переопределим метод startCleaning.
    startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of Djaiv');
    console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
    };

    // Конструктор объекта робот-пылесос.
function Samba_2(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
    // Делаем ссылку на прототип от родителя.
    this.__proto__ = DancingSeries;
    }
    // Создадим экземпляр нового объекта.
    const Samba1 = new Samba_2(1014778);
    console.log(Samba1.serialNumber); // 1014778
    console.log(Samba1.startCleaning()); // I am the method of
    VacuumCleaner
    // I am cleaning... I have been started: 1 times.
    
