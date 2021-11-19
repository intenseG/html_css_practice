export const scrollTop = (elmClassName) => {
    let backToTopBtnElm = document.querySelector(elmClassName);
    const topBtnThreshold = 500;

    const init = () => {
        handleListener();
        toggleTopBtn();
    }

    const handleListener = () => {
        backToTopBtnElm.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });
    };

    const toggleTopBtn = () => {
        if (topBtnThreshold < window.scrollY) {
            backToTopBtnElm.classList.add("display_on");
        } else {
            backToTopBtnElm.classList.remove("display_on");
        }
    };

    return { init: init };
};
