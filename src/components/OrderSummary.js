import React from 'react'

export default function OrderSummary(props) {
    return (
        <>
            <div className='row'>
                <div className='order-summary-img col-md-3'>
                    <img src={props.item.item.product.product_image} className='object-fit-cover border rounded' alt='...' style={{ width: '100%', height: '100%', }} />
                    {/* <div className='btn-plus-minus-summary-container my-3'>
                                        <i className="fas fa-minus minus"></i>
                                        <input type="text" placeholder='1' disabled />
                                        <i className="fas fa-plus plus"></i>
                                    </div> */}
                </div>
                <div className='order-summary-desc col-md-5'>
                    <div className='order-summary-title' style={{ fontSize: 15, fontWeight: 600 }}>{props.item.item.product.product_name}</div>
                    <div className='order-summary-unit-price' style={{ fontSize: 13, color: 'grey' }}>unit price: ₹{props.item.item.unit_price}</div>
                    <div className='order-summary-uom' style={{ fontSize: 13, color: 'grey' }}>quantity: {props.item.itemQuantity} {props.item.item.product_uom}</div>
                    <div className='order-summary-seller my-4' style={{ fontSize: 15, fontWeight: 600 }}>{props.item.item.user.first_name} {props.item.item.user.last_name}</div>
                    <div className='order-summary-price' style={{ fontSize: 15, fontWeight: 800 }}>₹{props.item.item.unit_price * props.item.itemQuantity}</div>
                    {/* <div className='order-summary-remove mt-4' style={{ fontSize: 18, fontWeight: 800, cursor: 'pointer' }}>Remove</div> */}
                </div>
                <div className='order-summary-delivery-date col-md-4'>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Deliver by tomorrow, Fri | <span style={{ color: 'green' }}>Free</span></div>
                </div>
            </div>
            <hr />
        </>
    )
}
