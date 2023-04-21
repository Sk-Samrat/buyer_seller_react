import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

// const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(state.cartItems);
            const itemIndex = state.cartItems.findIndex(
                (item) => item.item.product.product_id === action.payload.item.product.product_id
            );
            console.log(itemIndex);
            if (itemIndex >= 0) {
                let currentQuantity = action.payload.itemQuantity;
                state.cartItems[itemIndex].itemQuantity = currentQuantity;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                console.log(tempProduct);
                console.log(state.cartItems.push(tempProduct));
            }
            console.log(state.cartItems);
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.item.product.product_id === action.payload.item.product.product_id
            );
            console.log(itemIndex);
            if (state.cartItems[itemIndex].itemQuantity > 1) {
                state.cartItems[itemIndex].itemQuantity -= 1;

            } else if (state.cartItems[itemIndex].itemQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.product_id !== action.payload.item.product_id
                );

                state.cartItems = nextCartItems;
            }
            console.log(state.cartItems[itemIndex]);
        },
        increaseCart(state, action) {
            // console.log(action.payload);
            const itemIndex = state.cartItems.findIndex(
                (item) => item.item.product.product_id === action.payload.item.product.product_id
            );
            console.log(itemIndex);
            if (itemIndex >= 0) {
                let currentQuantity = parseInt(state.cartItems[itemIndex].itemQuantity, 10);
                let increaseQuantity = currentQuantity + 1;
                state.cartItems[itemIndex].itemQuantity = increaseQuantity;
                console.log(state.cartItems[itemIndex]);
                console.log(state.cartItems[itemIndex].itemQuantity);
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                console.log(tempProduct);
                console.log(state.cartItems.push(tempProduct));
            }
            console.log('cart items', state.cartItems);
        },
        increaseCartItem(state, action) {
            // console.log(action.payload);
            const itemIndex = state.cartItems.findIndex(
                (item) => item.item.product.product_id === action.payload.product.product_id
            );
            console.log(itemIndex);
            if (itemIndex >= 0) {
                let currentQuantity = parseInt(state.cartItems[itemIndex].itemQuantity, 10);
                let increaseQuantity = currentQuantity + 1;
                state.cartItems[itemIndex].itemQuantity = increaseQuantity;
                console.log(state.cartItems[itemIndex]);
                console.log(state.cartItems[itemIndex].itemQuantity);
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                console.log(tempProduct);
                console.log(state.cartItems.push(tempProduct));
            }
            console.log(state.cartItems);
        },
        decreaseCartItem(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.item.product.product_id === action.payload.product.product_id
            );
            console.log(itemIndex);
            if (state.cartItems[itemIndex].itemQuantity > 1) {
                state.cartItems[itemIndex].itemQuantity -= 1;

            } else if (state.cartItems[itemIndex].itemQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.product.product_id !== action.payload.product.product_id
                );

                state.cartItems = nextCartItems;
            }
            console.log(state.cartItems[itemIndex]);
        },
        removeFromCart(state, action) {
            console.log('remove from cart');
            console.log('action.payload', action.payload.item);
            state.cartItems.forEach((cartItem) => {
                if (cartItem.item.product.product_id === action.payload.item.product.product_id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.item.product.product_id !== action.payload.item.product.product_id
                    );
                    state.cartItems = nextCartItems;
                }
            });
        },
        removeFromCartItem(state, action) {
            console.log('Welcome to Remove Cart Items from Cart');
            console.log('action.payload', action.payload.product.product_id);
            state.cartItems.forEach((cartItem) => {
                if (cartItem.item.product.product_id === action.payload.product.product_id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.item.product.product_id !== action.payload.product.product_id
                    );
                    state.cartItems = nextCartItems;
                }
            });
        },
        getTotals(state, action) {
            let { quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { cartQuantity } = cartItem;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    quantity: 0,
                }
            );
            //total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            //state.cartTotalAmount = total;
        },
        getTotalPrice(state, action) {
            let { total } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { unit_price } = cartItem.item;
                    const { itemQuantity } = cartItem;
                    const itemTotal = unit_price * itemQuantity;

                    cartTotal.total += itemTotal;
                    //cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    //quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            //state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state, action) {
            state.cartItems = [];
        },
    },
});

export const { addToCart, decreaseCart, increaseCart, getTotals, getTotalPrice, clearCart, increaseCartItem, decreaseCartItem, removeFromCart, removeFromCartItem } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;