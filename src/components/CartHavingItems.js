import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CartContext } from "./Cart";
import "./cart.css";
import { removeFromCart, getTotals, decreaseCart, increaseCart } from "../action/reducer/CartItems";
import { increaseQty, decreaseQty, removeQty } from "../action/reducer/MyProductSlice";

const CartHavingItems = (props) => {
    //   const { removeItem, increment, decrement } = useContext(CartContext);
    // useEffect = (() => {
    //     console.log(props.item);
    // }, [])
    // console.log(props.item);

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={props.item.item.product.product_image} alt="iamge" />
                </div>

                <div className="title">
                    <h2>{props.item.item.product.product_name}</h2>
                    <p>{props.item.item.product.product_description.slice(0, 60)}...</p>
                </div>

                <div className="add-minus-quantity">
                    <i className="fas fa-minus minus"
                        onClick={() => {
                            dispatch(decreaseQty(props.item.item.product.product_id));
                            if (props.item.itemQuantity === 1) {
                                // console.log('item', item);
                                dispatch(removeFromCart(props.item));
                                dispatch(removeQty(props.item.item.product.product_id))
                                return;
                            }
                            dispatch(decreaseCart(props.item));
                        }}
                    >
                    </i>
                    <input type="text" placeholder={props.item.itemQuantity} disabled />
                    <i className="fas fa-plus add"
                        onClick={() => {
                            dispatch(increaseCart(props.item));
                            dispatch(increaseQty(props.item.item.product.product_id));
                        }}
                    >
                    </i>
                </div>

                <div className="price">
                    <h3>{props.item.item.unit_price * props.item.itemQuantity}₹</h3>
                </div>

                <div className="remove-item">
                    <i onClick={() => {
                        // console.log('remove', item);
                        dispatch(removeFromCart(props.item));
                        dispatch(removeQty(props.item.item.product.product_id));
                    }}
                        className="fas fa-trash-alt remove"
                    ></i>
                </div>
            </div>

            <hr />
        </>
    );
};

export default CartHavingItems;