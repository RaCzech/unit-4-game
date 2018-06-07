$(document).ready(function() {
//number should start between 19 - 120.
var targetScore = Math.floor(Math.random()*101+19);
$('#goal').text('Goal: '+targetScore);
console.log(targetScore);

var currentScore = 0;
// gem scores should be betwwen 1 - 12.
var blackGem=Math.floor(Math.random()*11+1);
var blueGem=Math.floor(Math.random()*11+1);
var purpleGem=Math.floor(Math.random()*11+1);
var redGem=Math.floor(Math.random()*11+1);

var wins = 0;
var losses = 0;

function won(){
    alert('Congratulations!');
    wins++;
    $('#wins').text('Wins: '+wins);
    reset ();
}

function lost(){
    alert('Sorry try again.')
    losses++;
    $('#losses').text('Losses: '+losses);
    reset();
}

function reset() {
    targetScore=Math.floor((Math.random()*101)+19);
    $('#goal').text('Goal: '+targetScore);

    blackgem=Math.floor((Math.random()*11)+1);
    blueGem=Math.floor((Math.random()*11)+1);
    purpleGem=Math.floor((Math.random()*11)+1);
    redGem=Math.floor((Math.random()*11)+1);
    currentScore = 0;
    $('#userScore').text(currentScore);
}

reset();
$('.redGem').on('click', function(){
    currentScore = currentScore+redGem;
    console.log(currentScore);
    $('#userScore').text('Current Score: '+currentScore);
        if (currentScore == targetScore){
            won();
        } else if (currentScore>targetScore){
            lost();
        }
})

$('.blackGem').on('click', function(){
    currentScore = currentScore+blackGem;
    console.log(currentScore);
    $('#userScore').text('Current Score: '+currentScore);
        if (currentScore == targetScore){
            won();
        } else if (currentScore>targetScore){
            lost();
        }
})

$('.blueGem').on('click', function(){
    currentScore = currentScore+blueGem;
    console.log(currentScore);
    $('#userScore').text('Current Score: '+currentScore);
        if (currentScore == targetScore){
            won();
        } else if (currentScore>targetScore){
            lost();
        }
})

$('.purpleGem').on('click', function(){
    currentScore = currentScore+purpleGem;
    console.log(currentScore);
    $('#userScore').text('Current Score: '+currentScore);
        if (currentScore == targetScore){
            won();
        } else if (currentScore>targetScore){
            lost();
        }
})

});



