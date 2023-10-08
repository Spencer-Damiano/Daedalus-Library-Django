
/* 
Elements in the HTML by ID
*/

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

if (startBtn) {
  startBtn.addEventListener('click', () => {
    console.log('start');
  });
}

if (stopBtn) {
  stopBtn.addEventListener('click', () => {
    console.log('stop');
  });
}

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    console.log('reset');
  });
}