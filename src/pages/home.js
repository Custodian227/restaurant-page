import '../styles/index.css'
import getContentElement from '../functions/content';
import { mottoHeaderContent } from '../data/homeMotto';
import { mottoParagraphContent } from '../data/homeMotto';

function createImageContainer() {
    const restaurantImageContainer = document.createElement('div');
    const restaurantNameContainer = document.createElement('div');
    const restaurantName = document.createElement('h1');

    restaurantImageContainer.classList.add('text-color-white');
    restaurantImageContainer.classList.add('index-header-image-container');
    restaurantImageContainer.style.height = '100vh';
    restaurantNameContainer.classList.add('index-header-content');
    restaurantName.classList.add('index-title');
    restaurantName.classList.add('font-size-5rem');
    restaurantName.classList.add('index-header-backdrop-filter');

    restaurantName.textContent = 'Trattoria del Gusto';
    restaurantImageContainer.appendChild(restaurantNameContainer);
    restaurantNameContainer.appendChild(restaurantName);

    return restaurantImageContainer;
}

function createRestaurantMotto() {
    const mottoContainer = document.createElement('div');
    const mottoHeaderContainer = document.createElement('div');
    const mottoParagraphContainer = document.createElement('div');
    const mottoHeader = document.createElement('h2');
    const mottoParagraphh = document.createElement('p');

    mottoContainer.classList.add('index-motto');
    mottoHeaderContainer.classList.add('index-motto-header-container');
    mottoHeader.classList.add('font-size-3rem');
    mottoParagraphh.classList.add('font-size-2rem');

    mottoHeader.textContent = mottoHeaderContent;
    mottoParagraphh.textContent = mottoParagraphContent

    mottoContainer.appendChild(mottoHeaderContainer);
    mottoContainer.appendChild(mottoParagraphContainer);
    mottoHeaderContainer.appendChild(mottoHeader);
    mottoParagraphContainer.appendChild(mottoParagraphh);

    return mottoContainer;
}

function loadHomePage() {
    const content = getContentElement();

    content.appendChild(createImageContainer());
    content.appendChild(createRestaurantMotto());
}

export default loadHomePage;
