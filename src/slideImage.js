const img = ["./img/autumn.jpeg", "./img/forest.jpeg", "./img/stadium.jpeg"]

let headerElm = document.querySelector(".header");
let menuBtnElm = document.querySelector(".header-menu_btn");
let menuContentElm = document.querySelector(".header-menu_content");

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
