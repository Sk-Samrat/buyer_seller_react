import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/CartItems";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { getTotals, getTotalPrice } from '../reducer/CartItems';
import MyProductReducer from '../reducer/MyProductSlice';
// import MyOfferSlice from "../reducers/myOfferSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: MyProductReducer
  },
});

store.dispatch(getTotals());
store.dispatch(getTotalPrice());

export default store;
