// Import other functions
import { flowomodoro, breakTimer, studyTimer } from "./StudySession.js";

// Document Elements

const timer = document.getElementById("timer");

const studyBtn = document.getElementById("studyBtn");
const breakBtn = document.getElementById("breakBtn");
const finishedBtn = document.getElementById("finishedBtn");




// Classes and Variables
// let studying = false;
// let !studying = false; // these are in StudySession.ts now and are determined by the buttons being clicked

let studySession: number;
let breakSession: number;
let studyCycle = 0;
let studyTime = 0;
let studying = false;
let breakTime = false;


// Event Listeners

if (studyBtn) {
  studyBtn.addEventListener("click", () => {
    console.log("study button clicked");

    let startTime = Date.now();

    studyCycle += 1;

  
    if (studyCycle % 2 === 0) {
      clearInterval(studySession);

      breakTime = true;

      let endTime = Date.now() + (studyTime / 5); 
      breakSession = setInterval(() => {breakTime = breakTimer(endTime)});

      
      if (breakTime = false) {
        clearInterval(breakSession);
        studyCycle += 1;
        console.log('breakTimer() cleared, studyCycle incremented = ' + studyCycle);
      }
    } else if (studyCycle % 2 === 1) {
      clearInterval(breakSession)
      studySession = setInterval(() => {studyTime = studyTimer(startTime)});
    }

    //studySession = setInterval(() => {flowomodoro(startTime, studying)}); // this is the problem. I need to figure out how to make this work with the flowomodoro() function
    

    
  });
}

// if (breakBtn) {
//   breakBtn.addEventListener("click", () => {
//     console.log("break button clicked");
//     studying = false;
//     !studying = true;

//     studyingTime = Date.now() + 10000; // this is for testing purposes, just hit the break button if enabled

//     let breakTime = Date.now() + (studyingTime / 5);

//     if (!studying) {
//       setInterval(() => {breakTimer(breakTime)});
//     }


//   });
// }


if (finishedBtn) {
  finishedBtn.addEventListener("click", () => {
    console.log("finished button clicked");
    clearInterval(studySession);
    studyCycle = 0; // this is why the timer wouldn't reset
  });
}


// Functions

