// Import other functions
import { flowTimer, breakTimer, finished } from "./StudySession.js";

// Document Elements

const timer = document.getElementById("timer");

const studyBtn = document.getElementById("studyBtn");
const breakBtn = document.getElementById("breakBtn");
const finishedBtn = document.getElementById("finishedBtn");




// Classes and Variables
let studyBol = false;
let breakBol = false;

let studyingTime = 0;


// Event Listeners

if (studyBtn) {
  studyBtn.addEventListener("click", () => {
    console.log("study button clicked");
    breakBol = false;
    studyBol = true;

    
    let startTime = Date.now();

    if (studyBol) {
      setInterval(() => {studyingTime = flowTimer(startTime)});
    }
  });
}

if (breakBtn) {
  breakBtn.addEventListener("click", () => {
    console.log("break button clicked");
    studyBol = false;
    breakBol = true;

    // studyingTime = Date.now() + 10000; // this is for testing purposes, just hit the break button if enabled

    let breakTime = Date.now() + (studyingTime / 5);

    if (breakBol) {
      setInterval(() => {breakTimer(breakTime)});
    }
  });
}


if (finishedBtn) {
  finishedBtn.addEventListener("click", () => {
    console.log("finished button clicked");
    finished();

    studyBol = false;
    breakBol = false;
    
  });
}


// Functions

