import { scrollTop } from './scrollUtil';
import { Carousel } from './carousel';
import { changeImage } from './changeImage';

let headerElm = document.querySelector(".header");
let menuBtnElm = document.querySelector(".header-menu_btn");
let menuContentElm = document.querySelector(".header-menu_content");

//スクロール時にヘッダーの色を変える関数
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

//スクロール時の処理を割り当てる
window.addEventListener("scroll", () => {
    scrollTop(".back_to_topbtn").init();
    changeHeaderColor();
});

//ヘッダーメニューのリンクを設定
let linkArticleListElm = document.querySelector('.header-link_article_list');
let linkPopularArticleElm = document.querySelector('.header-link_popular_article');
let linkSnsShareElm = document.querySelector('.header-link_sns_share');

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

function initCarousel(elmClassName) {
    const parentElm = document.querySelector(elmClassName);
    const carousel = new Carousel(parentElm);
    carousel.calcWidth();
    carousel.changeSlide();
    carousel.handleListener();
}

//カルーセルの初期化
initCarousel(".article_list-carousel");

//背景画像の自動切り替え開始
changeImage();