class MagicArena {
    #Player1;
    #Player2;

    constructor(p1,p2) {

        if(p1.health<p2.health){

            this.#Player1 = {...p1};
            this.#Player2 = {...p2}
        }
        else{
            this.#Player1 = {...p2};
            this.#Player2 = {...p1};
        }

        if(!('name' in p1)){
            this.#Player1.name = "Player1";
        }
        if(!('name' in p2)){
            this.#Player2.name = "Player2";
        }

        this.turn = 0;

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
        else{
            defendingPlayer.health = 0;
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
        const currentStatus =  `${this.#Player1.name} => health: ${this.#Player1.health}\n${this.#Player2.name} => health: ${this.#Player2.health}`
        // console.log(currentStatus.split(/[\s\n]+/))

        return currentStatus;
    }

    play() {

        if(this.turn==0){
            this.playUtil(this.#Player1,this.#Player2);
        }
        else{
            this.playUtil(this.#Player2,this.#Player1);
        }

        this.turn = 1-this.turn;
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
            console.log('The match has ended in a Draw!!'); // not possible in current scenario
        }

    }

    getHealthOfPlayer1() {
        return this.#Player1.health;
    }

    getHealthOfPlayer2() {
        return this.#Player1.health;
    }
    
}

export default MagicArena;