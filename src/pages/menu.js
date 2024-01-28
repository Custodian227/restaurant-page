import getContentElement from "../functions/content";
import "../styles/menu.css"

const items = 
[
    {
        imagePath: '../src/images/rreRisotto.jpg',
        name: 'Radicchio',
        price: '19.99$',
        description: `Radicchio or Red Endive Risotto is a flavorful Italian dish where the bitterness of radicchio
                        or red endive is balanced with the creamy richness of risotto. Arborio rice is slowly cooked
                        in a broth infused with sautéed radicchio or red endive, creating a vibrant and satisfying dish.
                        Additional ingredients such as onions, garlic, and Parmesan cheese contribute to the complexity
                        of flavors, resulting in a unique and delicious risotto experience with a hint of bitter undertones.`   

                        
    },
    {
        imagePath: '../src/images/spaghetti-and-meatballs.jpg',
        name: 'Spaghetti and Meatballs',
        price: '14.99$',
        description: `Spaghetti and Meatballs is a classic Italian-American dish that combines al dente spaghetti with savory
                        meatballs in a rich tomato sauce. The meatballs, usually a blend of ground beef or a mixtureof meats,
                        are seasoned with garlic, herbs, and Parmesan cheese, adding depth to the flavor. The tomatosauce is
                        often made with ripe tomatoes, garlic, onions, and herbs, simmered to perfection. The dishis then crowned
                        with freshly cooked spaghetti, creating a comforting and hearty meal.`   

                        
    },
    {
        imagePath: '../src/images/capricciosa.jpg',
        name: 'Capriciossa',
        price: '17.49$',
        description: `Indulge in our delectable Capricciosa pizza, a culinary masterpiece that dances on the taste buds
                        with its whimsical medley of flavors. Crafted on a canvas of rich tomato sauce and velvety mozzarella
                        cheese, this culinary delight features succulent ham, earthy mushrooms, and tender artichokes. The name
                        "Capricciosa" perfectly captures the playful and varied nature of this dish, promising a delightful
                        experience for your palate. Each bite is a symphony of savory and slightly tangy notes,
                        ensuring a trulycapricious and satisfying dining experience.`                    
    },
    {
        imagePath: '../src/images/osso-buco.jpg',
        name: 'Osso Buco',
        price: '21.49$',
        description: `Savor the culinary elegance of our Osso Buco, a Milanese masterpiece that captures the essence of
                        Italian comfort dining. Tender veal shanks, braised to perfection, immerse themselves in a symphony
                        of white wine, aromatic broth, and a medley of onions, carrots, celery, and tomatoes.
                        Garnished with the vibrant touch of gremolata—a harmonious blend of minced parsley, garlic, and
                        lemon zest—each bite is a journey through the hearty and soulful traditions of Milanese cuisine.`                    
    },
    {
        imagePath: '../src/images/spaghetti-carbonara.jpg',
        name: 'Spaghetti Carbonara',
        price: '15.99$',
        description: ` Indulge in the creamy goodness of Spaghetti Carbonara, a Roman delight that marries al dente spaghetti
        with a luscious sauce. Immerse yourself in the rich blend of eggs, Pecorino Romano cheese, crispy pancetta,
        and a generous dusting of black pepper. Each forkful promises a harmonious symphony of
        flavors, creating a comforting and satisfying experience that hails from the heart of Italy. Garnished with
        fresh parsley, this timeless dish is a testament to the art of Roman gastronomy.`                    
    },
    {
        imagePath: '../src/images/bistecca-alla-fiorentina.jpg',
        name: 'Bistecca Alla Fiorentina',
        price: '29.99$',
        description: `Bistecca alla Fiorentina, a Tuscan classic featuring a thick-cut T-bone or porterhouse
                        steak, is a carnivorous masterpiece that captivates the senses with its smoky aroma, succulent
                        tenderness, and a perfect marriage of charred exterior and rosy-pink interior, delivering an
                        unparalleled dining experience reminiscent of the heartland of Italy. Accompanied by a drizzle of extra virgin
                        olive oil and a sprinkle of sea salt, each bite is a celebration of simplicity and bold, robust
                        flavors that define the essence of Tuscan culinary tradition.`                    
    },
    {
        imagePath: '../src/images/gnocchi-alla-sorrentina.jpg',
        name: 'Gnocchi Alla Sorrentina',
        price: '17.49$',
        description: `Experience comfort on a plate with our Gnocchi alla Sorrentina. Soft and pillowy potato
                        gnocchi are lovingly enveloped in a rich tomato sauce, bursting with the flavors of sun-ripened
                        tomatoes, garlic, and fresh basil. Topped with a generous layer of melted mozzarella cheese and baked
                        to golden perfection, each forkful delivers a delightful harmony of textures and tastes. This
                        potato-based dish, inspired by the culinary traditions of Sorrento, is a heartwarming
                        celebration of simplicity and Italian flair. Buon Appetito!`                    
    },
    {
        imagePath: '../src/images/fettuccine-alfredo-con-funghi.jpg',
        name: 'Fettuccine Alfredo Con Funghi',
        price: '20.99$',
        description: `Embark on a culinary journey with our "Fettuccine Alfredo con Funghi," a symphony of flavors that elevates
                        Italian classics. Immerse yourself in perfectly cooked fettuccine, luxuriously coated in a creamy Alfredo
                        sauce, enriched with sautéed mushrooms. Each bite is a balance of velvety richness and savory earthiness.
                        Meticulously sliced and golden-brown mushrooms add depth, while Parmesan cheese weaves its way into this
                        masterpiece. Garnished with fresh parsley, this dish is not just a meal—it's a captivating ode to Italian
                        gastronomy, promising an enchanting experience for the senses.`                    
    },
]

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
    const itemImage = document.createElement('img');
    
    const menuItemInfo = document.createElement('div');
    const menuItemDescription = document.createElement('div');
    const menuItemTitle = document.createElement('h3');
    const menuItemParagraph = document.createElement('p');

    const menuItemPrice = document.createElement('div');
    const priceLabel = document.createElement('span');
    const priceValue = document.createElement('span');

    menuItem.classList.add('menu-item', 'pad-bot-1rem');
    itemImageContainer.classList.add('mar-bot-1r');
    itemImage.classList.add('item-image');
    menuItemInfo.classList.add('menu-item-info');
    menuItemDescription.classList.add('menu-item-description', 'mar-bot-1r');
    menuItemTitle.classList.add('menu-item-title', 'mar-bot-1r');
    menuItemParagraph.classList.add('menu-item-paragraph');
    menuItemPrice.classList.add('menu-item-price', 'fs-1p5r');

    menuItemTitle.textContent = item.name;
    itemImage.src = item.imagePath;
    menuItemParagraph.textContent = item.description;
    priceLabel.textContent = 'Price:';
    priceValue.textContent = item.price;

    menuItem.appendChild(itemImageContainer);
    menuItem.appendChild(menuItemInfo);

    itemImageContainer.appendChild(itemImage);
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