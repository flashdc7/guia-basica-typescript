"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 4));
    myFunction = greet;
    console.log(myFunction('Ricardo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
