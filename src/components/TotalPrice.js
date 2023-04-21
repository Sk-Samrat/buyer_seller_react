import React from 'react'
import { useSelector } from 'react-redux';

export default function TotalPrice(props) {
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
    return (
        <div className='col-md-4'>
            <div className="card">
                <h3 className="card-header">Price</h3>
                <div className="card-body">
                    <div className='total-price-container'>
                        <div>Total Price:</div>
                        <div>₹{cartTotalAmount}</div>
                    </div>
                    <div className='total-price-container'>
                        <div>Delivery:</div>
                        <div style={{ color: 'green' }}>Free</div>
                    </div>
                    <div className='total-price-container'>
                        <div>Discount:</div>
                        <div style={{ color: 'green' }}>0%</div>
                    </div>
                    <hr />
                    <div className='total-price-container' style={{ fontWeight: 800 }}>
                        <div>Amount Payable:</div>
                        <div>₹{cartTotalAmount}</div>
                    </div>
                </div>
            </div>
            <button className="btn-place-order my-3" onClick={props.onClickPlaceOrder}>Place Order</button>
        </div>
    )
}
