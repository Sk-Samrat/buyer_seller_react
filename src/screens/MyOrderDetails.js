import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import { Scrollbars } from "react-custom-scrollbars-2";
import {
    useParams
} from "react-router-dom";
// import MyOrderProducts from '../components/MyOrderProducts';
import MyOrderProductsContainer from '../components/MyOrderProductsContainer';
import { getSeller } from '../services/ApiService';

export default function MyOrderDetails() {

    let { id } = useParams();

    const myOrders = useSelector((state) => state.order);

    let orderData = myOrders.filter(x => x.order_id === `${id}`);

    // console.log('orderData.seller_id: ',orderData[0].seller_id);

    const [sellerId, setSellerId] = useState('');

    useEffect(() => {
        // setSellerId(orderData[0].seller_id);
        getSeller(orderData[0].seller_id)
            .then(res => {
                console.log('response from api', res)
                setSellerId(res.first_name+' '+res.last_name);
            })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container' style={{ marginTop: 60 }}>
            <h1>Order Details</h1>
            <div className='my-order-details'>
                <div className='my-order-id my-3' style={{ fontSize: 15, fontWeight: 600, color: 'GrayText' }}>Order Id: {id}</div>
                <div className='my-order-seller-discount' style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: 'GrayText' }}>
                    <div className='my-order-seller'>Seller: {sellerId}</div>
                    <div className='my-order-discount'>Discount: {orderData[0].discount}</div>
                </div>
                <div className='my-order-buyer-price' style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: 'GrayText' }}>
                    <div className='my-order-buyer'>Buyer: Sk Samrat</div>
                    <div className='my-order-price'>Total Price: {orderData[0].total_price}</div>
                </div>
            </div>
            {/* <div className="card">
                <h3 className="card-header">Order Summary</h3>
                <div className="card-body">
                    <div className='order-summary-container'> */}
            {/* <Scrollbars> */}
            {/* {id} */}
            {
                orderData.map((curItem) => {
                    return <MyOrderProductsContainer key={curItem.id} item={curItem} />;
                })
            }
            {/* </Scrollbars> */}
            {/* </div>
                </div>
            </div> */}
        </div >
    )
}
