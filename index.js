import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';


var sillyname = generateName();
const superheroName = randomSuperhero();


console.log(`My name is ${sillyname}`);
console.log(`I am ${superheroName}!`);