import { scrollTop } from './scrollTop';
import { Carousel } from './carousel';
import { changeImage } from './changeImage';

const headerElm = document.querySelector(".header");
const menuBtnElm = document.querySelector(".header-menu_btn");
const menuContentElm = document.querySelector(".header-menu_content");

//スクロール時にヘッダーの色を変える関数
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

let scrollFlag = true;

//スクロール時の処理を割り当てる
window.addEventListener("scroll", () => {
    if (!scrollFlag) return;
    scrollFlag = false;

    scrollTop(".back_to_topbtn").init();
    changeHeaderColor();

    setTimeout(() => {
        scrollFlag = true;
    }, 200);
});

//ヘッダーメニューのリンクを設定
const linkArticleListElm = document.querySelector('.header-link_article_list');
const linkPopularArticleElm = document.querySelector('.header-link_popular_article');
const linkSnsShareElm = document.querySelector('.header-link_sns_share');

function scrollTo(elm) {
    const rect = elm.getBoundingClientRect();
    const elmTop = rect.top + window.pageYOffset - headerElm.scrollHeight;
    document.documentElement.scrollTop = elmTop;
}

linkArticleListElm.addEventListener("click", function() {
    const targetElm = document.querySelector('.article_list');
    scrollTo(targetElm);
});
linkPopularArticleElm.addEventListener("click", function() {
    const targetElm = document.querySelector('.popular_article');
    scrollTo(targetElm);
});
linkSnsShareElm.addEventListener("click", function() {
    const targetElm = document.querySelector('.sns_share');
    scrollTo(targetElm);
});

function initCarousel(elmClassName) {
    const parentElm = document.querySelector(elmClassName);
    const carousel = new Carousel(parentElm);
}

//カルーセルの初期化
initCarousel(".article_list-carousel");

const imgs = ["./img/forest.jpeg", "./img/stadium1.jpeg", "./img/stadium2.jpeg"];
const backgroundImgElm = document.querySelector(".main_visual-background_img");

//背景画像の自動切り替え開始
setInterval(() => {
    changeImage(imgs, backgroundImgElm);    
}, 5000);