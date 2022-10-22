// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');



// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            audio.play();
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'green';
               
           } 
          // if it's not a Tie.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(0, 187, 255, 0.952)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(0, 187, 255, 0.952)';
              
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(0, 187, 255, 0.952)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(0, 187, 255, 0.952)';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(0, 187, 255, 0.952)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(0, 187, 255, 0.952)';
           }
        });
    });
}
// Calling the function.
 game();
 
// This function contains all the game logic.



let date = new Date ();
document.getElementById("dateTime").innerHTML = date;

let variable_name = document.getElementById ("dateTime");
variable_name.style.color= 'black';


var scene = new scene({
    ".cony" : {
      0: {
        transform: "translate(-10px, -20px)",
      },
      0.5: {
        transform: "translate(0px, 0px)",
      },
      1: 0,
    },
    ".leg.right .femur": {
      0: {
        transform: "rotate(40deg)",
      },
      1: {
         transform: "rotate(-20deg)",
      },
    },
    ".leg.right .joint": {
      0: {
        transform: {rotate:"0deg"},
      },
      1: {
        transform: {rotate:"-80deg"},
      },
    },
    ".leg.left .femur": {
      0: {
       transform: "rotate(-20deg)"
      },
      1: {
        transform: "rotate(50deg)"
      },
    },
    ".leg.left .joint": {
      0: {
        transform: "rotate(-80deg)"
      },
      1: {
        transform: "rotate(0deg)"
      },
    },
    ".arm.left": {
      0: {
        transform: "rotate(130deg)",
      },
      0.5: {
        transform: "rotate(100deg)",
      },
      1: 0,
    },
    ".arm.right" : {
      0: {
        transform: "rotate(-130deg)",
      },
      0.5: {
        transform: "rotate(-100deg)",
      },
      1: 0,
    },
    ".mouth .inner" : {
      0: {
        height: "100%"
      },
      0.3: {
        height : "0%",
      },
      0.5: 0,
      options: {
        iterationCount: 2,
      }
    }
  }, {
    iterationCount: "infinite",
    direction: "alternate",
    easing: scene.EASE_IN_OUT,
    selector: true,
  }).playCSS();