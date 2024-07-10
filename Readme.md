# Magic Arena Game

## Description

The Magic Arena Game is a simple, text-based game where two players compete by taking turns attacking and defending. Each player rolls a dice to determine their attack or defense strength, and the defender's health is reduced based on the damage calculated from the dice rolls and their respective attributes.

## Features

- **Two Players**: Each game involves two players, each with their own health, attack, and strength attributes.
- **Turn-Based Combat**: Players take turns attacking and defending.
- **Random Dice Rolls**: Each turn, both players roll a dice to get a random value between 1 and 6.
- **Damage Calculation**: The damage is calculated based on the attacking player's attack and the defending player's strength, multiplied by their respective dice values.
- **Victory Condition**: The game continues until one player's health reaches zero.

## Classes

### Player

The `Player` class represents a player in the game. It has the following attributes:

- **health**: The health points of the player.
- **attack**: The attack strength of the player.
- **strength**: The defensive strength of the player.
- **name**: The name of the player (optional).

### MagicArena

The `MagicArena` class manages the game logic and the interaction between the two players. It has the following methods:

- **constructor(p1, p2)**: Initializes the game with two players. The player with lower health is set as the first attacker.
- **getRandomInt()**: Returns a random integer between 1 and 6.
- **rollDice()**: Rolls the dice for both the attacking and defending players and returns the results.
- **playUtil(attackingPlayer, defendingPlayer)**: Handles a single turn where the attacking player attacks the defending player.
- **stats()**: Returns the current health of both players.
- **play()**: Manages the turn-taking logic.
- **simulateTillEnd()**: Simulates the game until one of the players' health reaches zero.
- **helperFunctions**: Some methods to help in testing and debugging

## Usage

1. **Create Players**: Instantiate the `Player` objects with the desired attributes.
    ```javascript
    const p1 = new Player(50, 10, 5, "Goku");
    const p2 = new Player(100, 5, 10, "Naruto");
    ```

2. **Initialize the Game**: Create a `MagicArena` object with the two players.
    ```javascript
    const game = new MagicArena(p1, p2);
    ```

3. **Simulate the Game**: Start the game simulation.
    ```javascript
    game.simulateTillEnd();
    ```

4. **Run the code**
    ```terminal
    npm start
    ```

5. **Run tests**
    ```jest
    npm test
    ```

6. **Run full test coverage**
    ```jest
    npm run coverage
    ```

## Example

```javascript
const p1 = new Player(50, 10, 5, "Goku");
const p2 = new Player(100, 5, 10, "Naruto");

const game = new MagicArena(p1, p2);

game.simulateTillEnd();
