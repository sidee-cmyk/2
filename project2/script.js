
    const carousel = document.querySelector(".carousel");
    const btnRight = document.querySelector(".scroll-btn-right");
    const btnLeft = document.querySelector(".scroll-btn-left");
    const cardWidth = 20 * 16 + 16; 

    btnRight.addEventListener("click", () => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    });

    btnLeft.addEventListener("click", () => {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });
    });
