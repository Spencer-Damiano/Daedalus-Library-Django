
let studyBol = false;
let breakBol = false;


export function flowTimer(startTime: number): number {
    studyBol = true;
    let count = 0;

    if (studyBol) {
        console.log('Start Time: ' + startTime)
        count = (Date.now() - startTime) / 1000;
        _formatTime(count);
    }
    studyBol = false;
    return count;
}

export function breakTimer(endTime: number) {
    breakBol = true;
    let count = 0;

    if (breakBol) {
        let currentTime: number = Date.now();

        count = (endTime - currentTime) / 1000;
        console.log('count: ' + count);
        _formatTime(count);

        if (count <= 0) {
            breakBol = false;
            console.log('Break Time is up');
        }
    }
    breakBol = false;
    return count;
}


export function finished() {
    studyBol = false;
    breakBol = false;
    console.log('Finished');
}

function _formatTime(count: number): void {
    const timer = document.getElementById("timer");

    if (timer &&  studyBol) {
        if (count <= 60){
            let hrs = (0).toString().padStart(2, '0');
            let mins = (0).toString().padStart(2, '0');
            let secs = Math.floor(count).toString().padStart(2, '0');

            timer.innerHTML = `${hrs}:${mins}:${secs}`;
        } else if (count > 60 && count <= 3600) {
            let hrs = (0).toString().padStart(2, '0');
            let mins = Math.floor(count / 60).toString().padStart(2, '0');
            let secs = Math.floor(count % 60).toString().padStart(2, '0');

            timer.innerHTML = `${hrs}:${mins}:${secs}`;
        } else if (count > 3600) {
            let hrs = Math.floor(count / 3600).toString().padStart(2, '0');
            let mins = Math.floor((count % 3600) / 60).toString().padStart(2, '0');
            let secs = Math.floor(count % 60).toString().padStart(2, '0');

            timer.innerHTML = `${hrs}:${mins}:${secs}`;
        } else {
            let hrs = (-99).toString().padStart(2, '0');
            let mins = (-99).toString().padStart(2, '0');
            let secs = (-99).toString().padStart(2, '0');
            
            timer.innerHTML = `${hrs}:${mins}:${secs}`;
            console.log("Error in formatTime function");
            
        }
    } else if (timer && breakBol){
        const hrs = Math.floor(count / 3600000).toString().padStart(2, '0') ;
        const mins = Math.floor((count % 3600000) / 60000).toString().padStart(2, '0');
        const secs = Math.floor((count % 60000) / 1000).toString().padStart(2, '0'); 
        
        
        timer.innerHTML = `${hrs}:${mins}:${secs}`;
    }
}