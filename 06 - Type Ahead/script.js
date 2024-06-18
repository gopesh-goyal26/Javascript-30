const searchInput = document.querySelector(".search");
const suggestionsList = document.querySelector(".suggestions");
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const toJSON = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

const matchInput = async inputVal => {
    const allCities = await toJSON();
    const filteredCities = allCities.filter(cities => cities.city.toLowerCase().includes(inputVal) || cities.state.toLowerCase().includes(inputVal));
    displayResult(inputVal, filteredCities);
}

const displayResult = (inputVal, cityArr) => {

    const regex = new RegExp(inputVal, "gi");
    const fragment = document.createDocumentFragment();
    
    while (suggestionsList.firstChild) {
        suggestionsList.removeChild(suggestionsList.firstChild);
      };

    cityArr.forEach(city => {
        const cityName = city.city.replace(regex, `<span class="hl">${inputVal}</span>`);
        const stateName = city.state.replace(regex, `<span class="hl">${inputVal}</span>`);

        const newLi = document.createElement("li");
        const nameEl = document.createElement("span");
        const populationEl = document.createElement("span");

        nameEl.innerHTML = `${cityName}, ${stateName}`;
        populationEl.classList.add("population");
        populationEl.textContent = city.population;
        
        newLi.appendChild(nameEl);
        newLi.appendChild(populationEl);
        fragment.appendChild(newLi);
    });

    suggestionsList.appendChild(fragment);
}

searchInput.addEventListener('input', function() {
    if(this.value === ""){
        suggestionsList.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
        return;
    }
    matchInput(this.value.toLowerCase());
})