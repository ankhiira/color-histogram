function getPixel(url, x, y) {
    var img = new Image();
    img.src = url;
    // var height = img.height;
    // var width = img.width;
    // console.log(height, width);
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(x, y, 1, 1).data;
}