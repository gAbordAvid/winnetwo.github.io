
var buttonColours = ["red","blue","green","yellow"]; 

var gamePattern = [];
var userClickedPattern = [];

var start= false;
var level= 0;

$(document).keypress(function() {
    if(!start){
        $("#level-title").text("Level " + level);
        nextSequence();
        start= true;
    }
});
  
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
  });




function checkAnswer(currentLevel) {
    
    
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){

        console.log("success");

       
        if(gamePattern.length===userClickedPattern.length){
            
            
            setTimeout(function(){
                nextSequence();
            },1000);
        }

    } else{
        console.log("wrong");

        var audio = new Audio('sounds/wrong.mp3');
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key To Restart");

        setTimeout(function() { 
            startOver(); 
        }, 2000);
    }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);


     var randomNumber = Math.floor(Math.random()*4);
     var randomChosenColour= buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
     
     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    
}




  //ÁLTALÁNOS FUNKCIÓ A HANGRA
  function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
  }

  // ÁLTALÁNOS FUNKCIÓ AZ ANIMÁCIÓRA
  function animatePress(currentColour) {
      $("#" + currentColour).addClass("pressed");

      setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
 }

  
function startOver() {
    level = 0;
    $("#level-title").text("Level " + level);
    gamePattern= [];
    nextSequence();
}