const nav = document.querySelector("#main");
const navTop = nav.offsetTop;

const fixNav = () => window.scrollY >= navTop ? document.body.classList.add("fixedNav") : document.body.classList.remove("fixedNav");

console.dir(nav);
window.addEventListener('scroll', fixNav);