const timerBlock = document.querySelector('.timer__time');
const dedline = ('31 march 2026');

let interval;


function updateClock() {
    const date = new Date().getTime();
    const dateNew = new Date(dedline).getTime();
    const tumeRemaining = (dateNew - date) / 1000;
    
    const hours = Math.floor(tumeRemaining / 60 /60);
    const minutes = Math.floor((tumeRemaining / 60) % 60);
    const second = Math.floor(tumeRemaining % 60);

    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSecond = second < 10 ? '0' + second : second;
    
    timerBlock.textContent = `${fHours}:${fMinutes}:${fSecond}`;

    if (tumeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = `00:00:00`;
    }
}

updateClock();

interval = setInterval(updateClock, 500);

