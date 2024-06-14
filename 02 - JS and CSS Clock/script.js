const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const updateClock = () => {

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (seconds === 0){
        secondHand.style.transition = "none";
    } else{
        secondHand.style.transition = "";
    }

    if (minutes === 0){
        minHand.style.transition = "none";
    } else{
        minHand.style.transition = "";
    }

    if (((hours * 3600) + (minutes * 60) + seconds) === 43200){
        hourHand.style.transition = "none";
    } else{
        hourHand.style.transition = "";
    }



    secondHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
    minHand.style.transform = `rotate(${((minutes * 60) + seconds) * 0.1 + 90}deg)`;
    hourHand.style.transform = `rotate(${((hours * 3600) + (minutes * 60) + seconds) * (1/120) + 90}deg)`;
}

setInterval(updateClock, 100);