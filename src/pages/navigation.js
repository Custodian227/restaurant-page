import getContentElement from "../functions/content";
import loadAboutPage from "./about";
import loadHomePage from "./home";
import loadMenuPage from "./menu";

function initializeButtons() {
    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');
    const aboutButton = document.querySelector('.about-button');

    const content = getContentElement();

    homeButton.addEventListener('click', () => {
        content.textContent = '';     
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {   
        content.textContent = '';    
        loadMenuPage();
    });

    aboutButton.addEventListener('click', () => {
        content.textContent = '';    
        loadAboutPage();
    });
}

export default initializeButtons;

