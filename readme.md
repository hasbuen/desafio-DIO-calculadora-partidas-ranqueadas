- main(): This function initializes an array storage with the results of calculateBalance() function with different parameters. It then calls getRank() function with storage, a default message, and a split character as arguments.

- getRank(storage, defaultMessage, splitChar): This function iterates over the storage array and for each element, it splits the defaultMessage at splitChar, and logs a message to the console with the score and the corresponding level.

- calculateBalance(wins=0, losses=0): This function calculates the balance of wins and losses. If the balance is negative, it returns 0; otherwise, it returns the balance.

- verifyLevel(score): This function returns a level based on the score. The levels are “iron”, “bronze”, “silver”, “gold”, “diamond”, “legendary”, and “immortal”. The higher the score, the higher the level.


## :pushpin:Para executar:
- node src/index.js
