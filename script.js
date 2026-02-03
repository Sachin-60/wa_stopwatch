let starttime = 0;
let elapsedTime = 0;
let startInterval;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    return (
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + '.' +
        String(milliseconds).padStart(2, '0')
    );

};

let timerInterval;      

startButton.onclick = () => {
    starttime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - starttime;
        display.textContent = formatTime(elapsedTime);
    }, 10);

    startButton.disabled = true;
    stopButton.disabled = false;

};


stopButton.onclick = () => {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

resetButton.onclick = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = formatTime(elapsedTime);
    startButton.disabled = false;
    stopButton.disabled = true;
}
display.textContent = formatTime(elapsedTime);
