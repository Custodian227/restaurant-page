import '../styles/index.css'
import getContentElement from '../functions/content';

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
    mottoParagraphContainer.classList.add('index-motto-paragraph-container');
    mottoHeader.classList.add('font-size-3rem');
    mottoParagraphh.classList.add('font-size-2rem');

    mottoHeader.textContent =
        `Indulge in the Timeless Elegance of Authentic Italian 
    Dining Where Every Bite Tells a Tale of Passion, Flavor, and Unmatched Delight!`;

    mottoParagraphh.textContent =
        `Step into a world where Italian tradition meets culinary artistry at our restaurant. 
    The ambiance exudes rustic charm, setting the stage for a dining experience that captures the essence of Italy. 
    Our menu, curated with passion, showcases a rich tapestry of flavors, from perfectly aged cheeses to handcrafted pasta.
    Each dish is a symphony of taste, crafted to indulge your palate. Whether savoring a classic or a contemporary creation, 
    our attentive staff ensures a celebration of warm hospitality. Dining with us is an immersive experience, 
    inviting you to return for another encore of exquisite flavors. 
    Welcome to a culinary haven, where every detail reflects our commitment to delivering an unparalleled taste of Italy.`

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
