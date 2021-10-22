let headerElm = document.getElementById("header");
let menuBtnElm = document.getElementById("menu_btn");
let menuContentElm = document.getElementById("menu_content");

let scrollFlag = true;

function changeHeaderColor() {
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
        this.carouselBtnPrev = document.getElementById('arrow_left');
        this.carouselBtnNext = document.getElementById('arrow_right');
    }

    calcWidth() {
        return this.width * this.length + this.margin * (this.length - 1);
    }

    calcLeft() {
        return this.slideCurrentNum * -this.width - this.margin * this.slideCurrentNum;
    }

    updateWidth() {
        this.carouselAreaElm.style.width = this.calcWidth();
    }

    changeSlide() {
        this.carouselAreaElm.style.left = this.calcLeft() + "px";
    }

    prevItem() {
        console.log("slideCurrentNum: " + this.slideCurrentNum);
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

const carousel = new Carousel();
carousel.calcWidth();
carousel.handleListener();
