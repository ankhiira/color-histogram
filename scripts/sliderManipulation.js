import { getMyChart } from './uploadImage.js';

// funkce definujici chovani pri zmene hodnoty slideru
document.hueForm.sliderHueId.onchange = function () {
    document.hueForm.hueValId.value = document.hueForm.sliderHueId.value;
    updateImage()
}

document.saturationForm.sliderSatId.onchange = function () {
    document.saturationForm.satValId.value = document.saturationForm.sliderSatId.value;
    updateImage()
}

document.brightForm.sliderBrightId.onchange = function () {
    document.brightForm.brightValId.value = document.brightForm.sliderBrightId.value;
    updateImage()
}

function updateImage() {
    let hue = document.hueForm.hueValId.value
    let sat = document.saturationForm.satValId.value
    let bri = document.brightForm.brightValId.value

    getMyChart([hue, sat, bri])
}

