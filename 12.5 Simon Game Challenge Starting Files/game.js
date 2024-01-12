gamePattern = []
userClickedPattern = []
level = 0;


function nextSequence() {
    userClickedPattern = []
    var randomNumber = Math.floor(Math.random()*4);
    buttonColors = ["red", "blue", "green", "yellow"];
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    level += 1;
    $("h1").html("Level "+level);
    console.log("game pattern - " +gamePattern);
}

function showSequence(){}

function checkAnswer(currentLevel){
    // console.log(gamePattern, userClickedPattern);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
    
        }
    } else {
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 500);
        level = 0;
        $("h1").html("Game Over mate, Press Any Key to Restart");
        gamePattern = []
        userClickedPattern = []
        console.log("failure");
    }
}

$(".btn").on("click",function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log("user pattern - " +userClickedPattern);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    playSound(currentColor);
    setTimeout(function () { 
        $("."+currentColor).removeClass("pressed");
    }, 100);
}


    $(document).keypress(function(){
        if (level === 0){
        nextSequence();
        }
    });
