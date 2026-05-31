import "./styles.css";

import { homePage } from "./homepage.js";
import loadMenu from "./menu.js";
import about from "./about.js"
import loadAbout from "./about.js";

const contentDiv = document.querySelector("#content")
const navBtns = document.querySelectorAll(".nav-btn")


navBtns.forEach(button => {
    button.addEventListener("click", event =>{
        const page =  event.target.dataset.page
        contentDiv.textContent = ""
        if (page === "home"){
            homePage()
        }
        else if(page === "menu"){
            loadMenu()
        }
        else if(page === "about"){
            loadAbout()
        }
        else{
            alert("something wrong")
        }
    })
})

homePage()
