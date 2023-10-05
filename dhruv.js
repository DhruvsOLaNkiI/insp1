let guess = document.querySelector(".guess");
let  randomNumber =Math.trunc(Math.random()*20)+1;
let checkButton = document.getElementById("check-btn");
let message = document.querySelector(".message");
let score= document.getElementsByClassName("score")[0];
let highscore=document.querySelector(".highscore");
let number=document.querySelector(".number");
let again=document.querySelector(".again")

let scores=20;
function checkNumber(){
    let guessValue = Number(guess.value);

    console.log("guessValue",guessValue);

    if(guessValue == randomNumber){
        console.log("correct number");
        document.querySelector("body").style.backgroundColor = "green";
        //make green bg on correct answer . it connect with body ,then selectbgcolor(tag)=green.when if statement true is run this code
    message.textContent="Correct Number!"
    //when this if statement were true it run this txtcontent-> Force to show correct number
    highscore.textContent=scores;
    number.textContent=randomNumber;
    }else if(guessValue<randomNumber){
           
        if(scores>0){
            message.textContent="too low!";
            scores--;
            score.textContent=scores;
        }else{
            message.textContent="you have lost the game";
            document.querySelector("body").style.backgroundColor="red";
            score.textContent=scores;
        }
        console.log("to low");

    }else
    {
        if(scores>0){
            message.textContent="too high!";
            scores--;
            score.textContent=scores;
        }else{
            message.textContent="you have lost the game";
            document.querySelector("body").style.backgroundColor="red";
            score.textContent=scores;
        }
    console.log("too high")}
}
checkButton.addEventListener("click",checkNumber);
console.log("guess",guess);
console.log("random",randomNumber);
again.addEventListener("click",resetGame);
function resetGame(){
    scores=20;
    score.textContent=scores;
    message.textContent="start gueesing";
    number.textContent="?";
    document.querySelector("body").style.backgroundColor="#222";
    highscore.textContent=0;
    guess.value="";
randomNumber=Math.trunc(Math.random()*20)+1;
console.log("randomNumber",randomNumber);
}

