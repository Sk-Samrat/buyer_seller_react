import React from 'react'
import { userData } from '../assets/data/data'

export default function DeliveryAddress() {
    return (
        <div className='col-md-8'>
            <div className="card">
                <h3 className="card-header">Delivery Address</h3>
                <div className="card-body">
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="flexRadioDefault1" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                {userData[0].user_name} <span style={{ backgroundColor: '#e8e8e8', padding: 5, borderRadius: 5, color: 'grey' }}>Home</span> {userData[0].contact_no}
                            </label>
                        </div>
                        <div className='col-md-6 mb-3 my-2' style={{ marginLeft: 20, fontSize: 12 }}>
                            {userData[0].home_address}
                        </div>
                        <a href="/" className="btn btn-primary" style={{ marginLeft: 20, fontSize: 14 }}>Deliver Here</a>
                    </div>
                    <hr />
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="flexRadioDefault2" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                {userData[0].user_name} <span style={{ backgroundColor: '#e8e8e8', padding: 5, borderRadius: 5, color: 'grey' }}>Work</span> {userData[0].contact_no}
                            </label>
                        </div>
                        <div className='col-md-6 mb-3 my-2' style={{ marginLeft: 20, fontSize: 12 }}>
                            {userData[0].work_address}
                        </div>
                        <a href="/" className="btn btn-primary" style={{ marginLeft: 20, fontSize: 14 }}>Deliver Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
