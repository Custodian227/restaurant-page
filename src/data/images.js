import bisteccaPath from "../images/bistecca-alla-fiorentina.jpg";
import capricciosaPath from "../images/capricciosa.jpg";
import fettuccinePath from "../images/fettuccine-alfredo-con-funghi.jpg";
import gnocchiPath from "../images/gnocchi-alla-sorrentina.jpg";
import ossoPath from "../images/osso-buco.jpg";
import risottoPath from "../images/rreRisotto.jpg";
import spaghettiMeatballsPath from "../images/spaghetti-and-meatballs.jpg";
import spaghettiCarbonaraPath from "../images/spaghetti-carbonara.jpg";

const bisteccaImage = new Image();
const capricciosaImage = new Image();
const fettucineImage = new Image();
const gnocchiImage = new Image();
const ossoImage = new Image();
const risottoImage = new Image();
const spaghettiMeatballsImage = new Image();
const spaghettiCarbonaraImage = new Image();

bisteccaImage.src = bisteccaPath;
capricciosaImage.src = capricciosaPath;
fettucineImage.src = fettuccinePath;
gnocchiImage.src = gnocchiPath;
ossoImage.src = ossoPath;
risottoImage.src = risottoPath;
spaghettiMeatballsImage.src = spaghettiMeatballsPath;
spaghettiCarbonaraImage.src = spaghettiCarbonaraPath;

export const menuItemImages = [ risottoImage, spaghettiMeatballsImage, capricciosaImage, ossoImage, 
    spaghettiCarbonaraImage, bisteccaImage, gnocchiImage, fettucineImage ];