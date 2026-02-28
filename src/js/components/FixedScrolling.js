"use strict";

export const FixedScrolling = ($element) => scrollY >= 100 ? $element.classList.add("fixed-scrolling") : $element.classList.remove("fixed-scrolling");