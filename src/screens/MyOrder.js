import React, { useEffect } from 'react'
import { Scrollbars } from "react-custom-scrollbars-2";
import { getOrders } from '../services/ApiService';
import MyOrdersContainer from '../components/MyOrdersContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addMyOrders } from '../action/reducer/MyOrderSlice';

export default function MyOrder() {

    // const [myorders, setMyOrders] = useState('');

    const dispatch = useDispatch();

    const myOrders = useSelector((state) => state.order);

    useEffect(() => {
        // let mount = true
        getOrders()
            .then(res => {
                console.log('response from orders api', res)
                // setMyOrders(res)
                // return () => mount = false
                res.forEach(item => {
                    dispatch(addMyOrders(item))
                })
            })
        // console.log('My Orders', myorders)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container' style={{ marginTop: 70 }}>
            <h1>My Orders</h1>
            <div className="card my-5">
                <div className="card-body">
                    <div className='order-summary-container'>
                        <Scrollbars>
                            {myOrders.map((curItem) => {
                                return <MyOrdersContainer key={curItem.id} item={curItem} />;
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    )
}
