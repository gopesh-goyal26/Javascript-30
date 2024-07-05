const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function addVoices(){
    voices = this.getVoices();

    voices.forEach(voice => {
        const option = document.createElement("option");
        option.setAttribute('value', voice.name);
        option.textContent = `${voice.name} ${voice.lang}`
        voicesDropdown.appendChild(option);
    });
};

function start() {
    speechSynthesis.cancel();
    msg.voice = voices.find(voice => voice.name === voicesDropdown.selectedOptions[0].value);

    options.forEach(option => {
        msg[option.name] = option.value;
    });

    speechSynthesis.speak(msg);
}

function stop(){
    speechSynthesis.cancel();
}

speechSynthesis.addEventListener('voiceschanged', addVoices);
speakButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);