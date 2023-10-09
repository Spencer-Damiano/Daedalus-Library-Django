// Import other functions

// Document Elements

const timer = document.getElementById("timer");

const studyBtn = document.getElementById("studyBtn");
const breakBtn = document.getElementById("breakBtn");
const finishedBtn = document.getElementById("finishedBtn");

if (studyBtn) {
  studyBtn.addEventListener("click", () => {
    console.log("Study Button Clicked");
  });
}

