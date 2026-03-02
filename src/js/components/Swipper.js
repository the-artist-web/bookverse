"use strict";

export const Swipper = ($element) => {
    const $swipperLeft = $element.querySelector("[data-swippter-left]");
    const $swipperRight = $element.querySelector("[data-swippter-right]");
    const $swipperContainer = $element.querySelector("[data-swipper-container]");
    const isRTL = document.documentElement.dir === "rtl";

    const scrollAmount = 300; // تقدر تعدل المسافة

    const updateButtons = () => {
        const scrollLeft = $swipperContainer.scrollLeft;
        const maxScroll = $swipperContainer.scrollWidth - $swipperContainer.clientWidth;

        if (!isRTL) {
            $swipperLeft.disabled = scrollLeft <= 0;
            $swipperRight.disabled = scrollLeft >= maxScroll - 1;
        } else {
            // في بعض المتصفحات RTL بيبقى scrollLeft سالب
            $swipperLeft.disabled = scrollLeft >= 0;
            $swipperRight.disabled = Math.abs(scrollLeft) >= maxScroll - 1;
        }
    };

    const scroll = (direction) => {
        const value = direction * scrollAmount;

        if (!isRTL) {
            $swipperContainer.scrollBy({
                left: value,
                behavior: "smooth"
            });
        } else {
            $swipperContainer.scrollBy({
                left: -value,
                behavior: "smooth"
            });
        }
    };

    $swipperLeft.addEventListener("click", () => {
        scroll(-1);
    });

    $swipperRight.addEventListener("click", () => {
        scroll(1);
    });

    $swipperContainer.addEventListener("scroll", updateButtons);

    // أول ما يتحمل
    updateButtons();
};