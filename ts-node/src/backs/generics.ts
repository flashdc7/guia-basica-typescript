// import { Hero as SuperHero } from "./classes/Hero";
// import * as SuperHero from "./classes/Hero";
// import powersDefault, { Power } from "./data/powers";

import { genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain } from "../interfaces";

// const ironman:SuperHero.Hero= new SuperHero.Hero('Ironman', 1, 55);
// console.log(ironman);
// console.log(ironman.power);

// console.log(powersDefault);



// console.log(genericFunction(3.1416).toFixed());
// console.log(genericFunction('Hola Mundo').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getFullYear());


const deadpool={
    name:'Deadpool',
    realName:'Wade Winston Wilson',
    dangerLevel: 130,
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
