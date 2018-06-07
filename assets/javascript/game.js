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
$('#wins').text('Wins: '+ wins);
var losses = 0;
$('#losses').text('Losses: '+ losses);

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
    $('#userScore').text(currentScore);
})

});



