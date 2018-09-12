import { tourButton } from "../tourButton/tourButton";

const buttonContainer = document.createElement('div'),
    main = document.getElementsByTagName("main")[0];

main.appendChild(buttonContainer);

tourButton(buttonContainer, 'gdp.html', 'Income and GDP')