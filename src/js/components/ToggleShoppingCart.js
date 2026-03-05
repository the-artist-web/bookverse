"use strict";

export const ToggleShoppingCart = ($element) => {
    const $tooltip = bootstrap.Tooltip.getInstance($element);
    const $countShoppingCart = document.querySelector("#count-shopping-cart");

    $element.addEventListener("click", () => {
        let count = parseInt($countShoppingCart.textContent.trim()) || 0;

        if ($element.dataset.toggleShoppingCart === "false") {

            count++;

            $element.classList.remove("outline", "white");
            $element.classList.add("filled");

            if ($tooltip) $tooltip.setContent({ ".tooltip-inner": "Remove To Shopping Cart" });

            $element.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart h-5 w-5"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>

                <div class="state-layer"></div>
            `;

            $element.dataset.toggleShoppingCart = "true";

        } else {

            count = Math.max(0, count - 1);

            $element.classList.add("outline", "white");
            $element.classList.remove("filled");

            if ($tooltip) $tooltip.setContent({ ".tooltip-inner": "Add To Shopping Cart" });

            $element.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart h-5 w-5"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>

                <div class="state-layer"></div>
            `;

            $element.dataset.toggleShoppingCart = "false";
        }

        $countShoppingCart.textContent = count;
    });
};