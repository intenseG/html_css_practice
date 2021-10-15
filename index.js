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