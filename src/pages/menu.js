import getContentElement from "../functions/content";
import "../styles/menu.css"
import items from "../data/menuItems";

function createMenuHeader() { 
    const menuHeader = document.createElement('div');
    const menuTitleContainer = document.createElement('div');
    const menuTitle = document.createElement('h2');

    const menuTitleAdditional = document.createElement('div');
    const menuRestaurantNameConainer = document.createElement('div');
    const restaurantName = document.createElement('span');
    const menuFlag = document.createElement('div');

    const greenStripe = document.createElement('div');
    const whiteStripe = document.createElement('div');
    const redStripe = document.createElement('div');

    menuTitle.textContent = 'MENU ITEMS';
    restaurantName.textContent = 'Trattoria Del Gusto'

    menuHeader.classList.add('menu-header');
    menuTitleContainer.classList.add('menu-title-container')
    menuTitle.classList.add('menu-title');
    menuTitleAdditional.classList.add('menu-title-additional');
    menuRestaurantNameConainer.classList.add('menu-restaurant-name-container');
    restaurantName.classList.add('menu-restaurant-name');
    menuFlag.classList.add('menu-flag');
    greenStripe.classList.add('flag-green');
    whiteStripe.classList.add('flag-white');
    redStripe.classList.add('flag-red');

    menuHeader.appendChild(menuTitleContainer);
    menuHeader.appendChild(menuTitleAdditional);
    menuTitleContainer.appendChild(menuTitle);

    menuTitleAdditional.appendChild(menuRestaurantNameConainer);
    menuTitleAdditional.appendChild(menuFlag);

    menuRestaurantNameConainer.appendChild(restaurantName);

    menuFlag.appendChild(greenStripe);
    menuFlag.appendChild(whiteStripe);
    menuFlag.appendChild(redStripe);

    return menuHeader;
}

function createMenu() {
    const menu = document.createElement('div');
    const menuGrid = document.createElement('div');

    menu.classList.add('menu-container');
    menuGrid.classList.add('menu-grid');
    menuGrid.classList.add('mar-bot-1r');

    menu.appendChild(menuGrid);

    return menu;
}

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    const itemImageContainer = document.createElement('div');
    
    const menuItemInfo = document.createElement('div');
    const menuItemDescription = document.createElement('div');
    const menuItemTitle = document.createElement('h3');
    const menuItemParagraph = document.createElement('p');

    const menuItemPrice = document.createElement('div');
    const priceLabel = document.createElement('span');
    const priceValue = document.createElement('span');

    menuItem.classList.add('menu-item', 'pad-bot-1rem');
    itemImageContainer.classList.add('mar-bot-1r', 'menu-item-img');  
    itemImageContainer.style.backgroundImage =  `url(${item.imagePath})`;
    menuItemInfo.classList.add('menu-item-info');
    menuItemDescription.classList.add('menu-item-description', 'mar-bot-1r');
    menuItemTitle.classList.add('menu-item-title', 'mar-bot-1r');
    menuItemParagraph.classList.add('menu-item-paragraph');
    menuItemPrice.classList.add('menu-item-price', 'fs-1p5r');
    priceValue.classList.add('pad-left-0p5r');

    menuItemTitle.textContent = item.name;
    menuItemParagraph.textContent = item.description;
    priceLabel.textContent = 'Price:';
    priceValue.textContent = item.price;

    menuItem.appendChild(itemImageContainer);
    menuItem.appendChild(menuItemInfo);

    //itemImageContainer.appendChild(itemImage);
    menuItemInfo.appendChild(menuItemDescription);
    menuItemInfo.appendChild(menuItemPrice);

    menuItemDescription.appendChild(menuItemTitle);
    menuItemDescription.appendChild(menuItemParagraph);

    menuItemPrice.appendChild(priceLabel);
    menuItemPrice.appendChild(priceValue);

    return menuItem;
}

function loadMenuPage() {
    const content = getContentElement();

    const menu = createMenu();
    const menuGrid = menu.firstElementChild;

    items.forEach(item => {
        menuGrid.appendChild(createMenuItem(item));
    });

    content.appendChild(createMenuHeader());
    content.appendChild(menu);
}

export default loadMenuPage;