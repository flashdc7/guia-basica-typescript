"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['súper velocidad', 'Viajaer en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        powers: ['súper fuerza']
    };
    console.log(superman);
})();
(() => {
    class Mutante {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const client = {
        name: 'ricardo',
        age: 41,
        address: {
            id: 123,
            zip: 'KY2 ZUM',
            city: 'Ottawa'
        }
    };
    const client2 = {
        name: 'irina',
        age: 45,
        address: {
            id: 456,
            zip: 'KZ4 ZUM',
            city: 'Toronto'
        }
    };
})();
(() => {
    let addTwoNumbers;
    addTwoNumbers = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map