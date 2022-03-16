var buttonStart = document.getElementById('button-start')
var sectionQuestion = document.getElementById('section-questions')
var sectionLanding = document.getElementById('section-landing')
var sectionTimer = document.getElementById('section-timer')
var sectionSubmit = document.getElementById('section-submit')
var spanTime = document.getElementById('span-time')
var spanHighscore = document.getElementById('span-highscore')

let timerID = null;
let timeRemaining = 60;

spanTime.textContent = timeRemaining;

buttonStart.addEventListener('click', function(event){
    sectionQuestion.classList.remove('hide');
    sectionLanding.classList.add('hide');
    startTimer();
})

function startTimer(){
    sectionTimer.classList.remove('hide');
    setInterval(function(){
        timeRemaining = timeRemaining -1
        spanTime.textContent = timeRemaining
        if(timeRemaining <= 0){
            endGame();
        }
    }, 1000);
}

function endGame(){
    clearInterval(timerId);
    sectionSubmit.classList.remove('hide');
    sectionQuestion.classList.add('hide');
    spanHighscore.textContent = timeRemaining;
}