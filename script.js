const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const score = document.querySelector('.score-board')
const scorecomp = document.querySelector('.score-board-comp')
const your = document.querySelector('.your');
const robo = document.querySelector('.robo');
const footer = document.querySelector('.footer');
const res = document.querySelector('.res');

function youwon() {
    count++;
    score.innerHTML = count;
    footer.innerHTML = "You won 😎";
    robo.src = "images/robosad.jpg"
    your.src = "images/smiley.jpg";

}
function compwon() {
    comp++;
    scorecomp.innerHTML = comp;
    footer.innerHTML = "comp won 🤖";
    your.src = "images/sad.jpg"
    robo.src = "images/robosmily.jpg";
}


const choices = ["rock", "paper", "scissors"];
var count = 0;
var comp = 0;
function myfun(winvalue) {
    var x = Math.round(Math.random() * 2);
    if (winvalue === choices[x]) {  // rock=rock tie; 
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        footer.innerHTML = "DRAW MATCH";



    }
    else if (winvalue === "rock" && choices[x] === "scissors") {
        // rock >scissor
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwon();
    }

    else if (winvalue === "paper" && choices[x] === "rock") {  //paper >rock
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwon();

    }
    else if (winvalue === "scissors" && choices[x] === "paper") {
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwon();

    }


    else if (winvalue === "scissors" && choices[x] === "rock") {
        // rock <scissors
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();


    }

    else if (winvalue === "rock" && choices[x] === "paper") {  //paper <rock
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();

    }
    else if (winvalue === "paper" && choices[x] === "scissors") {
        res.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();

    }


}
const audio = new Audio("images/beep.mp3");


let a, b, c;
function startgame1() {
    audio.play();
    a = button1.value;
    console.log(a);
    myfun(a);
}
function startgame2() {
    audio.play();
    b = button2.value;
    console.log(b);
    myfun(b);
}
function startgame3() {
    audio.play();
    c = button3.value;
    myfun(c);
    console.log(c);
}

