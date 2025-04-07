const modeList = document.querySelector("select");
let mode = "light";
const body = document.querySelector("body");
const headerContent = document.querySelector(".header-content");
const headerDivider = document.querySelector(".header-divider");
const navContent = document.querySelector(".nav-content");


const update = document.querySelector(".update span");
const date = new Date();
let year = date.getFullYear();
update.innerText = year;


modeList.addEventListener("change", function (e) {
    mood = e.target.value;

    if (mood === "dark") {
        body.classList.add("dark-mode-body");
        headerContent.classList.add("dark-mode-header-content");
        headerDivider.classList.add("dark-mode-divider");
        navContent.classList.add("dark-mode-dark-gray");
       

    } else if (mood === "light") {
        body.classList.remove("dark-mode-body");
        headerContent.classList.remove("dark-mode-header-content");
        headerDivider.classList.remove("dark-mode-divider");
        navContent.classList.remove("dark-mode-dark-gray");
        
        

    }

})