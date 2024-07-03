const aLinks = document.querySelectorAll("a");

const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink(){
    const coords = this.getBoundingClientRect();
    const positions = {"width"  : coords.width,
                       "height" : coords.height,
                       "top"    : coords.top + window.scrollY,
                       "left"   : coords.left + window.scrollX};
    for (const position in positions){
     highlight.style[position] = `${positions[position]}px`;
    }
}

aLinks.forEach(aLink => aLink.addEventListener('mouseenter', highlightLink));