import loadHomePage from "./home";
import loadMenuPage from "./menu";
import initializeButtons from "./navigation";

function initializeWebsite() {
    initializeButtons();
    loadMenuPage()
}

export default initializeWebsite;