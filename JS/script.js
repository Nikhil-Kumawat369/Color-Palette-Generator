// This Is The Main JS File , Here The Final Function Calling , execution happens

import * as DOM from "./dom.js";
import * as fun from "./function.js";

// Event Listner for clicking generate palette [Updating the colors & color code on screen]
DOM.generatePaletteBtn.addEventListener("click" , () => {
    fun.updateColorPalette(); // This Will Generate &  Update The Color Palette
});

// Adding event listner to copy the color code on click & also showing the Copy popup
DOM.items.forEach((val , idx , arr) => {
    val.addEventListener("click" , () => {
        // Copying The Color Code
        navigator.clipboard.writeText(DOM.colorCodeHolder[idx].innerText);

        // Copyed PopUp
        DOM.copyPopup.classList.toggle("show");
        setTimeout(() => {
            DOM.copyPopup.classList.toggle("show");
        } , 1500); 
    });
});