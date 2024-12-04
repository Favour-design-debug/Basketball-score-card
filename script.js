
document.getElementById("home-num");
let homeNum = document.getElementById("home-num")
console.log(homeNum)

document.getElementById("score-num");
let scoreNum = document.getElementById('score-num')
console.log(scoreNum)


let hoemCount = 0
function firstButton() {
    hoemCount = hoemCount + 1
    homeNum.innerText=  hoemCount
   
}


function secondButton() {
    hoemCount = hoemCount + 2
        homeNum.innerText=  hoemCount
}

function thirdButton() {
    hoemCount= hoemCount + 3
    homeNum.innerText = hoemCount
}


let scoreCount = 0

function buttonOne() {
    scoreCount = scoreCount + 1
    scoreNum.innerText= scoreCount
   
}


function buttonTwo() {
    scoreCount= scoreCount + 2
        scoreNum.innerText=  scoreCount
}

function buttonThree() {
    scoreCount=scoreCount+ 3
    scoreNum.innerText = scoreCount
}

