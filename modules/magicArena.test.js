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

        const healthOfP1 = game.getPlayer1details().health;
        const healthOfP2 = game.getPlayer2details().health;

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

    it("Doesn't modify the original Players", ()=>{
        game.simulateTillEnd();

        const expectedPlayer1 = {
            health: 100,
            attack: 10,
            strength: 5,
            name: "Goku"
        }

        const expectedPlayer2 = {
            health: 50,
            attack: 5,
            strength: 10,
            name: "Naruto"
        }

        expect(player1).toEqual(expectedPlayer1);
        expect(player2).toEqual(expectedPlayer2);
    });

    it("Ends in victory of one user", ()=>{
        game.simulateTillEnd();

        let thereIsAWinner = false;

        if((game.getPlayer1details().health===0 && game.getPlayer2details().health!==0) || (game.getPlayer2details().health===0 && game.getPlayer1details().health!==0)){
            thereIsAWinner = true;
        }

        expect(thereIsAWinner).toBe(true);
    })
});

describe("MagicalArena Specific feature test", ()=> {

    it("Gives default Names to unnamed Players", ()=>{
        const p1 = new Player(100,50,10); //name not given to p1 at initiallization
        const p2 = new Player(50,5,10, "Naruto");

        const game = new MagicArena(p1,p2);

        let defaultNameGiven = false;

        if(game.getPlayer1details.hasOwnProperty("name") && game.getPlayer2details.hasOwnProperty("name")){
            defaultNameGiven = true;
        }

        expect(defaultNameGiven).toBe(true);
    })
})