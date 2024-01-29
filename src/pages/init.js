import loadHomePage from "./home";
import initializeButtons from "./navigation";

function initializeWebsite() {
    initializeButtons();
    loadHomePage();
}

export default initializeWebsite;