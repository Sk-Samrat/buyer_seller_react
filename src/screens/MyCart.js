import React from 'react'
import FooterBar from '../components/FooterBar'
// import CartItemContainer from '../components/CartItemContainer'
import CartContainer from '../components/CartContainer'

export default function MyCart(props) {
    return (
        <div className='container-fluid'>
            <div className='container' style={{marginTop: 60}}>
            <CartContainer mode={props.mode}/>
            </div>
            {/* <div style={{marginTop:80}} className='container'>
                <div className="card">
                    <div className="card-header">
                        <h5>Shopping Cart</h5>
                    </div>
                    <div className="card-body">
                        <div className='card'>

                        </div>
                    </div>
                </div>
            </div> */}
            <FooterBar />
        </div>
    )
}
