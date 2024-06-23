const konami = "gopeshGoyal";
const keys = [];

const checkSequence = (e) => {
    e.key !== "Shift" && e.key !== "CapsLock" && keys.push(e.key);
    keys.splice(0, keys.length - konami.length);
    if(keys.join("").includes(konami)){
        document.getElementById("konamiMsg").textContent = "You got the secret Konami Code!!"
        cornify_add();
    };
    console.log(keys.join(""));
}
window.addEventListener('keyup', checkSequence)