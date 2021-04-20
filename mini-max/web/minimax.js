function bestMove() {
    // Computer takes its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (game[i][j] == '') {
          game[i][j] = computer;
          let score = minimax(game, 0, false);
          game[i][j] = '';
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    game[move.i][move.j] = computer;
    currentPlayer = player;
  }
  
  let scores = {
    X: 10,
    O: -10,
    tie: 0
  };
  
  function minimax(game, depth, isMaximizing) {
    let result = confirmchampion();
    if (result !== null) {
      return scores[result];
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Is the spot available?
          if (game[i][j] == '') {
            game[i][j] = computer;
            let score = minimax(game, depth + 1, false);
            game[i][j] = '';
            bestScore = max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Is the spot available?
          if (game[i][j] == '') {
            game[i][j] = player;
            let score = minimax(game, depth + 1, true);
            game[i][j] = '';
            bestScore = min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }