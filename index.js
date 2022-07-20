// home score plus buttons
const homePlusOne = document.getElementById("home-one")
const homePlusTwo = document.getElementById("home-two")
const homePlusThree = document.getElementById("home-three")

//away score plus buttons
const awayPlusOne = document.getElementById("away-one")
const awayPlusTwo = document.getElementById("away-two")
const awayPlusThree = document.getElementById("away-three")

//home & away score counts
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

//period count and plus button
const periodPlusOne = document.getElementById("period-one")
let period = document.getElementById("period")

//home foul count and plus button
const homeFoulPlus = document.getElementById("home-foul-one")
let homeFoulCount = document.getElementById("home-foul-count")


//away foul count and plus button
const awayFoulPlus = document.getElementById("away-foul-one")
let awayFoulCount = document.getElementById("away-foul-count")

//start game btn and new game btn
const startBtn = document.getElementById("start-btn")
const newBtn = document.getElementById("new-btn")
const pauseBtn = document.getElementById("pause-btn")

let myInterval
let minutesCount = 12
let time = minutesCount * 60
const countdownClock = document.getElementById("clock")




function countdownTimer(){
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    countdownClock.innerHTML = `${minutes}:${seconds}`
    if(minutes < 10 || seconds < 10){
        countdownClock.innerHTML= `${minutes}:0${seconds}`
    }
    
    time--
    time = time < 0 ? 0 : time;
    
}

function reset(){
    minutesCount = 12
    clearInterval(myInterval)
    
}

newBtn.addEventListener("click", function(){
    homeScore.textContent = "0"
    awayScore.textContent = "0"
    awayFoulCount.textContent = "0"
    homeFoulCount.textContent = "0"
    period.textContent = "1"
    clearInterval(myInterval, 0)
    countdownClock.textContent = "12:00"
    time = minutesCount * 60
    
})

pauseBtn.addEventListener("click", function(){
    clearInterval(myInterval, 0)
})

startBtn.addEventListener("click", function(){
    clearInterval(myInterval)
    myInterval = setInterval(countdownTimer, 1000)
})



homePlusOne.addEventListener("click", function(){
    homeScore.textContent = parseInt(homeScore.textContent)+1
        
})

homePlusTwo.addEventListener("click", function(){
    homeScore.textContent = parseInt(homeScore.textContent)+2
})

homePlusThree.addEventListener("click", function(){
    homeScore.textContent = parseInt(homeScore.textContent)+3
})


awayPlusOne.addEventListener("click", function(){
    awayScore.textContent = parseInt(awayScore.textContent)+1
})

awayPlusTwo.addEventListener("click", function(){
    awayScore.textContent = parseInt(awayScore.textContent)+2
})

awayPlusThree.addEventListener("click", function(){
    awayScore.textContent = parseInt(awayScore.textContent)+3
})

periodPlusOne.addEventListener("click", function(){
    period.textContent = parseInt(period.textContent)+1
    clearInterval(myInterval, 0)
    countdownClock.textContent = "12:00"
    time = minutesCount * 60
        
})

homeFoulPlus.addEventListener("click", function(){
    homeFoulCount.textContent = parseInt(homeFoulCount.textContent)+1
})

awayFoulPlus.addEventListener("click", function(){
    awayFoulCount.textContent = parseInt(awayFoulCount.textContent)+1
})

