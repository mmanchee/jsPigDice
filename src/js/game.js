// Business Logic Game
export class Game {
  constructor() {
    this.players = [],
    this.score = 0;
  }

  addPlayer (player) {
    this.players.push(player);
  }

  findPlayer () {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].playerTurn === true) {
        return i;
      }
    }
  }

  addScore () {
    let i = this.findPlayer();
    this.players[i].total += this.score;
  }

  endTurn () {
    this.players.forEach(function(element) {
      element.playerTurn === true ? element.playerTurn = false : element.playerTurn = true;
    });
    this.score = 0;
    //fadeFun();
  }

  rollDice () {
    let roll = Math.ceil(Math.random() * 6);
    if(roll !== 1) {                    // Add Function
      this.score = this.score + roll;
    } else {
      this.score = 0;
      this.endTurn();
    }
    return roll;
  }

  winner () {
    let player = false;
    if (this.players[0].total >= 50 || this.players[1].total >= 50) {
      if (this.players[0].total >= 50) {
        player = this.players[0].name;
      } else {
        player = this.players[1].name;
      }
    }
    return player;
  }

}

function fadeFun() {
  $("#player1-turn").fadeToggle();
  $("#player2-turn").fadeToggle();
}

// interface logic variable
export let game = new Game();