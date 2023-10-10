// Import other functions
import { StudySession } from "./StudySession.js";

// Document Elements

const timer = document.getElementById("timer");

const studyBtn = document.getElementById("studyBtn");
const breakBtn = document.getElementById("breakBtn");
const finishedBtn = document.getElementById("finishedBtn");

// Classes and Variables
let _studySession = new StudySession();


// Event Listeners

if (studyBtn) {
  studyBtn.addEventListener("click", () => {
    console.log(_studySession.study());
  });
}

if (breakBtn) {
  breakBtn.addEventListener("click", () => {
    _studySession.break(0);
  });
}

