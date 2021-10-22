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

let linkArticleListElm = document.getElementById('link_article_list');
let linkPopularArticleElm = document.getElementById('link_popular_article');
let linkSnsShareElm = document.getElementById('link_sns_share');

function clickLink(elm) {
    const targetElm = document.getElementById(elm);
    const rect = targetElm.getBoundingClientRect();
    const elmTop = rect.top + window.pageYOffset - headerElm.scrollHeight;
    document.documentElement.scrollTop = elmTop;
    console.log(elmTop);
}

linkArticleListElm.addEventListener("click", function() {
    clickLink('article_list');
});
linkPopularArticleElm.addEventListener("click", function() {
    clickLink('popular_article');
});
linkSnsShareElm.addEventListener("click", function() {
    clickLink('sns_share');
});

class Carousel {
    constructor() {
        this.carouselListElms = document.getElementsByClassName('carousel_list');
        this.carouselAreaElm = document.getElementById('carousel_area');
        this.width = this.carouselListElms[0].clientWidth;
        this.length = this.carouselListElms.length;
        this.margin = 30;
        this.slideCurrentNum = 0;
        this.totalSlideNum = this.carouselListElms.length - 1;
    }

    calcWidth() {
        const slideArea = this.width * this.length + this.margin * (this.length - 1);
        this.carouselAreaElm.style.width = slideArea;
    }

    changeSlide() {
        this.carouselAreaElm.style.left = this.slideCurrentNum * -this.width - this.margin * this.slideCurrentNum + "px";
    }

    previousCarouselItem() {
        console.log("slideCurrentNum: " + this.slideCurrentNum);
        if (this.slideCurrentNum === 0) {
            // slideCurrentNum = totalSlideNum;
            carouselBtnLeft.disabled = true;
        } else {
            this.slideCurrentNum--;
            carouselBtnLeft.disabled = false;
            carouselBtnRight.disabled = false;
        }

        this.changeSlide();
    }

    nextCarouselItem() {
        console.log("slideCurrentNum: " + this.slideCurrentNum);
        if (this.slideCurrentNum === this.totalSlideNum) {
            // slideCurrentNum = 0;
            carouselBtnRight.disabled = true;
        } else {
            this.slideCurrentNum++;
            carouselBtnRight.disabled = false;
            carouselBtnLeft.disabled = false;
        }

        this.changeSlide();
    }
}

const carousel = new Carousel();
carousel.calcWidth();

const carouselBtnLeft = document.getElementById('arrow_left');
const carouselBtnRight = document.getElementById('arrow_right');
carouselBtnLeft.addEventListener("click", function() {
    carousel.previousCarouselItem();
});
carouselBtnRight.addEventListener("click", function() {
    carousel.nextCarouselItem();
});
