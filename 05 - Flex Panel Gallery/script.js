const panels = document.querySelectorAll(".panel");

const openPanel = (e) => {
    e.currentTarget.classList.toggle("open");
}

const openChild = (e) => {
    if (e.propertyName.includes("flex")){
        e.currentTarget.classList.toggle("open-child")
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', openPanel);
    panel.addEventListener('transitionend', openChild)
});