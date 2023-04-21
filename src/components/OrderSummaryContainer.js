import React from 'react'
import { useSelector } from 'react-redux';
import OrderSummary from './OrderSummary';
import { Scrollbars } from "react-custom-scrollbars-2";

export default function OrderSummaryContainer() {

    const cart = useSelector((state) => state.cart.cartItems);

    return (
        <div className='col-md-8 my-5'>
            <div className="card">
                <h3 className="card-header">Order Summary</h3>
                <div className="card-body">
                    <div className='order-summary-container'>
                        <Scrollbars>
                            {cart.map((curItem) => {
                                return <OrderSummary key={curItem.item.product.product_id} item={curItem} />;
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    )
}
