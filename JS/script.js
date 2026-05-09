// This Is The Main JS File , Here The Final Function Calling , execution happens

import * as DOM from "./dom.js";
import * as fun from "./function.js";

// Event Listner for clicking generate palette [Updating the colors & color code on screen]
DOM.generatePaletteBtn.addEventListener("click" , () => {
    fun.updateColorPalette(); // This Will Generate &  Update The Color Palette
});