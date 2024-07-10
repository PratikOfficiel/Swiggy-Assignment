class Player {

    constructor(health, attack, strength, name) {
        this.health = health;
        this.attack = attack;
        this.strength = strength;
        if(name){
        this.name = name;
        }
    }
};

class MagicArena {
    #Player1;
    #Player2;

    constructor(p1,p2) {

        if(p1.health<p2.health){

            this.#Player1 = p1;
            this.#Player2 = p2;
        }
        else{
            this.#Player1 = p2;
            this.#Player2 = p1;
        }

        if(!('name' in p1)){
            this.#Player1.name = "Player1";
        }
        if(!('name' in p2)){
            this.#Player2.name = "Player2";
        }

        this.x = 0;

        console.log(`\n${this.#Player1.name}: health=${this.#Player1.health}, ${this.#Player2.name}: health=${this.#Player2.health}\n${this.#Player1.name} will make the first move!\n`)
    }

    getRandomInt(){
        return Math.floor(Math.random()*(6))+1;
    }

    rollDice() {
        const attackingDiceScore = this.getRandomInt();
        const defendingDiceScore = this.getRandomInt();

        return [attackingDiceScore,defendingDiceScore];
    }

    playUtil(attackingPlayer, defendingPlayer) {
        const [attackingDiceScore,defendingDiceScore] = this.rollDice();
        const damage = Math.max(0, attackingPlayer.attack*attackingDiceScore - defendingPlayer.strength*defendingDiceScore);

        if(defendingPlayer.health>=damage) {
            defendingPlayer.health -= damage;
        }

        if(damage!==0){

            console.log(`Attacking Player: ${attackingPlayer.name}, attack: ${attackingPlayer.attack}, diceScore: ${attackingDiceScore}\nDefending Player: ${defendingPlayer.name}, strength: ${defendingPlayer.strength}, diceScore: ${defendingDiceScore}`);
            console.log(`Damage: ${damage}\n`);
            console.log(this.stats(),'\n--------------------------------------\n');
        }
        else{
            console.log(`0 Damage move skipped!!\n--------------------------------------\n`)
        }
    }

    stats() {
        return `${this.#Player1.name} => health: ${this.#Player1.health}\n${this.#Player2.name} => health: ${this.#Player2.health}`
    }

    play() {

        if(this.x==0){
            this.playUtil(this.#Player1,this.#Player2);
        }
        else{
            this.playUtil(this.#Player2,this.#Player1);
        }

        this.x = 1-this.x;
    }

    simulateTillEnd () {
        
        while(this.#Player1.health>0 && this.#Player2.health>0){
            this.play();
        }

        if(this.#Player1.health===0){
            console.log(`${this.#Player2.name} won!!`);
        }
        else if(this.#Player2.health===0){
            console.log(`${this.#Player1.name} won!!`);
        }
        else {
            console.log('The match has ended in a Draw!!');
        }
    }
    
}

const p1 = new Player(50,10,5,"Goku");
const p2 = new Player(100,5,10);

const game = new MagicArena(p1,p2);

// console.log(game.stats());

game.simulateTillEnd();
