import React from 'react'
// import { useSelector } from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars-2";
// import {
//     useParams
// } from "react-router-dom";
import MyOrderProducts from '../components/MyOrderProducts';

export default function MyOrderProductsContainer(props) {
  return (
    // <div className='container' style={{ marginTop: 60 }}>
            <div className="card my-5">
                <h3 className="card-header">Order Summary</h3>
                <div className="card-body">
                    <div className='order-summary-container'>
                        <Scrollbars>
                            {/* {id} */}
                            {props.item.order_items.map((curItem) => {
                                return <MyOrderProducts key={curItem.id} item={curItem} />;
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        // </div>
  )
}
