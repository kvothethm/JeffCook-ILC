function render(state) {

    const html = `
    <header class="header">
        <h1 class="site-name">Welcome to DataThief!</h1>
        <h2 class="site-motto">Every time you click we steal your data so we can sell it!</h2>
        <div class="toggle-button">
            <button class="cart-status" type="button">${renderCartButton(state)}</button>
        <div>
    </header>
    <main class="main">
        
        <ul class="inventory">${renderInventory(state.inventory)}</ul>
        
        <div class="cart-view">${cartView(state)}</div>
    </main>
    <footer></footer>
    `
    document.querySelector('.body').innerHTML = html;
};

function renderInventory(inventory) {
    const inventoryHTML = Object.keys(inventory).map((catName) => {
        const cat = inventory[catName];
        return `
        <li 
            class="cat">
            <img class="cat-img" src="${cat.img}" alt="${cat.name}" />
            <h3 class="cat-name">${cat.name}</h3>
            <p class="price">$${cat.price}</p>
            <button                
                class="add-cat" 
                data-name="${cat.name}"
                type="button">
                Add to Cart
            </button>
        </li>
        `}).join('');

    return inventoryHTML;
}

function renderCart(state) {
    const cartHTML = state.cart.map((item, index) => {
        const price = item.quantity * state.inventory[item.name].price;
        const img = state.inventory[item.name].img;

        return `
                <li class="cart-item">
                    <img class="cart-img" src="${img}" alt="${item.name}" />
                    ${item.name} $${price.toFixed(2)}
                    <div class="quantity">
 
                    </div>
                    <div class="quantity">
                        <button class="decrease-quantity" type="button" data-name="${item.name}">Remove 1</button>
                        <p class="quantity-text">Quantity: ${item.quantity}</p>
                        <button class="increase-quantity" type="button" data-name="${item.name}">Add 1</button>
                    </div>
                    <button class="remove-item" type="button" data-name="${item.name}">Delete</button>
                </li>
        `}).join('');

    return cartHTML;
};

function renderCartButton(state) {
    if (state.cartShown) {
        return `Hide Cart`;
    }
    if (!state.cartShown) {
        return `View Cart (${state.cart.length})`;
    }
};

function cartView(state) {
    if (!state.cartShown) {
        return ``;
    }
    if (state.cartShown) {
        return `
        <div class="cart-view">
            <h2>${cartEmpty(state.cart)}</h2>
            <ul class="cart">${renderCart(state)}</ul>
            <p class="cart-total"></p>
            <button class="checkout" type="button">Checkout</button>
        </div>
    `}
};

function cartEmpty(cart) {
    if (cart.length == 0) {
        return `Your Cart is Empty!`
    }
    return `Your Cart:`;

}

export default render;