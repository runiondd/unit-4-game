# unit-4-game

Objects:

Fighter
    properties:
        - Health points
        - counter attack power
        - alive/dead (visible)

Defender
        - Health points
        - attach power
        - alive/dead (visible)

Game
    Properties:
        - hasWon = boolean
    Methods:
        - Choose Enemy


Requirements:
1. User can choose a character of 4 options
2. When user clicks a character the remaining characters move on the screen to the "Enemies" section of the screen.  
3. User will choose who to fight.
4. After an enemy is defeated the user will choose who to fight next.
5. When the Fighter attacks, the defender's health falls by the amount of the Fighter's attack power.
6. The fighter's attack power goes up by some interval after each attack. 
7. The Defenders counter attack never goes up.
8. When the Fighters attacks, their health goes down by the value of the Defender's counter attack power.


