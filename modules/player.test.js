import Player from './player.module.js';

describe("Player class tests", () => {

    it("Player object initiallization with all inputs",()=>{
        const actual = new Player(100,20,10,"goku");
        const expected = {
            health: 100,
            attack: 20,
            strength: 10,
            name: "goku"
        }

        expect(actual).toEqual(expected);
    })
})