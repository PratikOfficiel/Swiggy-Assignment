import Player from "./modules/player.module.js";

import MagicArena from "./modules/magicArena.module.js";

// create 2 players with health, attack, strength and Name(optional) respectively. If no name is provided default Names will be given at the time of match.
const p1 = new Player(50,10,5,"Goku");
const p2 = new Player(50,5,10, "Naruto");

const game = new MagicArena(p2,p1);

game.simulateTillEnd();

// console.log(p1.health,p2.health);
