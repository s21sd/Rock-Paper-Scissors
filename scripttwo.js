const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');

const score = document.querySelector('.score-board')
const scorecomp = document.querySelector('.score-board-comp')
const your = document.querySelector('.your');
const robo = document.querySelector('.robo');
const footer = document.querySelector('.footer');
const myres = document.querySelector('.my-res');

function youwin() {
    count++;
    score.innerHTML = count;
    footer.innerHTML = "You won 😎";
    robo.src = "img2/robosad.jpg"
    your.src = "img2/smiley.jpg";

}
function compwon() {
    comp++;
    scorecomp.innerHTML = comp;
    footer.innerHTML = "comp won 🤖";
    your.src = "img2/sad.jpg"
    robo.src = "img2/robosmily.jpg";

}

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
var count = 0;
var comp = 0;
function myfun(winvalue) {
    var x = Math.round(Math.random() * 2);
    if (winvalue === choices[x]) {  // rock=rock tie;
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        footer.innerHTML = "DRAW MATCH";
    }
    else if (winvalue === "rock" && choices[x] === "scissors" || winvalue === "rock" && choices[x] === "lizard") {   // rock >scissor
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwin();
    }


    else if (winvalue === "paper" && choices[x] === "rock" || winvalue === "paper" && choices[x] === "spock") {  //paper >rock
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwin();

    }
    else if (winvalue === "scissors" && choices[x] === "paper" || winvalue === "scissors" && choices[x] === "lizard") {
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwin();

    }
    else if (winvalue === "lizard" && choices[x] === "spock" || winvalue === "lizard" && choices[x] === "paper") {
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwin();
    }
    else if (winvalue === "spock" && choices[x] === "scissores" || winvalue === "spock" && choices[x] === "rock") {
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        youwin();
    }

    // your lose and comp won 



    else if (winvalue === "rock" && choices[x] === "paper" || winvalue === "rock" && choices[x] === "spock") {  //paper <rock
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();

    }
    else if (winvalue === "paper" && choices[x] === "scissors" || winvalue === "paper" && choices[x] === "lizard") {
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();

    }

    else if (winvalue === "scissors" && choices[x] === "rock" || winvalue === "scissors" && choices[x] === "spock") {   // rock <scissors
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();


    }

    else if (winvalue === "lizard" && choices[x] === "rock" || winvalue === "lizard" && choices[x] === "scissors") {   // rock <scissors
        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();


    }
    else if (winvalue === "spock" && choices[x] === "scissors" || winvalue === "spock" && choices[x] === "paper") {   // rock <scissors

        myres.innerHTML = `You select ${winvalue} and computer select ${choices[x]}`;
        compwon();


    }



}
const audio = new Audio("img2/beep.mp3");


let a, b, c, d, e;
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

function startgame4() {
    audio.play();
    d = button4.value;
    myfun(d);
    console.log(d);
}

function startgame5() {
    audio.play();
    e = button5.value;
    myfun(e);
    console.log(e);
}
