export class Carousel {
    constructor(parentElm) {
        this.carouselParentRect = parentElm.getBoundingClientRect();
        this.carouselListElms = parentElm.querySelectorAll('.article_list-carousel_list');
        this.carouselAreaElm = parentElm.querySelector('.article_list-carousel_area');
        this.width = this.carouselListElms[0].clientWidth;
        this.length = this.carouselListElms.length;
        this.margin = 30;
        this.slideCurrentNum = 0;
        this.totalSlideNum = this.carouselListElms.length - 1;
        this.carouselBtnPrev = parentElm.querySelector('.article_list-arrow_prev_btn');
        this.carouselBtnNext = parentElm.querySelector('.article_list-arrow_next_btn');

        //カルーセルの初期化
        this.init();
    }

    init() {
        this.calcWidth();
        this.changeSlide();
        this.handleListener();
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
        // console.log("slideCurrentNum: " + this.slideCurrentNum);
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
