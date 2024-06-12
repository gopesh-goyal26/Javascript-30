const keyList = [...document.querySelectorAll(".key")];
const audioList = [...document.querySelectorAll("audio")];

const playMusic = key => {
    const element = keyList.find(el => el.dataset.key == key); // Find the element from the keyList whose attribute matches the key.
    const audio = audioList.find(audio => audio.dataset.key == key); // Find the audio element from the audioList whose attribute matches the key.
    element.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

const stopMusic = key => {
    const element = keyList.find(el => el.dataset.key == key);
    const audio = audioList.find(audio => audio.dataset.key == key);
    element.classList.remove("playing");
    // audio.pause();
}

window.addEventListener('keydown', e => {
    const key = e.keyCode;
    playMusic(key);
})

window.addEventListener('keyup', e => {
    const key = e.keyCode;
    stopMusic(key);
})