const video = document.querySelector("video");
const playPauseBtn = document.querySelector("button[title='Toggle Play']");
const sliders = document.querySelectorAll(".player__slider");
const speedSlider = document.querySelector("input[name='playbackRate']");
const seekBtns = document.querySelectorAll("[data-skip]");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
let isClicked = false;

const togglePlayPause = () => {
    if (video.paused){
        video.play();
        playPauseBtn.textContent = "⏸︎"
        return;
    }
    
    video.pause();
    playPauseBtn.textContent = "►"
}

const handleSliders = (e) =>{
    video[e.target.name] = e.target.value;
};

function seek(){
    video.currentTime += Number(this.dataset.skip);
}

const updateProgressBar = () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis =  `${progressPercent}%`;
}

function dragProgress(e){
    const durationPercent = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = durationPercent;
}

playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);
sliders.forEach(slider => slider.addEventListener('input', handleSliders));
seekBtns.forEach(btn => btn.addEventListener('click', seek));
video.addEventListener('timeupdate', updateProgressBar);
progress.addEventListener('click', dragProgress);
progress.addEventListener('mousedown', () => isClicked = true);
progress.addEventListener('mouseup', () => isClicked = false);
progress.addEventListener('mousemove', e => isClicked && dragProgress(e));