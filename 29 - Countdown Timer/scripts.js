let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

const timer = seconds => {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTime(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        };
        displayTime(secondsLeft);
    }, 1000);
}

const displayTime = seconds => {
    const minutesLeft = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    timerDisplay.textContent = `${minutesLeft}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

const displayEndTime = timestamp => {
    const endTime = new Date(timestamp);
    const hours = endTime.getHours();
    const minutes = endTime.getMinutes();
    const isGreater = hours > 12;
    endTimeDisplay.textContent = `Get back at ${isGreater ? hours - 12 : hours}:${minutes < 10 ? "0" : ""}${minutes} ${isGreater ? "PM" : "AM"}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    const secs = mins * 60;
    timer(secs);
    this.reset();
});