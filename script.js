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
// document.querySelector('.number').textContent = secretNuber;
let reduceScore = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
     document.querySelector('.message').textContent = 'No number ❌';
    }
    else if (guess === secretNuber) {
        document.querySelector('.message').textContent = 'You are correct 🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNuber;

        if(reduceScore > highscore){
            highscore = reduceScore;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess > secretNuber) {
        if(reduceScore > 1){
        document.querySelector('.message').textContent = 'Too high 📈';
        reduceScore = reduceScore - 1;
        document.querySelector('.score').textContent = reduceScore;
    } else { 
        document.querySelector('.message').textContent = '💣 Game Over';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    }
    else if (guess < secretNuber) {
        if(reduceScore > 1){
            document.querySelector('.message').textContent = 'Too low 📉'
            reduceScore = reduceScore - 1;
            document.querySelector('.score').textContent = reduceScore;
        } else { 
            document.querySelector('.message').textContent = '💣 Game Over';
            document.querySelector('.score').textContent = 0;
        }
}});

// Again button

document.querySelector('.again').addEventListener('click', function(){
    secretNuber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15 rem';
    document.querySelector('.guess').value = "";
})