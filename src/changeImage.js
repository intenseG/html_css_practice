const img = ["./img/forest.jpeg", "./img/stadium1.jpeg", "./img/stadium2.jpeg"];
let count = 0;

let backgroundImgElm = document.querySelector(".main_visual-background_img");

export function changeImage() {
    count++;
    if (count == img.length) count = 0;

    backgroundImgElm.src = img[count];

    setTimeout(() => {
        changeImage();
    }, 5000);
}
