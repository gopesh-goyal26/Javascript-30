const inputList = document.querySelectorAll(".controls input")
const rootEl = document.querySelector(":root");

function updateVar() {
    rootEl.style.setProperty(`--${this.name}`, `${this.name === "base" ? this.value : this.value + "px"}`);
}

inputList.forEach(input => {
    input.addEventListener('input', updateVar)
})