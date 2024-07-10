import MagicArena from "./magicArena.module.js";
import Player from "./player.module.js";

describe("MagicArena General tests", ()=>{

    let player1,player2,game;

    beforeEach(()=>{
        player1 = new Player(100,10,5,"Goku");
        player2 = new Player(50,5,10,"Naruto");
        game = new MagicArena(player1,player2);
    })

    it("Players are initialized Properly",() => {

        const healthOfP1 = game.getHealthOfPlayer1();
        const healthOfP2 = game.getHealthOfPlayer2();

        const healthOf_P1_LessThanHealthOf_P2 = (healthOfP1<=healthOfP2);

        expect(healthOf_P1_LessThanHealthOf_P2).toBe(true);
    });

    it("rollDice return an array of two numbers between 1 and 6", ()=>{
        const diceValues = game.rollDice();
        const rangeOfDice1 = (1<=diceValues[0] && diceValues[0]<=6);
        const rangeOfDice2 = (1<=diceValues[1] && diceValues[1]<=6);

        expect(diceValues).toHaveLength(2);
        expect(rangeOfDice1).toBe(true);
        expect(rangeOfDice2).toBe(true);
    })

    it("play alternates turns between players",()=>{
        let turnValueWorkingFine = true;
        let turnValue = game.turn;
        expect(turnValue).toEqual(0);

        for(let i=0;i<20;i++){
            if(turnValue!==(i%2)){
                turnValueWorkingFine = false;
                break;
            }
            game.play();
            turnValue = game.turn;
        }

        expect(turnValueWorkingFine).toBe(true);
    })
})