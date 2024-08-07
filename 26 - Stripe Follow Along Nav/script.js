const nav = document.querySelector(".top");
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");

function handleEnter(){
    this.classList.add("trigger-enter");
    setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 1);
    background.classList.add("open")

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }
    
    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px`);
}

function handleLeave(){
    this.classList.remove("trigger-enter-active");
    setTimeout(() => !this.classList.contains("trigger-enter-active") && this.classList.remove("trigger-enter"), 300);
    background.classList.remove("open");
}

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', handleEnter);
    trigger.addEventListener('mouseleave', handleLeave)
})