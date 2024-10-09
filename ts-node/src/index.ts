// import { getPokemon } from "./generics/get-pokemon";

import { Pokemon } from "./decorators/pokemon-class";


// getPokemon(1).then(pokemon=> console.log(pokemon.sprites.front_default))
//             .catch(error=> console.error(error))
//             .finally(()=>console.log('Fin de Pokemon'))

const charmander= new Pokemon('Charmander');
// (Pokemon.prototype as any).customName= 'Pikachu';

// console.log(charmander.savePokemon(50));
charmander.publicApi='masteeeeeeeeer'
charmander.savePokemon(50);
console.log(charmander);

