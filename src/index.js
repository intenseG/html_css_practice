import { scrollTop } from './scrollUtil';

let headerElm = document.querySelector(".header");
let menuBtnElm = document.querySelector(".menu_btn");
let menuContentElm = document.querySelector(".menu_content");

function changeHeaderColor() {
    let scrollFlag = true;
    if (!scrollFlag) return;
    if (headerElm.scrollHeight < window.scrollY) {
        headerElm.classList.add("change_color");
        menuBtnElm.classList.add("change_color");
        menuContentElm.classList.add("change_color");
    } else {
        scrollFlag = false;
        headerElm.classList.remove("change_color");
        menuBtnElm.classList.remove("change_color");
        menuContentElm.classList.remove("change_color");
    }

    setTimeout(() => {
        scrollFlag = true;
    }, 200);
}

window.addEventListener("scroll", () => {
    scrollTop(".back_to_topbtn").init();
    changeHeaderColor();
});

let linkArticleListElm = document.querySelector('.link_article_list');
let linkPopularArticleElm = document.querySelector('.link_popular_article');
let linkSnsShareElm = document.querySelector('.link_sns_share');

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
    constructor(parentElm) {
        this.carouselParentRect = parentElm.getBoundingClientRect();
        this.carouselListElms = parentElm.querySelectorAll('.carousel_list');
        this.carouselAreaElm = parentElm.querySelector('.carousel_area');
        this.width = this.carouselListElms[0].clientWidth;
        this.length = this.carouselListElms.length;
        this.margin = 30;
        this.slideCurrentNum = 0;
        this.totalSlideNum = this.carouselListElms.length - 1;
        this.carouselBtnPrev = parentElm.querySelector('.arrow_prev');
        this.carouselBtnNext = parentElm.querySelector('.arrow_next');
    }

    calcWidth() {
        return this.width * this.length + this.margin * (this.length - 1);
    }

    calcLeft() {
        return ((this.slideCurrentNum + 1) * -this.width) - (this.margin * (this.slideCurrentNum + 1)) + (this.carouselParentRect.width / 2 + this.width / 2);
    }

    updateWidth() {
        this.carouselAreaElm.style.width = this.calcWidth();
    }

    changeSlide() {
        this.carouselAreaElm.style.left = this.calcLeft() + "px";
    }

    prevItem() {
        // console.log("slideCurrentNum: " + this.slideCurrentNum);
        if (this.slideCurrentNum === 0) {
            // slideCurrentNum = totalSlideNum;
            this.carouselBtnPrev.disabled = true;
        } else {
            this.slideCurrentNum--;
            this.carouselBtnPrev.disabled = false;
            this.carouselBtnNext.disabled = false;
        }

        this.changeSlide();
    }

    nextItem() {
        console.log("slideCurrentNum: " + this.slideCurrentNum);
        if (this.slideCurrentNum === this.totalSlideNum) {
            // slideCurrentNum = 0;
            this.carouselBtnNext.disabled = true;
        } else {
            this.slideCurrentNum++;
            this.carouselBtnNext.disabled = false;
            this.carouselBtnPrev.disabled = false;
        }

        this.changeSlide();
    }

    handleListener() {
        this.carouselBtnPrev.addEventListener("click", () => {
            this.prevItem();
        });
        this.carouselBtnNext.addEventListener("click", () => {
            this.nextItem();
        });
    }
}

const parentElm = document.querySelector(".article_list-carousel");
const carousel = new Carousel(parentElm);
carousel.calcWidth();
carousel.changeSlide();
carousel.handleListener();
