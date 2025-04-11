const modeList = document.querySelector("select");
let mode = "light";
const body = document.querySelector("body");
const headerContent = document.querySelector(".header-content");
const headerDivider = document.querySelector(".header-divider");
const navContent = document.querySelector(".nav-content");
const about = document.querySelector("#about");
const a = document.querySelector("a:link");


const update = document.querySelector(".update span");
const date = new Date();
let year = date.getFullYear();
update.innerText = year;


modeList.addEventListener("change", function (e) {
    mood = e.target.value;

    if (mood === "dark") {
        about.style.setProperty('background-color', '#2e2e1f');
        body.classList.add("dark-mode-body");
        headerContent.classList.add("dark-mode-header-content");
        headerDivider.classList.add("dark-mode-divider");
        navContent.classList.add("dark-mode-dark-gray");
        a.classList.add("dark-mode");
       

    } else if (mood === "light") {
        body.classList.remove("dark-mode-body");
        headerContent.classList.remove("dark-mode-header-content");
        headerDivider.classList.remove("dark-mode-divider");
        navContent.classList.remove("dark-mode-dark-gray");
        about.style.setProperty('background-color', '#dedece');
        a.classList.add("dark-mode");
        
        

    }

})