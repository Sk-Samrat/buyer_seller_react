import React from 'react'
import PaymentOptions from '../components/PaymentOptions';
import DeliveryAddress from '../components/DeliveryAddress';
import TotalPrice from '../components/TotalPrice';
import OrderSummaryContainer from '../components/OrderSummaryContainer';
import { placeOrder } from '../services/ApiService';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../action/reducer/CartItems';
import { clearMyProducts } from '../action/reducer/MyProductSlice';
// import axios from 'axios';

export default function Checkout() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const cartQuantity = useSelector((state) => state.cart.cartItems.length);

  const onClickPlaceOrder = () => {
    // console.log(cart);
    placeOrder(cart)
      .then(res => {
        console.log("Order Placed Successfully", res);
        alert('ORDER PLACED SUCCESSFULLY!');
        dispatch(clearCart());
        dispatch(clearMyProducts());
        // orderItems.map((item) => {
        //   dispatch(removeQty(item.product.product_id));
        // })
      })
  }

  // const placeOrderItem = () => {
  //     const orderItems = [];
  //     const orderList = [];
  //     let order_id = 'ORDID0001';
  //     let product_id = '';
  //     let product = '';
  //     let product_quantity = 0;
  //     let unit_price = 0;
  //     let product_price = 0;
  //     let product_uom = '';
  //     const total_price = cart.cartTotalAmount;

  //     cart.cartItems.forEach((item) => {
  //       //console.log(item.itemQuantity);
  //       //console.log(item.item.id);
  //       // order_id.push(item.item.product_id);
  //       // product_name.push(item.item.product_name);
  //       // order_quantity.push(parseInt(item.itemQuantity, 10));
  //       product_id = item.item.product.product_id;
  //       product = item.item.product.product_name;
  //       product_quantity = parseInt(item.itemQuantity);
  //       unit_price = item.item.unit_price;
  //       product_uom = item.item.product_uom;
  //       product_price = unit_price * product_quantity;
  //       // const orderProduct = { order_id: order_id, total_price: total_price };
  //       const tempProduct = { order_id: order_id, product_id: product_id, product: product, product_quantity: product_quantity, product_price: product_price, product_uom: product_uom };
  //       // console.log(orderList.push(orderProduct));
  //       console.log(orderItems.push(tempProduct));
  //     });
  //     const orderProduct = { order_id: order_id, seller_id: 'SLRID0001', buyer_id: 'BUYID0001', total_price: total_price, total_gst: 0, discount: 0 };
  //     console.log(orderList.push(orderProduct));
  //     console.log('orderItems ', orderItems);
  //     console.log('orderList ', orderList);
  //     try {
  //       axios({
  //         method: 'post',
  //         //url: 'http://10.0.2.2:8000/order',
  //         // url: 'http://141.148.200.229/order',
  //         url: 'http://127.0.0.1:8000/buyer_seller/placeorder/',
  //         data: orderList,
  //       }).then((response) => {
  //         console.log(response.data);
  //         axios({
  //           method: 'post',
  //           //url: 'http://10.0.2.2:8000/orderitem',
  //           // url: 'http://141.148.200.229/orderitem',
  //           url: 'http://127.0.0.1:8000/buyer_seller/placeorderitem/',
  //           data: orderItems,
  //         }).then((response) => {
  //           console.log(response.data);
  //           //alert(JSON.stringify(response.data));
  //           alert('ORDER PLACED SUCCESSFULLY!');
  //           dispatch(clearCart());
  //           //dispatch(clearMyProducts());
  //           orderItems.forEach((item) => {
  //             dispatch(removeQty(item.product_id));
  //           })
  //         }).catch(function (error) {
  //           // handle error
  //           console.log(error.message);
  //         });
  //       }).catch(function (error) {
  //         // handle error
  //         console.log(error.message);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }


  if (cartQuantity < 1) {
    return (
      <div className='container' style={{ marginTop: 60 }}>
        <h1>Thank You!</h1>
      </div>
    );
  }

  return (
    <div className='container' style={{ marginTop: 60 }}>
      <div className='row'>

        <DeliveryAddress />

        <TotalPrice onClickPlaceOrder={onClickPlaceOrder} />

        <OrderSummaryContainer />

        <PaymentOptions />

      </div>
    </div>
  )
}
