const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

const mouseClick = (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const mouseUp = () => {
    isDown = false;
    slider.classList.remove("active");
}

const dragging = (e) => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (startX - x) * 2;
    slider.scrollLeft = scrollLeft + walk;
}

slider.addEventListener('mousedown', mouseClick);

slider.addEventListener('mouseup', mouseUp);

slider.addEventListener('mouseleave', mouseUp);

slider.addEventListener('mousemove', dragging);