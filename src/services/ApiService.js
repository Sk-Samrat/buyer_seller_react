// import React from 'react'
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function getProducts() {
  return axios.get('http://127.0.0.1:8000/buyer_seller/inventory/')
    .then(res => {
      return res.data
    })
}

export function getProductOffer() {
  return axios.get('http://127.0.0.1:8000/buyer_seller/productoffer/')
    .then(res => {
      return res.data
    })
}

export function placeOrder(cart) {
  console.log('cart : ', cart);
  // console.log('cart amount : ', cart.cartTotalAmount);
  // console.log('cart.cartItems : ', cart.cartItems);
  // console.log('cart.cartItems.item : ', cart.cartItems[0].item);
  const orderItems = [];
  const orderList = [];
  // let order_id = `ORDID0000000${apiOrderId}`;
  let get_id = makeid(7);
  let order_id = `ORDID${get_id}`;
  let product_id = 0;
  let product_name = '';
  let order_quantity = 0;
  let unit_price = 0;
  let product_price = 0;
  let product_uom = '';
  const total_price = cart.cartTotalAmount;

  cart.cartItems.forEach((item) => {
    //console.log(item.itemQuantity);
    //console.log(item.item.id);
    // order_id.push(item.item.product_id);
    // product_name.push(item.item.product_name);
    // order_quantity.push(parseInt(item.itemQuantity, 10));
    product_id = item.item.product.product_id;
    product_name = item.item.product.product_name;
    order_quantity = parseInt(item.itemQuantity);
    unit_price = item.item.unit_price;
    product_uom = item.item.product_uom;
    product_price = unit_price * order_quantity;
    // const orderProduct = { order_id: order_id, total_price: total_price };
    const tempProduct = { product_id: product_id, product: product_name, product_quantity: order_quantity, unit_price: unit_price, product_price: product_price, product_uom: product_uom };
    // console.log(orderList.push(orderProduct));
    console.log(orderItems.push(tempProduct));
  });
  const orderProduct = { order_id: order_id, seller_id: 'SLRID0001', buyer_id: 'BUYID0001', total_price: total_price, total_gst: 0, discount:0, order_items: orderItems };
  console.log(orderList.push(orderProduct));
  // console.log('Order Item Id');
  // console.log('Order Item Quantity');
  // console.log(JSON.stringify({order_id:orderItemId,order_quantity:orderItemQuantity}))
  //console.log(cart.cartItems[0].item.id);
  // console.log('orderItems ', orderItems);
  console.log('orderList ', orderList);
  return axios.post('http://127.0.0.1:8000/buyer_seller/placeorderview/', orderList)
    .then(res => {
      return res.data
    })
  // return axios.post('http://127.0.0.1:8000/buyer_seller/orderitem/', {
  //   order: {
  //     order_id: 'ORDID0006',
  //     seller_id: 'SLRID0001',
  //     buyer_id: 'BUYID0001',
  //     total_price: cart.cartTotalAmount,
  //     total_gst: 0,
  //     discount: 0,
  //   },
  //   product_id: cart.cartItems[0].item.product.product_id,
  //   product: cart.cartItems[0].item.product.product_name,
  //   product_quantity: cart.cartItems[0].itemQuantity,
  //   unit_price: cart.cartItems[0].item.unit_price,
  //   product_price: cart.cartItems[0].item.unit_price * cart.cartItems[0].itemQuantity,
  //   product_uom: cart.cartItems[0].item.product_uom,
  // })
  //   .then(res => {
  //     return res.data
  //   })
}

// export function placeOrderItem() {
//   return axios.post('http://127.0.0.1:8000/buyer_seller/orderitem/', {
//     order_id: 'ORDID0001',
//     product: 'Apple',
//     product_quantity: 2,
//     product_price: 420,
//     product_uom: 'kg',
//   })
//     .then(res => {
//       return res.data
//     })
// }

