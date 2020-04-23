import {createGraph, getPixelMatrix, loadImage, editPixels} from './graph.js';

var myChart = createGraph(0)

// obnovime histogram s novymi hodnotami
export function getMyChart(values) {
    myChart.destroy()
    loadImage().then(imgDataOrig => {
        myChart = createGraph(getPixelMatrix(editPixels(imgDataOrig, values)))
    })
}

const inpFile = document.getElementById("inpFile")
const previewContainer = document.getElementById("imgePreview")
const previewImage = previewContainer.querySelector(".image-preview__image")
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text")

// precteme soubor, pokud byl nejaky pridan
inpFile.addEventListener("change", function () {
    const file = this.files[0]

    // pokud byl nejaky soubor vybran
    if (file) {
        const reader = new FileReader()

        // skryjeme defaultni text a zobrazime obrazek
        previewDefaultText.style.display = "none"
        // previewImage.style.display = "block"

        // data jsou nacitana
        reader.addEventListener("load", function () {
            previewImage.setAttribute("src", this.result)

            // vygenerujeme novy graf a smazeme stary
            myChart.destroy()

            loadImage().then(imgData => {
                document.hueForm.hueValId.value = 0
                document.saturationForm.satValId.value = 0
                document.brightForm.brightValId.value = 0
                document.hueForm.sliderHueId.value = 0
                document.saturationForm.sliderSatId.value = 0;
                document.brightForm.sliderBrightId.value = 0;

                myChart = createGraph(getPixelMatrix(imgData))
            })
        })

        reader.readAsDataURL(file)
    } else {
        // vratime vse do puvodni podoby
        myChart.destroy()
        myChart = createGraph(0)
        previewDefaultText.style.display = null
        previewImage.style.display = null
        previewImage.setAttribute("src", "")
    }
})