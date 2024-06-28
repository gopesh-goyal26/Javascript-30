const list = document.getElementById("bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const regex = /^\b(A|An|The)\s\b/;

const sortedBands = bands.map(band => regex.test(band) ? band.replace(regex, "") : band).sort();

const newBands = sortedBands.map(newBand => bands.find(band => band.includes(newBand)));

newBands.forEach(band => {
    const newLi = document.createElement("li");
    newLi.textContent = band;
    list.appendChild(newLi);
})