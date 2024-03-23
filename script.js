let userScore = 0;
let computerScore =0;

const userScorePoints = document.querySelector("#user_score");
const computerScorePointes = document.querySelector("#computer_score");


const message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
//all div acessed inside the choises
 
const generateComputerChoice = () =>{
    let options = ["rock","paper","scissors"];
    const randomIdGetInOptions = Math.floor(Math.random() * 3);
    // random.math generate the zero and one ke bich ki value generate karta hai
// math.flore se hamari decimal value hat jayegi like 0.25 hai to print hoga 0.

return options[randomIdGetInOptions];
};

const drawGame = () => {
    console.log("game was draw");
    //agar computer and user dono same show karte hai to game draw hoga.
    message.innerHTML = "SORRY!... GAME WAS DRAW PLAY AGAIN ";
}
 
const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        // console.log("Congratulations!...  You are Winner");
        message.innerHTML = `Congratulations!...  You are Winner ${userChoice} betas ${computerChoice}`;
       message.style.backgroundColor = "green";
       userScore++;
       userScorePoints.innerText = userScore;
    }else{
        computerScore++;
        computerScorePointes.innerText = computerScore;
        // console.log("Loser!... Better Luck Next Time");
        message.innerHTML = `Loser!... Better Luck Next Time ${computerChoice} betas your ${userChoice}`;
    }
}
// const showWinner = (userWin, userChoice, computerChoice) => {

//     if(userWin) {
//         // Clear previous content of message container
//         message.innerHTML = '';

//         // Display congratulation message
//         const congratulationMessage = document.createElement('p');
//         congratulationMessage.innerHTML = `Congratulations!... You are Winner ${userChoice} beats ${computerChoice}`;
//         message.appendChild(congratulationMessage);

//         // Display congratulation GIF
//         const congratulationGif = document.createElement('img');
//         congratulationGif.src = './tenor.gif'; // Replace 'congratulation.gif' with the path to your GIF
//         message.appendChild(congratulationGif);

//         message.style.backgroundColor = "green";
//         userScore++;
//         userScorePoints.innerText = userScore;

//     } else {

//         computerScore++;
//         computerScorePointes.innerText = computerScore;
//         message.innerHTML = `Loser!... Better Luck Next Time ${computerChoice} beats your ${userChoice}`;
//     }
// }


const playGame =(userChoice) =>{     //we generate by computer choices to chose the div
    console.log("choice was clicked", userChoice);
const computerChoice = generateComputerChoice();
console.log("this is comp", computerChoice);
if(userChoice === computerChoice){
drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
       userWin= computerChoice === "paper" ? false : true;
    //agar user ne rock diya and computer ne paper diya to computer win hogo aur userchoise ko false kar dega.

    }else if(userChoice === paper){
        // ccomputer choice rock ya phir scissor
        userWin = computerChoice === "scissors" ? false : true;
    }else{
        computerChoice === "rock" ? false :true;
    }
    showWinner(userWin,userChoice,computerChoice);

}
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
       const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})
