$(document).ready(function() {

var targetScore = 0;
var currentScore = 0;
var blackGem = 0;
var blueGem = 0;
var purpleGem = 0;
var redGem = 0;
var wins = 0;
var losses = 0;
var gameStatus = true;

function reset() {
    //number should start between 19 - 120.
    targetScore=Math.floor((Math.random()*101)+19);
    console.log(targetScore)
    // gem scores should be betwwen 1 - 12.
    blackgem=Math.floor((Math.random()*11)+1);
    blueGem=Math.floor((Math.random()*11)+1);
    purpleGem=Math.floor((Math.random()*11)+1);
    redGem=Math.floor((Math.random()*11)+1);
    currentScore = 0;

}

});



