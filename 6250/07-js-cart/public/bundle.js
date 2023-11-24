/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
var state = {
  inventory: {
    Fluffy: {
      name: 'Fluffy',
      price: 0.99,
      img: "http://placekitten.com/150/150?image=1"
    },
    Chaos: {
      name: 'Chaos',
      price: 3.14,
      img: "http://placekitten.com/150/150?image=2"
    },
    Knives: {
      name: 'Knives',
      price: 2.73,
      img: "http://placekitten.com/150/150?image=3"
    }
  },
  cart: [],
  cartShown: false
};
function manipulateCart(name, quantity) {
  var index = state.cart.findIndex(function (element) {
    return element.name === name;
  });
  var isInCart = index !== -1;
  if (!isInCart && quantity === 1) {
    state.cart.push({
      name: name,
      quantity: quantity
    });
    return;
  }
  state.cart[index].quantity += quantity;
  if (state.cart[index].quantity < 1) {
    removeFromCart(name);
  }
}
function removeFromCart(name) {
  var index = state.cart.findIndex(function (element) {
    return element.name === name;
  });
  state.cart.splice(index, 1);
}
function emptyCart() {
  state.cart.length = 0;
}
state.emptyCart = emptyCart;
state.manipulateCart = manipulateCart;
state.removeFromCart = removeFromCart;


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function render(state) {
  var html = "\n    <header class=\"header\">\n        <h1 class=\"site-name\">Welcome to DataThief!</h1>\n        <h2 class=\"site-motto\">Every time you click we steal your data so we can sell it!</h2>\n        <div class=\"toggle-button\">\n            <button class=\"cart-status\" type=\"button\">".concat(renderCartButton(state), "</button>\n        <div>\n    </header>\n    <main class=\"main\">\n        \n        <ul class=\"inventory\">").concat(renderInventory(state.inventory), "</ul>\n        \n        <div class=\"cart-view\">").concat(cartView(state), "</div>\n    </main>\n    <footer></footer>\n    ");
  document.querySelector('.body').innerHTML = html;
}
;
function renderInventory(inventory) {
  var inventoryHTML = Object.keys(inventory).map(function (catName) {
    var cat = inventory[catName];
    return "\n        <li \n            class=\"cat\">\n            <img class=\"cat-img\" src=\"".concat(cat.img, "\" alt=\"").concat(cat.name, "\" />\n            <h3 class=\"cat-name\">").concat(cat.name, "</h3>\n            <p class=\"price\">$").concat(cat.price, "</p>\n            <button                \n                class=\"add-cat\" \n                data-name=\"").concat(cat.name, "\"\n                type=\"button\">\n                Add to Cart\n            </button>\n        </li>\n        ");
  }).join('');
  return inventoryHTML;
}
function renderCart(state) {
  var cartHTML = state.cart.map(function (item, index) {
    var price = item.quantity * state.inventory[item.name].price;
    var img = state.inventory[item.name].img;
    return "\n                <li class=\"cart-item\">\n                    <img class=\"cart-img\" src=\"".concat(img, "\" alt=\"").concat(item.name, "\" />\n                    ").concat(item.name, " $").concat(price.toFixed(2), "\n                    <div class=\"quantity\">\n \n                    </div>\n                    <div class=\"quantity\">\n                        <button class=\"decrease-quantity\" type=\"button\" data-name=\"").concat(item.name, "\">Remove 1</button>\n                        <p class=\"quantity-text\">Quantity: ").concat(item.quantity, "</p>\n                        <button class=\"increase-quantity\" type=\"button\" data-name=\"").concat(item.name, "\">Add 1</button>\n                    </div>\n                    <button class=\"remove-item\" type=\"button\" data-name=\"").concat(item.name, "\">Delete</button>\n                </li>\n        ");
  }).join('');
  return cartHTML;
}
;
function renderCartButton(state) {
  if (state.cartShown) {
    return "Hide Cart";
  }
  if (!state.cartShown) {
    return "View Cart (".concat(state.cart.length, ")");
  }
}
;
function cartView(state) {
  if (!state.cartShown) {
    return "";
  }
  if (state.cartShown) {
    return "\n        <div class=\"cart-view\">\n            <h2>".concat(cartEmpty(state.cart), "</h2>\n            <ul class=\"cart\">").concat(renderCart(state), "</ul>\n            <p class=\"cart-total\"></p>\n            <button class=\"checkout\" type=\"button\">Checkout</button>\n        </div>\n    ");
  }
}
;
function cartEmpty(cart) {
  if (cart.length == 0) {
    return "Your Cart is Empty!";
  }
  return "Your Cart:";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.js */ "./src/cart.js");


(0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_cart_js__WEBPACK_IMPORTED_MODULE_1__.state);
function addBodyListeners(state) {
  var bodyEl = document.querySelector('.body');
  bodyEl.addEventListener('click', function (bodyEvent) {
    if (bodyEvent.target.classList.contains('cart-status')) {
      state.cartShown = !state.cartShown;
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
    }
    if (bodyEvent.target.classList.contains('add-cat')) {
      var catName = bodyEvent.target.dataset.name;
      var cat = state.inventory[catName];
      state.manipulateCart(cat.name, 1);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
    }
    if (bodyEvent.target.classList.contains('remove-item')) {
      var _catName = bodyEvent.target.dataset.name;
      var _cat = state.inventory[_catName];
      state.removeFromCart(_cat.name);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
    }
    if (bodyEvent.target.classList.contains('checkout')) {
      state.emptyCart();
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
    }
    if (bodyEvent.target.classList.contains('increase-quantity')) {
      var _catName2 = bodyEvent.target.dataset.name;
      var _cat2 = state.inventory[_catName2];
      state.manipulateCart(_cat2.name, 1);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
    }
    if (bodyEvent.target.classList.contains('decrease-quantity')) {
      var _catName3 = bodyEvent.target.dataset.name;
      var _cat3 = state.inventory[_catName3];
      state.manipulateCart(_cat3.name, -1);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
    }
  });
}
addBodyListeners(_cart_js__WEBPACK_IMPORTED_MODULE_1__.state);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map