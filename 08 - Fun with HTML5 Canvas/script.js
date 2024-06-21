const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let isDrawing = false;
let [lastX, lastY] = [0, 0];
let hue = 0;
let direction = true;

const draw = e => {
    if(!isDrawing) return;
    hue = Math.round(Math.random() * 360); //Comment this line and remove comment from below to get another effect
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // hue++;                               // Remove comment
    // if (hue >= 360) hue = 0;             // from here.
    if(ctx.lineWidth <= 1 || ctx.lineWidth >= 60) direction = !direction;
    direction ? ctx.lineWidth++ : ctx.lineWidth--;

}


canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];    
})

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
})

canvas.addEventListener("mouseout", () => {
    isDrawing = false;
})