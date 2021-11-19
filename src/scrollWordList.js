const headerElm = document.querySelector(".header");

function scrollTo(elm) {
    const rect = elm.getBoundingClientRect();
    const elmTop = rect.top + window.pageYOffset - headerElm.scrollHeight;
    document.documentElement.scrollTop = elmTop;
}

export function initScrollWordList() {
    const linkWordBtnElms = document.querySelectorAll('.words-prefix_link');
    const scrollTargetElms = document.querySelectorAll('.words-headline');
    for (let i = 0; i < scrollTargetElms.length; i++) {
        linkWordBtnElms[i].addEventListener("click", function() {
            scrollTo(scrollTargetElms[i]);
        });
    }
}