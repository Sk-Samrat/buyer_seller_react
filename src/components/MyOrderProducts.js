import React from 'react'

export default function MyOrderProducts(props) {
    console.log('props.item: ',props.item);
    // console.log('props.item.order_items[0]: ',props.item.order_items[0]);
    return (
        <>
            <div className='row'>
                {/* <div className='order-summary-img col-md-3' style={{ height: 100 }}>
                    <img src={orderIcon} className='object-fit-contain border rounded' alt='...' style={{ width: '100%', height: '100%', }} />
                </div> */}
                <div className='my-order-product-desc col-md-12'>
                    <div className='my-order-product-name' style={{ fontSize: 15, fontWeight: 600 }}>{props.item.product}</div>
                    <div className='my-order-product-quantity' style={{ fontSize: 13, color: 'grey' }}>{props.item.product_quantity} {props.item.product_uom}</div>
                    <div className='my-order-product-unit-price' style={{ fontSize: 13, color: 'grey' }}>Unit price: ₹{props.item.unit_price}</div>
                    <div className='my-order-product-total-price' style={{ fontSize: 15, fontWeight: 600 }}>Total price: ₹{props.item.product_price}</div>
                    {/* <div className='order-summary-price' style={{ fontSize: 15, fontWeight: 800 }}>₹{props.item.item.unit_price * props.item.itemQuantity}</div> */}
                    {/* <div className='order-summary-remove mt-4' style={{ fontSize: 18, fontWeight: 800, cursor: 'pointer' }}>Remove</div> */}
                </div>
                {/* <div className='order-summary-delivery-date col-md-4'>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Deliver by tomorrow, Fri | <span style={{ color: 'green' }}>Free</span></div>
                </div> */}
            </div>
            <hr />
        </>
    )
}
