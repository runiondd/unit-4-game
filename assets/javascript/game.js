

var Game = {
    GameOver: false, 
    playerSelected: false,
    currentDefender: null,
    currentEnemy: null
}

characters = {
    luke: {
        name: "luke",
        displayName: "Luke Skywalker",
        index: 1,
        hp: 100,
        attackPower: 20,
        couterAttackPower: 10,
        isDead: false
    },
    han: {
        name: "han",
        displayName: "Han Solo",
        index: 2,
        hp: 80,
        attackPower: 30,
        couterAttackPower: 20,   
        isDead: false
    },    
    vader: {
        name: "vader",
        displayName: "Darth Vader",
        index: 3,
        hp: 200,
        attackPower: 50,
        couterAttackPower: 40,
        isDead: false
    },
    mal: {
        name: "mal",
        displayName: "Darth Mal",
        index: 4,
        hp: 120,
        attackPower: 40,
        couterAttackPower: 25,
        isDead: false
    }
}

// currentEnemy = characters[selectEnemy]