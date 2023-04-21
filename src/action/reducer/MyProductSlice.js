import { createSlice } from '@reduxjs/toolkit';

const MyProductSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addMyProducts(state, action) {
            console.log('action.payload: ', action.payload);
            console.log('action.payload.product_id: ', action.payload.product.product_id);
            // state.push(action.payload);

            const itemIndex = state.findIndex(
                (item) => item.product.product_id === action.payload.product.product_id
            );
            console.log(itemIndex);
            if (itemIndex >= 0) {
                console.log(state);
            } else {
                // const tempProduct = { ...action.payload, cartQuantity: 1 };
                // console.log(tempProduct);
                // console.log(state.push(action.payload));
                state.push(action.payload);
                console.log(state);
            }
        },
        increaseQty(state, action) {
            console.log('action.payload', action.payload)
            // console.log('state', state)
            // alert('state', state)
            let myindex = -1;
            state.forEach((item, index) => {
                // console.log('item: ', item);
                // alert('item: ', item);
                if (item.product.product_id === action.payload) {
                    myindex = index;
                }
            });
            if (myindex === -1) {
            } else {
                state[myindex].product.product_quantity = state[myindex].product.product_quantity + 1;
                console.log(state[myindex].product.product_quantity + 1);
            }
            console.log('my products', state[myindex]);
        },
        decreaseQty(state, action) {
            let myindex = -1;
            state.forEach((item, index) => {
                if (item.product.product_id === action.payload) {
                    myindex = index;
                }
            });
            if (myindex === -1) {
            } else {
                state[myindex].product.product_quantity = state[myindex].product.product_quantity - 1;
                console.log(state[myindex].product.product_quantity - 1);
            }
            console.log('my products', state[myindex]);
        },
        removeQty(state, action) {
            let myindex = -1;
            state.forEach((item, index) => {
                if (item.product.product_id === action.payload) {
                    myindex = index;
                }
            });
            if (myindex === -1) {
            } else {
                state[myindex].product.product_quantity = 0;
                console.log(state[myindex].product.product_quantity - 1);
            }
            console.log('my products', state[myindex]);
            // console.log('My Product List: ', state);
        },
        clearMyProducts(state, action) {
            // state = [];
            // console.log('My Product List: ', state)
            let myindex = -1;
            state.forEach((item, index) => {
                if (item.product.product_quantity >= 0) {
                    myindex = index;
                    state[myindex].product.product_quantity = 0;
                }
            });
            // if (myindex === -1) {
            // } else {
            //     state[myindex].product_quantity = 0;
            //     console.log(state[myindex].product_quantity - 1);
            // }
            console.log('Clear all my products', state);
        },
    },
});

export const { addMyProducts, increaseQty, decreaseQty, removeQty, clearMyProducts } = MyProductSlice.actions;
export default MyProductSlice.reducer;