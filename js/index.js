const Game = require("./game.js");

$(document).ready(function(){
  $("#gameover-modal").hide();
  let game = new Game();
  game.render();

  $(document).keydown(function(e){
    if (e.keyCode === 38) { // up
      game.moveTiles("up");
    } else if (e.keyCode === 40) { // down
      game.moveTiles("down");
    } else if (e.keyCode === 37) { // left
      game.moveTiles("left");
    } else if (e.keyCode === 39) { // right
      game.moveTiles("right");
    }
  });

  $(".up-caret").click(function(e){
    game.moveTiles("up");
  });
  $(".down-caret").click(function(e){
    game.moveTiles("down");
  });
  $(".left-caret").click(function(e){
    game.moveTiles("left");
  });
  $(".right-caret").click(function(e){
    game.moveTiles("right");
  });



  $("#play-again").click(function(e){
    $("#gameboard").removeClass("gameover");
    $("#gameover-modal").hide();
    game = new Game();
    game.render();
  });
});
