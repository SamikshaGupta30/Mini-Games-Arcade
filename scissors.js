let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        console.log("you won!");
        msg.innerText=`You win! Your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        CompScorePara.innerText=compScore;
        console.log("you lost!");
        msg.innerText="You lose!";
        msg.innerText=`You lose! ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    //Generate comp choice->modular way: divide work in small fncs
    const compChoice=genCompChoice();
    console.log("computer choice ", compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper" ? false : true;
        } else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="rock" ? true : false;
        } else {
            //rock, paper
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
let changeMode=document.querySelector("#change");
let curr="light";
let body=document.querySelector("body");
changeMode.addEventListener("click",()=>{
    if(curr==="light"){
        curr="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curr="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});