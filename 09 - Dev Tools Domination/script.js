const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');
function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
    console.log("Regular console statement");

// Interpolated
// Although we dont need it as we have template literals now.
    console.log("'%s' is interpolated.", "this");

// Styled
    console.log("This text is %cstyled.", "color: red;")

// warning!
    console.warn("Work Harder!!!");
// Error :|
    console.error("Oh NO! Error!!");
// Info
    console.info("The Weather is Pleasant!!");
// Testing
    console.assert(1 === 2, "This only prints if the assertion is false.")
// clearing
    console.log("console.clear() will clear the console");
// Viewing DOM Elements
    console.dir(p);
// Grouping together
    dogs.forEach(dog => {
        console.group(dog.name)
        console.log(`This is ${dog.name}.`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.groupEnd();
    })

// counting
    for(let i = 1; i <= 10; i++){
        i % 2 === 0 ? console.count("Even") : console.count("Odd");
    }
// timing
console.time("Time to fetch data");
fetch("https://api.restful-api.dev/objects")
    .then(res => res.json())
    .then(data => {
        console.timeEnd("Time to fetch data");
        console.log(data);
    });