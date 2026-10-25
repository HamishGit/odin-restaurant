import "./styles.css";
import LoadHomePage from "./home.js";
import LoadMenuPage from "./Menu.js";
import LoadAboutPage from "./About.js";

const UI = {
    HomeBtn: document.querySelector('#home-btn'),
    MenuBtn: document.querySelector('#menu-btn'),
    AboutBtn: document.querySelector('#about-btn'),
};

LoadHomePage();

UI.HomeBtn.addEventListener('click', LoadHomePage);
UI.MenuBtn.addEventListener('click', LoadMenuPage);
UI.AboutBtn.addEventListener('click', LoadAboutPage);
