const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

// The event is bubbled up by default. i.e., from div three to two to one.

// To reverse the bubbling we set the capture value to true while adding eventListener.

// To stop this propagation(bubbling) altogether, we can use event.stopPropagation on the callback funtion.

// There is one more property called 'once' on options object of eventListener which only calls the eventListener once and never again.
// For detailed info of options object, check https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options

function logText(e) {
    e.stopPropagation();
    console.log(this.classList.value);
}

divs.forEach(div => {
    div.addEventListener('click', logText, {
        // capture: true,
    });
})

button.addEventListener('click', e => {
    console.log("Button Clicked!!");
},{
    once: true
})

