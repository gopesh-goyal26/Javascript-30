const inputsList = document.querySelectorAll("input");
const inputs = [...inputsList];

let lastSelect;

function selectChecks(e){
    let inBetween = false;

    if (e.shiftKey && this.checked ){
        inputs.forEach(input => {
            if(input === this || input === lastSelect){
                inBetween = !inBetween;
            }

            if(inBetween) input.checked = true;
        })
    }
    lastSelect = this;
}

inputs.forEach(input => input.addEventListener('click', selectChecks));
