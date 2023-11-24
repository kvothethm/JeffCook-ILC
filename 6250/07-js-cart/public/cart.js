/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/


// //Grabs the price of every current item in the cart[] data structure, adds them together, and stuffs the result into the HTML.
// function updateTotal() {
//     const total = cart.reduce((accumulator, item) => {
//         return accumulator + item.price;
//     }, 0);

//     const totalHTML = `Total: $${total.toFixed(2)}`;

//     document.querySelector('.cart-total').innerHTML = totalHTML;
// }

// //Adds event listeners for the inventory, which is only the Add to Cart button at the moment. This function
// //creates the a cart item when the button is clicked and calls renderCart() to show it on the page.
// function addInventoryListeners(inventory) {
//     const addToCartEl = document.querySelector('.inventory');

//     addToCartEl.addEventListener('click', (inventoryEvent) => {
//         if (inventoryEvent.target.classList.contains('add-cat')) {
//             const catName = inventoryEvent.target.dataset.name;
//             const cat = inventory[catName];
//             console.log(cat);

//             cart.push({
//                 cat: cat.name,
//                 price: cat.price,
//                 quantity: 1,
//                 img: cat.img,
//             });
//             renderCart(cart);
//         }
//     });
// }

// //Adds event listeners for the cart, which include remove item, increase quantity, decrease quantity,
// //and checkout.
// function addCartListeners(cart, inventory) {
//     const cartEl = document.querySelector('.cart-view');

//     cartEl.addEventListener('click', (cartEvent) => {
//         //If the Delete button is pressed, remove the item from the data structure and render the page
//         if (cartEvent.target.classList.contains('remove-item')) {
//             const index = cartEvent.target.dataset.index;
//             cart.splice(index, 1);
//             renderCart(cart);
//         }
//         //If the Checkout button is pressed, remove all items from the cart and render the page.
//         if (cartEvent.target.classList.contains('checkout')) {
//             cart.length = 0;
//             renderCart(cart);
//         }
//         //If the Add 1 button is pressed, increment the quantity by 1, add the Inventory price (which never changes) to the
//         //cart price, and render the page.
//         if (cartEvent.target.classList.contains('increase-quantity')) {
//             const index = cartEvent.target.dataset.index;
//             increaseQuantity(index, cart);
//             renderCart(cart);
//         }
//         //If the Remove 1 button is pressed, decrement the quantity by 1, subtract the Inventory price (which never changes) from
//         //the cart price, and render the page
//         if (cartEvent.target.classList.contains('decrease-quantity')) {
//             const index = cartEvent.target.dataset.index;

//             if (cart[index].quantity == 0) {
//                 return;
//             } else {
//                 const catName = cartEvent.target.dataset.name;
//                 const cat = inventory[catName];

//                 cart[index].quantity--;
//                 cart[index].price = cart[index].price - cat.price;
//                 renderCart(cart);
//             }
//         }
//     })
// };

// function increasePrice(index, cart) {
//     const price = cart[index].price * quantity;
//     return price
// }

// function showCart() {

// };

// function hideCart() {

// };

// // addCartListeners(cart, inventory);
// // addInventoryListeners(inventory);

// export { inventory };
// export { cart };
/******/ })()
;
//# sourceMappingURL=cart.js.map