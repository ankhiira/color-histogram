import { getMyChart } from './uploadImage.js';

// funkce definujici chovani pri zmene hodnoty slideru
document.hueForm.sliderHueId.onchange = function () {
    document.hueForm.hueValId.value = document.hueForm.sliderHueId.value;
    let val = document.hueForm.hueValId.value

    getMyChart(val, "H")
}

document.saturationForm.sliderSatId.onchange = function () {
    document.saturationForm.satValId.value = document.saturationForm.sliderSatId.value;
    let val = document.saturationForm.satValId.value

    getMyChart(val, "S")
}

document.brightForm.sliderBrightId.onchange = function () {
    document.brightForm.brightValId.value = document.brightForm.sliderBrightId.value;
    let val = document.brightForm.brightValId.value

    getMyChart(val, "B")
}

