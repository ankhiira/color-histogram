export function RGBtoHSL(r, g, b) {
    let R = r / 255
    let G = g / 255
    let B = b / 255

    let max = Math.max(R, G, B);
    let min = Math.min(R, G, B);

    // vypocitame Luminance
    let S, H, L = (min + max) / 2

    // vypocitame Saturation (zavisi na dvou vzorcich)
    // pokud se min a max rovnaji, neni tu zadna saturace
    if (min === max) {
        S = H = 0
    } else {
        if (L < 0.5) {
            S = (max - min) / (max + min)
        } else {
            S = (max - min) / (2 - max - min)
        }

        // dale vypocitame Hue
        switch (max) {
            case R:
                H = ((G - B) / (max - min)) % 6
                break
            case G:
                H = (B - R) / (max - min) + 2
                break
            case B:
                H = (R - G) / (max - min) + 4
                break
        }
    }

    H *= 60

    return [H, S, L]
}

export function HSLtoRGB(pix) {

    let H = pix[0]
    let S = pix[1]
    let L = pix[2]

    var R, G, B

    if (S < 0) {
        S = 0
    }

    if (S === 0) {
        R = G = B = L
    } else {
        let temp1 = L < 0.5 ? L * (S + 1) : L + S - L * S
        let temp2 = 2 * L - temp1

        H /= 360

        let tempR = H + 1 / 3
        let tempG = H
        let tempB = H - 1 / 3

        if (tempR < 0) {
            tempR += 1
        }

        var arr = []
        var temps = [[R, tempR], [G, tempG], [B, tempB]];
        temps.forEach(function ([X, temp]) {
            if (temp < 0) {
                temp += 1
            }

            if (temp > 1) {
                temp -= 1
            }

            if (6 * temp < 1) {
                X = temp2 + (temp1 - temp2) * 6 * temp
            } else if (2 * temp < 1) {
                X = temp1
            } else if (3 * temp < 2) {
                X = temp2 + (temp1 - temp2) * (2 / 3 - temp) * 6
            } else {
                X = temp2
            }

            arr.push(X)
        })

        R = arr[0]
        G = arr[1]
        B = arr[2]
    }

    return [Math.round(R * 255),
            Math.round(G * 255),
            Math.round(B * 255)]
}