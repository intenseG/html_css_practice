let count = 0;

export function changeImage(imgs, imgElm) {
    count++;
    if (count == imgs.length) count = 0;

    imgElm.src = imgs[count];
}
