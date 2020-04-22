import { createGraph, getPixelMatrix, loadImage, editPixels } from './graph.js';

var myChart = createGraph(0)

// obnovime histogram s novymi hodnotami
export function getMyChart(val, type) {
    myChart.destroy()
    myChart = createGraph(getPixelMatrix(editPixels(val, null,type)))
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