'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score'). textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNuber = Math.trunc(Math.random()*20) +1;
let highscore = 0;


const displayMenssage = function(menssage) {
    document.querySelector('.message').textContent = menssage;
}

const background_Color = function(color) {
    document.querySelector('body').style.backgroundColor = color;
}

const numberWidth = function (size) {
    document.querySelector('.number').style.width = size;
}

const showtheSecret = function () {
    document.querySelector('.number').textContent = secretNuber;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

// document.querySelector('.number').textContent = secretNuber;
let reduceScore = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // no numbers
    if(!guess) {
        displayMenssage('No number ❌');
    }
    // If you won
    else if (guess === secretNuber) {
        displayMenssage('You are correct 🎉');
        background_Color('#60b347');
        numberWidth('30rem');
        showtheSecret();
        if(reduceScore > highscore){
            highscore = reduceScore;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // If you lost
    else if (guess !== secretNuber) {
        if (reduceScore > 1){
        reduceScore--;
        displayMenssage(guess > secretNuber ? 'Too high 📈' : 'Too low 📉');
        displayScore(reduceScore);
    } else { 
        displayMenssage('💣 Game Over');
        displayScore(0);
        background_Color('#f86565');
        showtheSecret();
    }}
});

// Again button

document.querySelector('.again').addEventListener('click', function(){
    reduceScore = 20;
    secretNuber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.number').textContent = '?';
    displayScore(reduceScore);
    background_Color('#222'); 
    displayMenssage('Start guessing...');
    numberWidth('15rem');
    document.querySelector('.guess').value = "";
})