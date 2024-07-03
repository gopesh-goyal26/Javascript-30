const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

const navigation = navigator.geolocation;

const onMovement = (data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.facing})deg`;
};

const onError = err => console.log(err);

navigation.watchPosition(onMovement, onError);