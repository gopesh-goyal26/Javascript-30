const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d', {willReadFrequently: true});
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = () => {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(mediaStream => {
        video.srcObject = mediaStream;
        video.play();
        
    })
    .catch(e => console.log(e));
}

const drawToCanvas = () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    (function draw() {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        pixels = greenScreen(pixels);
        ctx.putImageData(pixels, 0, 0);
        return requestAnimationFrame(draw);
    })();
}

const takePhoto = () => {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement("a");
    link.href = data
    link.setAttribute('download', "nigger");
    link.innerHTML = `<img src="${data}" alt="NIGGA">`;
    strip.insertBefore(link, strip.firstChild);
}

const greenScreen = pixels => {
    const levels = {};

    document.querySelectorAll(".rgb input").forEach(input => {
        levels[input.name] = input.value;
    })

    for(let i = 0; i < pixels.data.length; i += 4){
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {

            pixels.data[i + 3] = 0;
          }
    }

    return pixels;
}

video.addEventListener('canplay', drawToCanvas);

getVideo();