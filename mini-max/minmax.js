function bestMove(){
    //AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //Is the spot availale?
            if (board[i][j] == '') {
                board[i][j] = ai;
                let score = minimax(board);
                board[i][j] = '';
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    board[move.i][move.j]=ai;
    currentPlayer = human;
}

function minimax(board){
    return 1;
}