import { createSlice } from '@reduxjs/toolkit';

const MyOrderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        addMyOrders(state, action) {
            console.log('action.payload: ', action.payload);
            // console.log('action.payload.product_id: ', action.payload.product.product_id);
            // state.push(action.payload);

            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );
            console.log(itemIndex);
            if (itemIndex >= 0) {
                console.log(state);
            } else {
                state.push(action.payload);
                console.log(state);
            }
        },
    },
});

export const { addMyOrders } = MyOrderSlice.actions;

const myOrderReducer = MyOrderSlice.reducer;
export default myOrderReducer;