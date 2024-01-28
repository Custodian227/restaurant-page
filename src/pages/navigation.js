import getContentElement from "../functions/content";
import loadHomePage from "./home";
import loadMenuPage from "./menu";

function initializeButtons() {
    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');

    homeButton.addEventListener('click', () => {
        const content = getContentElement();
        content.textContent = '';
        
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        const content = getContentElement();
        
        content.textContent = '';
        loadMenuPage();
    });
}

export default initializeButtons;

