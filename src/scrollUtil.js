export const scrollTop = (elmClassName) => {
    let backToTopBtnElm = document.querySelector(elmClassName);
    let topBtnFlag = true;
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
        if (!topBtnFlag) return;
        if (topBtnThreshold < window.scrollY) {
            backToTopBtnElm.classList.add("display_on");
        } else {
            topBtnFlag = false;
            backToTopBtnElm.classList.remove("display_on");
        }

        setTimeout(() => {
            topBtnFlag = true;
        }, 200);
    };

    return { init: init };
};
