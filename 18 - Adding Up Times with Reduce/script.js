const timeItems = Array.from(document.querySelectorAll("ul > [data-time]"));
console.log(timeItems);
const totalSecs = timeItems.reduce((total, curr) => {
    const [mins, secs] = (curr.dataset.time).split(":").map(parseFloat);
    return total += mins * 60 + secs;
},0)

let secsLeft = totalSecs;
const hours = Math.floor(secsLeft / 3600);

secsLeft = secsLeft % 3600;
const minutes = Math.floor(secsLeft / 60);

secsLeft = secsLeft % 60;
console.log(`Total Duration is ${hours}hr ${minutes}min ${secsLeft}sec.`);