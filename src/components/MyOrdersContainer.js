import React from 'react'
import orderIcon from '../assets/img/my_orders.png'
import { Link } from 'react-router-dom';
import './style.css';

export default function MyOrdersContainer(props) {

    // const navigate = useNavigate();

    // const [orderId, setOrderId] = useState('');

    // useEffect(() => {
    //     setOrderId(props.item.order_id)
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // const handleProceed = (e) => {
    //     navigate.push(generatePath("/myorders/:id", { orderId }));
    // };

    return (
        <>
            <div className='row'>
                <div className='order-summary-img col-md-3' style={{ height: 100 }}>
                    <img src={orderIcon} className='object-fit-contain border rounded' alt='...' style={{ width: '100%', height: '100%', }} />
                    {/* <div className='btn-plus-minus-summary-container my-3'>
                                        <i className="fas fa-minus minus"></i>
                                        <input type="text" placeholder='1' disabled />
                                        <i className="fas fa-plus plus"></i>
                                    </div> */}
                </div>
                <div className='my-order-desc col-md-9'>
                    <div className='my-order-id-container'>
                        <div className='my-order-id' style={{ fontSize: 15, fontWeight: 600 }}>{props.item.order_id}</div>
                        {/* <Link to="/myorders/orderdetails" className="redirect-btn-order">View More</Link> */}
                        <Link to={`/myorders/${props.item.order_id}`} className="redirect-btn-order">View More</Link>
                        {/* <button onClick={handleProceed} style={{ width: "250px" }}>
                            Proceed
                        </button> */}
                    </div>
                    <div className='my-order-date' style={{ fontSize: 13, color: 'grey' }}>Order date: {props.item.order_date}</div>
                    <div className='my-order-total-price' style={{ fontSize: 13, color: 'grey' }}>Total price: ₹{props.item.total_price}</div>
                    <div className='my-order-seller-id' style={{ fontSize: 15, fontWeight: 600 }}>{props.item.seller_id}</div>
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
