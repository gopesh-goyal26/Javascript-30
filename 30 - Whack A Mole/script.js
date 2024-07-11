const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let previousHole;
let isOver = false;
let score;
let callAgain;

const randomTimer = (min, max) => {
    const num = Math.round(Math.random() * (max - min) + min);
    return num;
};

const randomHole = () => {
    const randNum = Math.floor(Math.random() * holes.length);
    const hole = holes[randNum];
    if(previousHole === hole){
        return randomHole();
    };

    previousHole = hole;
    return hole;
}

const moleUp = () => {
    clearTimeout(callAgain);
    const time = randomTimer(400, 1000);
    const hole = randomHole();
    if(!isOver){
        hole.classList.add("up");
        callAgain = setTimeout(() => {
            hole.classList.remove("up");
            moleUp();
        }, time);
    }
}

const startGame = () => {
    score = 0;
    scoreBoard.textContent = 0;
    isOver = false;
    moleUp();
    setTimeout(() => isOver = true, 10000);
}

moles.forEach(mole => mole.addEventListener('click', (e) => {
    score++;
    scoreBoard.textContent = score;
    e.target.parentNode.classList.remove("up");
    moleUp();
})) 