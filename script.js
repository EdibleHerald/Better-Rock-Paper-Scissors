// Make a Rock-Paper-Scissors game but with an interface
// - Make clickable buttons to choose action
// - Play the game as normally
// - get a little fancy with CSS

// Let the player select one of the options

//Lets assign variables to each option:
// Rock - R
// Paper - P
// Scissors - S

// Assign a function to run when player chooses an option
// For this, we need to run a function on click in the html side

choicesArray = [] //[R,P,S]
botArray = [];
score = 0;


function playerChoice(choice){

    choice = choice.toString();

    if (choice=='r'){
        choicesArray = ['r',0,0]
    }else if (choice == 'p'){
        choicesArray = [0,'p',0]
    }else if (choice == 's'){
        choicesArray = [0,0,'s'];
    }
    
    startRound();

}

// make function that runs the round

// Rock beats scissors
// scissors beats paper
// paper beats rock

function startRound(){
    botChooses();

    botArrayString = botArray.toString();
    choicesArrayString = choicesArray.toString()

    if (botArrayString == choicesArrayString){
        clearTimeout(timeoutID);
        choicesArray = [];
        botArray = [];
        displayResult("Tie!");
        setTimeout(result,3000, advice);
    }
    else if(
        botArray[0] == 'r' && choicesArray[1] == 'p' ||
        botArray[2] == 's' && choicesArray[0] == 'r' ||
        botArray[1] == 'p' && choicesArray[2] == 's'
        ){
                clearTimeout(timeoutID);
                choicesArray = [];
                botArray = [];
                displayResult("You Win!");
                increaseScore();
                setTimeout(result,3000, advice);
    }else if(
        botArray[0] == 'r' && choicesArray[2] == 's' ||
        botArray[1] == 'p' && choicesArray[0] =='r' ||
        botArray[2] == 's' && choicesArray[1] == 'p'
        ){
            clearTimeout(timeoutID);
            choicesArray = [];
            botArray = [];
            displayResult("You Lose!");
            decreaseScore();
            setTimeout(result,3000, advice);
        }
}

// make function that has "bot" choose

function botChooses(){
    let randomNum;
    randomNum = Math.floor(Math.random()*3);

    if (randomNum == 0){
        botArray = ['r',0,0];
    }else if (randomNum == 1){
        botArray = [0,'p',0];
    }else if (randomNum == 2){
        botArray = [0,0,'s'];
    }

    return botArray;
}

// Function that displays message for "Tie!"

let result = displayResult;
let advice = "Choose Wisely, My Friend.";
let timeoutID = setTimeout(result,3000);
function displayResult(message){

    let subHeading = document.querySelector(".text")

    subHeading.textContent = message;


}

// Create a function that increases score

function increaseScore(){
    score+=1;
    document.querySelector(".score").textContent = score;
}

// Create a function that decreases score

function decreaseScore(){
    score-=1;
    if (score<=0){
        score = 0;
    }
    document.querySelector(".score").textContent = score;
}