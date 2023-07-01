import { all, random } from "superheroes";

all;
//=> ['3-D Man', 'A-Bomb', …]

random();
//=> 'Spider-Ham'

var heroName = random();

console.log(`I am ${heroName}.`);
