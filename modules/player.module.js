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

export default Player;