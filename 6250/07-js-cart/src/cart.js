const state = {
    inventory: {
        Fluffy: {
            name: 'Fluffy',
            price: 0.99,
            img: `http://placekitten.com/150/150?image=1`,
        },
        Chaos: {
            name: 'Chaos',
            price: 3.14,
            img: `http://placekitten.com/150/150?image=2`
        },
        Knives: {
            name: 'Knives',
            price: 2.73,
            img: `http://placekitten.com/150/150?image=3`
        }
    },
    cart: [],
    cartShown: false,

};

function manipulateCart(name, quantity) {
    const index = state.cart.findIndex((element) => element.name === name);
    const isInCart = index !== -1;

    if (!isInCart && quantity === 1) {
        state.cart.push({
            name,
            quantity
        });
        return;
    }

    state.cart[index].quantity += quantity;
    if (state.cart[index].quantity < 1) {
        removeFromCart(name);
    }
}


function removeFromCart(name) {
    const index = state.cart.findIndex((element) => element.name === name);
    state.cart.splice(index, 1);
}

function emptyCart() {
    state.cart.length = 0;
}

state.emptyCart = emptyCart;
state.manipulateCart = manipulateCart;
state.removeFromCart = removeFromCart;

export { state };