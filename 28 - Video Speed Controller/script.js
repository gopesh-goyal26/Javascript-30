const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

speed.addEventListener('mousemove', function(e){
    const yPosition = e.pageY - this.offsetTop;
    const percent = yPosition / this.offsetHeight;
    const min = 0.5;
    const max = 2;
    const playbackRate = percent * (max - min) + min;
    
    animateBar(percent, playbackRate);
    adjustVideoSpeed(playbackRate);
    
});

const animateBar = (percent, playbackRate) => {
    const height = percent * 100 + "%";
    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + "x";
};

const adjustVideoSpeed = playbackRate => {
    video.playbackRate = playbackRate;
}