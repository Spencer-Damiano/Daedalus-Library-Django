
let studyTime = 0;



export function flowomodoro(startTime: number, breakTime: boolean) {
    // don't call any Date.now() functions in here, it will mess up the timer
    // think of this as one big loop that is called every millisecond
    // setting the date half way through the timer will think that no time has passed

    if (studyTime === 0) {
        studyTimer(startTime);
    } else if (studyTime > 0 && breakTime) {
        breakTimer(studyTime);
    } 

    
}

export function studyTimer(startTime: number): number {
    studyTime = (Date.now() - startTime);
    _formatTime(studyTime);
    return studyTime;
}

export function breakTimer(endTime: number): boolean{
    let remainingTime = endTime - Date.now(); 
    if (remainingTime >= 0) {
        _formatTime(remainingTime);
        return true;
    } else if (remainingTime < 0) {
        console.log('running neg timer');
        return false;
    }
    return true // source of a hypothetical bug that wont stop the timer
}

function _formatTime(count: number): void {

    const timer = document.getElementById("timer");

    if (timer) {

        let hrs = Math.floor((count / 3_600_000) / 1000).toString().padStart(2, '0') ; // the 1000 is to convert from milliseconds to seconds
        let mins = Math.floor((count % 3_600_000) / 60_000).toString().padStart(2, '0'); // the 60_000 is to convert from milliseconds to minutes (the _ is just for readability)
        let secs = Math.floor((count % 60_000) / 1000).toString().padStart(2, '0');

        timer.innerHTML = `${hrs}:${mins}:${secs}`;
    }
}

function _setStudyButtonStyle () {
    const studyBtn = document.getElementById("studyBtn");

}

function _setStudying(studyCycle: number){
    // if (studyCycle % 2 === 0) {
    //     studying = false;
    // } else {
    //     studying = true;  
    // }

    // studying = studyCycle % 2 === 0;

    // console.log('studying set to: ' + studying);
}