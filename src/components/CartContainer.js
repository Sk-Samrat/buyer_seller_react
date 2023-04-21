import React, { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
// import Items from "./Items";
// import { CartContext } from "./Cart";
import CartHavingItems from "./CartHavingItems";
// import { dummyFoodItemData } from "../assets/data/data";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPrice, clearCart } from "../action/reducer/CartItems";
import { clearMyProducts } from "../action/reducer/MyProductSlice";
import { Link } from 'react-router-dom'

const CartContainer = (props) => {
  // const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartItems);

  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart, dispatch]);

  const AlertItem = () => {
    dispatch(clearCart());
    dispatch(clearMyProducts());
  };

  if (cart.length === 0) {
    return (
      <>
        {/* <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>5</p>
          </div>
        </header> */}

        <section className="main-cart-section">
          <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>shopping Cart</h1>
          <p className="total-items" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            you have <span className="total-items-count">{cart.length}</span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      {/* <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>5</p>
        </div>
      </header> */}

      <section className="main-cart-section">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>shopping Cart</h1>
        <p className="total-items" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          you have <span className="total-items-count" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{cart.length}</span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {/* {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })} */}
              {cart.map((curItem) => {
                return <CartHavingItems key={curItem.item.product.product_id} item={curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            Cart Total : <span style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>₹{cartTotalAmount}</span>
          </h3>
          {/* <button>checkout</button> */}
          <Link to='/cart/checkout' className="btn-checkout">checkout</Link>
          <button className="clear-cart" onClick={AlertItem}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default CartContainer;