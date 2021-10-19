let headerElm = document.getElementById("header");
let menuBtnElm = document.getElementById("menu_btn");
let menuContentElm = document.getElementById("menu_content");

function changeHeaderColor() {
    if (headerElm.scrollHeight < window.scrollY) {
        headerElm.classList.add("change_color");
        menuBtnElm.classList.add("change_color");
        menuContentElm.classList.add("change_color");
    } else {
        headerElm.classList.remove("change_color");
        menuBtnElm.classList.remove("change_color");
        menuContentElm.classList.remove("change_color");
    }
}

window.addEventListener("scroll", changeHeaderColor);

function clickLink(elm) {
    const targetElm = document.getElementById(elm);
    const rect = targetElm.getBoundingClientRect();
    // const elmTop = rect.top + window.pageYOffset;
    const elmTop = rect.top + window.pageYOffset - headerElm.scrollHeight;
    document.documentElement.scrollTop = elmTop;
}

const carouselListElms = document.getElementsByClassName('carousel_list');
let carouselAreaElm = document.getElementById('carousel_area');

const width = carouselListElms[0].clientWidth;
const length = carouselListElms.length;
const margin = 30;
const slideArea = width * length + margin * (length - 1);
carouselAreaElm.style.width = slideArea;

let slideCurrentNum = 0;
const totalSlideNum = carouselListElms.length - 1;

function changeSlide() {
    carouselAreaElm.style.left = slideCurrentNum * -width - margin * slideCurrentNum + "px";
}

const carouselBtnLeft = document.getElementById('arrow_left');
const carouselBtnRight = document.getElementById('arrow_right');

function previousCarouselItem() {
    console.log("slideCurrentNum: " + slideCurrentNum);
    if (slideCurrentNum === 0) {
        // slideCurrentNum = totalSlideNum;
        carouselBtnLeft.disable = false;
    } else {
        slideCurrentNum--;
        carouselBtnLeft.disable = true;
    }

    changeSlide();
}

function nextCarouselItem() {
    console.log("slideCurrentNum: " + slideCurrentNum);
    if (slideCurrentNum === totalSlideNum) {
        // slideCurrentNum = 0;
        carouselBtnRight.disable = false;
    } else {
        slideCurrentNum++;
        carouselBtnRight.disable = true;
    }

    changeSlide();
}

carouselBtnLeft.addEventListener("click", previousCarouselItem)
carouselBtnRight.addEventListener("click", nextCarouselItem)
