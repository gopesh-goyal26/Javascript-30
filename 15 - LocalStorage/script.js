const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

const addItem = (e) => {
    e.preventDefault();
    let text = e.target.querySelector("[name=item]").value;
    const item = {text, "done": false};
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    displayDish();
    e.target.reset();
}

const displayDish = () => {
    itemsList.innerHTML = items.map((item, index) => {
        return `
        <li>
          <input type="checkbox" id="item${index}" data-index="${index}" ${item.done ? 'checked' : ''}>
          <label for="item${index}">${item.text}</label>
        </li>
        `
    }).join("");
}

const toggleCheck = e => {
    if(!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
}

displayDish();

itemsList.addEventListener('click', toggleCheck);
addItems.addEventListener('submit', addItem);