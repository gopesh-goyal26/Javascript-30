const heroDiv = document.querySelector(".hero");
const heading = document.querySelector("h1");
const moveMargin = 120;
function moveShadow(e){
    const {offsetWidth: width,  offsetHeight: height} = this;
    let {offsetX: x, offsetY: y} = e;
    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    };
    
    const xMove = Math.round((x / width) * moveMargin) - (moveMargin / 2);
    const yMove = Math.round((y / height) * moveMargin) - (moveMargin / 2);
    console.log(xMove, yMove);
    heading.style.textShadow = `${xMove}px ${yMove}px 0 rgba(0,0,0,0.5)`;
}

heroDiv.addEventListener('mousemove', moveShadow);