import render from "./render.js";
import { state } from "./cart.js";

render(state);

function addBodyListeners(state) {
    const bodyEl = document.querySelector('.body')

    bodyEl.addEventListener('click', (bodyEvent) => {
        if (bodyEvent.target.classList.contains('cart-status')) {
            state.cartShown = !state.cartShown;
            render(state);
        }

        if (bodyEvent.target.classList.contains('add-cat')) {
            const catName = bodyEvent.target.dataset.name;
            const cat = state.inventory[catName];
            state.manipulateCart(cat.name, 1);
            render(state);

        }

        if (bodyEvent.target.classList.contains('remove-item')) {
            const catName = bodyEvent.target.dataset.name;
            const cat = state.inventory[catName];
            state.removeFromCart(cat.name);
            render(state);
        }

        if (bodyEvent.target.classList.contains('checkout')) {
            state.emptyCart()
            render(state);
        }

        if (bodyEvent.target.classList.contains('increase-quantity')) {
            const catName = bodyEvent.target.dataset.name;
            const cat = state.inventory[catName];
            state.manipulateCart(cat.name, 1)
            render(state);
        }

        if (bodyEvent.target.classList.contains('decrease-quantity')) {
            const catName = bodyEvent.target.dataset.name;
            const cat = state.inventory[catName];
            state.manipulateCart(cat.name, -1)
            render(state);
        }
    });
}

addBodyListeners(state);