import { additionalInfo, contactInfo, socialMediaInfo, staffInfo } from "../data/aboutInfo";

import paragraphs from "../data/aboutHistory";
import getContentElement from "../functions/content";
import '../styles/about.css';

function createHistoryContainer() {
    const historyContainer = document.createElement('div');
    const historyTitleContainer = document.createElement('div');
    const historyTitle = document.createElement('h2');
    const historySectionInfo = document.createElement('div');

    historyContainer.classList.add('history-container');
    historyTitleContainer.classList.add('history-title-container');
    historyTitle.classList.add('history-title');
    historySectionInfo.classList.add('history-section-info');

    historyTitle.textContent = 'History';

    paragraphs.forEach(element => {
        let paragraph = document.createElement('p');

        paragraph.classList.add('history-paragraph');
        paragraph.textContent = element;

        historySectionInfo.appendChild(paragraph);
    });

    historyContainer.appendChild(historyTitleContainer);
    historyContainer.appendChild(historySectionInfo);
    historyTitleContainer.appendChild(historyTitle);

    return historyContainer;
}

function createInfoSection(infoSection, arrayInfo) {
    arrayInfo.forEach(element => {
        let infoPart = document.createElement('div');

        let labelContainer = document.createElement('div');
        let valueContainer = document.createElement('div');

        let labelContent = document.createElement('span');
        let valueContent = document.createElement('span');

        infoPart.classList.add('mar-bot-2r');

        labelContent.textContent = element.label;
        valueContent.textContent = element.value;

        infoPart.appendChild(labelContainer);
        infoPart.appendChild(valueContainer);
        labelContainer.appendChild(labelContent);
        valueContainer.appendChild(valueContent);

        infoSection.appendChild(infoPart);
    })
}

function createAboutInfo() {
    const infoContainer = document.createElement('div');

    const restaurantNameContainer = document.createElement('div');
    const restaurantName = document.createElement('h2');
    const infoContent = document.createElement('div');

    const contactInfoSection = document.createElement('div');
    const staffInfoSection = document.createElement('div');
    const additionalInfoSection = document.createElement('div');
    const socialMediaSection = document.createElement('div');

    infoContainer.classList.add('info-container');
    restaurantNameContainer.classList.add('restaurant-name-container');
    infoContent.classList.add('info');
    contactInfoSection.classList.add('contact-info');
    staffInfoSection.classList.add('contact-info');
    additionalInfoSection.classList.add('contact-info');
    socialMediaSection.classList.add('contact-info');

    restaurantName.textContent = 'Trattoria Del Gusto';

    infoContainer.appendChild(restaurantNameContainer);
    infoContainer.appendChild(infoContent);
    restaurantNameContainer.appendChild(restaurantName);

    infoContent.appendChild(contactInfoSection);
    infoContent.appendChild(staffInfoSection);
    infoContent.appendChild(additionalInfoSection);
    infoContent.appendChild(socialMediaSection);

    createInfoSection(contactInfoSection, contactInfo);
    createInfoSection(staffInfoSection, staffInfo);
    createInfoSection(additionalInfoSection, additionalInfo);
    createInfoSection(socialMediaSection, socialMediaInfo);

    return infoContainer;
}

function loadAboutPage(){
    const content = getContentElement();

    content.appendChild(createHistoryContainer());
    content.appendChild(createAboutInfo());
}

export default loadAboutPage;


