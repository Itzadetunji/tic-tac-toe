let game = [
    ['', '', ''],
    ['', 'X', ''],
    ['', '', '']
  ];
  
  let w; // = width / 3;
  let h; // = height / 3;
  
  let computer = 'X';
  let player = 'O';
  let currentPlayer = player;
  
  function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    // bestMove();
  }
  
  function matching3(a, b, c) {
    return a == b && b == c && a != '';
  }
  
  function confirmchampion() {
    let champion = null;
  
    // horizontal
    for (let i = 0; i < 3; i++) {
      if (matching3(game[i][0], game[i][1], game[i][2])) {
        champion = game[i][0];
      }
    }
  
    // Vertical
    for (let i = 0; i < 3; i++) {
      if (matching3(game[0][i], game[1][i], game[2][i])) {
        champion = game[0][i];
      }
    }
  
    // Diagonal
    if (matching3(game[0][0], game[1][1], game[2][2])) {
      champion = game[0][0];
    }
    if (matching3(game[2][0], game[1][1], game[0][2])) {
      champion = game[2][0];
    }
  
    let availableSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game[i][j] == '') {
          availableSpots++;
        }
      }
    }
  
    if (champion == null && availableSpots == 0) {
      return 'tie';
    } else {
      return champion;
    }
  }
  
  function mouseClicked() {
    if (currentPlayer == player) {
      // It's players turn
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      // If valid turn
      if (game[i][j] == '') {
        game[i][j] = player;
        currentPlayer = computer;
        bestMove();
      }
    }
  }
  
  function draw() {
    background(255);
    strokeWeight(4);
  
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
  
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = game[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == player) {
          noFill();
          ellipse(x, y, r * 2);
        } else if (spot == computer) {
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        }
      }
    }
  
    let result = confirmchampion();
    if (result != null) {
      noLoop();
      let gameResult = createP('');
      gameResult.style('font-size', '40pt');
      if (result == 'tie') {
        gameResult.html('Its a Tie!');;
      } else {
        gameResult.html(`Better luck next time, ${result} wins!`);
      }
    }
  }

  function restartGamefromModal(){
    window.location="index.html";
  }

  function restartGamefromDraw(){
    alert("Do you want to restart your game");
    window.location="index.html";
  }