// This file includes all the functions created & used

import * as DOM from "./dom.js";

// This function fetches a random color palette from the colorPalette.json file
export async function getColorPalette () {
    // Lets first fetch the json file & convert it to JS object
    const response = await fetch("./JSON/colorPalette.json");
    const data = await response.json();

    // Now Lets select a random color palette form 0 to 400
    let keys = Object.keys(data);
    let randomKey = keys[Math.floor(Math.random() * keys.length)];

    return data[randomKey];
}

// This function updates the palette once the palette is been generated
export async function updateColorPalette () {

    let colorPalette = await getColorPalette();

    DOM.colorHolder.forEach((val , idx , arr) => {
        val.style.backgroundColor = colorPalette[idx];
    });

    DOM.colorCodeHolder.forEach((val , idx , arr) => {
        val.innerText = colorPalette[idx];
    });

};